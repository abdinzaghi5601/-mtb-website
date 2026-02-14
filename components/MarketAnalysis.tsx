"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MARKET_STATS = [
  { value: "$7.8B", label: "Global TBM Market (2023)", sub: "Growing at 5.2% CAGR" },
  { value: "$12.3B", label: "Projected by 2030",        sub: "Driven by Asia infrastructure" },
  { value: "45%",    label: "Asia-Pacific Share",        sub: "India & China leading growth" },
  { value: "₹11T",   label: "NIP Budget (India)",        sub: "National Infrastructure Pipeline" },
];

const INDIA_DEMAND = [
  {
    title: "Metro Rail Expansion",
    desc: "India's metro rail network is expanding to 50+ cities. Over 800 km of metro tunnels are under construction or planned, requiring continuous supply of TBM spares, cutter discs, and consumables.",
    icon: "🚇",
    demand: "High",
  },
  {
    title: "Highway & Road Tunnels",
    desc: "National Highways Authority of India (NHAI) has planned 300+ km of road tunnels across mountain regions, particularly in Jammu & Kashmir, Himachal Pradesh, Uttarakhand, and the Northeast.",
    icon: "🛣️",
    demand: "High",
  },
  {
    title: "Water Supply Tunnels",
    desc: "Large-scale urban water supply and sewage tunnel projects in major Indian cities — Mumbai, Bengaluru, Delhi, Hyderabad — driving demand for EPB TBM components.",
    icon: "💧",
    demand: "High",
  },
  {
    title: "Mining Sector",
    desc: "Underground mining projects across coal, iron ore, and mineral sectors are increasingly adopting TBM technology for horizontal tunnels and ventilation shafts.",
    icon: "⛏️",
    demand: "Moderate",
  },
  {
    title: "Railway & High-Speed Rail",
    desc: "Indian Railways and RVNL projects including dedicated freight corridors and high-speed rail tunnels under the NIP require sustained TBM spare parts supply.",
    icon: "🚆",
    demand: "High",
  },
  {
    title: "Micro-Tunnelling (MTBM)",
    desc: "Rapid urbanisation driving underground utility installation — gas, water, telecom, sewerage — using micro-tunnelling boring machines ranging from Ø600 mm to Ø3,000 mm.",
    icon: "🔩",
    demand: "Growing",
  },
];

const COMPETITORS_VS = [
  { factor: "Product Range",       tbm: "Comprehensive TBM spares & MTBM components", imported: "Full TBMs only", domestic: "Limited range" },
  { factor: "Lead Time",           tbm: "2–4 weeks",                                   imported: "6–24 months",    domestic: "4–8 weeks" },
  { factor: "Cost",                tbm: "Competitive (₹ pricing)",                     imported: "Very High",      domestic: "Medium" },
  { factor: "Customisation",       tbm: "High — made to drawing",                      imported: "OEM standard",   domestic: "Limited" },
  { factor: "After-sale Support",  tbm: "Direct from manufacturer",                    imported: "Distant",        domestic: "Varies" },
  { factor: "Location Advantage",  tbm: "Dandumalkapur, Telangana — central India",    imported: "Overseas",       domestic: "Scattered" },
];

const TARGET_CUSTOMERS = [
  { seg: "TBM Contractors",  ex: "HCC, ITDCEM, Afcons, L&T, TATA Projects",    potential: "Very High" },
  { seg: "Metro Authorities", ex: "DMRC, MMRC, HMRL, BMRCL, CMRL",             potential: "Very High" },
  { seg: "NHAI / RVNL",      ex: "Road & Railway tunnel project contractors",   potential: "High" },
  { seg: "OEMs & Agents",    ex: "Herrenknecht, Robbins, CRCHI distributors",   potential: "High" },
  { seg: "Mining Companies", ex: "NMDC, Coal India subsidiaries",               potential: "Moderate" },
  { seg: "MTBM Operators",   ex: "Urban utility installation contractors",      potential: "Growing" },
];

const demandColor: Record<string, string> = {
  "High":     "bg-emerald-100 text-emerald-800 border-emerald-300",
  "Moderate": "bg-amber-100   text-amber-800  border-amber-300",
  "Growing":  "bg-blue-100    text-blue-800   border-blue-300",
};

const potentialColor: Record<string, string> = {
  "Very High": "bg-[#CC0000]/10 text-[#CC0000] border-[#CC0000]/30",
  "High":      "bg-orange-100   text-orange-800 border-orange-300",
  "Moderate":  "bg-amber-100    text-amber-800  border-amber-300",
  "Growing":   "bg-blue-100     text-blue-800   border-blue-300",
};

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

