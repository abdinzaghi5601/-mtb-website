"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiArrowRight, FiShield, FiZap, FiTrendingUp, FiCheckCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

const FEATURES = [
  {
    icon: <FiShield className="w-7 h-7" />,
    title: "Precision Engineering",
    desc: "CNC-machined components with micron-level accuracy, heat-treated for maximum durability.",
  },
  {
    icon: <FiZap className="w-7 h-7" />,
    title: "2–4 Week Lead Time",
    desc: "Domestic manufacturing advantage — no 6-month waits for imported spares.",
  },
  {
    icon: <FiTrendingUp className="w-7 h-7" />,
    title: "₹522 Lakh Project",
    desc: "Fully funded manufacturing facility with CNC lathes, milling, grinding & heat treatment.",
  },
];

const PRODUCT_PREVIEW = [
  { title: "Cutter Discs", sizes: '8" – 19"', desc: "Single, Twin & Monoblock for all ground types", href: "/products" },
  { title: "Hydraulic Components", sizes: "All sizes", desc: "Cylinders, seals, couplings & bearings", href: "/products" },
  { title: "Shield & Conveyor Parts", sizes: "Custom", desc: "Wear plates, thrust pads, chain rollers", href: "/products" },
];

const STATS = [
  { value: "9", label: "Manufacturing Stages" },
  { value: "18+", label: "Direct Jobs Created" },
  { value: "75 HP", label: "Connected Power" },
  { value: "8,784", label: "Annual Unit Capacity" },
];

export default function Home() {
  return (
    <div>
      {/* ── Hero ── */}
      <section className="relative bg-[#0A0A0A] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#CC0000]/10 via-transparent to-[#003366]/10" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#CC0000]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />

        <div className="relative container mx-auto px-4 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-6">
              Precision TBM Spares — Made in India
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-6">
              World-Class TBM Spares.<br />
              <span className="text-[#CC0000]">Engineered in India.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-10 leading-relaxed">
              From cutter discs to hydraulic assemblies — precision-manufactured components
              for metro rail, highway tunnels, mining & water infrastructure projects across India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/products"
                className="bg-[#CC0000] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#AA0000] transition-colors inline-flex items-center justify-center gap-2"
              >
                Explore Products <FiArrowRight />
              </Link>
              <a
                href="https://wa.me/918985377589"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 text-white border border-white/20 px-8 py-4 rounded-xl font-bold hover:bg-white/20 transition-colors inline-flex items-center justify-center gap-2"
              >
                <FaWhatsapp className="w-5 h-5" />
                WhatsApp Enquiry
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── Stats Strip ── */}
      <section className="bg-[#CC0000]">
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {STATS.map(s => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-black text-white">{s.value}</div>
                <div className="text-red-200 text-xs font-semibold mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
              Why TBM Machines
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-gray-900">
              Built for India's <span className="text-[#CC0000]">Tunneling Future</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURES.map((f, i) => (
              <div
                key={i}
                className="bg-gray-50 border border-gray-100 rounded-2xl p-8 text-center hover:shadow-lg hover:border-[#CC0000]/20 transition-all duration-300"
              >
                <div className="text-[#CC0000] mb-4 flex justify-center">{f.icon}</div>
                <h3 className="text-xl font-black mb-3 text-gray-900">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Product Preview ── */}
      <section className="bg-[#0A0A0A] py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
              Product Range
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Comprehensive <span className="text-[#CC0000]">TBM Components</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {PRODUCT_PREVIEW.map((p, i) => (
              <Link
                key={i}
                href={p.href}
                className="group bg-[#111] border border-white/5 rounded-2xl p-8 hover:border-[#CC0000]/40 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-white font-black text-xl group-hover:text-[#CC0000] transition-colors">{p.title}</h3>
                  <span className="text-[#CC0000] font-bold text-sm bg-[#CC0000]/10 px-3 py-1 rounded-full">{p.sizes}</span>
                </div>
                <p className="text-gray-500 text-sm mb-4">{p.desc}</p>
                <span className="text-[#CC0000] text-sm font-bold inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                  View Details <FiArrowRight />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ── */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900">
                Why Choose <span className="text-[#CC0000]">TBM Machines?</span>
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { title: "Make in India Advantage", desc: "Domestic manufacturing eliminates 6–24 month import lead times. Components at competitive ₹ pricing." },
                { title: "Full Manufacturing In-House", desc: "CNC turning, milling, grinding, heat treatment & assembly — all under one roof." },
                { title: "Custom Engineering", desc: "Made-to-drawing components for Herrenknecht, Robbins, CRCHI & Terratec TBMs." },
                { title: "Serving India's Mega Projects", desc: "Metro rail, NHAI highway tunnels, water supply tunnels & mining infrastructure." },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <FiCheckCircle className="w-6 h-6 text-[#CC0000] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#CC0000] py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Ready to Source TBM Spares?
          </h2>
          <p className="text-red-100 text-lg mb-8 max-w-xl mx-auto">
            Get a quote for cutter discs, hydraulic parts, or custom components — delivered in 2–4 weeks.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-[#CC0000] px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition-colors inline-flex items-center justify-center gap-2"
            >
              Request Quote <FiArrowRight />
            </Link>
            <a
              href="https://wa.me/918985377589"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/20 text-white px-8 py-4 rounded-xl font-bold hover:bg-white/30 transition-colors inline-flex items-center justify-center gap-2"
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
