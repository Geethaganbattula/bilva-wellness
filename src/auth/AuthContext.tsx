import { createContext, useContext, useEffect, useState } from "react"

/* =====================
   USER TYPE
===================== */
export type User = {
  email: string
}

/* =====================
   CONTEXT TYPE
===================== */
type AuthContextType = {
  user: User | null
  isAuthenticated: boolean
  login: (email: string) => void
  signup: (email: string) => void
  logout: () => void
}

/* =====================
   CONTEXT CREATE
===================== */
const AuthContext = createContext<AuthContextType | null>(null)

/* =====================
   PROVIDER
===================== */
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)

  /* Load user from localStorage on refresh */
  useEffect(() => {
    const storedUser = localStorage.getItem("user")
    if (storedUser) {
      setUser(JSON.parse(storedUser))
    }
  }, [])

  /* LOGIN */
  const login = (email: string) => {
    const loggedUser = { email }
    setUser(loggedUser)
    localStorage.setItem("user", JSON.stringify(loggedUser))
  }

  /* SIGNUP */
  const signup = (email: string) => {
    const newUser = { email }
    setUser(newUser)
    localStorage.setItem("user", JSON.stringify(newUser))
  }

  /* LOGOUT */
  const logout = () => {
    setUser(null)
    localStorage.removeItem("user")
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

/* =====================
   CUSTOM HOOK
===================== */
export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider")
  }
  return context
}
