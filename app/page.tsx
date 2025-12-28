import Link from "next/link";
import Image from "next/image";
import { FiArrowRight, FiCheckCircle, FiTrendingUp, FiShield, FiZap } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Home() {
  const features = [
    {
      icon: <FiShield className="w-8 h-8" />,
      title: "Quality Assured",
      description: "ISO certified components meeting international standards",
    },
    {
      icon: <FiZap className="w-8 h-8" />,
      title: "Fast Delivery",
      description: "Quick turnaround for urgent project requirements",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "Proven Track Record",
      description: "522 Lakh project portfolio with satisfied clients",
    },
  ];

  const clients = [
    "Metro Contractors",
    "Mining Companies",
    "NHAI Projects",
    "Infrastructure Developers",
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium TBM Spare Parts & Components
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              Trusted supplier for Tunnel Boring Machine equipment across India. 
              Serving metro contractors, mining companies, and infrastructure projects.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center gap-2"
              >
                View Products <FiArrowRight />
              </Link>
              <a
                href="https://wa.me/918985377589"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-primary-600 mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Preview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Product Range</h2>
            <p className="text-gray-600 text-lg">
              Comprehensive solutions for all your TBM requirements
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Disc Cutters</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">TBM Disc Cutters</h3>
                <p className="text-gray-600 mb-4">
                  High-quality disc cutters for various TBM applications. Available in multiple sizes and specifications.
                </p>
                <Link
                  href="/products?category=cutters"
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
                >
                  View Details <FiArrowRight />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Bearings</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">TBM Bearings</h3>
                <p className="text-gray-600 mb-4">
                  Precision bearings engineered for heavy-duty TBM operations. Long-lasting and reliable.
                </p>
                <Link
                  href="/products?category=bearings"
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
                >
                  View Details <FiArrowRight />
                </Link>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center">
                <span className="text-white text-4xl font-bold">Spare Parts</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">TBM Spare Parts</h3>
                <p className="text-gray-600 mb-4">
                  Complete range of spare parts and components for maintenance and replacement needs.
                </p>
                <Link
                  href="/products?category=spares"
                  className="text-primary-600 font-semibold hover:text-primary-700 inline-flex items-center gap-2"
                >
                  View Details <FiArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose MTB Spares?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">SEO Optimized for More Customers</h3>
                  <p className="text-gray-600">
                    Our website ranks high on Google for searches like "TBM spare parts India" and 
                    "Tunnel boring machine disc cutters", bringing you more business inquiries.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Professional B2B Image</h3>
                  <p className="text-gray-600">
                    Enterprise-level website that matches the quality of your 522 Lakh project portfolio.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Fast Loading with Heavy Images</h3>
                  <p className="text-gray-600">
                    Optimized for speed even with 50+ product photos and technical specifications.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <FiCheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold text-lg mb-2">Serving Major Clients</h3>
                  <p className="text-gray-600">
                    Trusted by metro contractors, mining companies, and NHAI for TBM equipment needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            Contact us today for a quote on TBM spare parts and components
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-primary-700 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Request Quote <FiArrowRight />
            </Link>
            <a
              href="https://wa.me/918985377589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
            >
              <FaWhatsapp className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

