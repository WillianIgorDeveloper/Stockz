import { EnvironmentError } from "@errors"
import { z } from "zod"

const envSchema = z.object({
  VITE_SESSION_TOKEN: z.string(),
  VITE_API_URL: z.string(),
  VITE_APP_URL: z.string(),
})

const _env = envSchema.safeParse(import.meta.env)

if (!_env.success) {
  console.error(`Invalid environment variables ${_env.error.format()}`)
  throw new EnvironmentError()
}

export const env = _env.data
