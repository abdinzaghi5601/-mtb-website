"use client";

import { useState, useMemo, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { FiFilter, FiX } from "react-icons/fi";

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
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-100">
            Comprehensive range of TBM spare parts and components
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        {/* Filters */}
        <div className="mb-8">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="md:hidden flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-md mb-4"
          >
            <FiFilter className="w-5 h-5" />
            <span>Filters</span>
          </button>

          <div
            className={`${
              showFilters ? "block" : "hidden"
            } md:block bg-white p-6 rounded-lg shadow-md`}
          >
            <div className="flex flex-wrap gap-4">
              {categories.map((category) => (
                <button
                  key={category.value}
                  onClick={() => {
                    setSelectedCategory(category.value);
                    setShowFilters(false);
                  }}
                  className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                    selectedCategory === category.value
                      ? "bg-primary-600 text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div className="relative h-64 bg-gray-200">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-xs font-semibold text-primary-600 uppercase">
                  {product.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
                {product.price && (
                  <p className="text-primary-600 font-semibold">{product.price}</p>
                )}
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No products found in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function ProductsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading products...</p>
        </div>
      </div>
    }>
      <ProductsContent />
    </Suspense>
  );
}

