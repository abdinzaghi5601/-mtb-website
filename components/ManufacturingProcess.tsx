"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const STEPS = [
  {
    num: "01", title: "Raw Material Inspection",
    details: ["Visual inspection of metal rods, billets & castings", "Dimensional verification", "Grade-wise storage", "MS Steel (10 T/mo), EN8 (3 T/mo), EN19 (2 T/mo)"],
    icon: "🔎", color: "from-slate-700 to-slate-800",
  },
  {
    num: "02", title: "Turning Operation",
    details: ["Outer diameter reduction", "Facing & grooving", "Shaping cylindrical profiles", "CNC Lathe machines (×2)"],
    icon: "🔄", color: "from-blue-800 to-blue-900",
  },
  {
    num: "03", title: "Milling Operation",
    details: ["Slotting & keyway machining", "Surface flattening", "Profile milling", "CNC Milling machine (×1)"],
    icon: "⚙️", color: "from-indigo-800 to-indigo-900",
  },
  {
    num: "04", title: "Grinding Operation",
    details: ["High dimensional accuracy", "Fine surface finish (micron tolerance)", "Removal of machining defects", "Grinding machine (×1)"],
    icon: "✨", color: "from-purple-800 to-purple-900",
  },
  {
    num: "05", title: "Tapping / Threading",
    details: ["Internal & external thread creation", "Tapping of holes", "Thread cutting on shafts & surfaces", "Tapping & Drilling machines (×2)"],
    icon: "🔩", color: "from-[#8B0000] to-[#CC0000]",
  },
  {
    num: "06", title: "Drilling Operation",
    details: ["Through holes & blind holes", "Countersink / counterbore", "Mounting & fastening holes", "Lubrication channel drilling"],
    icon: "🕳️", color: "from-[#CC0000] to-[#FF4444]",
  },
  {
    num: "07", title: "Heat Treatment",
    details: ["Hardening & Tempering", "Normalising & Case Carburising", "Enhances hardness, strength & wear resistance", "Critical for cutter discs & high-load components"],
    icon: "🔥", color: "from-orange-700 to-red-700",
  },
  {
    num: "08", title: "Final Assembly",
    details: ["Fastener & bearing fitting", "Alignment & calibration", "Quality checks at every stage", "Complete functional verification"],
    icon: "🔧", color: "from-amber-700 to-orange-700",
  },
  {
    num: "09", title: "Inspection & Dispatch",
    details: ["Dimensional inspection", "Material & functional testing", "Professional packaging", "Dispatch to OEMs, contractors & infra companies"],
    icon: "📦", color: "from-emerald-700 to-green-700",
  },
];

const RAW_MATERIALS = [
  { name: "MS Steel",    qty: "10 Tons/month", use: "Base structural components & fabricated parts" },
  { name: "EN8 Steel",   qty: "3 Tons/month",  use: "High-strength, medium-carbon alloy parts" },
  { name: "EN19 Steel",  qty: "2 Tons/month",  use: "Critical wear-resistant, high-load components" },
];

