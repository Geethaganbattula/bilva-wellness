import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { ArrowLeft, CheckCircle, Package, AlertCircle } from 'lucide-react'
import { products } from '../data/products'

export default function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === id)

  // ✅ FIX: Page always opens from TOP when product is clicked
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Product Not Found
        </h1>
        <Link to="/products" className="text-green-700 hover:text-green-800">
          Back to Products
        </Link>
      </div>
    )
  }

  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">

        {/* 🔙 Back */}
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-green-700 hover:text-green-800 mb-8 font-medium"
        >
          <ArrowLeft size={20} />
          Back to Products
        </Link>

        {/* 🟢 PRODUCT MAIN SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">

          {/* Image */}
          <div>
            <div className="sticky top-20 rounded-xl overflow-hidden shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-96 object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-8">
            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-lg text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Presentation */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Presentation
              </h3>
              <p className="text-gray-600 bg-green-50 p-4 rounded-lg border border-green-200">
                {product.presentation}
              </p>
            </div>

            <button className="w-full px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-800 transition font-bold text-lg">
              Consult Expert Now
            </button>

            {/* Disclaimer */}
            <div className="p-4 bg-amber-50 border border-amber-200 rounded-lg flex gap-3">
              <AlertCircle className="text-amber-700 mt-0.5" size={20} />
              <p className="text-sm text-amber-900">
                These products are not intended to diagnose, treat, cure, or prevent any disease.
                Please consult a healthcare professional before use.
              </p>
            </div>
          </div>
        </div>

        {/* 🟢 COMPOSITION / BENEFITS / INDICATIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 pb-12 border-b border-gray-200">

          {/* Composition */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
              <Package className="text-green-700" size={24} />
              Composition
            </h3>
            <ul className="space-y-3">
              {product.composition.map((item, index) => (
                <li key={index} className="flex gap-2 text-gray-700">
                  <span className="text-green-700 font-bold">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
              <CheckCircle className="text-green-700" size={24} />
              Merits & Benefits
            </h3>
            <ul className="space-y-3">
              {product.merits.map((merit, index) => (
                <li key={index} className="flex gap-2 text-gray-700">
                  <span className="text-green-700 font-bold">✓</span>
                  {merit}
                </li>
              ))}
            </ul>
          </div>

          {/* Indications */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 mb-4">
              <AlertCircle className="text-green-700" size={24} />
              Indications
            </h3>
            <ul className="space-y-3">
              {product.indications.map((indication, index) => (
                <li key={index} className="flex gap-2 text-gray-700">
                  <span className="text-green-700 font-bold">→</span>
                  {indication}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 🟢 QUESTIONS SECTION (LAST) */}
        <div className="bg-green-50 border border-green-200 rounded-xl p-8 md:p-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Have Questions About This Product?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <button className="px-8 py-4 bg-green-700 text-white rounded-lg hover:bg-green-800 font-bold">
              Contact Our Experts
            </button>

            <button className="px-8 py-4 border-2 border-green-700 text-green-700 rounded-lg hover:bg-green-50 font-bold">
              Download Product Brochure
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}
