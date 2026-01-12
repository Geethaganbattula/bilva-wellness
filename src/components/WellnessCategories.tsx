import { Heart, Leaf, Droplet, Wind } from "lucide-react"

export default function WellnessCategories() {
  const categories = [
    {
      id: "diabetes",
      title: "Diabetes Care",
      description:
        "Natural herbal support to help maintain healthy blood sugar levels and metabolic balance",
      icon: Heart,
      gradient: "from-emerald-500 to-green-600",
      tags: ["Blood Sugar Support", "Metabolism Care", "Plant Based"],
    },
    {
      id: "skin",
      title: "Skin Vitality",
      description:
        "Herbal nourishment to support clear, healthy and naturally glowing skin",
      icon: Droplet,
      gradient: "from-amber-500 to-orange-600",
      tags: ["Glow Care", "Skin Nourishment", "Herbal Actives"],
    },
    {
      id: "stress",
      title: "Mind & Body",
      description:
        "Gentle herbal care to support mental calmness, focus and daily balance",
      icon: Leaf,
      gradient: "from-indigo-500 to-violet-600",
      tags: ["Stress Support", "Mental Calm", "Natural Balance"],
    },
    {
      id: "respiratory",
      title: "Respiratory Wellness",
      description:
        "Natural herbal blends to support clear breathing and lung strength",
      icon: Wind,
      gradient: "from-cyan-500 to-teal-600",
      tags: ["Clear Breathing", "Lung Support", "Herbal Care"],
    },
  ]

  return (
    <section
      id="wellness"
      className="py-16 md:py-24 lg:py-28 bg-gradient-to-b from-white via-green-50/40 to-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-4">
            Natural Health Categories
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-5">
            Herbal Wellness Support
          </h2>

          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Plant-based herbal care thoughtfully crafted for everyday wellness
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {categories.map((cat) => {
            const Icon = cat.icon

            return (
              <div
                key={cat.id}
                className="group relative bg-white rounded-2xl border border-gray-100 
                           shadow-sm hover:shadow-xl transition-all duration-300 
                           hover:-translate-y-2 overflow-hidden"
              >
                {/* Gradient glow */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-[0.08]
                              transition-opacity duration-500 bg-gradient-to-br ${cat.gradient}`}
                />

                {/* Top bar */}
                <div className={`h-1.5 w-full bg-gradient-to-r ${cat.gradient}`} />

                <div className="relative p-7 md:p-8">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 mb-6 flex items-center justify-center 
                                rounded-2xl bg-gradient-to-br ${cat.gradient} 
                                text-white shadow-lg transform transition-all 
                                duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon size={28} strokeWidth={2.1} />
                  </div>

                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {cat.title}
                  </h3>

                  <p className="text-gray-600 text-[15px] leading-relaxed mb-5">
                    {cat.description}
                  </p>

                  {/* TAGS */}
                  <div className="flex flex-wrap gap-2">
                    {cat.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs 
                                   bg-gray-100 text-gray-600"
                      >
                        {tag}
                      </span>
                    ))}
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
