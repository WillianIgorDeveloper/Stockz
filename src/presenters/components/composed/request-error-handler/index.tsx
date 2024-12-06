import Translator from "@/i18n/translator"
import { DataError, EnvironmentError, UnauthorizedError, UnexpectedError } from "@errors"
import { toast } from "@hooks/use-toast"

type ErrorHandlerProps = {
  error: unknown
}

export function ErrorHandler({ error }: ErrorHandlerProps) {
  console.error(error)

  switch (true) {
    case error instanceof DataError:
      toast({ title: <Translator path={error.message} /> })
      break

    case error instanceof UnauthorizedError:
      toast({
        variant: "destructive",
        title: <Translator path={error.message} />,
      })
      break

    case error instanceof EnvironmentError:
      toast({
        variant: "destructive",
        title: <Translator path={error.message} />,
      })
      break

    case error instanceof UnexpectedError:
      toast({
        variant: "destructive",
        title: <Translator path={error.message} />,
        description: error.code,
      })
      break

    default:
      toast({
        variant: "destructive",
        title: <Translator path="usecase.unexpected" />,
      })
  }
}
