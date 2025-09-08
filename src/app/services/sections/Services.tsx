import { FaCode, FaMobileAlt, FaCloud, FaShieldAlt } from "react-icons/fa";

const services = [
  {
    icon: <FaCode className="text-blue-600 text-3xl" />,
    title: "Web Development",
    description:
      "We build modern, fast, and responsive websites tailored for businesses and personal projects.",
  },
  {
    icon: <FaMobileAlt className="text-blue-600 text-3xl" />,
    title: "Mobile App Development",
    description:
      "We craft high-performance mobile apps for both Android and iOS using the latest technologies.",
  },
  {
    icon: <FaCloud className="text-blue-600 text-3xl" />,
    title: "Cloud Integration",
    description:
      "Seamless cloud integration and deployment to enhance scalability and system efficiency.",
  },
  {
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    title: "Cybersecurity",
    description:
      "We help protect your data and infrastructure with robust security solutions and regular audits.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Our Services</h2>
          <p className="text-gray-500 mt-2">
            We provide reliable and scalable digital solutions for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-white rounded-xl p-6 shadow hover:shadow-md transition-shadow duration-300"
            >
              <div className="p-4 bg-blue-100 rounded-xl">{service.icon}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {service.title}
                </h3>
                <p className="text-gray-600 mt-2">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