export default function MarketAnalysis() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="market" ref={ref} className="bg-white py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <SectionLabel>Market Analysis</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Riding India's<br />
            <span className="text-[#CC0000]">Infrastructure Boom</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            The TBM spares market in India is set for exponential growth, driven by national
            infrastructure programmes, metro rail expansion, and a government push to localise
            tunneling component manufacturing.
          </p>
        </motion.div>

        {/* global stats */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {MARKET_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.45, delay: 0.1 + i * 0.07 }}
              className="bg-[#0A0A0A] rounded-2xl p-5 text-center hover:bg-[#CC0000] group transition-colors duration-300"
            >
              <div className="text-2xl md:text-3xl font-black text-[#CC0000] group-hover:text-white mb-1 transition-colors">{s.value}</div>
              <div className="text-white text-xs font-semibold mb-1">{s.label}</div>
              <div className="text-gray-500 group-hover:text-white/70 text-xs transition-colors">{s.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* India demand sectors */}
        <motion.div {...fadeUp(0.15)} className="mb-16">
          <div className="text-center mb-10">
            <SectionLabel>Demand Drivers</SectionLabel>
            <h3 className="text-2xl font-black text-gray-900">India Market Opportunity</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {INDIA_DEMAND.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.2 + i * 0.07 }}
                className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#CC0000]/30 transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-3">
                  <span className="text-3xl">{d.icon}</span>
                  <span className={`text-xs font-bold px-2 py-1 rounded-full border ${demandColor[d.demand]}`}>{d.demand}</span>
                </div>
                <h4 className="font-black text-gray-900 mb-2 group-hover:text-[#CC0000] transition-colors">{d.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* competitive comparison */}
        <motion.div {...fadeUp(0.25)} className="mb-16">
          <div className="text-center mb-10">
            <SectionLabel>Competitive Advantage</SectionLabel>
            <h3 className="text-2xl font-black text-gray-900">TBM Machines vs Alternatives</h3>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0A0A0A]">
                  <th className="text-left px-5 py-3 text-white text-xs font-semibold">Factor</th>
                  <th className="text-left px-5 py-3 text-[#CC0000] text-xs font-semibold">✅ TBM Machines (Our Company)</th>
                  <th className="text-left px-5 py-3 text-blue-400 text-xs font-semibold">🌐 Imported Spares</th>
                  <th className="text-left px-5 py-3 text-gray-400 text-xs font-semibold">🏭 Other Domestic</th>
                </tr>
              </thead>
              <tbody>
                {COMPETITORS_VS.map((row, i) => (
                  <tr key={row.factor} className={`border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                    <td className="px-5 py-3 font-bold text-gray-700 whitespace-nowrap">{row.factor}</td>
                    <td className="px-5 py-3 text-gray-700 text-xs">{row.tbm}</td>
                    <td className="px-5 py-3 text-gray-500 text-xs">{row.imported}</td>
                    <td className="px-5 py-3 text-gray-400 text-xs">{row.domestic}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* target customers */}
        <motion.div {...fadeUp(0.35)}>
          <div className="text-center mb-10">
            <SectionLabel>Target Market</SectionLabel>
            <h3 className="text-2xl font-black text-gray-900">Key Customer Segments</h3>
          </div>
          <div className="bg-[#0A0A0A] rounded-3xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left px-6 py-4 text-gray-400 text-xs font-semibold">Segment</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-xs font-semibold">Key Players / Examples</th>
                  <th className="text-left px-6 py-4 text-gray-400 text-xs font-semibold">Potential</th>
                </tr>
              </thead>
              <tbody>
                {TARGET_CUSTOMERS.map((c, i) => (
                  <tr key={c.seg} className={`border-t border-white/5 hover:bg-white/5 transition-colors ${i % 2 === 0 ? "" : "bg-white/[0.02]"}`}>
                    <td className="px-6 py-4 font-bold text-white">{c.seg}</td>
                    <td className="px-6 py-4 text-gray-500 text-xs">{c.ex}</td>
                    <td className="px-6 py-4">
                      <span className={`text-xs font-bold px-2.5 py-1 rounded-full border ${potentialColor[c.potential]}`}>
                        {c.potential}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* make-in-india note */}
          <div className="mt-6 bg-gradient-to-r from-[#FF9933]/10 via-white/5 to-[#138808]/10 border border-white/10 rounded-2xl p-6 flex gap-4">
            <span className="text-3xl shrink-0">🇮🇳</span>
            <div>
              <p className="font-bold text-gray-800 mb-1">Make in India & Atmanirbhar Bharat Alignment</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                TBM Machines and Manufacturing Services directly aligns with the Government of India's Make in India initiative to localise
                TBM spare parts manufacturing. Currently, India imports 70–80% of TBM components from
                Germany, China, and Japan. TBM Machines is positioned to capture a growing share of this import
                substitution opportunity, with priority support available under MSME and Startup India schemes.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
