import { useAuth } from "@contexts/auth"
import { MainLoader } from "@ui/main-loader"
import { findTagForLink } from "@utils"
import { ROUTES } from "@utils"
import { Navigate, Outlet, useLocation } from "react-router-dom"

export function ProtectedRoutes() {
  const { pathname } = useLocation()
  const { hasSession, sessionIsLoading, permissions } = useAuth()
  const permissionTag = findTagForLink(pathname)
  const hasPermission = permissions.includes(permissionTag ?? "")

  if (sessionIsLoading) return <MainLoader />

  if (hasSession && !hasPermission && permissionTag !== "0")
    return <Navigate to={ROUTES.APP} replace={true} />

  return hasSession ? <Outlet /> : <Navigate to={ROUTES.LOGIN} replace={true} />
}
