import { Leaf, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Leaf className="w-6 h-6 text-green-400" />
              <span className="font-bold text-lg">Bilva Wellness</span>
            </div>
            <p className="text-gray-400 text-sm">
              Trusted herbal wellness products supporting holistic health and wellbeing.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="text-gray-400 hover:text-green-400 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#wellness" className="text-gray-400 hover:text-green-400 transition-colors">
                  Wellness
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-green-400 transition-colors">
                  About Us
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Dermacare Capsule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Insuwell Capsule</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Madhu Niyantran Ras</a></li>
              <li><a href="#" className="text-gray-400 hover:text-green-400 transition-colors">Reloxygen Capsule</a></li>
            </ul>
          </div>

          {/* ✅ FIXED SOCIAL LINKS */}
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                aria-label="Facebook"
                title="Facebook"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Facebook size={20} />
              </a>

              <a
                href="#"
                aria-label="Instagram"
                title="Instagram"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Instagram size={20} />
              </a>

              <a
                href="#"
                aria-label="LinkedIn"
                title="LinkedIn"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>

              <a
                href="#"
                aria-label="YouTube"
                title="YouTube"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4 text-sm text-gray-400">
            <p>
              Disclaimer: These products are not intended to diagnose, treat, cure, or prevent any disease.
              Please consult with a healthcare professional before use.
            </p>
            <p className="md:text-right">
              GMP Certified | AYUSH Compliant | Clinically Tested
            </p>
          </div>
          <p className="text-center text-gray-500 text-sm">
            &copy; 2024 Bilva Wellness. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
