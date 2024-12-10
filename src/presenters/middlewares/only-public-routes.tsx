import { useAuth } from "@contexts/auth"
import { MainLoader } from "@ui/main-loader"
import { ROUTES } from "@utils"
import { Navigate, Outlet } from "react-router-dom"

export function OnlyPublicRoutes() {
  const { hasSession, sessionIsLoading } = useAuth()
  if (sessionIsLoading) return <MainLoader />
  return hasSession ? <Navigate to={ROUTES.APP} replace={true} /> : <Outlet />
}
