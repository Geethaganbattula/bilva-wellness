import { useState } from "react"
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
} from "lucide-react"

export default function Contact() {
  const [contactMethod, setContactMethod] = useState<"email" | "phone">("email")

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-gradient-to-b from-white via-green-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions or need guidance? We’re always happy to help
          </p>
        </div>

        {/* CONTACT INFO CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

          <div className="bg-white/80 border border-green-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-green-700 text-white rounded-xl">
              <MapPin size={26} />
            </div>
            <h3 className="font-semibold mb-2">Visit Us</h3>
            <p className="text-sm text-gray-600 leading-relaxed">
              1-7-230, Gayathri Homes <br />
              Chaitanyapuri, Hyderabad <br />
              Telangana – 500060
            </p>
          </div>

          <div className="bg-white/80 border border-green-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-green-700 text-white rounded-xl">
              <Phone size={26} />
            </div>
            <h3 className="font-semibold mb-2">Call Us</h3>
            <p className="text-xl font-semibold text-green-700">
              +91 98765 43210
            </p>
            <p className="text-sm text-gray-600">
              24/7 Customer Support
            </p>
          </div>

          <div className="bg-white/80 border border-green-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto mb-5 flex items-center justify-center bg-green-700 text-white rounded-xl">
              <Mail size={26} />
            </div>
            <h3 className="font-semibold mb-2">Email Us</h3>
            <p className="text-sm text-gray-600">info@bilvawellness.com</p>
            <p className="text-sm text-gray-600">support@bilvawellness.com</p>
          </div>

        </div>

        {/* CONTACT FORM */}
        <div className="bg-white/80 border border-green-200 rounded-2xl p-8 md:p-12 shadow-lg max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">
            Send us a Message
          </h3>

          <form className="space-y-5">

            {/* NAME */}
            <input
              type="text"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 rounded-xl border border-green-200
                         focus:ring-2 focus:ring-green-600 outline-none"
            />

            {/* CONTACT METHOD */}
            <div className="flex justify-center gap-8">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={contactMethod === "email"}
                  onChange={() => setContactMethod("email")}
                />
                <span>Email</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  checked={contactMethod === "phone"}
                  onChange={() => setContactMethod("phone")}
                />
                <span>Phone</span>
              </label>
            </div>

            {/* CONDITIONAL INPUT */}
            {contactMethod === "email" ? (
              <input
                type="email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-3 rounded-xl border border-green-200
                           focus:ring-2 focus:ring-green-600 outline-none"
              />
            ) : (
              <input
                type="tel"
                placeholder="Your Phone Number"
                required
                className="w-full px-4 py-3 rounded-xl border border-green-200
                           focus:ring-2 focus:ring-green-600 outline-none"
              />
            )}

            {/* SUBJECT */}
            <input
              type="text"
              placeholder="Subject"
              required
              className="w-full px-4 py-3 rounded-xl border border-green-200
                         focus:ring-2 focus:ring-green-600 outline-none"
            />

            {/* MESSAGE */}
            <textarea
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 rounded-xl border border-green-200
                         focus:ring-2 focus:ring-green-600 outline-none resize-none"
            />

            {/* SUBMIT */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-green-700 text-white
                         font-medium hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* SOCIALS */}
        <div className="mt-16 text-center">
          <h3 className="font-semibold mb-6">Follow Us</h3>
          <div className="flex justify-center gap-5">
            <a className="p-3 rounded-full bg-blue-600 text-white"><Facebook /></a>
            <a className="p-3 rounded-full bg-pink-600 text-white"><Instagram /></a>
            <a className="p-3 rounded-full bg-blue-700 text-white"><Linkedin /></a>
            <a className="p-3 rounded-full bg-red-600 text-white"><Youtube /></a>
          </div>
        </div>

      </div>
    </section>
  )
}
