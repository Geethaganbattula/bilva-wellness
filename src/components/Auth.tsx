import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {
  ArrowRight,
  Mail,
  Eye,
  EyeOff,
  Leaf,
  Loader2,
  CheckCircle,
} from "lucide-react"

type Mode = "signin" | "signup" | "phone"

export default function Auth() {
  const navigate = useNavigate()

  const [mode, setMode] = useState<Mode>("signin")
  const [showPassword, setShowPassword] = useState(false)
  const [phoneNumber, setPhoneNumber] = useState("")
  const [otp, setOtp] = useState("")
  const [otpSent, setOtpSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState("")

  const isSignIn = mode === "signin"
  const isSignup = mode === "signup"
  const isPhone = mode === "phone"

  const resetState = () => {
    setOtpSent(false)
    setOtp("")
    setSuccess("")
    setLoading(false)
  }

  // 🔐 OTP SEND
  const handleSendOTP = (e: React.FormEvent) => {
    e.preventDefault()
    if (phoneNumber.length < 10) {
      alert("Enter valid phone number")
      return
    }

    setLoading(true)
    setTimeout(() => {
      setLoading(false)
      setOtpSent(true)
      alert("OTP sent (demo: 123456)")
    }, 1200)
  }

  // ✅ OTP VERIFY
  const handleVerifyOTP = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      if (otp === "123456") {
        setSuccess("Phone login successful 🎉")
        localStorage.setItem("auth", "true")

        setTimeout(() => {
          navigate("/") // 🔥 HOME / NAVBAR REDIRECT
        }, 1200)
      } else {
        alert("Invalid OTP")
      }
    }, 1200)
  }

  // 📧 EMAIL LOGIN / SIGNUP
  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSuccess(isSignIn ? "Signed in successfully 🎉" : "Account created 🎉")
      localStorage.setItem("auth", "true")

      setTimeout(() => {
        navigate("/") // 🔥 HOME / NAVBAR REDIRECT
      }, 1200)
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-green-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">

        {/* HEADER */}
        <div className="text-center mb-8">
          <div className="flex justify-center items-center gap-2 text-3xl font-bold text-emerald-700">
            <Leaf className="w-9 h-9" />
            Bilva Wellness
          </div>
          <p className="text-gray-600 mt-2">
            {isPhone
              ? "Sign in with phone"
              : isSignup
              ? "Create your account"
              : "Welcome back"}
          </p>
        </div>

        {/* CARD */}
        <div className="bg-white rounded-2xl shadow-xl border p-6">

          {/* GOOGLE */}
          <button className="w-full border rounded-xl py-3 flex items-center justify-center gap-2 hover:bg-gray-50">
            <img
              src="https://www.google.com/favicon.ico"
              alt="google"
              className="w-5 h-5"
            />
            Continue with Google
          </button>

          <div className="my-6 text-center text-gray-400">or</div>

          {/* TABS */}
          <div className="grid grid-cols-3 gap-2 mb-6 bg-gray-100 p-1 rounded-xl">
            {[
              { id: "signin", label: "Email" },
              { id: "phone", label: "Phone" },
              { id: "signup", label: "Sign Up" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setMode(tab.id as Mode)
                  resetState()
                }}
                className={`py-2 rounded-lg transition ${
                  mode === tab.id
                    ? "bg-white text-emerald-700 shadow"
                    : "text-gray-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* SUCCESS MESSAGE */}
          {success && (
            <div className="mb-4 flex items-center gap-2 text-emerald-700 bg-emerald-50 border border-emerald-200 p-3 rounded-xl">
              <CheckCircle size={18} />
              {success}
            </div>
          )}

          {/* PHONE LOGIN */}
          {isPhone ? (
            <form
              onSubmit={otpSent ? handleVerifyOTP : handleSendOTP}
              className="space-y-4"
            >
              <input
                type="tel"
                placeholder="Phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                className="w-full border rounded-xl px-4 py-3"
                required
              />

              {otpSent && (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  maxLength={6}
                  className="w-full border rounded-xl px-4 py-3 text-center tracking-widest"
                  required
                />
              )}

              <button
                className="w-full bg-emerald-600 text-white py-3 rounded-xl flex justify-center"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : otpSent ? (
                  "Verify OTP"
                ) : (
                  "Send OTP"
                )}
              </button>
            </form>
          ) : (
            /* EMAIL LOGIN */
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              {isSignup && (
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full border rounded-xl px-4 py-3"
                  required
                />
              )}

              <div className="relative">
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full border rounded-xl px-4 py-3"
                  required
                />
                <Mail className="absolute right-4 top-3.5 text-gray-400" size={18} />
              </div>

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  className="w-full border rounded-xl px-4 py-3"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3.5 text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <button
                className="w-full bg-gradient-to-r from-emerald-600 to-green-700 text-white py-3 rounded-xl flex justify-center gap-2"
                disabled={loading}
              >
                {loading ? (
                  <Loader2 className="animate-spin" />
                ) : (
                  <>
                    {isSignIn ? "Sign In" : "Create Account"}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  )
}
