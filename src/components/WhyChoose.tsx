import { Award, Beaker, CheckCircle2, Leaf, ShieldCheck, Zap } from 'lucide-react'

export default function WhyChoose() {
  const reasons = [
    {
      id: 1,
      title: '100% Pure Herbal',
      description: 'Every ingredient is naturally sourced — zero synthetic additives, fillers or preservatives',
      icon: Leaf,
      color: 'from-emerald-500 to-green-600',
    },
    {
      id: 2,
      title: 'GMP Certified',
      description: 'Manufactured in world-class GMP facilities with stringent quality protocols',
      icon: Award,
      color: 'from-amber-500 to-orange-600',
    },
    {
      id: 3,
      title: 'AYUSH Compliant',
      description: 'Fully compliant with AYUSH Ministry standards for safety, purity & efficacy',
      icon: CheckCircle2,
      color: 'from-blue-500 to-indigo-600',
    },
    {
      id: 4,
      title: 'Science + Tradition',
      description: 'Traditional Ayurvedic wisdom enhanced by modern clinical research & validation',
      icon: Beaker,
      color: 'from-violet-500 to-purple-600',
    },
    {
      id: 5,
      title: 'Rigorous Safety',
      description: 'Multi-stage testing including heavy metals, microbial & stability analysis',
      icon: ShieldCheck,
      color: 'from-cyan-500 to-teal-600',
    },
    {
      id: 6,
      title: 'Trusted by Thousands',
      description: 'Recommended by Ayurvedic practitioners and loved by wellness communities',
      icon: Zap,
      color: 'from-rose-500 to-pink-600',
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold tracking-wide mb-5">
            Why Bilva Wellness?
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Pure. Safe. Effective.
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            We combine centuries-old Ayurvedic wisdom with modern science to deliver uncompromising quality
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div
                key={reason.id}
                className={`
                  group relative bg-white rounded-2xl p-7 md:p-9
                  border border-gray-100 shadow-sm hover:shadow-2xl
                  transition-all duration-400 hover:-translate-y-2
                  before:absolute before:inset-0 before:rounded-2xl
                  before:bg-gradient-to-br ${reason.color} before:opacity-0
                  hover:before:opacity-[0.06] before:transition-opacity before:duration-500
                  before:-z-10 overflow-hidden
                `}
              >
                {/* Color accent top bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${reason.color} opacity-90 group-hover:opacity-100 transition-opacity`}
                />

                <div className="relative">
                  <div
                    className={`
                      inline-flex items-center justify-center w-16 h-16 rounded-2xl
                      bg-gradient-to-br ${reason.color} text-white mb-6
                      shadow-lg transform transition-all duration-400
                      group-hover:scale-110 group-hover:rotate-6
                    `}
                  >
                    <Icon size={32} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors">
                    {reason.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15.5px] md:text-base">
                    {reason.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}