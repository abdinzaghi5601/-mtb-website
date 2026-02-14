"use client";
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FiMapPin, FiPhone, FiMail, FiFileText, FiCreditCard,
  FiSend, FiUser, FiMessageSquare, FiCheckCircle,
} from "react-icons/fi";

/* ── company data from DPR & PAN ─────────────────────────────────────────── */
const COMPANY_INFO = {
  name:       "TBM MACHINES AND MANUFACTURING SERVICES",
  shortName:  "TBM Machines",
  address:    "Plot No. 43, Dandumalkapur Industrial Park, Phase-II, Dandumalkapur Village, Kodangal Mandal, Vikarabad District, Telangana – 501 503",
  udyam:      "UDYAM-TS-02-0291161",
  pan:        "AAZFT3431B",
  gst:        "36AAZFT3431B1ZC",          // ← update if different
  incorporated: "17 November 2025",
  constitution: "Partnership Firm",
  partners: [
    { name: "Md. Yaseen Baba (Managing Partner)", phone: "+91 — — — — — — — — — —" },
    { name: "Abdur Rahman (Partner)",              phone: "+91 — — — — — — — — — —" },
  ],
  email: "info@tbm-machines.in",          // ← update with actual email
};

const DETAILS_GRID = [
  { icon: <FiCreditCard />, label: "PAN Number",           value: COMPANY_INFO.pan },
  { icon: <FiFileText />,   label: "UDYAM Registration",   value: COMPANY_INFO.udyam },
  { icon: <FiFileText />,   label: "GST Number",           value: COMPANY_INFO.gst },
  { icon: <FiFileText />,   label: "Constitution",         value: COMPANY_INFO.constitution },
  { icon: <FiFileText />,   label: "Date of Incorporation",value: COMPANY_INFO.incorporated },
  { icon: <FiMapPin />,     label: "Industrial Zone",      value: "Dandumalkapur, Telangana" },
];

/* ── types ─────────────────────────────────────────────────────────────────── */
type FormState = {
  name: string; email: string; company: string; message: string; subject: string;
};
type Status = "idle" | "sending" | "success" | "error";

