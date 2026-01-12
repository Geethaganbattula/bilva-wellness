import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { Mail, Eye, EyeOff } from "lucide-react"
import { useAuth } from "./AuthContext"

export default function Login() {
  const [email, setEmail] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { login } = useAuth()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) return

    // ✅ ONLY STRING PASS CHEYYALI
    login(email)

    navigate("/")
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-2xl font-bold text-green-700 mb-6 text-center">
          Login
        </h2>

        <div className="mb-4 relative">
          <Mail className="absolute left-3 top-3 text-gray-400" size={18} />
          <input
            type="email"
            placeholder="Email"
            className="w-full pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-6 relative">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-green-600"
            required
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-2.5 text-gray-400"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <button
          type="submit"
          className="w-full bg-green-700 text-white py-2 rounded-lg hover:bg-green-800 transition"
        >
          Login
        </button>

        <p className="mt-4 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-700 font-medium">
            Signup
          </Link>
        </p>
      </form>
    </div>
  )
}
