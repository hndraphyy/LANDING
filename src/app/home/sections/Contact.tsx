import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section className="px-6 bg-blue-100 py-24 sm:py-32 flex justify-center items-center flex-col text-center">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight text-gray-800 max-w-2xl">
        Contact Lorem ipsum dolor.
      </h1>
      <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed text-gray-700 max-w-xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, qui.
      </p>
      <a
        href="https://wa.me/6281234567890" // Ganti dengan nomor kamu
        target="_blank"
        rel="noopener noreferrer"
        className="mt-8 inline-flex items-center gap-3 bg-primary text-white text-base sm:text-lg md:text-xl px-6 sm:px-10 py-3 sm:py-4 rounded-full hover:bg-[#446ec6] transition duration-300"
      >
        <FaWhatsapp className="text-2xl sm:text-3xl" />
        Contact Via WhatsApp
      </a>
    </section>
  );
};

export default Contact;
