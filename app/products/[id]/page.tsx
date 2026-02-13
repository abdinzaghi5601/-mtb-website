"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowLeft, FiDownload, FiZoomIn } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

interface Product {
  id: string;
  name: string;
  category: string;
  images: string[];
  description: string;
  specifications: { label: string; value: string }[];
  price?: string;
}

// Product data based on TBM industry standards
const productData: Record<string, Product> = {
  "1": {
    id: "1",
    name: "17-inch Disc Cutter (432mm)",
    category: "cutters",
    images: ["/images/products/disc-cutter-17.jpg", "/images/products/disc-cutter-17-side.jpg", "/images/products/disc-cutter-17-detail.jpg"],
    description: "High-performance disc cutter designed for medium to large Tunnel Boring Machine applications. Engineered with premium hardened steel (HRC 58-62) for exceptional durability and cutting efficiency in various ground conditions including soft ground, mixed face, and moderate rock formations.",
    specifications: [
      { label: "Diameter", value: "17 inches (432 mm)" },
      { label: "Material", value: "Hardened Steel (HRC 58-62)" },
      { label: "Weight", value: "Approx. 45-48 kg" },
      { label: "Bearing Type", value: "Double Row Tapered Roller" },
      { label: "Max Load Capacity", value: "250 kN" },
      { label: "Compatibility", value: "Various TBM Models (Herrenknecht, Robbins, etc.)" },
      { label: "Application", value: "Soft Ground, Mixed Face, Moderate Rock" },
      { label: "Warranty", value: "12 months or 10,000 hours" },
      { label: "Standards", value: "ISO 9001, CE Certified" },
    ],
    price: "On Request",
  },
  "2": {
    id: "2",
    name: "19-inch Disc Cutter (483mm)",
    category: "cutters",
    images: ["/images/products/disc-cutter-19.jpg", "/images/products/disc-cutter-19-side.jpg"],
    description: "Premium disc cutter specifically designed for hard rock tunneling applications. Features advanced cutting geometry, superior material composition (HRC 60-64), and optimized bearing system for optimal performance in challenging conditions including granite, basalt, and other hard rock formations.",
    specifications: [
      { label: "Diameter", value: "19 inches (483 mm)" },
      { label: "Material", value: "Premium Hardened Steel (HRC 60-64)" },
      { label: "Weight", value: "Approx. 58-62 kg" },
      { label: "Bearing Type", value: "Heavy-Duty Double Row Tapered Roller" },
      { label: "Max Load Capacity", value: "350 kN" },
      { label: "Compatibility", value: "Hard Rock TBM Models" },
      { label: "Application", value: "Hard Rock, Granite, Basalt, Quartzite" },
      { label: "Warranty", value: "12 months or 8,000 hours" },
      { label: "Standards", value: "ISO 9001, CE Certified" },
    ],
    price: "On Request",
  },
  "3": {
    id: "3",
    name: "TBM Main Bearing Assembly",
    category: "bearings",
    images: ["/images/products/main-bearing.jpg", "/images/products/main-bearing-assembly.jpg"],
    description: "Heavy-duty main bearing engineered for TBM cutterhead assembly. Designed to withstand extreme loads, high torque, and harsh tunneling conditions with superior reliability. Includes complete assembly with seals and mounting hardware.",
    specifications: [
      { label: "Type", value: "Main Bearing Assembly" },
      { label: "Bearing Type", value: "Large Diameter Slewing Bearing" },
      { label: "Load Capacity", value: "Dynamic: 15,000 kN, Static: 25,000 kN" },
      { label: "Material", value: "Premium Bearing Steel (SAE 52100)" },
      { label: "Seal Type", value: "Multi-Lip Seals with Grease Lubrication" },
      { label: "Application", value: "TBM Cutterhead (6m - 12m diameter)" },
      { label: "Operating Temperature", value: "-20°C to +80°C" },
      { label: "Warranty", value: "18 months or 15,000 hours" },
      { label: "Standards", value: "ISO 9001, DIN 628-1" },
    ],
    price: "On Request",
  },
  "4": {
    id: "4",
    name: "Thrust Bearing System",
    category: "bearings",
    images: ["/images/products/thrust-bearing.jpg"],
    description: "Precision thrust bearing for TBM propulsion systems. Ensures smooth and reliable operation under high thrust loads with advanced sealing technology. Designed for continuous operation in demanding tunneling environments.",
    specifications: [
      { label: "Type", value: "Thrust Bearing System" },
      { label: "Bearing Type", value: "Cylindrical Roller Thrust Bearing" },
      { label: "Load Capacity", value: "Dynamic: 8,000 kN, Static: 12,000 kN" },
      { label: "Material", value: "High-Grade Bearing Steel (SAE 52100)" },
      { label: "Seal Type", value: "Labyrinth Seals with Oil Lubrication" },
      { label: "Application", value: "TBM Propulsion System" },
      { label: "Operating Speed", value: "Up to 5 RPM" },
      { label: "Warranty", value: "18 months or 15,000 hours" },
      { label: "Standards", value: "ISO 9001, DIN 616" },
    ],
    price: "On Request",
  },
  "5": {
    id: "5",
    name: "Cutter Ring Replacement",
    category: "spares",
    images: ["/images/products/cutter-ring.jpg", "/images/products/cutter-ring-installed.jpg"],
    description: "Replacement cutter ring for disc cutter maintenance. Precision manufactured for perfect fit and optimal performance. Compatible with 17\" and 19\" disc cutters. Made from hardened steel with superior wear resistance.",
    specifications: [
      { label: "Compatibility", value: "17\" & 19\" Disc Cutters" },
      { label: "Material", value: "Hardened Steel (HRC 58-62)" },
      { label: "Finish", value: "Precision Machined, Heat Treated" },
      { label: "Thickness", value: "25-30 mm" },
      { label: "Application", value: "Disc Cutter Maintenance & Replacement" },
      { label: "Installation", value: "Press Fit with Locking Mechanism" },
      { label: "Warranty", value: "6 months or 5,000 hours" },
      { label: "Standards", value: "ISO 9001" },
    ],
    price: "On Request",
  },
  "6": {
    id: "6",
    name: "Bearing Seal Kit",
    category: "spares",
    images: ["/images/products/seal-kit.jpg"],
    description: "Complete seal kit for TBM bearing protection. Includes all necessary seals, gaskets, and O-rings for comprehensive protection against contamination and wear. Compatible with main bearings and thrust bearings.",
    specifications: [
      { label: "Components", value: "Seals, Gaskets, O-rings, Backup Rings" },
      { label: "Material", value: "Premium Rubber (NBR/FKM) & Synthetic Compounds" },
      { label: "Temperature Range", value: "-30°C to +120°C" },
      { label: "Compatibility", value: "Various TBM Models & Bearing Types" },
      { label: "Application", value: "Main Bearing & Thrust Bearing Protection" },
      { label: "Seal Type", value: "Multi-Lip Seals, Labyrinth Seals" },
      { label: "Warranty", value: "12 months" },
      { label: "Standards", value: "ISO 9001, DIN 3760" },
    ],
    price: "On Request",
  },
  "7": {
    id: "7",
    name: "Cutter Block Assembly",
    category: "spares",
    images: ["/images/products/cutter-block.jpg"],
    description: "Complete cutter block assembly with integrated disc cutter. Ready-to-install unit for quick replacement and reduced downtime in TBM operations. Includes cutter, block, bearings, and seals pre-assembled.",
    specifications: [
      { label: "Type", value: "Complete Cutter Block Assembly" },
      { label: "Cutter Size", value: "17\" or 19\" Disc Cutter" },
      { label: "Block Material", value: "Forged Steel" },
      { label: "Bearing", value: "Double Row Tapered Roller Bearing" },
      { label: "Weight", value: "Approx. 55-65 kg (depending on cutter size)" },
      { label: "Application", value: "Quick Replacement in TBM Cutterhead" },
      { label: "Installation", value: "Direct Mount, Pre-Lubricated" },
      { label: "Warranty", value: "12 months or 10,000 hours" },
    ],
    price: "On Request",
  },
  "8": {
    id: "8",
    name: "Gripper Shoe Pad",
    category: "spares",
    images: ["/images/products/gripper-pad.jpg"],
    description: "Heavy-duty gripper shoe pad for TBM thrust system. Provides excellent grip and stability during tunneling operations with enhanced durability. Replaceable pad design for cost-effective maintenance.",
    specifications: [
      { label: "Type", value: "Gripper Shoe Pad" },
      { label: "Material", value: "Hardened Steel with Tungsten Carbide Inserts" },
      { label: "Hardness", value: "HRC 55-60" },
      { label: "Dimensions", value: "Various sizes (customizable)" },
      { label: "Application", value: "TBM Gripper System" },
      { label: "Grip Force", value: "Up to 20,000 kN" },
      { label: "Warranty", value: "6 months or 5,000 hours" },
      { label: "Standards", value: "ISO 9001" },
    ],
    price: "On Request",
  },
  "9": {
    id: "9",
    name: "Screw Conveyor Blade",
    category: "spares",
    images: ["/images/products/conveyor-blade.jpg"],
    description: "High-wear resistant screw conveyor blade for muck removal systems. Engineered for extended service life in abrasive tunneling conditions. Available in various pitches and diameters.",
    specifications: [
      { label: "Type", value: "Screw Conveyor Blade" },
      { label: "Material", value: "Hardox 450 / AR400 Steel" },
      { label: "Thickness", value: "12-20 mm (depending on application)" },
      { label: "Pitch", value: "Various (customizable)" },
      { label: "Diameter", value: "600mm - 1200mm" },
      { label: "Application", value: "TBM Muck Removal System" },
      { label: "Wear Resistance", value: "3-5x Standard Steel" },
      { label: "Warranty", value: "6 months or 3,000 hours" },
    ],
    price: "On Request",
  },
};

