"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FiAward, FiTarget, FiEye, FiHeart } from "react-icons/fi";

const PROMOTERS = [
  {
    name: "Md. Yaseen Baba",
    role: "Managing Partner",
    qual: "MBA",
    exp: "17 Years",
    netWorth: "₹271 Lakhs",
    pan: "BFFPB9000L",
    share: "50%",
    desc: "Brings 17 years of rich experience in industrial operations, business management, and strategic planning. Oversees overall business development, financial planning, and operational management of the TBM spares manufacturing unit.",
    initial: "Y",
    color: "from-[#CC0000] to-[#8B0000]",
  },
  {
    name: "Abdur Rahman",
    role: "Partner",
    qual: "M. Pharm",
    exp: "3 Years",
    netWorth: "₹297 Lakhs",
    pan: "BASPA5824R",
    share: "50%",
    desc: "Qualified M. Pharm professional contributing to administrative management, procurement coordination, and operational support. His analytical approach and commitment to organisational development complement the company's long-term objectives.",
    initial: "A",
    color: "from-[#003366] to-[#001a33]",
  },
];

const MISSION_POINTS = [
  "Deliver high-quality TBM spares and components through advanced manufacturing systems and strict quality control.",
  "Build long-term partnerships with OEMs, contractors, and infrastructure companies by ensuring timely supply and superior performance.",
  "Continuously upgrade technical capabilities and adopt modern engineering practices for enhanced efficiency and product life.",
  "Create a safe, productive, and skill-oriented workplace that promotes innovation and craftsmanship.",
];

const CORE_VALUES = [
  { icon: <FiAward />, title: "Quality & Precision",         desc: "High dimensional accuracy, durability, and adherence to industry standards." },
  { icon: <FiTarget />, title: "Innovation & Technology",    desc: "Modern engineering tools, CNC-based systems, and advanced fabrication techniques." },
  { icon: <FiHeart />,  title: "Trust & Integrity",          desc: "Transparency, ethical manufacturing, and long-term customer relationships." },
  { icon: "🛡️",         title: "Safety & Responsibility",    desc: "Strict safety protocols and environmentally conscious manufacturing practices." },
  { icon: "🤝",         title: "Customer Commitment",        desc: "Tailored solutions for TBM spare parts, machinery, and assemblies." },
  { icon: "🌱",         title: "Teamwork & Skill Dev.",      desc: "Collaborative environment where employees grow through training and innovation." },
];

