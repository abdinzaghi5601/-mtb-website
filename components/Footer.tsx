import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0A0A0A] text-white border-t border-white/5">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-black mb-4">
              TBM <span className="text-[#CC0000]">Machines</span>
            </h3>
            <p className="text-gray-500 text-sm mb-4 leading-relaxed">
              Precision-engineered TBM spares and manufacturing services for India's tunneling and infrastructure sector.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/918985377589"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { href: "/", label: "Home" },
                { href: "/products", label: "Products" },
                { href: "/manufacturing", label: "Manufacturing" },
                { href: "/about", label: "About Us" },
                { href: "/market", label: "Market & Finance" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-500 hover:text-[#CC0000] transition-colors text-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=cutters" className="text-gray-500 hover:text-[#CC0000] transition-colors text-sm">
                  Disc Cutters
                </Link>
              </li>
              <li>
                <Link href="/products?category=bearings" className="text-gray-500 hover:text-[#CC0000] transition-colors text-sm">
                  Bearings
                </Link>
              </li>
              <li>
                <Link href="/products?category=spares" className="text-gray-500 hover:text-[#CC0000] transition-colors text-sm">
                  Spare Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-sm font-bold text-white mb-4 uppercase tracking-wider">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FiMapPin className="w-4 h-4 mt-1 text-[#CC0000] shrink-0" />
                <span className="text-gray-500 text-sm">
                  Plot No. 43, Dandumalkapur Industrial Park, Phase-II, Vikarabad District, Telangana – 501 503
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-4 h-4 text-[#CC0000]" />
                <a href="tel:+918985377589" className="text-gray-500 hover:text-white transition-colors text-sm">
                  +91 8985377589
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="w-4 h-4 text-[#CC0000]" />
                <a href="mailto:yaseen_md99@yahoo.com" className="text-gray-500 hover:text-white transition-colors text-sm">
                  yaseen_md99@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-600 text-sm">
            &copy; {new Date().getFullYear()} TBM Machines and Manufacturing Services. All rights reserved.
          </p>
          <p className="text-gray-700 text-xs">
            PAN: AAZFT3431B &middot; UDYAM: UDYAM-TS-02-0291161
          </p>
        </div>
      </div>
    </footer>
  );
}
