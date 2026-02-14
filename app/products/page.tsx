"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FiFilter } from "react-icons/fi";
import ProductsCatalog from "@/components/ProductsCatalog";

interface Product {
  id: string;
  name: string;
  category: "cutters" | "bearings" | "spares";
  image: string;
  description: string;
  price?: string;
}

const products: Product[] = [
  {
    id: "1",
    name: "17-inch Disc Cutter (432mm)",
    category: "cutters",
    image: "/images/products/disc-cutter-17.jpg",
    description: "High-performance disc cutter for medium to large TBM applications. Engineered with premium hardened steel for exceptional durability and cutting efficiency in various ground conditions.",
    price: "On Request",
  },
  {
    id: "2",
    name: "19-inch Disc Cutter (483mm)",
    category: "cutters",
    image: "/images/products/disc-cutter-19.jpg",
    description: "Premium disc cutter specifically designed for hard rock tunneling applications. Features advanced cutting geometry and superior material composition for optimal performance in challenging conditions.",
    price: "On Request",
  },
  {
    id: "3",
    name: "TBM Main Bearing Assembly",
    category: "bearings",
    image: "/images/products/main-bearing.jpg",
    description: "Heavy-duty main bearing engineered for TBM cutterhead assembly. Designed to withstand extreme loads, high torque, and harsh tunneling conditions with superior reliability.",
    price: "On Request",
  },
  {
    id: "4",
    name: "Thrust Bearing System",
    category: "bearings",
    image: "/images/products/thrust-bearing.jpg",
    description: "Precision thrust bearing for TBM propulsion systems. Ensures smooth and reliable operation under high thrust loads with advanced sealing technology.",
    price: "On Request",
  },
  {
    id: "5",
    name: "Cutter Ring Replacement",
    category: "spares",
    image: "/images/products/cutter-ring.jpg",
    description: "Replacement cutter ring for disc cutter maintenance. Precision manufactured for perfect fit and optimal performance. Compatible with 17\" and 19\" disc cutters.",
    price: "On Request",
  },
  {
    id: "6",
    name: "Bearing Seal Kit",
    category: "spares",
    image: "/images/products/seal-kit.jpg",
    description: "Complete seal kit for TBM bearing protection. Includes all necessary seals, gaskets, and O-rings for comprehensive protection against contamination and wear.",
    price: "On Request",
  },
  {
    id: "7",
    name: "Cutter Block Assembly",
    category: "spares",
    image: "/images/products/cutter-block.jpg",
    description: "Complete cutter block assembly with integrated disc cutter. Ready-to-install unit for quick replacement and reduced downtime in TBM operations.",
    price: "On Request",
  },
  {
    id: "8",
    name: "Gripper Shoe Pad",
    category: "spares",
    image: "/images/products/gripper-pad.jpg",
    description: "Heavy-duty gripper shoe pad for TBM thrust system. Provides excellent grip and stability during tunneling operations with enhanced durability.",
    price: "On Request",
  },
  {
    id: "9",
    name: "Screw Conveyor Blade",
    category: "spares",
    image: "/images/products/conveyor-blade.jpg",
    description: "High-wear resistant screw conveyor blade for muck removal systems. Engineered for extended service life in abrasive tunneling conditions.",
    price: "On Request",
  },
];

function ProductsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") || "all";
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory);
  const [showFilters, setShowFilters] = useState(false);

  const categories = [
    { value: "all", label: "All Products" },
    { value: "cutters", label: "Disc Cutters" },
    { value: "bearings", label: "Bearings" },
    { value: "spares", label: "Spare Parts" },
  ];

  const filteredProducts = useMemo(() => {
    if (selectedCategory === "all") return products;
    return products.filter((product) => product.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <div className="min-h-screen">
      {/* DPR-based catalog */}
      <ProductsCatalog />

      {/* Existing product grid for detail page links */}
      <section className="bg-[#050505] py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
              Product Catalogue
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Browse Individual <span className="text-[#CC0000]">Products</span>
            </h2>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="md:hidden flex items-center gap-2 bg-[#111] border border-white/10 text-white px-4 py-2 rounded-xl mb-4"
            >
              <FiFilter className="w-5 h-5" />
              <span>Filters</span>
            </button>

            <div className={`${showFilters ? "block" : "hidden"} md:flex flex-wrap gap-3 justify-center`}>
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setShowFilters(false);
                  }}
                  className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                    selectedCategory === category.value
                      ? "bg-[#CC0000] text-white"
                      : "bg-[#111] text-gray-400 border border-white/10 hover:border-white/30"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.id}`}
                className="group bg-[#111] border border-white/5 rounded-2xl overflow-hidden hover:border-[#CC0000]/30 transition-all duration-300"
              >
                <div className="relative h-56 bg-[#0A0A0A]">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-bold text-[#CC0000] uppercase tracking-wider">
                    {product.category}
                  </span>
                  <h3 className="text-white font-bold text-lg mt-2 mb-2 group-hover:text-[#CC0000] transition-colors">
                    {product.name}
                  </h3>
                  <p className="text-gray-500 text-sm line-clamp-2 mb-3">{product.description}</p>
                  {product.price && (
                    <p className="text-[#CC0000] font-bold text-sm">{product.price}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No products found in this category.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#CC0000] mx-auto mb-4"></div>
            <p className="text-gray-500">Loading products...</p>
          </div>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}
