"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiFilter } from "react-icons/fi";

/* ── types ──────────────────────────────────────────────────────────────── */
type GroundType = "Soft Ground" | "Mixed Ground" | "Hard Rock" | "All";

interface CutterSpec {
  size: string;
  type: string;
  weight: string;
  bearing: string;
  geology: GroundType | string;
  position: string;
  mpa: string;
  material: string;
  feature?: string;
}

/* ── data from DPR ──────────────────────────────────────────────────────── */
const CUTTERS: CutterSpec[] = [
  { size: '19"', type: "Single Disk",                    weight: "—",    bearing: "High-quality 19\" type", geology: "Mixed Ground",       position: "Face / Gauge",   mpa: "Up to 350", material: "Hardened & Tempered Steel", },
  { size: '17"', type: "Twin Disk",                      weight: "—",    bearing: "High-quality 17\" type", geology: "Mixed Ground / Hard Rock", position: "Face / Gauge", mpa: "Up to 350", material: "High-Alloy Tool Steel", },
  { size: '17"', type: "Monoblock Double Disk",          weight: "—",    bearing: "High-quality 17\" type", geology: "Mixed Ground",       position: "Face / Gauge",   mpa: "Single: ≤350 / Double: ≤200", material: "High-Alloy Tool Steel", feature: "Pressure Compensation", },
  { size: '17"', type: "Single Disk",                    weight: "125 kg", bearing: "High-quality 17\" type", geology: "Mixed Ground / Hard Rock", position: "Face / Gauge Area", mpa: "Up to 350", material: "Hardened & Tempered Steel", },
  { size: '17"', type: "Twin Disk",                      weight: "277 kg", bearing: "High-quality 17\" type", geology: "Mixed Ground / Hard Rock", position: "Center Area", mpa: "Up to 350", material: "High-Alloy Tool Steel", },
  { size: '14"', type: "Double Disk / Single Disk",      weight: "95 kg",  bearing: "High-quality 14\" type", geology: "Mixed Ground",       position: "Face / Gauge",   mpa: "Up to 350", material: "High-Alloy Tool Steel", },
  { size: '12"', type: "Monoblock Double / Single Disk", weight: "70 kg",  bearing: "High-quality 12\" type", geology: "Mixed Ground",       position: "Face Area",      mpa: "Up to 100", material: "Hardened & Tempered Steel", feature: "Pressure Compensation", },
  { size: '12"', type: "Single Disk",                    weight: "69 kg",  bearing: "High-quality 12\" type", geology: "Mixed Ground",       position: "Face / Gauge",   mpa: "Up to 350", material: "High-Alloy Tool Steel", },
  { size: '11"', type: "Single Disk",                    weight: "58 kg",  bearing: "High-quality 11\" type", geology: "Hard Rock",          position: "Face / Gauge",   mpa: "Up to 200", material: "High-Alloy Tool Steel", },
  { size:  '8"', type: "Mb. Double / Single Disk",       weight: "18 kg",  bearing: "High-quality 8\" type",  geology: "Mixed Ground",       position: "Face / Gauge",   mpa: "Up to 100", material: "High-Alloy Tool Steel", },
];

const GEOLOGY_TAGS: GroundType[] = ["All", "Soft Ground", "Mixed Ground", "Hard Rock"];

const geoColor: Record<string, string> = {
  "Soft Ground": "bg-emerald-100 text-emerald-800 border-emerald-300",
  "Mixed Ground":"bg-amber-100  text-amber-800  border-amber-300",
  "Hard Rock":   "bg-rose-100   text-rose-800   border-rose-300",
};

const PRODUCT_CATEGORIES = [
  { icon: "⚙️", title: "Cutter Heads",           desc: "Complete cutterheads for EPB, Slurry & Hard-Rock TBMs across Ø600 mm – Ø3,000 mm." },
  { icon: "🔩", title: "Hydraulic Components",   desc: "Cylinders, seals, couplings, bearings, shafts, pipe clamps & hydraulic hoses." },
  { icon: "🎯", title: "Guidance Systems",        desc: "Laser sensors, servo motors, electrical control panels & monitoring modules." },
  { icon: "🔗", title: "Conveyor & Muck Removal", desc: "Conveyor chains, rollers, sprockets and drive units for continuous muck transport." },
  { icon: "🛡️", title: "Shield Components",       desc: "Wear plates, segment bolts, thrust pads, jacking cylinders & fittings." },
  { icon: "🔧", title: "Overhaul & Refurbishment", desc: "Full TBM rebuild, bearing replacement, seal kits, lubrication units & gearboxes." },
];

