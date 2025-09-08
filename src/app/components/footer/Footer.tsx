import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 border-t">
      <div className="max-w-7xl mx-auto px-6 py-14 block lg:flex justify-between items-start gap-10">
        {/* Contact Info */}
        <div>
          <h2 className="text-2xl font-bold text-blue-900 mb-4">Landing</h2>
          <p className="text-base">A108 Adam Street New York, NY 535022</p>
          <p className="mt-3 text-base">
            <strong>Phone:</strong> +1 5589 55488 55
          </p>
          <p className="text-base">
            <strong>Email:</strong> info@mail.com
          </p>

          <div className="flex gap-3 mt-4">
            <a
              className="w-9 h-9 border rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
              href="#"
            >
              <FaXTwitter />
            </a>
            <a
              className="w-9 h-9 border rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
              href="#"
            >
              <FaFacebookF />
            </a>
            <a
              className="w-9 h-9 border rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
              href="#"
            >
              <FaInstagram />
            </a>
            <a
              className="w-9 h-9 border rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-100 transition"
              href="#"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        <div className="block lg:flex justify-end items-start gap-20">
          {/* Useful Links */}
          <div className="pt-10 lg:pt-0">
            <h4 className="font-bold text-blue-900 mb-3">Useful Links</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About us</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="#">Terms of service</Link>
              </li>
              <li>
                <Link href="#">Privacy policy</Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div className="pt-10 lg:pt-0">
            <h4 className="font-bold text-blue-900 mb-3">Our Services</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li>Web Design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>

          {/* Nobis illum */}
          <div className="pt-10 lg:pt-0">
            <h4 className="font-bold text-blue-900 mb-3">Nobis illum</h4>
            <ul className="space-y-2 text-base text-gray-600">
              <li>Ipsam</li>
              <li>Laudantium dolorum</li>
              <li>Dinera</li>
              <li>Trodelas</li>
              <li>Flexo</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center text-base text-gray-500 py-4 border-t">
        © Copyright <strong className="text-blue-900">Landing</strong>. All
        Rights Reserved
        <a
          href="https://themewagon.com"
          className="text-blue-600 hover:underline"
        >
          <span className="pl-1"></span>ZXCVBNM
        </a>
      </div>
    </footer>
  );
};

export default Footer;
