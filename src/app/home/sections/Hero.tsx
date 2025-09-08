import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-20 max-w-screen-xl mx-auto px-6 pt-[40px] lg:pt-[70px] flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-12">
        {/* Konten Kiri */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">
            Lorem ipsum dolor sit amet coritysemntt{" "}
            <span className="text-primary">enyist birted</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            obcaecati dolores doloremque ex, accusamus nulla debitis laudantium
            quod omnis maxime!
          </p>
          <div className="flex gap-4">
            <a
              href="#pricinghome"
              className="px-6 py-3 bg-primary text-white rounded-full font-medium transition-all  hover:bg-[#446ec6] ease-in-out duration-300"
            >
              Get Started
            </a>
            <a
              href="#"
              className="px-6 py-3 border border-primary text-primary rounded-full font-medium transition-all duration-200 hover:bg-primary hover:text-white"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Gambar Kanan */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/img/illustration-1.webp"
            alt="Hero illustration"
            fill
            className="object-contain"
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
