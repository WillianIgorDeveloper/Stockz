import { ROUTES } from "@utils"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
// Middlewares
import { OnlyPublicRoutes } from "@middlewares/only-public-routes"
import { ProtectedRoutes } from "@middlewares/protected-routes"
// Provider
import { GlobalProvider } from "@contexts/global"
import { AuthProvider } from "@contexts/auth"
import { AppProvider } from "@contexts/app"
// Pages
import { IndexPage } from "@pages/index"
import { LoginPage } from "@pages/login"
import { AppPage } from "@pages/app"
import { NotFoundPage } from "@pages/not-found"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<GlobalProvider />}>
          <Route path={ROUTES.INDEX} element={<IndexPage />} />
          <Route element={<AuthProvider />}>
            <Route element={<OnlyPublicRoutes />}>
              <Route path={ROUTES.LOGIN} element={<LoginPage />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route element={<AppProvider />}>
                <Route path={ROUTES.APP} element={<AppPage />} />
              </Route>
            </Route>
          </Route>
          <Route path={ROUTES.NOTFOUND} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
