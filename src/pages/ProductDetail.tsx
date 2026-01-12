import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";
import {
  CheckCircle,
  Info,
  Package,
  ArrowLeft,
} from "lucide-react";

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  description?: string;
  image: string;
  composition?: string[];
  merits?: string[];
  indications?: string[];
}

export default function ProductDetails() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get(`/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return <p className="text-center py-20">Loading...</p>;
  }

  if (!product) {
    return <p className="text-center py-20">Product not found</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      {/* Back */}
      <Link
        to="/products"
        className="flex items-center gap-2 text-green-700 mb-10"
      >
        <ArrowLeft size={18} /> Back to Products
      </Link>

      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) =>
            ((e.target as HTMLImageElement).src =
              "https://via.placeholder.com/600x400")
          }
          className="w-full h-[420px] object-cover rounded-xl"
        />

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

          <p className="text-gray-600 mb-6">
            {product.description || product.shortDescription}
          </p>

          {/* Presentation box */}
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
            <p className="font-semibold mb-1">Presentation</p>
            <p className="text-sm text-gray-700">
              60 capsules in a sealed LDPE container
            </p>
          </div>

          {/* CTA */}
          <button className="w-full bg-green-700 text-white py-3 rounded-lg mb-4">
            Consult Expert Now
          </button>

          {/* Disclaimer */}
          <div className="bg-yellow-50 border border-yellow-200 text-sm p-4 rounded-lg text-gray-700">
            These products are not intended to diagnose, treat, cure or prevent
            any disease. Please consult a healthcare professional before use.
          </div>
        </div>
      </div>

      {/* Composition / Benefits / Indications */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16">
        {product.composition && (
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-4">
              <Package className="text-green-700" /> Composition
            </h3>
            <ul className="space-y-2 text-sm">
              {product.composition.map((i, idx) => (
                <li key={idx}>• {i}</li>
              ))}
            </ul>
          </div>
        )}

        {product.merits && (
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-4">
              <CheckCircle className="text-green-700" /> Merits & Benefits
            </h3>
            <ul className="space-y-2 text-sm">
              {product.merits.map((i, idx) => (
                <li key={idx}>✓ {i}</li>
              ))}
            </ul>
          </div>
        )}

        {product.indications && (
          <div>
            <h3 className="flex items-center gap-2 font-semibold mb-4">
              <Info className="text-green-700" /> Indications
            </h3>
            <ul className="space-y-2 text-sm">
              {product.indications.map((i, idx) => (
                <li key={idx}>→ {i}</li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 bg-green-50 rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <h3 className="text-xl font-semibold">
          Have Questions About This Product?
        </h3>
        <div className="flex gap-4">
          <button className="bg-green-700 text-white px-6 py-3 rounded-lg">
            Contact Our Experts
          </button>
          <button className="border border-green-700 text-green-700 px-6 py-3 rounded-lg">
            Download Product Brochure
          </button>
        </div>
      </div>
    </section>
  );
}
