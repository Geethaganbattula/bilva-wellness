import { useRef, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

/* ================== CATEGORIES ================== */
const categories = [
  "Women’s Wellness",
  "Skin Wellness",
  "Pain Reliever",
  "Immunity",
  "Digestive",
  "Diabetic",
  "Blood Purifier",
];

/* ================== FULL DATA WITH 7 CARDS EACH ================== */
const data: Record<string, any[]> = {
  "Women’s Wellness": [
    {
      title: "Hormonal Balance Naturally",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e",
      content:
        "Hormonal balance is essential for women’s health. Ayurveda focuses on balancing doshas through proper diet, routine, and stress control. Regular sleep, herbal support like Shatavari, yoga, and mindful living help maintain hormonal stability naturally.",
    },
    {
      title: "Menstrual Wellness Care",
      image: "https://images.unsplash.com/photo-1599058917765-3f7cfed5a5ef",
      content:
        "Menstrual discomfort arises due to Vata and Kapha imbalance. Ayurveda recommends warm foods, rest, hydration, gentle yoga poses like Child’s Pose, and herbs like Ashoka. Avoid cold foods and stress for smoother cycles.",
    },
    {
      title: "PCOS Lifestyle Management",
      image: "https://images.unsplash.com/photo-1580281658629-6f56b69f6a1c",
      content:
        "PCOS can be managed holistically in Ayurveda by improving metabolism, reducing Kapha, and balancing hormones. Include cinnamon, fenugreek, regular exercise, stress reduction, and a low-glycemic diet for long-term relief.",
    },
    {
      title: "Pregnancy Wellness",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2",
      content:
        "Ayurveda supports pregnancy with nourishing foods like milk, ghee, almonds, and saffron. Gentle yoga, meditation, positive emotions, and monthly massages promote healthy development of mother and baby.",
    },
    {
      title: "Postnatal Recovery",
      image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74",
      content:
        "Postnatal care restores strength through abdominal binding, warm oil massages, nutrient-rich soups, and complete rest. Ayurvedic herbs like Dashmool help rebuild tissues and balance Vata after delivery.",
    },
    {
      title: "Menopause Support",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      content:
        "Menopause is a natural transition. Cooling foods like coconut, pomegranate, aloe vera, yoga, and herbs like Shatavari and Licorice ease hot flashes, mood swings, and support emotional well-being.",
    },
    {
      title: "Women’s Mental Wellness",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      content:
        "Mental wellness improves emotional stability. Daily meditation, Brahmi tea, moonlit walks, journaling, and spending time in nature help reduce anxiety and promote inner peace.",
    },
  ],

  "Skin Wellness": [
    {
      title: "Daily Ayurvedic Face Care",
      image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9",
      content:
        "Gentle cleansing with gram flour or ubtan, rose water toning, and kumkumadi oil massage ensure glowing skin. Ayurveda emphasizes internal balance through proper digestion and hydration.",
    },
    {
      title: "Ayurvedic Acne Care",
      image: "https://images.unsplash.com/photo-1600180758890-6b94519a8ba6",
      content:
        "Acne is caused by excess Pitta and toxins. Neem face packs, turmeric, clean anti-inflammatory diet, adequate sleep, and stress reduction help clear skin naturally without harsh chemicals.",
    },
    {
      title: "Natural Glow Tips",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      content:
        "Inner health reflects on skin. Drink warm water with lemon, eat fresh seasonal fruits, practice pranayama, and get morning sunlight for natural radiance and even tone.",
    },
    {
      title: "Summer Skin Care",
      image: "https://images.unsplash.com/photo-1526045612212-70caf35c14df",
      content:
        "Protect skin in summer with cooling aloe vera gel, sandalwood paste, coconut oil, and light cotton clothing. Stay hydrated and avoid direct sun between 10 AM - 4 PM.",
    },
    {
      title: "Winter Skin Care",
      image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2",
      content:
        "Prevent dryness with daily sesame oil massage (abhyanga), warm herbal baths, ghee-rich diet, and moisturizing with natural balms made from beeswax and herbs.",
    },
    {
      title: "Pigmentation Care",
      image: "https://images.unsplash.com/photo-1556228720-195a672e8a03",
      content:
        "Reduce dark spots with regular detox using Triphala, applying saffron-milk paste, sun protection, and consuming antioxidant-rich foods like amla and berries.",
    },
    {
      title: "Oily Skin Management",
      image: "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07",
      content:
        "Control excess oil with multani mitti packs, mint-toned water, light diet avoiding fried foods, and herbs like manjistha for internal purification.",
    },
  ],

  "Pain Reliever": [
    {
      title: "Back Pain Relief",
      image: "https://images.unsplash.com/photo-1606202763024-1c39c31d30d4",
      content:
        "Strengthen back with daily warm sesame oil massage, gentle yoga like Cat-Cow and Cobra pose, proper posture, and herbs like Dashmool for natural relief.",
    },
    {
      title: "Joint Pain Care",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
      content:
        "Nourish joints with ghee, turmeric milk, gentle movement, and herbal oils like Mahanarayan. Avoid cold foods and overexertion for lasting comfort.",
    },
    {
      title: "Neck Pain Relief",
      image: "https://images.unsplash.com/photo-1609902726285-00668009f004",
      content:
        "Relieve neck strain with slow neck rotations, warm compress, ergonomic posture while working, and applying Balashwagandha oil before sleep.",
    },
    {
      title: "Knee Pain Support",
      image: "https://images.unsplash.com/photo-1607962837359-5e7e89f86776",
      content:
        "Strengthen knees with leg raises, cycling, and applying warm castor oil packs. Include anti-inflammatory herbs like Guggulu and Shallaki.",
    },
    {
      title: "Muscle Stiffness",
      image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61",
      content:
        "Improve circulation with daily dry brushing followed by warm oil massage. Practice gentle stretching and drink ginger tea for flexibility.",
    },
    {
      title: "Yoga for Pain Relief",
      image: "https://images.unsplash.com/photo-1594737625785-c5c1c86a9b4f",
      content:
        "Specific asanas like Child’s Pose, Bridge Pose, and Legs-Up-The-Wall relax muscles, reduce inflammation, and promote natural healing.",
    },
    {
      title: "Sciatica Care",
      image: "https://images.unsplash.com/photo-1606756790138-261d2b21cd75",
      content:
        "Ease sciatica with Pigeon Pose, warm sesame oil massage along the leg, rest, and anti-Vata herbs like Ashwagandha and Nirgundi.",
    },
  ],

  "Immunity": [
    {
      title: "Daily Immunity Routine",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      content:
        "Build strong immunity with consistent routine: early sleep, morning sunlight, balanced meals, and daily exercise. Avoid irregular habits.",
    },
    {
      title: "Herbal Immunity Boost",
      image: "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
      content:
        "Strengthen immunity naturally with daily intake of Tulsi, Giloy, Amla, Turmeric, and Ginger. These herbs enhance Ojas – the vital essence.",
    },
    {
      title: "Yoga for Immunity",
      image: "https://images.unsplash.com/photo-1552058544-f2b08422138a",
      content:
        "Regular practice of Suryanamaskar, Kapalbhati, and Anulom Vilom improves respiratory health, circulation, and immune response.",
    },
    {
      title: "Diet for Strong Immunity",
      image: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe",
      content:
        "Include fresh fruits, vegetables, whole grains, nuts, and homemade ghee. Avoid processed, cold, and leftover foods.",
    },
    {
      title: "Sleep & Immunity",
      image: "https://images.unsplash.com/photo-1520206183501-b80df61043c2",
      content:
        "Deep sleep between 10 PM - 6 AM repairs immune cells. Create a calm bedtime routine with warm milk and meditation.",
    },
    {
      title: "Stress Management",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      content:
        "Chronic stress weakens immunity. Practice daily meditation, deep breathing, and spend time in nature to restore balance.",
    },
    {
      title: "Seasonal Immunity Care",
      image: "https://images.unsplash.com/photo-1605296867304-46d5465a13f1",
      content:
        "Adapt diet and routine with seasons. Use warming spices in winter, cooling foods in summer to maintain strong immunity year-round.",
    },
  ],

  "Digestive": [
    {
      title: "Improve Digestion Naturally",
      image: "https://images.unsplash.com/photo-1540420773420-3366772f4999",
      content:
        "Strong Agni (digestive fire) is key. Eat warm, freshly cooked meals at regular times. Chew slowly and avoid distractions while eating.",
    },
    {
      title: "Gas & Bloating Relief",
      image: "https://images.unsplash.com/photo-1621887348744-6b0444f6a3d8",
      content:
        "Sip warm water with cumin, fennel, and ajwain throughout the day. Practice Vajrasana after meals and avoid heavy late-night eating.",
    },
    {
      title: "Constipation Management",
      image: "https://images.unsplash.com/photo-1606788075761-07f0f5c36c0c",
      content:
        "Drink warm water first thing in morning, include fiber-rich foods, take Triphala at night, and practice gentle abdominal massage.",
    },
    {
      title: "Acidity Control",
      image: "https://images.unsplash.com/photo-1589307004393-06d2f6f5a9f6",
      content:
        "Avoid spicy, sour, and fried foods. Drink coconut water, eat cooling fruits like banana, and practice Sheetali pranayama.",
    },
    {
      title: "Gut Detox Routine",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
      content:
        "Weekly light fasting with khichdi, warm water detox, and resting the digestive system helps remove accumulated toxins (Ama).",
    },
    {
      title: "Ayurvedic Herbs for Digestion",
      image: "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
      content:
        "Triphala, Hingvastak, Trikatu, and fresh ginger support healthy digestion, absorption, and regular elimination.",
    },
    {
      title: "IBS Support Care",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d3",
      content:
        "Calm the gut with buttermilk with cumin, light warm meals, stress-relieving yoga, and avoiding triggers like caffeine.",
    },
  ],

  "Diabetic": [
    {
      title: "Ayurvedic Diabetes Management",
      image: "https://images.unsplash.com/photo-1582719478181-2c8c7f7bfb04",
      content:
        "Ayurveda manages diabetes by correcting metabolism and reducing Kapha. Lifestyle discipline, bitter herbs, and exercise are key.",
    },
    {
      title: "Sugar Level Control Naturally",
      image: "https://images.unsplash.com/photo-1586015559306-8b4c2b2cda30",
      content:
        "Maintain consistent meal timings, portion control, daily walking, and stress management to stabilize blood glucose levels.",
    },
    {
      title: "Diet for Diabetics",
      image: "https://images.unsplash.com/photo-1498837167922-ddd27525d352",
      content:
        "Focus on low-glycemic foods: barley, millets, green vegetables, bitter gourd, and fiber-rich lentils. Avoid refined carbs and sweets.",
    },
    {
      title: "Herbs for Sugar Control",
      image: "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
      content:
        "Bitter gourd juice, fenugreek seeds, jamun seeds, vijaysar, and guduchi naturally help regulate blood sugar.",
    },
    {
      title: "Exercise & Diabetes",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
      content:
        "Daily brisk walking, yoga asanas like Paschimottanasana, and strength training improve insulin sensitivity.",
    },
    {
      title: "Stress & Diabetes Link",
      image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773",
      content:
        "Stress raises blood sugar. Daily meditation, deep breathing, and calming music help maintain stable levels.",
    },
    {
      title: "Prevent Diabetic Complications",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d3",
      content:
        "Regular foot care, eye check-ups, kidney support with Punarnava, and nerve nourishment with Ashwagandha prevent long-term issues.",
    },
  ],

  "Blood Purifier": [
    {
      title: "Blood Detox Ayurveda",
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883",
      content:
        "Pure blood ensures healthy skin and vitality. Regular detox with neem, manjistha, and seasonal cleansing removes toxins effectively.",
    },
    {
      title: "Skin Health & Blood Purification",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef",
      content:
        "Clear skin begins with clean blood. Herbs like neem and sariva purify blood, reducing acne, rashes, and dullness.",
    },
    {
      title: "Herbs for Blood Cleansing",
      image: "https://images.unsplash.com/photo-1615484477201-9f4953340fab",
      content:
        "Neem, Manjistha, Turmeric, Giloy, and Sariva are powerful blood purifiers that support liver function and skin glow.",
    },
    {
      title: "Liver & Blood Health",
      image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267d3",
      content:
        "A healthy liver filters blood efficiently. Support it with bitter foods, avoiding alcohol, fried foods, and late nights.",
    },
    {
      title: "Toxin Removal Routine",
      image: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91",
      content:
        "Daily practices like tongue scraping, oil pulling, warm water sipping, and herbal teas gradually eliminate toxins.",
    },
    {
      title: "Blood Circulation Improvement",
      image: "https://images.unsplash.com/photo-1599058917212-d750089bc07d",
      content:
        "Daily dry brushing, yoga inversions, walking, and warm oil massage enhance circulation and oxygen delivery.",
    },
    {
      title: "Ayurvedic Blood Balance",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b",
      content:
        "Balanced doshas maintain pure blood. Regular seasonal routines and mindful eating prevent toxin accumulation.",
    },
  ],
};

/* ================== COMPONENT ================== */
export default function Ayubot() {
  const [activeCategory, setActiveCategory] = useState("Women’s Wellness");
  const [activeArticle, setActiveArticle] = useState<any>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({
      left: dir === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-700 to-emerald-600 mb-4">
            Ayubot
          </h1>
          <p className="text-xl text-green-700 font-medium">
            Your Daily Ayurvedic Wellness Guide
          </p>
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat);
                setActiveArticle(null);
              }}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white"
                  : "bg-white text-green-800 hover:bg-green-50 border border-green-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Scroll Controls */}
        <div className="flex justify-end mb-6 gap-3">
          <button
            onClick={() => scroll("left")}
            className="p-4 rounded-full bg-white/90 backdrop-blur shadow-xl hover:shadow-2xl transition-all"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-7 h-7 text-green-700" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="p-4 rounded-full bg-white/90 backdrop-blur shadow-xl hover:shadow-2xl transition-all"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-7 h-7 text-green-700" />
          </button>
        </div>

        {/* Wellness Cards */}
        <div
          ref={scrollRef}
          className="flex gap-8 overflow-x-auto pb-10 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {data[activeCategory]?.map((item, i) => (
            <div
              key={i}
              onClick={() => setActiveArticle(item)}
              className="min-w-[320px] snap-start cursor-pointer group"
            >
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-4">
                <div className="relative overflow-hidden h-60">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-800"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-white font-medium text-sm">Click to read more</p>
                  </div>
                </div>
                <div className="p-7">
                  <h3 className="text-xl font-bold text-green-800 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <div className="mt-5 flex items-center text-emerald-600 font-semibold">
                    <span>Discover Ayurvedic Wisdom</span>
                    <ChevronRight className="w-6 h-6 ml-2 transform group-hover:translate-x-3 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {activeArticle && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 p-6 animate-fadeIn">
            <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[92vh] overflow-y-auto relative animate-slideUp">
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 p-3 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors z-10"
              >
                <X className="w-7 h-7 text-gray-700" />
              </button>

              <div className="h-96 relative overflow-hidden rounded-t-3xl">
                <img
                  src={activeArticle.image}
                  alt={activeArticle.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
                <h2 className="absolute bottom-10 left-10 right-10 text-4xl font-bold text-white drop-shadow-2xl leading-tight">
                  {activeArticle.title}
                </h2>
              </div>

              <div className="p-10 pt-14">
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {activeArticle.content}
                </p>
                <div className="mt-12 text-center border-t pt-8">
                  <p className="text-gray-500 italic text-sm">
                    Embrace the ancient wisdom of Ayurveda for modern wellness 🌿
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animations */}
      <style >{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn { animation: fadeIn 0.4s ease-out; }
        .animate-slideUp { animation: slideUp 0.5s ease-out; }
        .scrollbar-hide::-webkit-scrollbar { display: none; }
      `}</style>
    </div>
  );
}