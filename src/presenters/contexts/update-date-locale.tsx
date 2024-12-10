import { type Locale, setDefaultOptions } from "date-fns"
import { enUS, ptBR } from "date-fns/locale"
import { createContext, useContext, useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
// Define the shape of the context state
interface ILocaleDateContext {
  // States
  currentLocale: Locale
  localeIsLoading: boolean
}

// Create the context with a default undefined value
const LocaleDateContext = createContext<ILocaleDateContext | undefined>(undefined)

// Create a provider component
export function LocaleDateProvider({ children }: { children: React.ReactNode }) {
  const { i18n } = useTranslation()
  const [currentLocale, setCurrentLocale] = useState(ptBR)
  const [localeIsLoading, setLocaleIsLoading] = useState(false)

  useEffect(() => {
    async function changeLocale() {
      await new Promise((resolve) => setTimeout(resolve, 200))
      setLocaleIsLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 1))
      function getLocaleDate() {
        switch (i18n.language) {
          case "pt-BR":
            return ptBR

          case "en-US":
            return enUS

          default:
            return ptBR
        }
      }

      setDefaultOptions({ locale: getLocaleDate() })
      setCurrentLocale(getLocaleDate)
      setLocaleIsLoading(false)
    }
    changeLocale()
  }, [i18n.language])

  return (
    <LocaleDateContext.Provider value={{ currentLocale, localeIsLoading }}>
      {children}
    </LocaleDateContext.Provider>
  )
}

// Create a custom hook to use the LocaleDateContext
export function useLocaleDate() {
  const context = useContext(LocaleDateContext)
  if (!context) throw new Error("useLocaleDate must be used within an LocaleDateProvider")
  return context
}
