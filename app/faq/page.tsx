"use client";

import { useState } from "react";
import Link from "next/link";
import { FiChevronDown, FiChevronUp, FiMessageCircle } from "react-icons/fi";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: "1",
    question: "What types of TBM spare parts do you supply?",
    answer: "We supply a comprehensive range of TBM spare parts including disc cutters (17-inch and 19-inch), main bearing assemblies, thrust bearing systems, cutter rings, seal kits, cutter block assemblies, gripper shoe pads, and screw conveyor blades. All our products meet international quality standards.",
    category: "Products",
  },
  {
    id: "2",
    question: "Do you provide custom TBM parts manufacturing?",
    answer: "Yes, we specialize in custom manufacturing of TBM spare parts according to your specific requirements and specifications. Our engineering team can work with your technical drawings to produce parts that meet your exact needs.",
    category: "Products",
  },
  {
    id: "3",
    question: "What is the typical delivery time for TBM spare parts?",
    answer: "Delivery times vary depending on the product and quantity ordered. Standard items typically ship within 7-10 business days, while custom-manufactured parts may take 3-4 weeks. We also offer expedited shipping for urgent requirements.",
    category: "Orders & Shipping",
  },
  {
    id: "4",
    question: "Are your products compliant with international standards?",
    answer: "Yes, all our TBM spare parts are manufactured in compliance with ISO standards and meet international quality requirements. We maintain strict quality control processes and provide certification documents with each order.",
    category: "Quality",
  },
  {
    id: "5",
    question: "Do you offer warranty on TBM spare parts?",
    answer: "Yes, we provide warranty coverage on all our products. The warranty period varies by product type - typically 12-24 months from the date of purchase. Full warranty details are provided with each product.",
    category: "Warranty & Support",
  },
  {
    id: "6",
    question: "Can you help with technical specifications and part selection?",
    answer: "Absolutely! Our technical team has extensive experience in TBM operations and can assist you in selecting the right parts for your machine and ground conditions. Contact us with your TBM model and requirements, and we'll recommend the best solutions.",
    category: "Technical Support",
  },
  {
    id: "7",
    question: "What payment methods do you accept?",
    answer: "We accept various payment methods including bank transfers, letters of credit (LC), and purchase orders from established companies. Payment terms can be discussed based on order size and business relationship.",
    category: "Orders & Shipping",
  },
  {
    id: "8",
    question: "Do you ship internationally?",
    answer: "Yes, we ship TBM spare parts internationally to projects worldwide. We handle all export documentation and work with reliable logistics partners to ensure safe and timely delivery.",
    category: "Orders & Shipping",
  },
  {
    id: "9",
    question: "How do I request a quote for TBM parts?",
    answer: "You can request a quote by filling out our contact form, calling us directly at +91 8985377589, or emailing yaseen_md99@yahoo.com. Please provide details about the parts needed, quantities, and your project timeline for an accurate quote.",
    category: "Orders & Shipping",
  },
  {
    id: "10",
    question: "Do you provide after-sales technical support?",
    answer: "Yes, we offer comprehensive after-sales support including installation guidance, maintenance recommendations, and troubleshooting assistance. Our technical team is available to support you throughout the product lifecycle.",
    category: "Technical Support",
  },
];

const categories = Array.from(new Set(faqs.map((faq) => faq.category)));

export default function FAQPage() {
  const [openId, setOpenId] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredFaqs =
    selectedCategory === "All"
      ? faqs
      : faqs.filter((faq) => faq.category === selectedCategory);

  const toggleFAQ = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-[#0A0A0A] text-white py-16">
        <div className="container mx-auto px-4">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">FAQ</span>
          <h1 className="text-4xl md:text-5xl font-black mb-4">
            Frequently Asked <span className="text-[#CC0000]">Questions</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl">
            Find answers to common questions about our TBM spare parts, ordering
            process, and services
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Category Filter */}
          <div className="mb-8">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setSelectedCategory("All")}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedCategory === "All"
                    ? "bg-[#CC0000] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                All Questions
              </button>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category
                      ? "bg-[#CC0000] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-4">
            {filteredFaqs.map((faq) => (
              <div
                key={faq.id}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex-1">
                    <span className="text-sm text-[#CC0000] font-bold">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-800 mt-1">
                      {faq.question}
                    </h3>
                  </div>
                  {openId === faq.id ? (
                    <FiChevronUp className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                  ) : (
                    <FiChevronDown className="w-6 h-6 text-gray-400 flex-shrink-0 ml-4" />
                  )}
                </button>
                {openId === faq.id && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="mt-12 bg-[#CC0000]/5 border border-[#CC0000]/20 rounded-2xl p-8 text-center">
            <FiMessageCircle className="w-12 h-12 text-[#CC0000] mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Still Have Questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-[#CC0000] text-white px-6 py-3 rounded-lg hover:bg-[#AA0000] transition-colors font-bold"
              >
                Contact Us
              </Link>
              <a
                href="tel:+918985377589"
                className="bg-white text-[#CC0000] border-2 border-[#CC0000] px-6 py-3 rounded-lg hover:bg-red-50 transition-colors font-bold"
              >
                Call +91 8985377589
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
