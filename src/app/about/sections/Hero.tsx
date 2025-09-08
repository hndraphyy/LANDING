import Image from "next/image";

const Hero = () => {
  return (
    <section className="mt-20 max-w-screen-xl mx-auto px-6 py-[40px] lg:py-[70px] xl:py-[120px] flex justify-center items-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-5 lg:gap-8 xl:gap-12">
        {/* Konten Kiri */}
        <div className="flex flex-col justify-center items-start">
          <h1 className="text-4xl lg:text-6xl font-medium mb-4">
            Lorem ipsum sit about{" "}
            <span className="text-primary">amet coritysemntt</span>
          </h1>
          <p className="text-lg text-gray-600 mb-6 font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
            obcaecati dolores doloremque ex, accusamus nulla debitis laudantium
            quod omnis maxime!
          </p>
        </div>

        <div className="relative">
          {/* Gambar Kanan */}
          <div className="relative w-full h-[200px] md:h-[300px] lg:h-[340px] xl:h-[400px]  rounded-xl overflow-hidden">
            <Image
              src="/img/about-5.webp"
              alt="Hero illustration"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
