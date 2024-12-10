import { ErrorHandler } from "@composed/request-error-handler"
import { useAuth } from "@contexts/auth"
import type { Company } from "@entities"
import { ROUTES } from "@utils"
import { createContext, useContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

type IAppContext = {
  // States
  appIsLoading: boolean
  company: Company | undefined
}

const AppContext = createContext<IAppContext | undefined>(undefined)
export function AppProvider() {
  // Contexts
  const { token } = useAuth()

  // States
  const [appIsLoading, setAppIsLoading] = useState(false)
  const [company, setCompany] = useState<Company>()

  // Effects
  useEffect(() => {
    if (!token) return
    async function initialLoad() {
      try {
        setAppIsLoading(true)
        // Fetch company information
        setAppIsLoading(false)
      } catch (error) {
        console.error(error)
        localStorage.clear()
        document.location.href = ROUTES.LOGIN
        ErrorHandler({ error })
      }
    }
    initialLoad()
  }, [token])

  // Return
  return (
    <AppContext.Provider
      value={{
        // States
        appIsLoading,
        company,
      }}
    >
      <Outlet />
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (!context) throw new Error("useApp must be used within an AppProvider")
  return context
}
