import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

const inputBase: React.CSSProperties = {
  width: "100%",
  background: "#f5f5f3",
  border: "1px solid #e4e4e0",
  borderRadius: "2px",
  padding: "14px 16px",
  fontSize: "15px",
  lineHeight: 1.5,
  color: "#0a0a0a",
  outline: "none",
  transition: "border-color 0.15s",
  fontFamily: "'Inter', sans-serif",
};

const inputError: React.CSSProperties = {
  ...inputBase,
  borderColor: "#b00",
  background: "#fff5f5",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: "11px",
  fontWeight: 600,
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "#0a0a0a",
  marginBottom: "8px",
};

const errorStyle: React.CSSProperties = {
  fontSize: "12px",
  color: "#b00",
  marginTop: "6px",
};

type FormData = {
  name: string;
  email: string;
  category: string;
  message: string;
};

export default function Feedback() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", category: "general", message: "" });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const e: Partial<FormData> = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Required";
    else if (form.message.trim().length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((p) => ({ ...p, [name]: value }));
    if (errors[name as keyof FormData]) setErrors((p) => ({ ...p, [name]: "" }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
    setForm({ name: "", email: "", category: "general", message: "" });
  };

  return (
    <div className="overflow-x-hidden bg-white text-[#0a0a0a]">

      {/* ── HERO ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white pt-32 md:pt-40 pb-24 md:pb-28 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#8a8a8a",
                marginBottom: "18px",
              }}
            >
              Product
            </p>
            <h1
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
                lineHeight: 0.93,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "24px",
                maxWidth: "680px",
              }}
            >
              Send feedback
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "#8a8a8a",
                maxWidth: "440px",
              }}
            >
              Feature requests, bug reports, or general thoughts — we read every message and use it to shape the next version.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── FORM ──────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-36">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-16 lg:gap-24 items-start">

            {/* Main form */}
            <Reveal>
              {submitted ? (
                <div
                  className="flex flex-col items-start gap-6 py-16"
                  style={{ borderTop: "1px solid #e4e4e0" }}
                >
                  <div
                    className="flex items-center justify-center bg-[#0a0a0a]"
                    style={{ width: "48px", height: "48px", borderRadius: "2px" }}
                  >
                    <Check className="text-white w-5 h-5" />
                  </div>
                  <h2
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.0,
                      color: "#0a0a0a",
                    }}
                  >
                    Thank you
                  </h2>
                  <p style={{ fontSize: "16px", lineHeight: 1.65, color: "#8a8a8a", maxWidth: "420px" }}>
                    We've received your feedback. Every submission is reviewed by our team and helps us prioritise what matters most.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#0a0a0a] text-white border border-[#0a0a0a] transition-colors duration-200 hover:bg-transparent hover:text-[#0a0a0a] mt-4"
                    style={{ borderRadius: "2px" }}
                  >
                    Send another
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  style={{ borderTop: "1px solid #e4e4e0", paddingTop: "40px" }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" style={labelStyle}>Name</label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Your name"
                        style={errors.name ? inputError : inputBase}
                        onFocus={(e) => (e.target.style.borderColor = "#0a0a0a")}
                        onBlur={(e) => (e.target.style.borderColor = errors.name ? "#b00" : "#e4e4e0")}
                      />
                      {errors.name && <p style={errorStyle}>{errors.name}</p>}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" style={labelStyle}>Email</label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        style={errors.email ? inputError : inputBase}
                        onFocus={(e) => (e.target.style.borderColor = "#0a0a0a")}
                        onBlur={(e) => (e.target.style.borderColor = errors.email ? "#b00" : "#e4e4e0")}
                      />
                      {errors.email && <p style={errorStyle}>{errors.email}</p>}
                    </div>
                  </div>

                  {/* Category */}
                  <div className="mb-6">
                    <label htmlFor="category" style={labelStyle}>Category</label>
                    <select
                      id="category"
                      name="category"
                      value={form.category}
                      onChange={handleChange}
                      style={{ ...inputBase, appearance: "none", cursor: "pointer" }}
                      onFocus={(e) => (e.target.style.borderColor = "#0a0a0a")}
                      onBlur={(e) => (e.target.style.borderColor = "#e4e4e0")}
                    >
                      <option value="general">General feedback</option>
                      <option value="feature">Feature request</option>
                      <option value="bug">Bug report</option>
                      <option value="design">Design / UX</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="mb-8">
                    <label htmlFor="message" style={labelStyle}>Your feedback</label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      rows={9}
                      placeholder="Share your thoughts, ideas, or describe the issue in detail…"
                      style={{
                        ...(errors.message ? inputError : inputBase),
                        resize: "vertical",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#0a0a0a")}
                      onBlur={(e) => (e.target.style.borderColor = errors.message ? "#b00" : "#e4e4e0")}
                    />
                    {errors.message && <p style={errorStyle}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#0a0a0a] text-white border border-[#0a0a0a] transition-colors duration-200 hover:bg-transparent hover:text-[#0a0a0a]"
                    style={{ borderRadius: "2px" }}
                  >
                    Submit feedback
                  </button>
                </form>
              )}
            </Reveal>

            {/* Aside */}
            <Reveal delay={0.12}>
              <div
                className="bg-[#f5f5f3] p-8 md:p-10"
                style={{ borderRadius: "2px" }}
              >
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#8a8a8a",
                    marginBottom: "20px",
                  }}
                >
                  Good to know
                </p>

                <div className="space-y-5">
                  {[
                    {
                      heading: "We read everything",
                      body: "Every submission reaches our team. Nothing goes into a void.",
                    },
                    {
                      heading: "Bug reports",
                      body: "Include your device model, iOS version, and steps to reproduce — it helps us fix things faster.",
                    },
                    {
                      heading: "Feature requests",
                      body: "The most requested features get prioritised in each release. Your vote counts.",
                    },
                  ].map((item, i) => (
                    <div
                      key={item.heading}
                      style={{ borderTop: i === 0 ? "none" : "1px solid #e4e4e0", paddingTop: i === 0 ? 0 : "20px" }}
                    >
                      <p
                        style={{
                          fontSize: "13px",
                          fontWeight: 700,
                          textTransform: "uppercase",
                          letterSpacing: "0.04em",
                          color: "#0a0a0a",
                          marginBottom: "6px",
                        }}
                      >
                        {item.heading}
                      </p>
                      <p style={{ fontSize: "13px", lineHeight: 1.65, color: "#8a8a8a" }}>
                        {item.body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
