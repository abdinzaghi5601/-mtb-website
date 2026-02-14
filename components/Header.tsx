"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu, FiX, FiPhone, FiMail } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/manufacturing", label: "Manufacturing" },
    { href: "/about", label: "About Us" },
    { href: "/market", label: "Market & Finance" },
    { href: "/blog", label: "Blog" },
    { href: "/faq", label: "FAQ" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="bg-[#0A0A0A] sticky top-0 z-50 border-b border-white/5">
      {/* Top Bar */}
      <div className="bg-[#CC0000] text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+918985377589" className="flex items-center gap-1 hover:text-red-200 transition-colors">
              <FiPhone className="w-4 h-4" />
              <span>+91 8985377589</span>
            </a>
            <a href="mailto:yaseen_md99@yahoo.com" className="hidden sm:flex items-center gap-1 hover:text-red-200 transition-colors">
              <FiMail className="w-4 h-4" />
              <span>yaseen_md99@yahoo.com</span>
            </a>
          </div>
          <a
            href="https://wa.me/918985377589"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-red-200 transition-colors"
          >
            <FaWhatsapp className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo.jpeg"
              alt="TBM Machines and Manufacturing Services Logo"
              width={44}
              height={44}
              className="object-contain rounded-lg"
            />
            <span className="text-lg font-black text-white hidden sm:block">
              TBM <span className="text-[#CC0000]">Machines</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 hover:text-[#CC0000] font-medium text-sm transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-[#CC0000] text-white px-5 py-2 rounded-lg font-bold text-sm hover:bg-[#AA0000] transition-colors"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-300 hover:text-[#CC0000] font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block mt-4 bg-[#CC0000] text-white px-6 py-2 rounded-lg text-center font-bold hover:bg-[#AA0000] transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Quote
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
