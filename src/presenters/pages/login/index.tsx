import { zodResolver } from "@hookform/resolvers/zod"
import { Button } from "@ui/button"
import { Form, FormControl, FormField } from "@ui/form"
import { FormItem, FormLabel, FormMessage } from "@ui/form"
import { Input } from "@ui/input"
import { Logo } from "@ui/logo"
import { Separator } from "@ui/separator"
import { useForm } from "react-hook-form"
import type { z } from "zod"
import { loginSchema } from "./schema"

export function LoginPage() {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: z.infer<typeof loginSchema>) {
    console.log(values)
  }

  return (
    <div className="h-screen lg:flex">
      <div className="lg:flex-1 relative">
        <div className="w-full h-full backdrop-blur-lg bg-transparent absolute top-0 left-0" />
        <div className="bg-gradient-to-br from-teal-500 via-teal-600 to-teal-700 w-full h-full absolute top-0 left-0" />
      </div>

      <div className="w-full lg:max-w-[50%] h-full">
        <div className="h-full w-full flex flex-col justify-center px-3 animate-fade-in duration-500 max-w-md mx-auto">
          <div className="flex items-center gap-5">
            <Logo />
            <div>
              <h1 className="text-xl font-bold">Bom dia!</h1>
              <p>Bem vindo ao Stockz!</p>
            </div>
          </div>

          <Separator className="my-5" />

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="email@exemple.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex justify-between items-center">
                      Senha
                      <Button variant="link" className="h-auto py-0">
                        Esqueceu a senha?
                      </Button>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="*****" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button className="w-full" type="submit">
                Login
              </Button>
            </form>
          </Form>
        </div>
      </div>
    </div>
  )
}
