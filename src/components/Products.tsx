import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { products } from '../data/products'

export default function Products() {
  return (
    <section id="products" className="py-16 md:py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Premium Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Scientifically formulated herbal products backed by traditional knowledge and modern research
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl border border-green-100 overflow-hidden
                         shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden bg-gray-100">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover
                             group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent
                                opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                  {product.shortDescription}
                </p>

                <Link
                  to={`/product/${product.id}`}
                  className="inline-flex items-center justify-center gap-2
                             px-4 py-2 bg-green-700 text-white rounded-lg
                             hover:bg-green-800 transition-all duration-300
                             font-medium w-full"
                >
                  View Details
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
