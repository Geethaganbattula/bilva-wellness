import { Gift, UserPlus, ShoppingBag, Star, Share2, Percent } from "lucide-react"

export default function Rewards() {
  return (
    <div className="w-full bg-[#f9faf7] text-gray-800">
      {/* HERO SECTION */}
      <section className="py-16 text-center bg-gradient-to-r from-green-100 to-lime-100">
        <h1 className="text-4xl font-bold text-green-800">
          Bilva Wellness Rewards
        </h1>
        <p className="mt-4 text-lg text-gray-700">
          Earn Bilva Points on every purchase and redeem exclusive rewards 🌿
        </p>

        <div className="mt-6 flex justify-center gap-4">
          <button className="px-6 py-3 bg-green-700 text-white rounded-lg hover:bg-green-800">
            Sign Up
          </button>
          <button className="px-6 py-3 border border-green-700 text-green-700 rounded-lg hover:bg-green-50">
            Sign In
          </button>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto py-16 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12">
          How It Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="p-6 bg-white rounded-xl shadow">
            <UserPlus className="mx-auto text-green-700" size={40} />
            <h3 className="mt-4 font-semibold text-xl">Sign Up</h3>
            <p className="text-gray-600 mt-2">
              Create your Bilva Wellness account
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <ShoppingBag className="mx-auto text-green-700" size={40} />
            <h3 className="mt-4 font-semibold text-xl">Earn Points</h3>
            <p className="text-gray-600 mt-2">
              Earn Bilva Points on every order
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow">
            <Gift className="mx-auto text-green-700" size={40} />
            <h3 className="mt-4 font-semibold text-xl">Redeem Rewards</h3>
            <p className="text-gray-600 mt-2">
              Use points for instant discounts
            </p>
          </div>
        </div>
      </section>

      {/* WAYS TO EARN */}
      <section className="bg-white py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Ways To Earn
        </h2>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 px-6">
          <RewardCard
            icon={<UserPlus size={28} />}
            title="Signup Bonus"
            desc="Get 25 Bilva Points instantly"
          />

          <RewardCard
            icon={<ShoppingBag size={28} />}
            title="Order Placed"
            desc="Earn 3% of your order value as points"
          />

          <RewardCard
            icon={<Star size={28} />}
            title="Write a Review"
            desc="Get 25 points, 50 for image reviews"
          />

          <RewardCard
            icon={<Share2 size={28} />}
            title="Refer & Earn"
            desc="Get 100 points per successful referral"
          />
        </div>
      </section>

      {/* WAYS TO REDEEM */}
      <section className="bg-green-50 py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Ways To Redeem
        </h2>

        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow text-center">
          <Percent className="mx-auto text-green-700" size={42} />
          <h3 className="mt-4 text-xl font-semibold">
            1 Bilva Point = ₹1 Off
          </h3>
          <p className="mt-2 text-gray-600">
            Redeem up to 5% of cart value.  
            Maximum discount ₹100.  
            No minimum cart amount required.
          </p>
        </div>
      </section>

      {/* REFERRAL */}
      <section className="py-16">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Referral Program
        </h2>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 px-6">
          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="font-semibold text-xl">Your Friend Gets</h3>
            <p className="mt-3 text-green-700 font-bold text-2xl">
              ₹50 OFF Coupon
            </p>
          </div>

          <div className="p-6 bg-white rounded-xl shadow text-center">
            <h3 className="font-semibold text-xl">You Get</h3>
            <p className="mt-3 text-green-700 font-bold text-2xl">
              100 Bilva Points
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER CTA */}
      <section className="bg-green-700 py-12 text-center text-white">
        <h2 className="text-2xl font-semibold">
          Join Bilva Wellness Rewards Today 🌿
        </h2>
        <p className="mt-2 text-green-100">
          Start earning points and enjoy healthy savings
        </p>
      </section>
    </div>
  )
}

/* REUSABLE CARD */
function RewardCard({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode
  title: string
  desc: string
}) {
  return (
    <div className="p-6 border rounded-xl flex gap-4 items-start">
      <div className="text-green-700">{icon}</div>
      <div>
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="text-gray-600">{desc}</p>
      </div>
    </div>
  )
}
