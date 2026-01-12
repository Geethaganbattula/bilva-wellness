import { useEffect, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

// IMAGES
import hero1 from "../assets/hero.jpg"
import hero2 from "../assets/hero1.png"
import hero3 from "../assets/hero2.jpg"
import hero4 from "../assets/hero3.jpg"

// SLIDES CONTENT (NO AYURVEDIC WORDS)
const slides = [
  {
    image: hero1,
    title: "Bilva Wellness",
    subtitle: "Natural & Herbal Health Care",
    desc:
      "Bilva Wellness brings you nature-inspired herbal solutions designed to support balance, vitality, and everyday well-being.",
  },
  {
    image: hero2,
    title: "Pure Herbal Care",
    subtitle: "Rooted in Nature",
    desc:
      "Crafted with carefully selected herbs, our products support immunity, digestion, skin health, and daily wellness naturally.",
  },
  {
    image: hero3,
    title: "Healthy Living",
    subtitle: "Balance • Strength • Harmony",
    desc:
      "From daily essentials to targeted herbal support, Bilva Wellness helps you maintain a healthy and active lifestyle.",
  },
  {
    image: hero4,
    title: "Naturally Better Health",
    subtitle: "Gentle • Safe • Effective",
    desc:
      "Our herbal formulations are made with care to be safe, effective, and suitable for modern everyday life.",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1))

  const nextSlide = () =>
    setCurrent((prev) => (prev + 1) % slides.length)

  return (
    <section className="relative w-full h-[85vh] overflow-hidden">

      {/* BACKGROUND IMAGE */}
      <img
        src={slides[current].image}
        alt="Bilva Wellness Herbal Background"
        className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 flex items-center h-full">
        <div className="max-w-6xl px-6 sm:px-12 text-white space-y-6">

          {/* BRAND TEXT */}
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-wide">
              {slides[current].title}
            </h1>

            <div className="w-32 h-[2px] bg-green-500" />

            <p className="uppercase tracking-widest text-sm text-green-200">
              {slides[current].subtitle}
            </p>
          </div>

          {/* DESCRIPTION */}
          <p className="max-w-2xl text-lg sm:text-xl text-white/80 leading-relaxed">
            {slides[current].desc}
          </p>

          {/* CTA – ONLY PRODUCTS */}
          <div className="pt-4">
            <Link
              to="/products"
              className="inline-block px-10 py-4 bg-green-600 hover:bg-green-700
                         rounded-xl text-lg font-semibold transition"
            >
              Explore Products
            </Link>
          </div>
        </div>
      </div>

      {/* LEFT ARROW */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        title="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                   bg-white/70 hover:bg-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      {/* RIGHT ARROW */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        title="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                   bg-white/70 hover:bg-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* DOTS */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
            className={`w-3 h-3 rounded-full transition ${
              current === index ? "bg-green-500" : "bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  )
}
