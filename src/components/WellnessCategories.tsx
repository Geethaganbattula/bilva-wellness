import { Heart, Leaf, Droplet, Wind, ArrowRight } from 'lucide-react'

export default function WellnessCategories() {
  const categories = [
    {
      id: 'diabetes',
      title: 'Diabetes Care',
      description: 'Support healthy blood sugar levels and metabolic balance with time-tested Ayurvedic formulations',
      icon: Heart,
      color: 'from-emerald-500 to-green-600',
      hoverColor: 'from-emerald-600 to-green-700',
      accent: 'text-emerald-600',
    },
    {
      id: 'skin',
      title: 'Skin Vitality',
      description: 'Nourish and restore radiant, healthy skin with pure herbal actives',
      icon: Droplet,
      color: 'from-amber-500 to-orange-600',
      hoverColor: 'from-amber-600 to-orange-700',
      accent: 'text-amber-600',
    },
    {
      id: 'stress',
      title: 'Mind & Calm',
      description: 'Natural support for stress resilience, mental clarity and emotional balance',
      icon: Leaf,
      color: 'from-indigo-500 to-violet-600',
      hoverColor: 'from-indigo-600 to-violet-700',
      accent: 'text-indigo-600',
    },
    {
      id: 'respiratory',
      title: 'Respiratory Wellness',
      description: 'Promote clear breathing and strong lung function with soothing herbal blends',
      icon: Wind,
      color: 'from-cyan-500 to-teal-600',
      hoverColor: 'from-cyan-600 to-teal-700',
      accent: 'text-cyan-600',
    },
  ]

  return (
    <section id="wellness" className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white to-green-50/30">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-1.5 bg-green-100 text-green-700 rounded-full text-sm font-semibold tracking-wide mb-4">
            Holistic Health Categories
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-5">
            Targeted Herbal Wellness
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Carefully crafted Ayurvedic solutions designed for specific health goals
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon

            return (
              <div
                key={cat.id}
                className={`
                  group relative overflow-hidden bg-white rounded-2xl border border-gray-100 
                  shadow-sm hover:shadow-xl transition-all duration-400 hover:-translate-y-2
                  before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br 
                  ${cat.color} before:opacity-0 before:transition-opacity before:duration-500
                  hover:before:opacity-[0.07]
                `}
              >
                {/* Top accent bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${cat.color} opacity-90 group-hover:opacity-100 transition-opacity`} />

                <div className="p-7 md:p-8">
                  {/* Icon with background */}
                  <div
                    className={`
                      inline-flex items-center justify-center w-14 h-14 
                      rounded-2xl bg-gradient-to-br ${cat.color} text-white 
                      shadow-lg mb-6 transform transition-all duration-400 
                      group-hover:scale-110 group-hover:rotate-3
                    `}
                  >
                    <Icon size={28} strokeWidth={2.1} />
                  </div>

                  <h3
                    className={`
                      text-xl font-semibold text-gray-900 mb-3 
                      transition-colors duration-300 group-hover:${cat.accent}
                    `}
                  >
                    {cat.title}
                  </h3>

                  <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                    {cat.description}
                  </p>

                  {/* Learn more link - subtle but discoverable */}
                  <div className="flex items-center gap-2 text-sm font-medium text-gray-500 group-hover:text-green-700 transition-colors">
                    <span>Explore solutions</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}