const MACHINES = [
  { name: "CNC Lathe Machine",       qty: 2, hp: "—" },
  { name: "CNC Milling Machine",     qty: 1, hp: "—" },
  { name: "Tapping & Drilling",      qty: 2, hp: "—" },
  { name: "Turning Machine",         qty: 1, hp: "—" },
  { name: "Grinding Machine",        qty: 1, hp: "—" },
  { name: "Welding Machine",         qty: 1, hp: "—" },
  { name: "Lifting Equipment",       qty: 1, hp: "—" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

export default function ManufacturingProcess() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="process" ref={ref} className="bg-[#050505] py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <SectionLabel>Manufacturing Process</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            From Raw Steel to<br />
            <span className="text-[#CC0000]">World-Class TBM Spares</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            A systematic 9-stage production sequence combining precision machining, heat treatment
            and rigorous quality assurance — delivering components that exceed international standards.
          </p>
        </motion.div>

        {/* ── flowchart ── */}
        <div className="relative mb-24">
          {/* vertical connector line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#CC0000]/60 via-white/10 to-emerald-600/60 hidden sm:block -translate-x-px" />

          <div className="space-y-6">
            {STEPS.map((step, i) => {
              const isRight = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex items-center gap-4 md:gap-8 ${isRight ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* card */}
                  <div className={`flex-1 ${isRight ? "md:text-right" : "md:text-left"}`}>
                    <div className={`bg-[#111] border border-white/5 rounded-2xl p-5 hover:border-[#CC0000]/30 transition-colors group ${isRight ? "md:ml-auto" : ""} max-w-md ${isRight ? "md:ml-auto" : "md:mr-auto"}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isRight ? "md:flex-row-reverse" : ""}`}>
                        <span className="text-xl">{step.icon}</span>
                        <h3 className="text-white font-black">{step.title}</h3>
                        <span className="text-[#CC0000] font-black text-sm ml-auto md:ml-0">{step.num}</span>
                      </div>
                      <ul className={`space-y-1 ${isRight ? "md:items-end" : ""}`}>
                        {step.details.map((d, j) => (
                          <li key={j} className={`text-gray-500 text-xs flex gap-1.5 ${isRight ? "md:flex-row-reverse" : ""}`}>
                            <span className="text-[#CC0000] shrink-0">·</span>{d}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* centre node */}
                  <div className="relative z-10 shrink-0 hidden sm:flex w-12 h-12 rounded-full items-center justify-center bg-[#CC0000] text-white font-black text-xs shadow-lg shadow-[#CC0000]/30">
                    {step.num}
                  </div>

                  {/* spacer for opposite side */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ── raw materials & machinery ── */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* raw materials */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <SectionLabel>Raw Materials</SectionLabel>
            <h3 className="text-white font-black text-xl mb-5">Monthly Consumption</h3>
            <div className="space-y-3">
              {RAW_MATERIALS.map(m => (
                <div key={m.name} className="bg-[#111] border border-white/5 rounded-xl p-4 hover:border-[#CC0000]/30 transition-colors">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-white font-bold">{m.name}</span>
                    <span className="text-[#CC0000] font-black text-sm">{m.qty}</span>
                  </div>
                  <p className="text-gray-600 text-xs">{m.use}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* machinery list */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <SectionLabel>Equipment</SectionLabel>
            <h3 className="text-white font-black text-xl mb-5">Proposed Machinery List</h3>
            <div className="bg-[#111] border border-white/5 rounded-2xl overflow-hidden">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#CC0000]">
                    <th className="text-left px-4 py-3 text-white font-semibold text-xs">Machine</th>
                    <th className="text-center px-4 py-3 text-white font-semibold text-xs">Qty</th>
                  </tr>
                </thead>
                <tbody>
                  {MACHINES.map((m, i) => (
                    <tr key={m.name} className={`border-t border-white/5 ${i % 2 === 0 ? "bg-[#111]" : "bg-[#0D0D0D]"}`}>
                      <td className="px-4 py-3 text-gray-300 text-xs">{m.name}</td>
                      <td className="px-4 py-3 text-center">
                        <span className="bg-[#CC0000]/20 text-[#CC0000] font-bold text-xs px-2 py-0.5 rounded-full">{m.qty}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            {/* utilities */}
            <div className="mt-4 grid grid-cols-2 gap-3">
              {[
                { label: "Power",      value: "75 HP" },
                { label: "Water",      value: "1,000 LPD" },
                { label: "Shifts",     value: "2 per day" },
                { label: "Area",       value: "226.5 m²" },
              ].map(u => (
                <div key={u.label} className="bg-[#111] border border-white/5 rounded-xl p-3 text-center">
                  <p className="text-gray-600 text-xs mb-1">{u.label}</p>
                  <p className="text-white font-black text-sm">{u.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
