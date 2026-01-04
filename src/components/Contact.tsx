import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions? Our team is here to help you with any inquiries about our products
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="mb-4 p-4 bg-green-700 text-white rounded-lg w-fit mx-auto">
              <MapPin size={28} />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Bilva Wellness Manufacturing Facility
              <br />
              Plot No. 123, Industrial Area
              <br />
              Sector 45, Ahmedabad
              <br />
              Gujarat 382045, India
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="mb-4 p-4 bg-green-700 text-white rounded-lg w-fit mx-auto">
              <Phone size={28} />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Call Us</h3>
            <p className="text-gray-600 text-sm mb-2">
              <a
                href="tel:+919876543210"
                className="hover:text-green-700 transition-colors"
              >
                +91-9876-543-210
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              Monday - Friday: 9:00 AM - 6:00 PM IST
            </p>
          </div>

          <div className="p-8 bg-gradient-to-br from-green-50 to-white border border-green-200 rounded-xl text-center hover:shadow-md transition-shadow">
            <div className="mb-4 p-4 bg-green-700 text-white rounded-lg w-fit mx-auto">
              <Mail size={28} />
            </div>
            <h3 className="font-bold text-lg text-gray-900 mb-2">Email Us</h3>
            <p className="text-gray-600 text-sm mb-2">
              <a
                href="mailto:info@bilvawellness.com"
                className="hover:text-green-700 transition-colors"
              >
                info@bilvawellness.com
              </a>
            </p>
            <p className="text-gray-600 text-sm">
              <a
                href="mailto:support@bilvawellness.com"
                className="hover:text-green-700 transition-colors"
              >
                support@bilvawellness.com
              </a>
            </p>
          </div>
        </div>

        <div className="bg-green-50 border border-green-200 rounded-xl p-8 md:p-12">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Send us a Message
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                aria-label="Your Name"
                className="px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:border-green-700 transition-colors"
              />
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Your Email"
                className="px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:border-green-700 transition-colors"
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              aria-label="Subject"
              className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:border-green-700 transition-colors"
            />
            <textarea
              placeholder="Your Message"
              aria-label="Your Message"
              rows={5}
              className="w-full px-4 py-3 border border-green-200 rounded-lg focus:outline-none focus:border-green-700 transition-colors resize-none"
            ></textarea>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800 transition-colors font-medium"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ✅ FIXED SOCIAL LINKS */}
        <div className="mt-12 text-center">
          <h3 className="font-bold text-lg text-gray-900 mb-6">
            Follow Our Social Media
          </h3>
          <div className="flex justify-center gap-6">
            <a
              href="#"
              aria-label="Facebook"
              title="Facebook"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              <Facebook size={20} />
            </a>

            <a
              href="#"
              aria-label="Instagram"
              title="Instagram"
              className="p-3 bg-pink-600 text-white rounded-full hover:bg-pink-700 transition-colors"
            >
              <Instagram size={20} />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
              title="LinkedIn"
              className="p-3 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="#"
              aria-label="YouTube"
              title="YouTube"
              className="p-3 bg-red-600 text-white rounded-full hover:bg-red-700 transition-colors"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
