import { Dialog, DialogContent, DialogDescription } from "@ui/dialog"
import { DialogHeader, DialogTitle, DialogTrigger } from "@ui/dialog"
import { Sparkles } from "lucide-react"
import ShinyButton from "@ui/shiny-button"

export function RequestAccess({ children }: { children?: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children ? (
          children
        ) : (
          <ShinyButton className="flex items-center gap-2">
            Solicitar acesso <Sparkles className="size-5" />
          </ShinyButton>
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your account and
            remove your data from our servers.
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}
