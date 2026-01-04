import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-green-50 via-white to-emerald-50 overflow-hidden">
      {/* Optional subtle background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:24px_24px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 md:py-20 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8 max-w-3xl">
            <div className="inline-block">
              <span className="px-4 py-1.5 bg-green-100/80 backdrop-blur-sm text-green-800 rounded-full text-sm font-semibold tracking-wide border border-green-200/60 shadow-sm">
                Bilva Wellness
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight leading-tight">
              Purely Natural Herbal Solutions for{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
                Lasting Wellness
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-light">
              Time-tested Ayurvedic formulations backed by modern science — supporting diabetes management, skin vitality, respiratory health, and complete holistic balance.
            </p>

            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-xl font-medium text-lg shadow-lg hover:shadow-xl hover:shadow-green-200/40 transition-all duration-300 hover:-translate-y-1 active:scale-[0.98] flex items-center justify-center gap-3 overflow-hidden">
                <span className="relative z-10">Explore Products</span>
                <ArrowRight size={20} className="relative z-10 transition-transform group-hover:translate-x-1" />
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <button className="px-8 py-4 border-2 border-green-600 text-green-700 rounded-xl font-medium text-lg hover:bg-green-50/60 hover:border-green-700 transition-all duration-300 hover:shadow-md active:scale-[0.98]">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual - Hero Image */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg aspect-[4/5] sm:aspect-[5/6] rounded-3xl overflow-hidden shadow-2xl shadow-green-900/10 border border-white/40 backdrop-blur-sm bg-white/5 group">
              <img
                src="https://media.gettyimages.com/id/2168214417/photo/woman-holding-pipette-and-amber-glass-bottle-with-natural-essential-oil-or-organic-serum-body.jpg?s=612x612&w=gi&k=20&c=Wmcr3HezQU5vK-SJeE0AQ_IsT3dFqveR1PCcTPPgrKI="
                alt="Natural Ayurvedic herbal wellness product being carefully prepared"
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />

              {/* Subtle overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/25 via-transparent to-green-900/5" />

              {/* Floating badge effect */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/90 backdrop-blur-md rounded-full shadow-lg border border-white/60 text-sm font-medium text-green-800">
                  <span className="text-green-600">100% Natural • GMP Certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="grid grid-cols-3 gap-6 md:gap-12 mt-16 lg:mt-20 pt-10 border-t border-green-200/40">
          {[
            { value: '100%', label: 'Pure Herbal & Natural' },
            { value: 'GMP', label: 'Certified Facility' },
            { value: 'AYUSH', label: 'Compliant Standards' },
          ].map((item, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-br from-green-600 to-emerald-600 bg-clip-text text-transparent mb-3">
                {item.value}
              </div>
              <p className="text-gray-600 text-sm sm:text-base font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}