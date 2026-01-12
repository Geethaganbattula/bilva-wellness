import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, ArrowRight, Plus } from "lucide-react";
import api from "../services/api";

/* =======================
   Interfaces
======================= */

interface Product {
  id: number;
  name: string;
  shortDescription: string;
  image: string;
  price: number;
}

interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string; // ✅ ADDED
  qty: number;
}

/* =======================
   Skeleton Card
======================= */

const ProductSkeleton = () => (
  <div className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
    <div className="h-64 bg-gray-200" />
    <div className="p-6 space-y-4">
      <div className="h-6 bg-gray-200 rounded w-3/4" />
      <div className="h-4 bg-gray-200 rounded w-full" />
      <div className="h-4 bg-gray-200 rounded w-5/6" />
      <div className="h-10 bg-gray-200 rounded-xl" />
      <div className="h-10 bg-gray-200 rounded-xl" />
    </div>
  </div>
);

/* =======================
   Products Component
======================= */

export default function Products() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  /* =======================
     Fetch Products
  ======================= */
  useEffect(() => {
    api.get("/products").then((res) => {
      const withPrice = res.data.map((p: any) => ({
        ...p,
        price: 500, // temporary price
      }));
      setProducts(withPrice);
      setLoading(false);
    });
  }, []);

  /* =======================
     Add to Cart (UPDATED)
  ======================= */
  const addToCart = (product: Product) => {
    const stored = localStorage.getItem("cart");
    let cart: CartItem[] = stored ? JSON.parse(stored) : [];

    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      existing.qty += 1;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image, // 🔥 IMPORTANT FIX
        qty: 1,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
  };

  /* =======================
     Get Quantity in Cart
  ======================= */
  const getQty = (id: number): number => {
    const stored = localStorage.getItem("cart");
    if (!stored) return 0;
    const cart: CartItem[] = JSON.parse(stored);
    return cart.find((item) => item.id === id)?.qty || 0;
  };

  /* =======================
     UI
  ======================= */
  return (
    <section className="py-20 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Premium Herbal Products
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Handcrafted with pure herbs and ancient wisdom for your holistic wellness
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {loading
            ? Array(8)
                .fill(0)
                .map((_, i) => <ProductSkeleton key={i} />)
            : products.map((product) => {
                const qtyInCart = getQty(product.id);

                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-2xl shadow-lg overflow-hidden
                               transition-all duration-500 hover:shadow-2xl hover:-translate-y-3"
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden bg-gray-50">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col">
                      <h3 className="font-bold text-xl text-gray-900 mb-2 line-clamp-2">
                        {product.name}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">
                        {product.shortDescription}
                      </p>

                      {/* Price */}
                      <div className="mb-5">
                        <span className="text-2xl font-bold text-[#325D00]">
                          ₹{product.price}
                        </span>
                      </div>

                      {/* Add to Cart */}
                      <button
                        onClick={() => addToCart(product)}
                        className="relative w-full mb-3 px-5 py-3 bg-[#325D00]
                                   hover:bg-[#264700] text-white font-semibold
                                   rounded-xl shadow-md transition-all
                                   flex items-center justify-center gap-2"
                      >
                        {qtyInCart > 0 ? (
                          <>
                            <Plus size={18} />
                            Add More
                            <span className="absolute right-4 bg-white text-[#325D00]
                                             text-xs font-bold px-2.5 py-1 rounded-full">
                              {qtyInCart}
                            </span>
                          </>
                        ) : (
                          <>
                            <ShoppingCart size={18} />
                            Add to Cart
                          </>
                        )}
                      </button>

                      {/* View Details */}
                      <Link
                        to={`/product/${product.id}`}
                        className="w-full text-center px-5 py-3 border-2 border-[#325D00]
                                   text-[#325D00] font-semibold rounded-xl
                                   hover:bg-[#325D00] hover:text-white
                                   transition-all flex items-center justify-center gap-2"
                      >
                        View Details
                        <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </section>
  );
}
