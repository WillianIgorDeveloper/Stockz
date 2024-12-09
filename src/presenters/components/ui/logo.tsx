import { cn } from "@/utils"

export function Logo({ className, title }: { className?: string; title?: boolean }) {
  return (
    <div className="flex items-center gap-2">
      <img className={cn(className)} src="./icon.svg" alt="Stockz Logo" />
      {title && (
        <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-teal-500 to-teal-700">
          Stockz
        </h1>
      )}
    </div>
  )
}
