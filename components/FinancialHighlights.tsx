"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FiTrendingUp, FiDollarSign, FiBarChart2, FiCheckCircle } from "react-icons/fi";

/* ── data from DPR ──────────────────────────────────────────────────────── */
const PROJECT_COST = [
  { head: "Land & Site Development",       land: 37.50,  building: 0,     machine: 0,     misc: 0     },
  { head: "Building & Civil Works",        land: 0,      building: 83.57, machine: 0,     misc: 0     },
  { head: "Plant & Machinery",             land: 0,      building: 0,     machine: 269.95, misc: 0    },
  { head: "Furniture & Fixtures",          land: 0,      building: 0,     machine: 0,     misc: 4.50  },
  { head: "Office Equipment",              land: 0,      building: 0,     machine: 0,     misc: 2.00  },
  { head: "Pre-Operative Expenses",        land: 0,      building: 0,     machine: 0,     misc: 5.00  },
  { head: "Margin for Working Capital",    land: 0,      building: 0,     machine: 0,     misc: 55.25 },
  { head: "Contingency (5%)",             land: 0,      building: 0,     machine: 0,     misc: 65.00 },
];

const FUNDING = [
  { label: "Promoters' Equity (25%)", value: 130.69, color: "#CC0000",  pct: 25 },
  { label: "Bank Term Loan (75%)",    value: 392.07, color: "#003366",  pct: 75 },
];

const PROJECTIONS = [
  { year: "Year 1", capacity: "6,000",  installed: "6,000",  utilisation: 68.3,  turnover: 360.00, netProfit: 29.18, npMargin: 8.10 },
  { year: "Year 2", capacity: "7,200",  installed: "7,200",  utilisation: 82.0,  turnover: 432.00, netProfit: 47.24, npMargin: 10.93 },
  { year: "Year 3", capacity: "7,920",  installed: "7,920",  utilisation: 90.2,  turnover: 475.20, netProfit: 60.79, npMargin: 12.80 },
  { year: "Year 4", capacity: "8,424",  installed: "8,424",  utilisation: 95.9,  turnover: 505.44, netProfit: 69.54, npMargin: 13.76 },
  { year: "Year 5", capacity: "8,784",  installed: "8,784",  utilisation: 100.0, turnover: 527.04, netProfit: 79.73, npMargin: 15.13 },
];

const KEY_INDICATORS = [
  { label: "Debt Service Coverage Ratio (DSCR)", value: "1.71 – 3.52", status: "Excellent" },
  { label: "Breakeven Point (BEP)",               value: "43.8%",       status: "Low Risk" },
  { label: "Return on Investment (ROI)",           value: "Year 1: 8.1%", status: "Growing" },
  { label: "Payback Period",                       value: "~4 Years",    status: "Good" },
  { label: "Employment Generated",                 value: "18 Direct + 20 Indirect", status: "Impact" },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
      {children}
    </span>
  );
}

/* ── minimal bar chart ────────────────────────────────────────────────────── */
function TurnoverBar({ year, turnover, netProfit, maxTurnover, inView }: {
  year: string; turnover: number; netProfit: number; maxTurnover: number; inView: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="relative flex items-end gap-1 h-36">
        {/* turnover bar */}
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: `${(turnover / maxTurnover) * 128}px` } : {}}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="w-8 bg-[#CC0000] rounded-t-lg origin-bottom relative group"
          style={{ minHeight: "8px" }}
        >
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-white font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            ₹{turnover}L
          </span>
        </motion.div>
        {/* net profit bar */}
        <motion.div
          initial={{ height: 0 }}
          animate={inView ? { height: `${(netProfit / maxTurnover) * 128}px` } : {}}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="w-8 bg-[#003366] rounded-t-lg origin-bottom relative group"
          style={{ minHeight: "4px" }}
        >
          <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] text-blue-300 font-bold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
            ₹{netProfit}L
          </span>
        </motion.div>
      </div>
      <p className="text-gray-500 text-xs font-semibold">{year}</p>
    </div>
  );
}

