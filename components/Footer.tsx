import Link from "next/link";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { FaWhatsapp, FaLinkedin, FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">MTB Spares</h3>
            <p className="text-gray-400 mb-4">
              Leading supplier of Tunnel Boring Machine spare parts and components in India.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/918985377589"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="WhatsApp"
              >
                <FaWhatsapp size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/products?category=cutters" className="text-gray-400 hover:text-white transition-colors">
                  Disc Cutters
                </Link>
              </li>
              <li>
                <Link href="/products?category=bearings" className="text-gray-400 hover:text-white transition-colors">
                  Bearings
                </Link>
              </li>
              <li>
                <Link href="/products?category=spares" className="text-gray-400 hover:text-white transition-colors">
                  Spare Parts
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <FiMapPin className="w-5 h-5 mt-1 text-primary-400" />
                <span className="text-gray-400">
                  Telangana, India
                </span>
              </li>
              <li className="flex items-center gap-2">
                <FiPhone className="w-5 h-5 text-primary-400" />
                <a href="tel:+918985377589" className="text-gray-400 hover:text-white transition-colors">
                  +91 8985377589
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FiMail className="w-5 h-5 text-primary-400" />
                <a href="mailto:yaseen_md99@yahoo.com" className="text-gray-400 hover:text-white transition-colors">
                  yaseen_md99@yahoo.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} MTB Spares. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

