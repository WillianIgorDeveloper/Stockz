import DotPattern from "@ui/dot-pattern"
import { NeonGradientCard } from "@ui/neon-gradient-card"
import { cn } from "@/utils"
import { RequestAccess } from "@/presenters/components/composed/request-access"
import { Logo } from "@/presenters/components/ui/logo"

export function Hero() {
  return (
    <div className="flex flex-col items-center justify-center">
      <DotPattern
        className={cn(
          "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]",
        )}
      />

      <div className="py-20 xl:py-36 2xl:py-40 container flex flex-col items-center justify-center gap-6 text-center">
        <Logo title />
        <h2 className="text-7xl font-semibold">
          Organize suas refeições e estoque, faça compras e economize tempo!
        </h2>
        <p className="max-w-3xl text-lg">
          Com nosso app, você pode planejar suas refeições diárias, controlar o estoque de
          alimentos em casa e fazer compras com apenas alguns toques. Simplifique sua
          rotina e nunca mais se preocupe com o que falta na despensa.
        </p>
        <RequestAccess />
      </div>

      <NeonGradientCard className="container h-16" />
    </div>
  )
}
