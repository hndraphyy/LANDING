"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const testimonials = [
  {
    name: "Sarah L.",
    role: "Founder, GreenTech",
    message:
      "This team is incredibly professional and efficient. Our new platform launched on time and exceeded expectations.",
    image: "/img/testimonials/testimonials-1.jpg",
  },
  {
    name: "David R.",
    role: "CTO, Finwise",
    message:
      "We loved their clean code and attention to UX. Support has been great, and performance is top notch.",
    image: "/img/testimonials/testimonials-2.jpg",
  },
  {
    name: "Amanda K.",
    role: "Product Manager, StartupX",
    message:
      "Their communication was excellent and they delivered exactly what we needed. Highly recommended!",
    image: "/img/testimonials/testimonials-3.jpg",
  },
  {
    name: "David R.",
    role: "CTO, Finwise",
    message:
      "We loved their clean code and attention to UX. Support has been great, and performance is top notch.",
    image: "/img/testimonials/testimonials-2.jpg",
  },
];

export default function Testimoni() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            What Our Clients Say
          </h2>
          <p className="text-gray-500 mt-2 text-center">
            Real stories from satisfied partners.
          </p>
        </div>

        <Swiper
          modules={[Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="p-6 bg-gray-50 rounded-xl shadow hover:shadow-md h-full mb-10">
                <p className="text-gray-600 italic mb-4">“{t.message}”</p>
                <div className="flex items-center gap-4 mt-auto">
                  <Image
                    src={t.image}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <p className="text-gray-800 font-semibold">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
