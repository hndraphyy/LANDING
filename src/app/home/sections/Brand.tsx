const Brand = () => {
  return (
    <section className="mt-20 px-6 lg:px-6 max-w-screen-xl mx-auto overflow-hidden">
      <div className="flex flex-col items-center justify-center text-center space-y-8 bg-primary rounded-xl pt-[60px] pb-[60px] lg:pt-[70px] lg:pb-[70px] px-10">
        <h1 className="text-white text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight max-w-3xl">
          Empowering Your Digital Presence with Style and Precision
        </h1>
        <p className="text-white text-base sm:text-lg lg:text-xl max-w-2xl leading-relaxed text-opacity-90">
          We craft beautiful, responsive, and user-focused experiences that
          elevate your brand and engage your audience. Let&apos;s build something
          amazing together.
        </p>
        <a
          className="text-primary font-semibold text-base px-8 py-3 bg-white rounded-full hover:bg-gray-100 transition duration-200 shadow-md"
          href="#"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default Brand;
