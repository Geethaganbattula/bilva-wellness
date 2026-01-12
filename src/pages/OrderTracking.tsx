import { CheckCircle } from "lucide-react"

const steps = ["Placed", "Packed", "Shipped", "Delivered"]
const currentStep = 2 // backend later replace chestharu

export default function OrderTracking() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-green-700 mb-8">
        Order Tracking
      </h1>

      <div className="flex justify-between items-center">
        {steps.map((step, index) => (
          <div key={step} className="flex-1 text-center relative">
            <div
              className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center ${
                index <= currentStep
                  ? "bg-green-600 text-white"
                  : "bg-gray-200 text-gray-400"
              }`}
            >
              <CheckCircle size={18} />
            </div>

            <p className="mt-2 text-sm font-medium">{step}</p>

            {index !== steps.length - 1 && (
              <div
                className={`absolute top-5 left-1/2 w-full h-1 ${
                  index < currentStep ? "bg-green-600" : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
