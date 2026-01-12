import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import {
  Menu,
  X,
  ShoppingCart,
  User,
  LogOut,
  Search,
  PackageCheck,
  Facebook,
  Instagram,
  Youtube,
  Leaf
} from "lucide-react"
import logo from "../assets/logo.png"
import { useAuth } from "../auth/AuthContext"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [search, setSearch] = useState("")
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate("/login")
    setIsOpen(false)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search)}`)
      setSearch("")
    }
  }

  return (
    <>
      {/* 🌿 TOP INFO STRIP */}
      <div className="bg-[#2F5D00] text-white text-xs">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">

          {/* LEFT EMPTY (BALANCE) */}
          <div className="hidden md:block w-24" />

          {/* CENTER TEXT */}
          <div className="flex items-center gap-2 text-center mx-auto">
            <Leaf size={14} />
            <span className="tracking-wide">
              Free shipping on orders over ₹500!
            </span>
          </div>

          {/* RIGHT SOCIAL ICONS */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <Facebook size={14} />
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              title="Instagram"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <Instagram size={14} />
            </a>

            <a
              href="https://www.youtube.com/"
              aria-label="YouTube"
              title="YouTube"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-green-300 transition"
            >
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* 🌿 MAIN NAVBAR */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 gap-6">

            {/* LOGO */}
            <Link to="/" className="flex items-center gap-3 shrink-0">
              <img src={logo} alt="Bilva Wellness Logo" className="h-11" />
              <div className="hidden sm:flex flex-col">
                <span className="text-[22px] font-semibold text-[#2F5D00]">
                  Bilva Wellness
                </span>
                <span className="h-[2px] bg-[#2F5D00] opacity-70 my-[2px]" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B7F55]">
                  Natural & Herbal
                </span>
              </div>
            </Link>

            {/* SEARCH BAR */}
            <form
              onSubmit={handleSearch}
              className="hidden md:flex items-center w-full max-w-md
                         bg-green-50 border border-green-200 rounded-full
                         px-4 py-2"
            >
              <Search className="w-4 h-4 text-green-700 mr-2" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search herbal products..."
                className="w-full bg-transparent outline-none text-sm"
              />
            </form>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-7 text-sm font-medium">
              {[
                ["/", "Bilva"],
                ["/ayobut", "Blog"],
                ["/products", "Products"],
                ["/wellness", "Wellness"],
                ["/about", "About"],
                ["/contact", "Contact"]
              ].map(([path, label]) => (
                <Link
                  key={path}
                  to={path}
                  className="hover:text-[#2F5D00] transition"
                >
                  {label}
                </Link>
              ))}

              {user ? (
                <div className="flex items-center gap-4 ml-2">
                  <Link to="/orders" aria-label="Orders">
                    <PackageCheck className="w-5 h-5 text-[#2F5D00]" />
                  </Link>

                  <Link to="/cart" aria-label="Cart">
                    <ShoppingCart className="w-5 h-5 text-[#2F5D00]" />
                  </Link>

                  <Link to="/profile" aria-label="Profile">
                    <User className="w-5 h-5 text-[#2F5D00]" />
                  </Link>

                  <button onClick={handleLogout} aria-label="Logout">
                    <LogOut size={18} />
                  </button>
                </div>
              ) : (
                <div className="flex gap-4">
                  <Link to="/login">Login</Link>
                  <Link
                    to="/signup"
                    className="px-4 py-2 rounded-full bg-[#2F5D00] text-white"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>

            {/* MOBILE MENU TOGGLE */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle Menu"
              className="md:hidden p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}
