import { ThemeProvider } from "@contexts/theme"
import { LocaleDateProvider } from "@contexts/update-date-locale"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { Toaster } from "@ui/toaster"
import { Outlet } from "react-router-dom"
const queryClient = new QueryClient()

export function GlobalProvider() {
  return (
    <QueryClientProvider client={queryClient}>
      <LocaleDateProvider>
        <ThemeProvider>
          <Outlet />
          <Toaster />
        </ThemeProvider>
      </LocaleDateProvider>
    </QueryClientProvider>
  )
}
