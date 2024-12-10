import { ROUTES } from "@utils"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./index.css"
import { IndexPage } from "@pages/index"
import { LoginPage } from "@pages/login"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.INDEX} element={<IndexPage />} />
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
