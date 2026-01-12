import { useNavigate } from "react-router-dom"
import { LogOut, User as UserIcon, Mail } from "lucide-react"
import { useAuth } from "../auth/AuthContext"

export default function Profile() {
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const handleLogout = () => {
    logout()
    navigate("/login")
  }

  if (!user) {
    return (
      <div className="text-center py-20 text-gray-600">
        Please login to view your profile
      </div>
    )
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <div className="bg-white rounded-2xl shadow p-6">
        <h1 className="text-2xl font-bold text-green-700 mb-6">
          My Profile
        </h1>

        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <UserIcon className="text-gray-500" />
            <span className="font-medium">
              {user.email.split("@")[0]}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-gray-500" />
            <span>{user.email}</span>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="mt-8 flex items-center gap-2 bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </div>
  )
}
