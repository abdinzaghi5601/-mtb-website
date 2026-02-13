"use client";

import Link from "next/link";
import { FiCalendar, FiUser, FiArrowRight } from "react-icons/fi";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  category: string;
  image: string;
}

// Sample blog posts - replace with actual content
const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "Understanding TBM Disc Cutter Maintenance",
    excerpt: "Learn the best practices for maintaining disc cutters to ensure optimal performance and extended lifespan in tunnel boring operations.",
    date: "2025-01-15",
    author: "MTB Technical Team",
    category: "Maintenance",
    image: "/images/products/disc-cutter-17.jpg",
  },
  {
    id: "2",
    title: "Choosing the Right TBM Spare Parts",
    excerpt: "A comprehensive guide to selecting the appropriate spare parts for your tunnel boring machine based on ground conditions and project requirements.",
    date: "2025-01-10",
    author: "MD. Yaseen Baba",
    category: "Technical Guide",
    image: "/images/products/main-bearing.jpg",
  },
  {
    id: "3",
    title: "TBM Industry Trends in India 2025",
    excerpt: "Explore the latest trends and developments in the tunnel boring machine industry across India's metro rail and infrastructure projects.",
    date: "2025-01-05",
    author: "MTB Research",
    category: "Industry News",
    image: "/images/products/cutter-block.jpg",
  },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Blog & News</h1>
          <p className="text-xl text-primary-100 max-w-2xl">
            Stay updated with the latest insights, technical guides, and industry news
            from the TBM spare parts sector
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <div className="container mx-auto px-4 py-12">
        {blogPosts.length === 0 ? (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Coming Soon
            </h2>
            <p className="text-gray-600 mb-8">
              We're working on bringing you valuable content about TBM spare parts,
              maintenance guides, and industry insights. Check back soon!
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Contact Us for More Information
              <FiArrowRight />
            </Link>
          </div>
        ) : (
          <>
            {/* Featured Post */}
            <div className="mb-12">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="relative h-64 md:h-auto bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Featured Image
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                        {blogPosts[0].category}
                      </span>
                      <span className="text-gray-500 text-sm">Featured</span>
                    </div>
                    <h2 className="text-3xl font-bold mb-4 text-gray-800">
                      {blogPosts[0].title}
                    </h2>
                    <p className="text-gray-600 mb-6">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center gap-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center gap-2">
                        <FiCalendar className="w-4 h-4" />
                        <span>{new Date(blogPosts[0].date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FiUser className="w-4 h-4" />
                        <span>{blogPosts[0].author}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].id}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                    >
                      Read More
                      <FiArrowRight />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Blog Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.slice(1).map((post) => (
                <article
                  key={post.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="relative h-48 bg-gray-200">
                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                      Blog Image
                    </div>
                  </div>
                  <div className="p-6">
                    <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                    <h3 className="text-xl font-bold mt-4 mb-3 text-gray-800">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <FiCalendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <Link
                      href={`/blog/${post.id}`}
                      className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:text-primary-700"
                    >
                      Read More
                      <FiArrowRight />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Newsletter Section */}
      <section className="bg-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-gray-600 mb-8">
              Subscribe to our newsletter for the latest updates on TBM spare parts,
              maintenance tips, and industry news.
            </p>
            <form className="flex gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg hover:bg-primary-700 transition-colors font-semibold"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
