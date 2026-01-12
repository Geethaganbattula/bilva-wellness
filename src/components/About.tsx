import { Leaf, Sparkles, HeartHandshake, ShieldCheck } from "lucide-react";

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-32 bg-gradient-to-b from-green-50 via-white to-emerald-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center">

          {/* IMAGE SIDE */}
          <div className="relative order-2 lg:order-1">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl group">
              <img
                src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Bilva Wellness - Natural Herbal Care"
                className="w-full h-[500px] md:h-[600px] object-cover transition-transform duration-1000 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-2xl font-bold flex items-center gap-3">
                  <Leaf className="w-8 h-8 text-emerald-300" />
                  Nature Powered Herbal Care
                </p>
              </div>
            </div>

            {/* Decorative glow */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-emerald-300/30 rounded-full blur-3xl -z-10 animate-pulse" />
            <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-green-300/20 rounded-full blur-3xl -z-10 animate-pulse delay-700" />
          </div>

          {/* CONTENT SIDE */}
          <div className="order-1 lg:order-2 space-y-10">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-emerald-100 px-5 py-2 rounded-full shadow-sm">
                <Sparkles className="w-5 h-5 text-emerald-600" />
                <span className="text-sm font-semibold text-emerald-800 uppercase tracking-wider">
                  Trusted Herbal Excellence
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-800 to-emerald-600 leading-tight">
                About Bilva Wellness
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed max-w-2xl">
                Bilva Wellness combines the strength of{" "}
                <span className="font-semibold text-emerald-700">
                  natural herbal ingredients
                </span>{" "}
                with modern scientific research to deliver pure, reliable, and
                effective wellness solutions that support your body, mind, and
                everyday vitality.
              </p>
            </div>

            {/* FEATURES */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <Leaf className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Herbal Expertise
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Built on plant-based ingredients, traditional herbal wisdom,
                    and nature-inspired wellness practices.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-emerald-600 to-teal-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Science-Driven Formulations
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Carefully developed using modern research, standardized
                    extracts, and quality-focused processes.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-teal-600 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <ShieldCheck className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Premium Quality Standards
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Produced in certified facilities with strict quality checks
                    to ensure safety, purity, and consistency.
                  </p>
                </div>
              </div>

              <div className="flex gap-5 group">
                <div className="w-14 h-14 bg-gradient-to-br from-cyan-600 to-green-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                  <HeartHandshake className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-2">
                    Trusted by Customers
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    Valued by wellness-focused individuals and recommended by
                    professionals worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* QUOTE */}
            <div className="mt-12 p-8 bg-gradient-to-r from-emerald-100 to-green-100 rounded-3xl border-l-8 border-emerald-600 shadow-md">
              <blockquote className="text-xl md:text-2xl font-medium italic text-gray-800 leading-relaxed">
                “Our mission is to deliver safe, effective, and affordable herbal
                wellness solutions — helping you live a healthier, more balanced
                life naturally.”
              </blockquote>
              <p className="mt-6 text-right text-emerald-700 font-semibold">
                — Bilva Wellness Team
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
