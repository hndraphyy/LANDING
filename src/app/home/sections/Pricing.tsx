"use client";

import { FaRocket, FaStar, FaFireAlt } from "react-icons/fa";
import { useEffect, useState } from "react";

const pricingPlans = [
  {
    icon: <FaRocket className="text-white text-3xl" />,
    title: "Starter",
    price: "$19/mo",
    benefits: ["1 Project", "Basic Support", "Community Access"],
    color: "bg-blue-500",
  },
  {
    icon: <FaStar className="text-white text-3xl" />,
    title: "Basic",
    price: "$29/mo",
    benefits: ["3 Projects", "Priority Support", "Analytics Dashboard"],
    color: "bg-indigo-500",
  },
  {
    icon: <FaFireAlt className="text-white text-3xl" />,
    title: "Pro",
    price: "$49/mo",
    benefits: ["10 Projects", "Team Access", "API Integration"],
    color: "bg-purple-500",
  },
];

export default function PricingSection() {
  const [visiblePlans, setVisiblePlans] = useState(pricingPlans);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;

      if (width < 768) {
        setVisiblePlans(pricingPlans.slice(0, 1)); // mobile: 1 item
      } else if (width < 1024) {
        setVisiblePlans(pricingPlans.slice(0, 2)); // tablet/md: 2 item
      } else {
        setVisiblePlans(pricingPlans); // laptop ke atas: semua
      }
    }

    handleResize(); // Set awal saat load
    window.addEventListener("resize", handleResize); // Update saat resize

    return () => window.removeEventListener("resize", handleResize); // Cleanup
  }, []);

  return (
    <section className="py-20 mt-20 relative" id="pricinghome">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Our Pricing Plans</h2>
        <p className="text-gray-500 mt-2 mb-12">
          Choose a plan that fits your needs. Cancel anytime.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visiblePlans.map((plan, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div
                className={`w-12 h-12 flex items-center justify-center rounded-full ${plan.color} mb-4 mx-auto`}
              >
                {plan.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800">
                {plan.title}
              </h3>
              <p className="text-2xl font-bold text-blue-600 mt-2">
                {plan.price}
              </p>
              <ul className="mt-4 text-sm text-gray-600 space-y-2">
                {plan.benefits.map((benefit, i) => (
                  <li
                    key={i}
                    className="flex items-center justify-center gap-2"
                  >
                    <span className="text-blue-500">✓</span> {benefit}
                  </li>
                ))}
              </ul>
              <button className="mt-6 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Gradient overlay */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[340px] bg-gradient-to-t from-white via-white/70 to-white/0 z-10"></div>

      {/* CTA Button */}
      <div className="absolute bottom-0 left-0 right-0 w-full h-[340px] bg-gradient-to-t from-white via-white/70 to-white/0 z-20 flex justify-center items-center">
        <a
          href="#"
          className="px-10 py-4 bg-primary text-white mt-20 rounded-full hover:bg-[#446ec6] ease-in-out duration-300"
        >
          Visit Pricing
        </a>
      </div>
    </section>
  );
}