/* ── sub-components ─────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

/* ── main component ─────────────────────────────────────────────────────── */
export default function ProductsCatalog() {
  const [filter, setFilter] = useState<GroundType | "All">("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = filter === "All"
    ? CUTTERS
    : CUTTERS.filter(c => c.geology.includes(filter));

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 32 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="products" ref={ref} className="bg-[#0A0A0A] py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* ── heading ── */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <SectionLabel>Products &amp; Components</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Precision-Engineered<br />
            <span className="text-[#CC0000]">TBM Spares &amp; Machines</span>
          </h2>
          <p className="mt-5 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
            Manufactured from high-grade steel and alloy materials — designed for durability,
            wear resistance and high performance under the most demanding tunneling conditions.
          </p>
        </motion.div>

        {/* ── product category cards ── */}
        <motion.div {...fadeUp(0.1)} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
          {PRODUCT_CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group relative bg-[#111] border border-white/5 rounded-2xl p-6 hover:border-[#CC0000]/40 hover:bg-[#CC0000]/5 transition-all duration-300"
            >
              <div className="text-3xl mb-3">{cat.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#CC0000] transition-colors">
                {cat.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed">{cat.desc}</p>
              <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#CC0000] group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </motion.div>

        {/* ── cutter disc catalog ── */}
        <motion.div {...fadeUp(0.2)}>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
            <div>
              <SectionLabel>Cutter Disc Catalog</SectionLabel>
              <h3 className="text-2xl font-black text-white">
                Utility Tunnelling — Full Specification Table
              </h3>
            </div>
            {/* filter */}
            <div className="flex items-center gap-2 flex-wrap">
              <FiFilter className="text-gray-500 shrink-0" />
              {GEOLOGY_TAGS.map(tag => (
                <button
                  key={tag}
                  onClick={() => setFilter(tag)}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-full border transition-all duration-200 ${
                    filter === tag
                      ? "bg-[#CC0000] text-white border-[#CC0000]"
                      : "bg-transparent text-gray-400 border-white/10 hover:border-white/30"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="bg-[#CC0000] text-white">
                  {["Size","Type","Weight","Bearing","Suitable Geology","Position","Max MPa","Material","Special Feature"].map(h => (
                    <th key={h} className="px-4 py-3 font-semibold whitespace-nowrap text-xs tracking-wide">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {filtered.map((c, i) => (
                  <tr
                    key={i}
                    className={`border-t border-white/5 transition-colors hover:bg-[#CC0000]/5 ${
                      i % 2 === 0 ? "bg-[#111]" : "bg-[#0D0D0D]"
                    }`}
                  >
                    <td className="px-4 py-3 font-bold text-white whitespace-nowrap">{c.size}</td>
                    <td className="px-4 py-3 text-gray-300 whitespace-nowrap">{c.type}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{c.weight || "—"}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{c.bearing}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {c.geology.split(" / ").map(g => (
                        <span key={g} className={`inline-block text-xs px-2 py-0.5 rounded-full border mr-1 ${geoColor[g] ?? "bg-gray-800 text-gray-400 border-gray-600"}`}>
                          {g}
                        </span>
                      ))}
                    </td>
                    <td className="px-4 py-3 text-gray-400 text-xs whitespace-nowrap">{c.position}</td>
                    <td className="px-4 py-3 text-gray-400 whitespace-nowrap">{c.mpa}</td>
                    <td className="px-4 py-3 text-gray-400 text-xs">{c.material}</td>
                    <td className="px-4 py-3 text-xs">
                      {c.feature
                        ? <span className="bg-blue-900/40 text-blue-300 border border-blue-700/40 px-2 py-0.5 rounded-full">{c.feature}</span>
                        : <span className="text-gray-700">—</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* quality note */}
          <div className="mt-6 bg-[#111] border border-white/5 rounded-xl p-5 flex gap-4">
            <div className="text-2xl shrink-0">✅</div>
            <div>
              <p className="text-white font-semibold text-sm mb-1">ISO 9001:2015 Quality Standards</p>
              <p className="text-gray-500 text-xs leading-relaxed">
                All products undergo strict quality control — dimensional inspection, material testing,
                and operational trials. Components are designed to international standards (ISO, EN, ASTM),
                ensuring full compatibility with imported TBMs from Herrenknecht, Robbins, CRCHI, and Terratec.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
