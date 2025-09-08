// components/Achievements.tsx

import { FaTrophy, FaBriefcase, FaChartLine, FaMedal } from "react-icons/fa";

const achievements = [
  {
    icon: <FaTrophy className="text-blue-500 text-2xl" />,
    title: "3x Won Awards",
    description: "Vestibulum ante ipsum",
  },
  {
    icon: <FaBriefcase className="text-blue-500 text-2xl" />,
    title: "6.5k Faucibus",
    description: "Nullam quis ante",
  },
  {
    icon: <FaChartLine className="text-blue-500 text-2xl" />,
    title: "80k Mauris",
    description: "Etiam sit amet orci",
  },
  {
    icon: <FaMedal className="text-blue-500 text-2xl" />,
    title: "6x Phasellus",
    description: "Vestibulum ante ipsum",
  },
];

export default function Achievements() {
  return (
    <div className="px-6 lg:px-0">
      <div className="bg-white rounded-2xl shadow-xl shadow-blue-100 p-6 md:p-10 max-w-7xl mx-auto mt-10 mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((item, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="bg-blue-50 p-3 rounded-full">{item.icon}</div>
              <div>
                <h4 className="text-lg font-semibold text-gray-800">
                  {item.title}
                </h4>
                <p className="text-gray-500 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