/* ── component ──────────────────────────────────────────────────────────────── */
export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form, setForm] = useState<FormState>({ name: "", email: "", company: "", message: "", subject: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setErrorMsg("Please fill in name, email and message.");
      return;
    }
    setStatus("sending");
    setErrorMsg("");
    try {
      // calls your Next.js API route which uses Resend
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Send failed");
      setStatus("success");
      setForm({ name: "", email: "", company: "", message: "", subject: "" });
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Please try again or email us directly.");
    }
  };

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 30 },
    animate: inView ? { opacity: 1, y: 0 } : {},
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section id="contact" ref={ref} className="bg-[#050505] py-28 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">

        {/* heading */}
        <motion.div {...fadeUp(0)} className="text-center mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-[#CC0000] border border-[#CC0000]/30 px-3 py-1 rounded-full mb-4">
            Contact Us
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Get in Touch<br />
            <span className="text-[#CC0000]">with Our Team</span>
          </h2>
          <p className="mt-5 text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            Looking for TBM spares, components, or a manufacturing partnership? We are ready to
            discuss your requirements and deliver precision-engineered solutions.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">

          {/* ── left: info ── (2 cols) */}
          <motion.div {...fadeUp(0.1)} className="lg:col-span-2 space-y-6">

            {/* address */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <div className="flex items-start gap-3 mb-4">
                <FiMapPin className="text-[#CC0000] mt-0.5 shrink-0 text-lg" />
                <div>
                  <h4 className="text-white font-black mb-1">Factory &amp; Registered Address</h4>
                  <p className="text-gray-500 text-sm leading-relaxed">{COMPANY_INFO.address}</p>
                </div>
              </div>
              {/* map embed placeholder — replace with real embed */}
              <div className="rounded-xl overflow-hidden border border-white/5 h-44 bg-[#0A0A0A] flex items-center justify-center">
                <div className="text-center text-gray-600 text-sm">
                  <FiMapPin className="mx-auto text-3xl mb-2 text-[#CC0000]/40" />
                  <p>Dandumalkapur Industrial Park,</p>
                  <p>Vikarabad, Telangana</p>
                  <a
                    href="https://maps.google.com/?q=Dandumalkapur+Industrial+Park+Vikarabad+Telangana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block text-[#CC0000] text-xs hover:underline"
                  >
                    Open in Google Maps ↗
                  </a>
                </div>
              </div>
            </div>

            {/* contact persons */}
            {COMPANY_INFO.partners.map(p => (
              <div key={p.name} className="bg-[#111] border border-white/5 rounded-2xl p-5 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#CC0000]/20 flex items-center justify-center text-[#CC0000] shrink-0">
                  <FiUser />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{p.name}</p>
                  <p className="text-gray-500 text-xs">{p.phone}</p>
                </div>
              </div>
            ))}

            {/* email */}
            <a href={`mailto:${COMPANY_INFO.email}`} className="block bg-[#CC0000] rounded-2xl p-5 hover:bg-[#AA0000] transition-colors group">
              <div className="flex items-center gap-3">
                <FiMail className="text-white text-xl" />
                <div>
                  <p className="text-white/70 text-xs">Email Us</p>
                  <p className="text-white font-black group-hover:underline">{COMPANY_INFO.email}</p>
                </div>
              </div>
            </a>
          </motion.div>

          {/* ── right: form + details ── (3 cols) */}
          <motion.div {...fadeUp(0.15)} className="lg:col-span-3 space-y-6">

            {/* company details grid */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <h4 className="text-white font-black mb-4">Company Details</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {DETAILS_GRID.map(d => (
                  <div key={d.label} className="flex items-start gap-2">
                    <div className="text-[#CC0000] mt-0.5 shrink-0">{d.icon}</div>
                    <div>
                      <p className="text-gray-600 text-xs">{d.label}</p>
                      <p className="text-white font-bold text-sm">{d.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* contact form */}
            <div className="bg-[#111] border border-white/5 rounded-2xl p-6">
              <h4 className="text-white font-black mb-5 flex items-center gap-2">
                <FiMessageSquare className="text-[#CC0000]" /> Send an Enquiry
              </h4>

              {status === "success" ? (
                <div className="text-center py-10">
                  <FiCheckCircle className="text-emerald-400 text-4xl mx-auto mb-3" />
                  <p className="text-white font-black text-lg">Message Sent!</p>
                  <p className="text-gray-500 text-sm mt-1">We will get back to you within 24 hours.</p>
                  <button onClick={() => setStatus("idle")} className="mt-5 text-[#CC0000] text-sm hover:underline">
                    Send another message
                  </button>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* name */}
                    <div>
                      <label className="block text-gray-500 text-xs mb-1.5">Full Name *</label>
                      <input
                        name="name" value={form.name} onChange={handle}
                        placeholder="Your name"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                      />
                    </div>
                    {/* email */}
                    <div>
                      <label className="block text-gray-500 text-xs mb-1.5">Email Address *</label>
                      <input
                        name="email" type="email" value={form.email} onChange={handle}
                        placeholder="your@email.com"
                        className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                      />
                    </div>
                  </div>

                  {/* company */}
                  <div>
                    <label className="block text-gray-500 text-xs mb-1.5">Company / Organisation</label>
                    <input
                      name="company" value={form.company} onChange={handle}
                      placeholder="Your company or project"
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                    />
                  </div>

                  {/* subject dropdown */}
                  <div>
                    <label className="block text-gray-500 text-xs mb-1.5">Enquiry Type</label>
                    <select
                      name="subject" value={form.subject} onChange={handle}
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#CC0000]/50 transition-colors appearance-none"
                    >
                      <option value="" className="bg-[#111]">Select enquiry type…</option>
                      <option value="cutter-discs"  className="bg-[#111]">Cutter Discs / TBM Spares</option>
                      <option value="custom-parts"  className="bg-[#111]">Custom Component Manufacturing</option>
                      <option value="bulk-supply"   className="bg-[#111]">Bulk / Ongoing Supply Contract</option>
                      <option value="partnership"   className="bg-[#111]">Business Partnership / OEM</option>
                      <option value="investment"    className="bg-[#111]">Investor / Funding Enquiry</option>
                      <option value="other"         className="bg-[#111]">Other</option>
                    </select>
                  </div>

                  {/* message */}
                  <div>
                    <label className="block text-gray-500 text-xs mb-1.5">Message *</label>
                    <textarea
                      name="message" value={form.message} onChange={handle}
                      rows={4}
                      placeholder="Describe your requirement — TBM type, cutter size, quantity, project details…"
                      className="w-full bg-[#0A0A0A] border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-700 focus:outline-none focus:border-[#CC0000]/50 transition-colors resize-none"
                    />
                  </div>

                  {errorMsg && <p className="text-red-400 text-xs">{errorMsg}</p>}

                  <button
                    onClick={handleSubmit}
                    disabled={status === "sending"}
                    className="w-full flex items-center justify-center gap-2 bg-[#CC0000] hover:bg-[#AA0000] disabled:opacity-50 disabled:cursor-not-allowed text-white font-black py-3.5 rounded-xl transition-colors duration-200"
                  >
                    <FiSend className={status === "sending" ? "animate-spin" : ""} />
                    {status === "sending" ? "Sending…" : "Send Enquiry"}
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
