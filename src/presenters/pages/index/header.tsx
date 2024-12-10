import { RequestAccess } from "@composed/request-access"
import AnimatedGradientText from "@ui/animated-gradient-text"
import { Button } from "@ui/button"
import { Logo } from "@ui/logo"
import { Sheet, SheetContent, SheetDescription } from "@ui/sheet"
import { SheetHeader, SheetTitle, SheetTrigger } from "@ui/sheet"
import { ROUTES, cn } from "@utils"
import { LogIn, Menu } from "lucide-react"
import { Link } from "react-router-dom"

export function Header() {
  return (
    <>
      <header className="bg-background h-16 w-full fixed z-20 top-0 left-0 shadow animate-fade-down">
        <div className="h-16 px-3 container flex justify-between items-center">
          <div>
            <Link to={ROUTES.INDEX}>
              <Logo title className="size-8" />
            </Link>
          </div>
          <MobileMenu />
          <DesktopMenu />
        </div>
      </header>
      <div className="h-16" />
    </>
  )
}

function MobileMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild className="lg:hidden">
        <Button size="icon">
          <Menu className="!size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="hidden">Menu</SheetTitle>
          <SheetDescription className="hidden">Menu</SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          <div className="flex-1" />

          <div className="flex flex-col items-center gap-3 sm:flex-row">
            <RequestAccess type="rainbow" className="w-full" />
            <Link to={ROUTES.LOGIN} className="w-full">
              <Button className="w-full">
                Login <LogIn />
              </Button>
            </Link>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}

function DesktopMenu() {
  return (
    <div className="items-center gap-3 hidden lg:flex">
      <RequestAccess type="rainbow" />
      <Link to={ROUTES.LOGIN}>
        <Button>
          Login <LogIn />
        </Button>
      </Link>
    </div>
  )
}
