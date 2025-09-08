"use client";

import {
  FaComments,
  FaExchangeAlt,
  FaShieldAlt,
  FaPaperPlane,
} from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-white">
      <div className="mb-10 px-6">
        <h2 className="text-3xl font-bold text-gray-800 text-center">
          Lorem ipsum dolor sit.
        </h2>
        <p className="text-gray-500 mt-2 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam,
          eaque.
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Big Card */}
        <div className="col-span-full lg:col-span-2 bg-primary text-white p-10 sm:p-12 rounded-3xl relative overflow-hidden min-h-[280px]">
          <h3 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-base sm:text-lg opacity-90 max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae,
            tempora officiis. Aliquid explicabo commodi laborum.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="w-11 h-11 bg-white/20 rounded-full flex items-center justify-center text-sm font-semibold"
              >
                U{i + 1}
              </div>
            ))}
          </div>
        </div>

        {/* Card: Support */}
        <div className="bg-white border rounded-3xl p-6 sm:p-8 flex flex-col items-start shadow-sm">
          <FaComments className="text-primary text-4xl mb-5" />
          <p className="text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae
            totam velit molestias delectus corrupti doloribus ducimus, nemo
            odit? Aut tenetur incidunt exercitationem, earum alias modi
            accusantium velit nisi impedit ratione!
          </p>
        </div>

        {/* Card: Exchange */}
        <div className="bg-white border rounded-3xl p-6 sm:p-8 flex flex-col items-start shadow-sm">
          <FaExchangeAlt className="text-primary text-4xl mb-5" />
          <p className="text-base text-gray-700 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            nostrum recusandae, natus nihil eaque vel reiciendis error illo
            magni officiis!
          </p>
        </div>

        {/* CTA Card */}
        <div className="bg-white border rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 shadow-sm col-span-full lg:col-span-2">
          <div className="flex-1">
            <h4 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
              Lorem ipsum dolor sit amet
            </h4>
            <p className=" mb-6 sm:mb-8 text-base text-gray-600 max-w-xl leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
              vitae hendrerit tellus.
            </p>
            <a
              href="#"
              className=" px-6 py-3 bg-primary text-white rounded-full text-sm sm:text-base font-medium"
            >
              Lorem Action
            </a>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center text-sm text-gray-600">
              <FaShieldAlt className="text-2xl sm:text-3xl text-gray-800 mb-2" />
              Placeholder 1
            </div>
            <div className="flex flex-col items-center text-sm text-gray-600">
              <FaPaperPlane className="text-2xl sm:text-3xl text-gray-800 mb-2" />
              Placeholder 2
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
