import { Logo } from "@ui/logo"
import { Button } from "@ui/button"
import { cn, ROUTES } from "@utils"
import { Link } from "react-router-dom"
import { ChevronRight, LogIn, Sparkles } from "lucide-react"
import { RequestAccess } from "@composed/request-access"
import AnimatedGradientText from "@/presenters/components/ui/animated-gradient-text"

export function Header() {
  return (
    <>
      <header className="bg-background h-16 w-full fixed z-20 top-0 left-0 shadow animate-fade-down">
        <div className="h-16 container flex justify-between items-center">
          <div>
            <Link to={ROUTES.INDEX}>
              <Logo title className="size-8" />
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <RequestAccess>
              <Button className="p-0 bg-transparent hover:bg-transparent">
                <AnimatedGradientText>
                  ✨ <hr className="mx-2 h-4 w-px shrink-0 bg-gray-300" />
                  <span
                    className={cn(
                      "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
                    )}
                  >
                    Solicitar acesso
                  </span>
                </AnimatedGradientText>
              </Button>
            </RequestAccess>
            <Link to={ROUTES.LOGIN}>
              <Button>
                Login <LogIn />
              </Button>
            </Link>
          </div>
        </div>
      </header>
      <div className="h-16" />
    </>
  )
}
