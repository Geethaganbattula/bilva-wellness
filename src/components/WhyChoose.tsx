import {
  Award,
  Beaker,
  CheckCircle2,
  Leaf,
  ShieldCheck,
  Zap,
} from "lucide-react"

export default function WhyChoose() {
  const reasons = [
    {
      id: 1,
      title: "Pure Herbal Ingredients",
      description:
        "Carefully selected plant-based ingredients sourced from trusted farms — no unnecessary additives or fillers",
      icon: Leaf,
      color: "from-emerald-500 to-green-600",
    },
    {
      id: 2,
      title: "GMP Certified Manufacturing",
      description:
        "Produced in GMP-certified facilities following strict quality and hygiene standards",
      icon: Award,
      color: "from-amber-500 to-orange-600",
    },
    {
      id: 3,
      title: "AYUSH Approved",
      description:
        "Formulated in compliance with AYUSH guidelines to ensure safety, purity and consistency",
      icon: CheckCircle2,
      color: "from-blue-500 to-indigo-600",
    },
    {
      id: 4,
      title: "Tradition Backed by Science",
      description:
        "Ayurvedic knowledge supported by modern research, testing and formulation expertise",
      icon: Beaker,
      color: "from-violet-500 to-purple-600",
    },
    {
       id: 5,
        title: "Quality You Can Trust",
        description:
         "Prepared with attention to detail, ensuring reliable quality in every product",
        icon: ShieldCheck,
        color: "from-cyan-500 to-teal-600",
},

    {
      id: 6,
      title: "Trusted by Wellness Community",
      description:
        "Preferred by practitioners and customers who value transparency and natural care",
      icon: Zap,
      color: "from-rose-500 to-pink-600",
    },
  ]

  return (
    <section className="py-20 md:py-28 lg:py-32 bg-gradient-to-b from-white to-emerald-50/30 relative overflow-hidden">
      {/* subtle background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:32px_32px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14 md:mb-18">
          <span className="inline-block px-5 py-2 bg-emerald-100 text-emerald-800 rounded-full text-sm font-semibold tracking-wide mb-5">
            Why Choose Us
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 tracking-tight mb-6">
            Thoughtfully Crafted Herbal Care
          </h2>

          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
            Rooted in Ayurveda, refined with science, and built around safety and quality
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {reasons.map((reason) => {
            const Icon = reason.icon

            return (
              <div
                key={reason.id}
                className="
                  group relative bg-white rounded-2xl p-7 md:p-9
                  border border-gray-100 shadow-sm hover:shadow-2xl
                  transition-all duration-300 hover:-translate-y-2
                  before:absolute before:inset-0 before:rounded-2xl
                  before:bg-gradient-to-br before:opacity-0
                  hover:before:opacity-[0.06] before:transition-opacity
                  before:duration-500 before:-z-10 overflow-hidden
                "
                style={{
                  ["--tw-gradient-from" as any]: "",
                }}
              >
                {/* top accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${reason.color}`}
                />

                <div className="relative">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl
                      bg-gradient-to-br ${reason.color} text-white mb-6
                      shadow-lg transition-transform duration-300
                      group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon size={32} strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-4">
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
