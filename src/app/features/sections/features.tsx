"use client";
import Image from "next/image";

const features = [
  {
    title: "Real-time Collaboration",
    description:
      "Work together with your team in real time, no matter where you are. Stay connected and productive.",
    points: [
      "Live editing and commenting",
      "Instant file sharing",
      "Secure team access control",
    ],
    image: "/img/features-illustration-1.webp",
  },
  {
    title: "Simple User Interface",
    description:
      "Designed with simplicity in mind. Easily navigate, manage tasks, and get things done faster.",
    points: ["Minimalist design", "User-friendly experience", "Quick to learn"],
    image: "/img/features-illustration-2.webp",
  },
  {
    title: "Powerful Analytics",
    description:
      "Gain insights from data to make smarter decisions and track your progress easily.",
    points: [
      "Visual dashboards",
      "Customizable reports",
      "Real-time data monitoring",
    ],
    image: "/img/features-illustration-3.webp",
  },
  {
    title: "Secure Cloud Storage",
    description:
      "Keep your data safe and accessible from anywhere with our encrypted cloud system.",
    points: ["AES-256 encryption", "Auto-backup", "Role-based access"],
    image: "/img/features-illustration-1.webp",
  },
];

const FeaturesContent = () => {
  return (
    <div className="md:py-10 pb-20 md:pb-36">
      {features.map((feature, index) => {
        const isReverse = index % 2 !== 0;

        return (
          <section
            key={index}
            className=" max-w-screen-xl mx-auto px-6 pt-10 flex justify-center items-center"
          >
            <div
              className={`flex flex-col md:flex-row items-center gap-8 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Gambar */}
              <div className="w-full md:w-1/2">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  width={600}
                  height={400}
                  className="object-contain w-full h-auto"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
                />
              </div>

              {/* Konten */}
              <div className="w-full md:w-1/2 flex flex-col justify-center items-start">
                <h2 className="text-2xl lg:text-4xl font-semibold mb-4">
                  {feature.title}
                </h2>
                <p className="text-base text-gray-600 mb-6 font-light">
                  {feature.description}
                </p>
                <ul className="text-gray-600">
                  {feature.points.map((point, i) => (
                    <li key={i} className="mb-3 flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
};

export default FeaturesContent;
