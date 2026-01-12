import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  id: number;
  name: string;
  price: number;
  qty: number;
}

export default function Checkout() {
  const navigate = useNavigate();

  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);

  // 🔹 Load cart
  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (!stored) {
      navigate("/cart");
      return;
    }
    setCartItems(JSON.parse(stored));
  }, [navigate]);

  // 🔹 Total calculation
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  // 🔹 Place order
  const placeOrder = async () => {
    if (!name || !phone || !address) {
      alert("Please fill all details");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("http://localhost:8000/order/place", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          customer: { name, phone, address },
          products: cartItems,
          total,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to place order");
      }

      const data = await res.json();

      if (!data.success || !data.order_id) {
        alert("Order failed. Please try again.");
        return;
      }

      // 🔹 Clear cart
      localStorage.removeItem("cart");

      alert(
        `Order placed successfully 🎉\nYour Order ID: ${data.order_id}`
      );

      // 🔹 Go to Orders page
      navigate(`/orders?orderId=${data.order_id}`);
    } catch (error) {
      console.error("Order error:", error);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Shipping Details */}
        <div>
          <h2 className="font-semibold mb-4">Shipping Details</h2>

          <input
            className="w-full border p-2 mb-3"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            className="w-full border p-2 mb-3"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />

          <textarea
            className="w-full border p-2"
            placeholder="Full Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* Order Summary */}
        <div>
          <h2 className="font-semibold mb-4">Order Summary</h2>

          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex justify-between mb-2 text-sm"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{item.price * item.qty}</span>
            </div>
          ))}

          <hr className="my-4" />

          <div className="flex justify-between font-bold">
            <span>Total</span>
            <span>₹{total}</span>
          </div>

          <button
            onClick={placeOrder}
            disabled={loading}
            className="mt-6 w-full bg-green-700 text-white py-3 rounded disabled:opacity-50"
          >
            {loading ? "Placing Order..." : "Place Order"}
          </button>
        </div>
      </div>
    </div>
  );
}
