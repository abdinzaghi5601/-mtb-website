import { FiAward, FiUsers, FiTrendingUp, FiMapPin } from "react-icons/fi";
import { FaIndustry } from "react-icons/fa";

export default function AboutPage() {
  const stats = [
    { icon: <FiAward className="w-8 h-8" />, value: "522 Lakh", label: "Project Portfolio" },
    { icon: <FiUsers className="w-8 h-8" />, value: "50+", label: "Satisfied Clients" },
    { icon: <FaIndustry className="w-8 h-8" />, value: "10+", label: "Years Experience" },
    { icon: <FiTrendingUp className="w-8 h-8" />, value: "100%", label: "Quality Assured" },
  ];

  const values = [
    {
      title: "Quality First",
      description: "We maintain the highest standards in all our products, ensuring reliability and durability for your TBM operations.",
    },
    {
      title: "Customer Focus",
      description: "Your success is our priority. We work closely with clients to understand their needs and deliver tailored solutions.",
    },
    {
      title: "Innovation",
      description: "We continuously improve our products and services to meet the evolving demands of the tunneling industry.",
    },
    {
      title: "Reliability",
      description: "With a proven track record, we are the trusted partner for metro contractors, mining companies, and NHAI projects.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About MTB Spares</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Leading supplier of Tunnel Boring Machine spare parts and components in India, 
            serving major infrastructure projects across the country.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-primary-600 mb-4 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-4">
                MTB Spares has established itself as a trusted name in the Tunnel Boring Machine 
                spare parts industry in India. With a project portfolio worth 522 Lakh, we have 
                consistently delivered high-quality components to major infrastructure projects.
              </p>
              <p className="text-gray-700 mb-4">
                Our expertise spans across serving metro contractors, mining companies, and NHAI 
                projects. We understand the critical nature of TBM operations and the importance 
                of reliable spare parts in ensuring project timelines and operational efficiency.
              </p>
              <p className="text-gray-700">
                Based in Telangana, India, we are strategically positioned to serve clients across 
                the country. Our commitment to quality, timely delivery, and customer satisfaction 
                has made us the preferred choice for TBM equipment needs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-3 text-primary-700">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-16 bg-primary-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <FiMapPin className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Our Location</h2>
            <p className="text-lg text-gray-700 mb-2">
              Telangana, India
            </p>
            <p className="text-gray-600">
              Strategically located to serve clients across India with efficient logistics and 
              timely delivery of TBM spare parts and components.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

