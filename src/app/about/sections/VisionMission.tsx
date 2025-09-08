// src/app/about/sections/VisionMission.tsx
import {
  FaEye,
  FaBullseye,
  FaUsers,
  FaCogs,
  FaHandshake,
} from "react-icons/fa";

const VisionMission = () => {
  return (
    <section className="py-16 ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Our Vision & Mission
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          We are committed to delivering innovative and sustainable digital
          solutions that drive progress and impact.
        </p>

        <div className="grid md:grid-cols-2 gap-10 text-left">
          {/* Vision */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FaEye className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Our Vision</h3>
            </div>
            <p className="text-gray-600">
              To become a leading provider of digital solutions that empower
              businesses and communities through technological innovation.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <FaBullseye className="text-primary text-2xl" />
              <h3 className="text-xl font-semibold">Our Mission</h3>
            </div>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start gap-3">
                <FaUsers className="mt-1 text-primary" />
                <span>
                  Build long-term relationships by delivering the best services
                  to our clients.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaCogs className="mt-1 text-primary" />
                <span>
                  Improve efficiency through scalable and customizable
                  solutions.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <FaHandshake className="mt-1 text-primary" />
                <span>
                  Foster strong teamwork and a results-driven work culture.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
