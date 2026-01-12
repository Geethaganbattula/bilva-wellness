import { Leaf, Facebook, Instagram, Linkedin, Youtube } from "lucide-react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { useEffect } from "react"

export default function Footer() {
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }, [location.pathname])

  const showingHome = location.pathname === "/"

  const scrollToSection = (id: string) => {
    if (showingHome) {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    } else {
      navigate("/")
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
      }, 300)
    }
  }

  return (
    <footer className="relative mt-20 bg-gradient-to-b from-gray-900 via-gray-950 to-black text-white overflow-hidden">

      {/* SUBTLE BACKGROUND GLOW */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#22c55e_1px,transparent_1px)] [background-size:36px_36px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">

        {/* TOP GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Leaf className="w-7 h-7 text-green-400" />
              <span className="font-bold text-xl tracking-wide">
                Bilva Wellness
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium herbal wellness solutions inspired by Ayurveda,
              perfected with modern science for everyday vitality.
            </p>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/products" className="footer-link">Products</Link></li>
              <li>
                <button onClick={() => scrollToSection("wellness")} className="footer-link text-left">
                  Wellness
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("about")} className="footer-link text-left">
                  About Us
                </button>
              </li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Our Products</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/products" className="footer-link">Dermacare Capsule</Link></li>
              <li><Link to="/products" className="footer-link">Insuwell Capsule</Link></li>
              <li><Link to="/products" className="footer-link">Madhu Niyantran Ras</Link></li>
              <li><Link to="/products" className="footer-link">Reloxygen Capsule</Link></li>
            </ul>
          </div>

          {/* SOCIAL */}
          <div>
            <h4 className="font-semibold mb-4 text-lg">Follow Us</h4>
            <div className="flex gap-4">

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                title="Facebook"
                className="social-btn"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                title="Instagram"
                className="social-btn"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="social-btn"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                title="YouTube"
                className="social-btn"
              >
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>

            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4 text-sm text-gray-400">
            <p>
              Disclaimer: Products are not intended to diagnose, treat,
              cure or prevent any disease.
            </p>
            <p className="md:text-right">
              GMP Certified • AYUSH Compliant • Trusted Herbal Care
            </p>
          </div>

          <p className="text-center text-gray-500 text-sm">
            © 2026 <span className="font-semibold text-gray-300">Bilva Wellness</span>. All rights reserved.
          </p>
        </div>
      </div>

      {/* UTIL CLASSES */}
      <style>
        {`
          .footer-link {
            color: #9ca3af;
            transition: color 0.3s;
          }
          .footer-link:hover {
            color: #4ade80;
          }
          .social-btn {
            padding: 12px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.05);
            color: #9ca3af;
            transition: all 0.3s;
          }
          .social-btn:hover {
            color: #4ade80;
            background: rgba(74,222,128,0.15);
            transform: scale(1.1);
          }
        `}
      </style>

    </footer>
  )
}