export default function ProductDetailPage({ params }: { params: { id: string } }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const product = productData[params.id];

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="text-primary-600 hover:underline">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-primary-600 mb-6"
        >
          <FiArrowLeft />
          Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div>
            <div className="relative bg-white rounded-lg shadow-md overflow-hidden mb-4">
              <div className="relative h-96 bg-gray-200">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-contain cursor-zoom-in"
                  onClick={() => setIsZoomed(!isZoomed)}
                />
                {isZoomed && (
                  <div
                    className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
                    onClick={() => setIsZoomed(false)}
                  >
                    <Image
                      src={product.images[selectedImage]}
                      alt={product.name}
                      width={1200}
                      height={800}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                )}
              </div>
            </div>
            {product.images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative h-20 bg-gray-200 rounded overflow-hidden border-2 ${
                      selectedImage === index ? "border-primary-600" : "border-transparent"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${product.name} view ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div>
            <div className="bg-white rounded-lg shadow-md p-8">
              <span className="text-xs font-semibold text-primary-600 uppercase">
                {product.category}
              </span>
              <h1 className="text-3xl font-bold mt-2 mb-4">{product.name}</h1>
              <p className="text-gray-600 mb-6">{product.description}</p>

              {product.price && (
                <div className="mb-6">
                  <span className="text-2xl font-bold text-primary-600">{product.price}</span>
                </div>
              )}

              {/* Specifications */}
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-4">Specifications</h2>
                <div className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-200">
                      <span className="text-gray-600 font-medium">{spec.label}:</span>
                      <span className="text-gray-900">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Link
                  href="/contact"
                  className="w-full bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  Request Quote
                </Link>
                <a
                  href="https://wa.me/918985377589"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors inline-flex items-center justify-center gap-2"
                >
                  <FaWhatsapp className="w-5 h-5" />
                  WhatsApp Inquiry
                </a>
                <button className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors inline-flex items-center justify-center gap-2">
                  <FiDownload className="w-5 h-5" />
                  Download Spec Sheet
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

