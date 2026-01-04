import { Leaf, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-white to-emerald-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* Image Side - Enhanced with overlay and subtle animation */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bilva Wellness - Harmony of Nature & Healing"
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-70"></div>
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-bold flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-emerald-300" />
                  Nature's Healing Touch
                </p>
              </div>
            </div>

            {/* Decorative floating element */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-200/30 rounded-full blur-3xl -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-300/20 rounded-full blur-3xl -z-10 animate-pulse delay-700"></div>
          </div>

          {/* Content Side */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-emerald-100 px-4 py-2 rounded-full">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-medium text-emerald-800 uppercase tracking-wider">
                  Trusted Ayurvedic Excellence
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-600 leading-tight">
                About Bilva Wellness
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Bilva Wellness harmoniously blends <span className="font-semibold text-emerald-700">ancient Ayurvedic wisdom</span> with cutting-edge scientific validation to create pure, potent, and trustworthy herbal solutions that nurture your body, mind, and spirit.
              </p>
            </div>

            {/* Feature Grid with Icons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">
              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Traditional Knowledge</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Rooted in thousands of years of Ayurvedic texts, classical formulations, and herbal healing traditions.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Modern Science</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Backed by phytochemical research, clinical studies, and standardized extraction processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Quality Manufacturing</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Produced in GMP & ISO-certified facilities with rigorous testing at every stage.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-cyan-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Trusted Worldwide</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Recommended by Ayurvedic practitioners, doctors, and loved by thousands of wellness seekers globally.
                  </p>
                </div>
              </div>
            </div>

            {/* Quote */}
            <div className="mt-12 p-8 bg-gradient-to-r from-emerald-100 to-green-100 rounded-3xl border-l-8 border-emerald-600">
              <blockquote className="text-xl md:text-2xl font-medium italic text-gray-800 leading-relaxed">
                "Our mission is to make safe, effective, and affordable herbal wellness solutions accessible to everyone — empowering you to live a healthier, more balanced, and vibrant life naturally."
              </blockquote>
              <p className="mt-6 text-right text-emerald-700 font-semibold">— Bilva Wellness Team</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}