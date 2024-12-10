import { z } from "zod"

export const requestAccessSchema = z.object({
  email: z.string().email(),
  phone: z.string().min(10),
  name: z.string().min(3),
  message: z.string(),
})
