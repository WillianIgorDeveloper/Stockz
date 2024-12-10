import { cn } from "@/utils"
import { zodResolver } from "@hookform/resolvers/zod"
import AnimatedGradientText from "@ui/animated-gradient-text"
import { Button } from "@ui/button"
import { Dialog, DialogContent, DialogDescription } from "@ui/dialog"
import { DialogHeader, DialogTitle, DialogTrigger } from "@ui/dialog"
import { Form, FormControl, FormDescription, FormField } from "@ui/form"
import { FormItem, FormLabel, FormMessage } from "@ui/form"
import { Input } from "@ui/input"
import ShinyButton from "@ui/shiny-button"
import { Sparkles } from "lucide-react"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { Textarea } from "../../ui/textarea"
import { requestAccessSchema } from "./schema"

interface IRequestAccess {
  type: "shiny" | "rainbow"
  className?: string
}

export function RequestAccess({ className, type }: IRequestAccess) {
  const form = useForm<z.infer<typeof requestAccessSchema>>({
    resolver: zodResolver(requestAccessSchema),
    defaultValues: {
      email: "",
      phone: "",
      name: "",
      message: "",
    },
  })

  function onSubmit(values: z.infer<typeof requestAccessSchema>) {
    console.log(values)
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {type === "rainbow" ? (
          <Button className={cn(className, "p-0 bg-transparent hover:bg-transparent")}>
            <AnimatedGradientText>
              ✨ <hr className="mx-4 h-4 w-px shrink-0 bg-gray-300" />
              <span
                className={cn(
                  "inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent",
                )}
              >
                Solicitar acesso
              </span>
            </AnimatedGradientText>
          </Button>
        ) : (
          type === "shiny" && (
            <ShinyButton className={cn(className, "flex items-center gap-2")}>
              Solicitar acesso <Sparkles className="size-5" />
            </ShinyButton>
          )
        )}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Solicitar acesso</DialogTitle>
          <DialogDescription>
            Preencha as informações abaixo para solicitar acesso ao sistema.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu nome</FormLabel>
                  <FormControl>
                    <Input type="email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="email@exemplo.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input type="tel" placeholder="(99) 99999-9999" {...field} />
                  </FormControl>
                  <FormDescription>
                    Usaremos este número para entrar em contato!
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deixe sua mensagem!</FormLabel>
                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">
              Solicitar <Sparkles />
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}
