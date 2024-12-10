import { Logo } from "@ui/logo"
import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"

export function MainLoader({ description }: { description?: string }) {
  const { t } = useTranslation()

  const [text, setText] = useState<string>(
    description ?? "components.main-loader.description",
  )

  useEffect(() => {
    const firstTimeOut = setTimeout(() => {
      setText("components.main-loader.description-1")
    }, 5000)

    const secondTimeOut = setTimeout(() => {
      setText("components.main-loader.description-2")
    }, 1500)

    return () => {
      clearTimeout(firstTimeOut)
      clearTimeout(secondTimeOut)
    }
  }, [])

  return (
    <div className="flex flex-col gap-1 items-center justify-center w-full h-dvh">
      <div className="relative">
        <div className="animate-pulse">
          <Logo />
        </div>
        <div className="absolute animate-ping top-0 left-0">
          <Logo />
        </div>
      </div>
      <p className="text-lg">{t(text)}</p>
    </div>
  )
}
