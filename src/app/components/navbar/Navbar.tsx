 "use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Features", href: "/features" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  // Disable scroll body kalau menu mobile buka
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 left-0 w-full z-[100] bg-white shadow-sm transition-all duration-300">
      <div className="flex items-center justify-between px-6 py-4 max-w-screen-xl mx-auto w-full">
        {/* Logo */}
        <div className="text-[30px] font-bold font-outfit text-primary">
          <Link href="/">Landing</Link>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "px-4 py-2 hover:text-primary transition",
                pathname === item.href && "text-primary font-semibold"
              )}
            >
              {item.label}
            </Link>
          ))}

          <a
            href="https://wa.me/"
            target="_blank"
            className="px-5 py-2 bg-primary text-white text-[19px] rounded-full hover:bg-[#446ec6] ease-in-out duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden text-primary z-[110]"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center gap-8 text-xl font-medium lg:hidden transition-opacity duration-300 ease-in-out",
          menuOpen
            ? "opacity-100 pointer-events-auto visible z-[105]"
            : "opacity-0 pointer-events-none invisible -z-10"
        )}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={clsx(
              "hover:text-primary transition",
              pathname === item.href && "text-primary font-semibold"
            )}
          >
            {item.label}
          </Link>
        ))}

        <a
          href="#"
          className="px-7 py-2 bg-primary text-white rounded-full hover:bg-[#446ec6] ease-in-out duration-300"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
