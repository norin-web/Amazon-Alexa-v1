import { motion } from "motion/react";
import { Link } from "react-router";
import * as Accordion from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

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

const faqs = [
  {
    q: "Which soundbars are supported?",
    a: "Amazon Alexa Soundbar is designed for Alexa-compatible soundbars, including the SR-X40A model. The app connects via your local Wi-Fi network — no Bluetooth pairing required.",
  },
  {
    q: "How do I connect my soundbar to the app?",
    a: "Make sure your soundbar is powered on and connected to the same Wi-Fi network as your iPhone. Open the app, tap Connect Devices, and your soundbar should appear automatically. Tap it to connect.",
  },
  {
    q: "My soundbar isn't showing up. What should I do?",
    a: "Check that your iPhone and soundbar are on the same Wi-Fi network. Try force-quitting the app and reopening it. If the soundbar still doesn't appear, restart your router and the soundbar, then try again.",
  },
  {
    q: "How do I control LED effects?",
    a: "Once connected, tap the LED Effect button on the home screen or navigate to Adjust LED Effects. You can choose from modes including Rhythm, Cycle, Movie, Party, Christmas, and Halloween.",
  },
  {
    q: "Can I stream music from my iPhone's Files app?",
    a: "Yes. Tap Stream from Files & Apps in the app to browse your local music library or files. You can play tracks directly from your iPhone's storage through the connected soundbar.",
  },
  {
    q: "How do I control playback?",
    a: "The Control Playback screen gives you full transport controls — play, pause, skip, and seek. Album art and track information are displayed, and you can adjust volume from the same screen.",
  },
  {
    q: "Is the app free?",
    a: "Yes. Amazon Alexa Soundbar is free to download and free to use. There are no subscriptions or in-app purchases.",
  },
  {
    q: "How do I report a bug or suggest a feature?",
    a: "Use the feedback form on our site — we read every submission. For bugs, please include your device model, iOS version, app version, and steps to reproduce the issue.",
  },
];

export default function Support() {
  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

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
              Support
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
                maxWidth: "760px",
              }}
            >
              How can we help?
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "#8a8a8a",
                maxWidth: "480px",
              }}
            >
              Browse the FAQ below or reach us directly — we respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── QUICK ACTIONS — 2 cards ───────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-16 md:pb-20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[#e4e4e0]">

            {/* Card 1 — Contact Support */}
            <Link
              to="/contact"
              className="group bg-white flex flex-col justify-between gap-10 p-10 md:p-12 transition-colors duration-200 hover:bg-[#f5f5f3]"
            >
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#8a8a8a",
                    marginBottom: "14px",
                  }}
                >
                  Direct support
                </p>
                <h2
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.0,
                    color: "#0a0a0a",
                    marginBottom: "16px",
                  }}
                >
                  Contact support
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#8a8a8a", maxWidth: "360px" }}>
                  Send us a message with your question or issue. Fill in the contact form and we'll get back to you.
                </p>
              </div>
              <span
                className="inline-flex items-center text-[#0a0a0a] group-hover:gap-3 transition-all duration-200"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  gap: "8px",
                }}
              >
                Open contact form
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </Link>

            {/* Card 2 — Feedback */}
            <Link
              to="/feedback"
              className="group bg-white flex flex-col justify-between gap-10 p-10 md:p-12 transition-colors duration-200 hover:bg-[#f5f5f3]"
            >
              <div>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#8a8a8a",
                    marginBottom: "14px",
                  }}
                >
                  Product feedback
                </p>
                <h2
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.5rem, 3vw, 2.25rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    lineHeight: 1.0,
                    color: "#0a0a0a",
                    marginBottom: "16px",
                  }}
                >
                  Send feedback
                </h2>
                <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#8a8a8a", maxWidth: "360px" }}>
                  Feature requests, bug reports, general thoughts — we read everything and use it to improve the app.
                </p>
              </div>
              <span
                className="inline-flex items-center text-[#0a0a0a] group-hover:gap-3 transition-all duration-200"
                style={{
                  fontSize: "13px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  gap: "8px",
                }}
              >
                Open feedback form
                <span
                  className="transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden
                >
                  →
                </span>
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f3] px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-36">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="mb-14">
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                color: "#8a8a8a",
                marginBottom: "14px",
              }}
            >
              FAQ
            </p>
            <h2
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 4vw, 3rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.025em",
                lineHeight: 0.97,
                color: "#0a0a0a",
              }}
            >
              Frequently asked<br />questions
            </h2>
          </Reveal>

          <Accordion.Root
            type="single"
            collapsible
            value={openItem}
            onValueChange={setOpenItem}
            style={{ borderTop: "1px solid #e4e4e0" }}
          >
            {faqs.map((faq, i) => (
              <Reveal key={i} delay={i * 0.04}>
                <Accordion.Item
                  value={`item-${i}`}
                  style={{ borderBottom: "1px solid #e4e4e0" }}
                >
                  <Accordion.Header>
                    <Accordion.Trigger
                      className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                      style={{ background: "none", border: "none", cursor: "pointer" }}
                    >
                      <span
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 700,
                          fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                          textTransform: "uppercase",
                          letterSpacing: "-0.01em",
                          color: "#0a0a0a",
                          lineHeight: 1.2,
                        }}
                      >
                        {faq.q}
                      </span>
                      <span
                        className="shrink-0 transition-transform duration-300"
                        style={{ color: "#8a8a8a" }}
                      >
                        {openItem === `item-${i}` ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up overflow-hidden">
                    <p
                      style={{
                        fontSize: "15px",
                        lineHeight: 1.72,
                        color: "#8a8a8a",
                        paddingBottom: "24px",
                        maxWidth: "680px",
                      }}
                    >
                      {faq.a}
                    </p>
                  </Accordion.Content>
                </Accordion.Item>
              </Reveal>
            ))}
          </Accordion.Root>

          {/* Still need help */}
          <Reveal delay={0.1} className="mt-20">
            <div
              className="flex flex-col md:flex-row md:items-center md:justify-between gap-8 pt-10"
              style={{ borderTop: "1px solid #e4e4e0" }}
            >
              <div>
                <p
                  style={{
                    fontFamily: "'Archivo', sans-serif",
                    fontWeight: 800,
                    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",
                    textTransform: "uppercase",
                    letterSpacing: "-0.02em",
                    color: "#0a0a0a",
                    marginBottom: "8px",
                  }}
                >
                  Still have questions?
                </p>
                <p style={{ fontSize: "14px", color: "#8a8a8a" }}>
                  Our team responds within 24 hours.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#0a0a0a] text-white border border-[#0a0a0a] transition-colors duration-200 hover:bg-transparent hover:text-[#0a0a0a] shrink-0"
                style={{ borderRadius: "2px" }}
              >
                Contact us
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
