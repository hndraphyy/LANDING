// components/FeatureCards.tsx

import { FaAward, FaCheckCircle, FaSun, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    icon: <FaAward className="text-amber-500 w-8 h-8" />,
    title: "Corporis voluptates",
    description:
      "Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip",
    bg: "bg-orange-50",
  },
  {
    icon: <FaCheckCircle className="text-blue-500 w-8 h-8" />,
    title: "Explicabo consectetur",
    description:
      "Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore",
    bg: "bg-blue-50",
  },
  {
    icon: <FaSun className="text-green-500 w-8 h-8" />,
    title: "Ullamco laboris",
    description:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt",
    bg: "bg-green-50",
  },
  {
    icon: <FaShieldAlt className="text-rose-500 w-8 h-8" />,
    title: "Labore consequatur",
    description:
      "Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere",
    bg: "bg-rose-50",
  },
];

export default function FeatureCards() {
  return (
      <div className="rounded-2xl max-w-screen-xl mx-auto px-6 mt-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 ${feature.bg} shadow-sm hover:shadow-md transition`}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
