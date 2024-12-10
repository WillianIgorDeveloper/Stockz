import { RequestAccess } from "@/presenters/components/composed/request-access"
import { Logo } from "@/presenters/components/ui/logo"
import { cn } from "@/utils"
import DotPattern from "@ui/dot-pattern"
import { NeonGradientCard } from "@ui/neon-gradient-card"

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-up duration-500 px-3">
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />

      <div className="py-20 xl:py-36 2xl:py-40 container flex flex-col items-center justify-center gap-6 text-center">
        <Logo title />
        <h2 className="text-2xl font-semibold sm:text-4xl md:text-5xl xl:text-7xl">
          Organize suas refeições e estoque, faça compras e economize tempo!
        </h2>
        <p className="max-w-xl lg:text-lg lg:max-w-2xl">
          Com nosso app, você pode planejar suas refeições diárias, controlar o estoque de
          alimentos e pode solicitar compras com apenas alguns toques. Simplifique sua
          rotina e nunca mais se preocupe com o que falta na despensa.
        </p>
        <RequestAccess type="shiny" />
      </div>
    </div>
  )
}
