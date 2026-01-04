import Hero from '../components/Hero'
import WellnessCategories from '../components/WellnessCategories'
import Products from '../components/Products'
import WhyChoose from '../components/WhyChoose'
import About from '../components/About'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <WellnessCategories />
      <Products />
      <WhyChoose />
      <About />
      <Contact />
    </div>
  )
}
