import { ErrorHandler } from "@composed/request-error-handler"
import type { User } from "@entities"
import { getUser, login } from "@factories"
import { env } from "@utils"
import { createContext, useContext, useEffect, useState } from "react"
import { Outlet } from "react-router-dom"

interface IAuthContext {
  // States
  sessionIsLoading: boolean
  hasSession: boolean
  token: string | undefined
  user: User | null
  // Functions
  handleLogin: (params: { login: string; password: string }) => Promise<void>
  handleLogout: () => Promise<void>
}

const AuthContext = createContext<IAuthContext | undefined>(undefined)
export function AuthProvider() {
  const [sessionIsLoading, setSessionIsLoading] = useState<boolean>(true)
  const [hasSession, setHasSession] = useState<boolean>(false)
  const [token, setToken] = useState<string | undefined>(undefined)
  const [user, setUser] = useState<User | null>(null)

  async function handleLogin(params: { login: string; password: string }) {
    try {
      setSessionIsLoading(true)
      const { token } = await login({ login: params })
      const { user } = await getUser({ token })
      localStorage.setItem(env.VITE_SESSION_TOKEN, token)
      setToken(token)
      setUser(user)
      setHasSession(true)
    } catch (error: any) {
      ErrorHandler({ error })
    } finally {
      setSessionIsLoading(false)
    }
  }

  async function handleLogout() {
    setSessionIsLoading(true)
    localStorage.removeItem(env.VITE_SESSION_TOKEN)
    setToken(undefined)
    setHasSession(false)
    setSessionIsLoading(false)
  }

  useEffect(() => {
    async function initialLoad() {
      const token = localStorage.getItem(env.VITE_SESSION_TOKEN)

      if (token) {
        try {
          const { user } = await getUser({ token })
          setToken(token)
          setUser(user)
          setHasSession(true)
        } catch (error: any) {
          ErrorHandler({ error })
        } finally {
          setSessionIsLoading(false)
        }
      }

      setSessionIsLoading(false)
    }
    initialLoad()
  }, [])

  return (
    <AuthContext.Provider
      value={{
        sessionIsLoading,
        hasSession,
        token,
        handleLogin,
        handleLogout,
        user,
      }}
    >
      <Outlet />
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error("useAuth must be used within an AuthProvider")
  return context
}