export default function FinancialHighlights() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTab, setActiveTab] = useState<"cost" | "projections">("cost");

  const totalCost = 522.77;
  const maxTurnover = Math.max(...PROJECTIONS.map(p => p.turnover));

  return (
    <section id="financials" ref={ref} className="bg-gray-50 py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <SectionLabel>Financial Overview</SectionLabel>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight">
            Built on a Strong<br />
            <span className="text-[#CC0000]">Financial Foundation</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-2xl mx-auto text-base leading-relaxed">
            A meticulously planned ₹522.77 Lakh investment with clear projections, healthy margins,
            and robust debt coverage ratios.
          </p>
        </motion.div>

        {/* ── hero metrics ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {[
            { icon: <FiDollarSign />,  label: "Total Project Cost",   value: "₹522.77 L",  sub: "Fully planned" },
            { icon: <FiTrendingUp />,  label: "Year 5 Turnover",      value: "₹527.04 L",  sub: "↑ 46% from Year 1" },
            { icon: <FiBarChart2 />,   label: "Net Profit Margin",    value: "15.13%",      sub: "By Year 5" },
            { icon: <FiCheckCircle />, label: "DSCR",                 value: "1.71 – 3.52", sub: "Well above 1.25 norm" },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.15 + i * 0.08 }}
              className="bg-white border border-gray-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-[#CC0000] text-xl flex justify-center mb-2">{m.icon}</div>
              <div className="text-2xl font-black text-gray-900 mb-1">{m.value}</div>
              <div className="text-xs font-semibold text-gray-500">{m.label}</div>
              <div className="text-xs text-gray-400 mt-0.5">{m.sub}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* ── funding pie-style cards ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border border-gray-100 rounded-3xl p-8 mb-8 shadow-sm"
        >
          <h3 className="font-black text-gray-900 text-xl mb-6">Project Funding Structure</h3>
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* bar */}
            <div className="w-full md:w-1/2 bg-gray-100 rounded-full h-8 overflow-hidden flex">
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "25%" } : {}}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#CC0000] h-full flex items-center justify-center text-white text-xs font-bold"
              >25%</motion.div>
              <motion.div
                initial={{ width: 0 }}
                animate={inView ? { width: "75%" } : {}}
                transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#003366] h-full flex items-center justify-center text-white text-xs font-bold"
              >75%</motion.div>
            </div>
            {/* legend */}
            <div className="flex gap-6 shrink-0">
              {FUNDING.map(f => (
                <div key={f.label} className="text-center">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: f.color }} />
                    <span className="text-xs text-gray-500">{f.label}</span>
                  </div>
                  <p className="text-xl font-black" style={{ color: f.color }}>₹{f.value} L</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── tab switcher: cost table / projections ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="mb-8"
        >
          <div className="flex gap-2 bg-gray-200 rounded-full p-1 w-fit mb-6">
            {(["cost", "projections"] as const).map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {tab === "cost" ? "Project Cost Breakdown" : "Revenue Projections"}
              </button>
            ))}
          </div>

          {activeTab === "cost" && (
            <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#0A0A0A]">
                    <th className="text-left px-5 py-3 text-white text-xs font-semibold">Cost Head</th>
                    <th className="text-right px-5 py-3 text-white text-xs font-semibold">Amount (₹ Lakhs)</th>
                    <th className="text-right px-5 py-3 text-white text-xs font-semibold hidden md:table-cell">% of Total</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { head: "Land & Site Development",    amount: 37.50  },
                    { head: "Building & Civil Works",     amount: 83.57  },
                    { head: "Plant & Machinery",          amount: 269.95 },
                    { head: "Furniture & Fixtures",       amount: 4.50   },
                    { head: "Office Equipment",           amount: 2.00   },
                    { head: "Pre-Operative Expenses",     amount: 5.00   },
                    { head: "Margin for Working Capital", amount: 55.25  },
                    { head: "Contingency (5%)",           amount: 65.00  },
                  ].map((row, i) => (
                    <tr key={row.head} className={`border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                      <td className="px-5 py-3 text-gray-700">{row.head}</td>
                      <td className="px-5 py-3 text-right font-bold text-gray-900">₹{row.amount.toFixed(2)}</td>
                      <td className="px-5 py-3 text-right text-gray-400 hidden md:table-cell">
                        {((row.amount / totalCost) * 100).toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                  <tr className="border-t-2 border-[#CC0000] bg-[#CC0000]/5">
                    <td className="px-5 py-3 font-black text-gray-900">TOTAL</td>
                    <td className="px-5 py-3 text-right font-black text-[#CC0000] text-base">₹{totalCost.toFixed(2)}</td>
                    <td className="px-5 py-3 text-right font-black text-[#CC0000] hidden md:table-cell">100%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          )}

          {activeTab === "projections" && (
            <div className="space-y-6">
              {/* chart */}
              <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#CC0000]" /><span className="text-xs text-gray-500">Turnover</span></div>
                  <div className="flex items-center gap-2"><div className="w-3 h-3 rounded-sm bg-[#003366]" /><span className="text-xs text-gray-500">Net Profit</span></div>
                </div>
                <div className="flex items-end justify-around gap-2 pt-4">
                  {PROJECTIONS.map(p => (
                    <TurnoverBar key={p.year} year={p.year} turnover={p.turnover} netProfit={p.netProfit} maxTurnover={maxTurnover} inView={inView} />
                  ))}
                </div>
              </div>

              {/* table */}
              <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-[#0A0A0A]">
                      {["Year","Capacity (Units)","Utilisation %","Turnover (₹L)","Net Profit (₹L)","NP Margin"].map(h => (
                        <th key={h} className="px-4 py-3 text-white text-xs font-semibold text-right first:text-left whitespace-nowrap">{h}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {PROJECTIONS.map((p, i) => (
                      <tr key={p.year} className={`border-t border-gray-50 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <td className="px-4 py-3 font-bold text-gray-900">{p.year}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{p.installed}</td>
                        <td className="px-4 py-3 text-right">
                          <span className={`font-bold ${p.utilisation >= 95 ? "text-emerald-600" : p.utilisation >= 80 ? "text-amber-600" : "text-gray-600"}`}>
                            {p.utilisation}%
                          </span>
                        </td>
                        <td className="px-4 py-3 text-right font-bold text-gray-900">₹{p.turnover.toFixed(2)}</td>
                        <td className="px-4 py-3 text-right font-bold text-[#CC0000]">₹{p.netProfit.toFixed(2)}</td>
                        <td className="px-4 py-3 text-right text-gray-600">{p.npMargin}%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </motion.div>

        {/* ── key financial indicators ── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-[#0A0A0A] rounded-3xl p-8"
        >
          <SectionLabel>Key Indicators</SectionLabel>
          <h3 className="text-white font-black text-xl mb-6">Financial Viability Summary</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {KEY_INDICATORS.map(k => (
              <div key={k.label} className="bg-white/5 border border-white/5 rounded-xl p-4 hover:border-[#CC0000]/30 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <p className="text-gray-500 text-xs leading-snug">{k.label}</p>
                  <span className="text-[10px] font-bold bg-emerald-900/50 text-emerald-400 border border-emerald-700/40 px-2 py-0.5 rounded-full whitespace-nowrap ml-2">
                    {k.status}
                  </span>
                </div>
                <p className="text-white font-black">{k.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
