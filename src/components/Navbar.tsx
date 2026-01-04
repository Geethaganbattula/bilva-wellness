import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Leaf } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-green-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37] flex items-center justify-center">
              <div className="w-9 h-9 rounded-full bg-[#7E8F6F] flex items-center justify-center">
                <Leaf className="w-5 h-5 text-[#325D00]" />
              </div>
            </div>

            <div className="flex flex-col leading-tight">
              <span className="text-xl font-extrabold tracking-wide text-[#FFA500]">
                BILVA WELLNESS
              </span>
              <span className="text-[10px] tracking-widest text-[#FFA500]">
                Herbal Health Care
              </span>
            </div>
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/ayobut" className="nav-link">Ayobut</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/wellness" className="nav-link">Wellness Categories</Link>
            <Link to="/about" className="nav-link">About Us</Link>
            <Link to="/contact" className="nav-link">Contact</Link>

            <button className="px-6 py-2 bg-[#325D00] text-white rounded-lg hover:bg-[#264700] font-medium">
              Consult Expert
            </button>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* MOBILE MENU */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-3">
            <Link to="/" className="mobile-link" onClick={() => setIsOpen(false)}>Home</Link>
            <Link to="/ayobut" className="mobile-link" onClick={() => setIsOpen(false)}>Ayobut</Link>
            <Link to="/products" className="mobile-link" onClick={() => setIsOpen(false)}>Products</Link>
            <Link to="/wellness" className="mobile-link" onClick={() => setIsOpen(false)}>Wellness Categories</Link>
            <Link to="/about" className="mobile-link" onClick={() => setIsOpen(false)}>About Us</Link>
            <Link to="/contact" className="mobile-link" onClick={() => setIsOpen(false)}>Contact</Link>

            <button className="w-full px-4 py-2 bg-[#325D00] text-white rounded-lg hover:bg-[#264700] font-medium">
              Consult Expert
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