const LONG_TERM_GOALS = [
  "Establish TBM Machines and Manufacturing Services as a preferred supplier of TBM spares across India",
  "Expand product range to include complete TBM assemblies and specialised tunneling equipment",
  "Build R&D capability for developing high-performance, cost-effective components",
  "Scale up production capacity in alignment with national metro rail and tunneling project demand",
  "Achieve ISO certification for quality and process excellence",
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

export default function AboutCompany() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="about" ref={ref} className="bg-white py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── heading ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <SectionLabel>About Us</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Precision Engineering for<br />
            <span className="text-[#CC0000]">India's Tunneling Future</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-3xl mx-auto text-base leading-relaxed">
            TBM Machines and Manufacturing Services is a newly established partnership firm
            formed to supply precision-engineered TBM spares and machines to India's rapidly expanding
            metro rail, water tunnel, mining, and large-scale civil infrastructure sector.
          </p>
        </motion.div>

        {/* ── company identity strip ── */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {[
            { label: "Incorporated",       value: "17 Nov 2025" },
            { label: "PAN",                value: "AAZFT3431B" },
            { label: "UDYAM Reg.",         value: "UDYAM-TS-02-0291161" },
            { label: "Constitution",       value: "Partnership Firm" },
          ].map(item => (
            <div key={item.label} className="bg-gray-50 border border-gray-100 rounded-2xl p-5 text-center">
              <p className="text-xs text-gray-400 font-semibold tracking-widest uppercase mb-1">{item.label}</p>
              <p className="text-gray-900 font-black text-sm">{item.value}</p>
            </div>
          ))}
        </motion.div>

        {/* ── vision & mission ── */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <motion.div {...fadeUp(0.15)} className="bg-[#0A0A0A] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#CC0000]/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-5">
              <FiEye className="text-[#CC0000] text-2xl shrink-0" />
              <h3 className="text-white font-black text-xl">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-sm">
              To become a <strong className="text-white">trusted and technologically advanced</strong> manufacturer
              of TBM spares and machinery in India, known for precision engineering, innovation, and reliability
              in supporting the nation's infrastructure development.
            </p>
          </motion.div>

          <motion.div {...fadeUp(0.2)} className="bg-[#CC0000] rounded-3xl p-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
            <div className="flex items-center gap-3 mb-5">
              <FiTarget className="text-white text-2xl shrink-0" />
              <h3 className="text-white font-black text-xl">Our Mission</h3>
            </div>
            <ul className="space-y-3">
              {MISSION_POINTS.map((pt, i) => (
                <li key={i} className="flex gap-2 text-red-100 text-sm leading-relaxed">
                  <span className="text-white font-bold shrink-0 mt-0.5">→</span>
                  {pt}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* ── promoters ── */}
        <motion.div {...fadeUp(0.25)} className="mb-20">
          <div className="text-center mb-12">
            <SectionLabel>Leadership</SectionLabel>
            <h3 className="text-3xl font-black text-gray-900">Promoters Profile</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {PROMOTERS.map((p, i) => (
              <motion.div
                key={p.name}
                initial={{ opacity: 0, x: i === 0 ? -30 : 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
                className="bg-gray-50 border border-gray-100 rounded-3xl overflow-hidden"
              >
                {/* header */}
                <div className={`bg-gradient-to-r ${p.color} p-6 flex items-center gap-4`}>
                  <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center text-white font-black text-2xl">
                    {p.initial}
                  </div>
                  <div>
                    <h4 className="text-white font-black text-lg">{p.name}</h4>
                    <p className="text-white/70 text-sm">{p.role} · {p.share} Equity</p>
                  </div>
                </div>
                {/* body */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-5">{p.desc}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {[
                      { label: "Qualification", value: p.qual },
                      { label: "Experience",    value: p.exp },
                      { label: "Net Worth",     value: p.netWorth },
                      { label: "Share",         value: p.share },
                    ].map(item => (
                      <div key={item.label} className="bg-white rounded-xl p-3 border border-gray-100">
                        <p className="text-xs text-gray-400 mb-0.5">{item.label}</p>
                        <p className="text-gray-900 font-bold text-sm">{item.value}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── core values ── */}
        <motion.div {...fadeUp(0.3)} className="mb-20">
          <div className="text-center mb-12">
            <SectionLabel>Core Values</SectionLabel>
            <h3 className="text-3xl font-black text-gray-900">What Drives Us</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CORE_VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.35 + i * 0.07 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#CC0000]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-2xl mb-3 group-hover:scale-110 transition-transform duration-200">
                  {typeof v.icon === "string" ? v.icon : <span className="text-[#CC0000]">{v.icon}</span>}
                </div>
                <h4 className="font-black text-gray-900 mb-2 group-hover:text-[#CC0000] transition-colors">{v.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ── long-term goals ── */}
        <motion.div {...fadeUp(0.4)} className="bg-[#0A0A0A] rounded-3xl p-8 md:p-12">
          <div className="text-center mb-8">
            <SectionLabel>Long-Term Goals</SectionLabel>
            <h3 className="text-2xl font-black text-white">Our Road Ahead</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {LONG_TERM_GOALS.map((goal, i) => (
              <div key={i} className="flex gap-3 bg-white/5 rounded-xl p-4 border border-white/5 hover:border-[#CC0000]/30 transition-colors">
                <span className="text-[#CC0000] font-black text-lg shrink-0">0{i + 1}</span>
                <p className="text-gray-300 text-sm leading-relaxed">{goal}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
