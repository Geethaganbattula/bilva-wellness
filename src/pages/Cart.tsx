import { useEffect, useState } from "react"
import { Minus, Plus, Trash2 } from "lucide-react"
import { useNavigate } from "react-router-dom"

interface CartItem {
  id: number
  name: string
  price: number
  image: string
  qty: number
}

export default function Cart() {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const navigate = useNavigate()

  useEffect(() => {
    const stored = localStorage.getItem("cart")
    setCartItems(stored ? JSON.parse(stored) : [])
  }, [])

  const updateCart = (items: CartItem[]) => {
    setCartItems(items)
    localStorage.setItem("cart", JSON.stringify(items))
  }

  const increaseQty = (id: number) => {
    updateCart(
      cartItems.map(item =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    )
  }

  const decreaseQty = (id: number) => {
    updateCart(
      cartItems.map(item =>
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    updateCart(cartItems.filter(item => item.id !== id))
  }

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-semibold mb-8">Your Cart</h1>

      {cartItems.length === 0 ? (
        <p className="text-gray-500">Your cart is empty</p>
      ) : (
        <>
          <div className="space-y-6">
            {cartItems.map(item => (
              <div
                key={item.id}
                className="flex items-center gap-5 p-5 bg-white rounded-2xl border shadow-sm"
              >
                {/* IMAGE */}
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-24 h-24 object-contain rounded-xl border"
                />

                {/* INFO */}
                <div className="flex-1">
                  <h2 className="font-medium text-gray-900">
                    {item.name}
                  </h2>
                  <p className="text-green-700 font-semibold mt-1">
                    ₹{item.price}
                  </p>

                  {/* QTY */}
                  <div className="flex items-center gap-3 mt-3">
                    <button
                      aria-label="Decrease quantity"
                      title="Decrease quantity"
                      onClick={() => decreaseQty(item.id)}
                      className="p-2 border rounded-lg"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="w-6 text-center font-medium">
                      {item.qty}
                    </span>

                    <button
                      aria-label="Increase quantity"
                      title="Increase quantity"
                      onClick={() => increaseQty(item.id)}
                      className="p-2 border rounded-lg"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* PRICE + DELETE */}
                <div className="flex flex-col items-end gap-4">
                  <span className="font-semibold">
                    ₹{item.price * item.qty}
                  </span>

                  <button
                    aria-label="Remove item"
                    title="Remove item"
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:bg-red-50 p-2 rounded-lg"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* FOOTER */}
          <div className="flex justify-between items-center mt-10 border-t pt-6">
            <h2 className="text-lg font-semibold">
              Total: ₹{total}
            </h2>

            <button
              aria-label="Proceed to checkout"
              title="Proceed to checkout"
              onClick={() => navigate("/checkout")}
              className="bg-green-700 text-white px-8 py-3 rounded-xl hover:bg-green-800"
            >
              Checkout
            </button>
          </div>
        </>
      )}
    </div>
  )
}
