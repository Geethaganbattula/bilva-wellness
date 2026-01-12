import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Products from "./components/Products";
import WellnessCategories from "./components/WellnessCategories";
import About from "./components/About";
import Contact from "./components/Contact";
import Ayobut from "./components/Ayubot";

import Login from "./auth/Login";
import Signup from "./auth/Signup";
import Profile from "./pages/Profile";
import Orders from "./pages/Orders";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout"; // ✅ ADD THIS
import ProtectedRoute from "./auth/ProtectedRoute";

export default function App() {
  return (
    <>
      <Navbar />

      <Routes>
        {/* PUBLIC */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route path="/ayobut" element={<Ayobut />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} /> {/* ✅ NEW */}
        <Route path="/wellness" element={<WellnessCategories />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />

        {/* PROTECTED */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/orders"
          element={
            <ProtectedRoute>
              <Orders />
            </ProtectedRoute>
          }
        />
      </Routes>

      <Footer />
    </>
  );
}