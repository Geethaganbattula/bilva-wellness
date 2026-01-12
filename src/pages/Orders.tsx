import { useEffect, useState } from "react";
import { Truck } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

interface Order {
  id: string;
  date: string;
  total: number;
  status: string;
}

export default function Orders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  const [searchParams] = useSearchParams();
  const highlightedOrderId = searchParams.get("orderId");

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await fetch("http://localhost:8000/order/list");
      const data = await res.json();

      if (data.success) {
        setOrders(data.orders);
      }
    } catch (error) {
      console.error("Failed to fetch orders", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading orders...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-green-700 mb-6">
        My Orders
      </h1>

      {orders.length === 0 ? (
        <p className="text-gray-500">No orders found</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => {
            const isHighlighted = order.id === highlightedOrderId;

            return (
              <div
                key={order.id}
                className={`rounded-xl shadow p-5 flex flex-col md:flex-row justify-between gap-4 transition
                  ${
                    isHighlighted
                      ? "bg-green-50 border-2 border-green-600"
                      : "bg-white"
                  }`}
              >
                <div>
                  <p className="font-semibold">{order.id}</p>
                  <p className="text-sm text-gray-500">{order.date}</p>
                  <p className="mt-1 font-medium">₹{order.total}</p>

                  {isHighlighted && (
                    <p className="text-green-700 text-sm mt-1 font-semibold">
                      ✅ Recently placed order
                    </p>
                  )}
                </div>

                <div className="flex items-center gap-4">
                  <span
                    className={`px-4 py-1 rounded-full text-sm font-medium ${
                      order.status === "Delivered"
                        ? "bg-green-100 text-green-700"
                        : order.status === "Shipped"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {order.status}
                  </span>

                  <Link
                    to={`/orders/${order.id}`}
                    className="flex items-center gap-2 text-green-700 font-medium hover:underline"
                  >
                    <Truck size={18} />
                    Track
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
