import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { useRef } from "react";

import Screen1 from "../../imports/1320X28681/index";
import Screen3 from "../../imports/1320X28683/index";
import Screen4 from "../../imports/1320X28684/index";

const CONTACT = "/contact";
const APP_STORE = "https://apps.apple.com/app/id6797539419";
const NATIVE_W = 1320;
const NATIVE_H = 2868;

/* ─── helpers ─────────────────────────────────────────────────────────────── */

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
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: light ? "rgba(255,255,255,0.45)" : "#6C8794",
        marginBottom: "16px",
      }}
    >
      <span style={{ width: "6px", height: "6px", borderRadius: "999px", background: "#22BFEE", flexShrink: 0 }} />
      {children}
    </p>
  );
}

/* ─── data ────────────────────────────────────────────────────────────────── */

const features = [
  {
    n: "01",
    title: "Volume Control",
    body: "Precise volume adjustment for your Alexa-compatible soundbar, right from your iPhone.",
  },
  {
    n: "02",
    title: "LED Effects",
    body: "Choose from Rhythm, Cycle, Movie, Party, Christmas, Halloween, and more lighting modes.",
  },
  {
    n: "03",
    title: "Playback Control",
    body: "Full transport controls — play, pause, skip, and scrub with album art and track info.",
  },
  {
    n: "04",
    title: "Stream from Files",
    body: "Browse and play directly from your iPhone's music library and Files app.",
  },
];

const lifecycle = [
  { n: "01", title: "Concept & structure", body: "Early requirements transformed into a functional, testable product plan." },
  { n: "02", title: "Development & design", body: "Technical implementation, interface design, and refinement through to first release." },
  { n: "03", title: "Publishing & distribution", body: "App Store preparation, release management, and international distribution." },
  { n: "04", title: "Long-term support", body: "Ongoing maintenance, OS updates, and iterative improvement after launch." },
];

const capabilities = [
  "Mobile application development and technical implementation",
  "Product and interface design",
  "Connected-device and companion app experiences",
  "Application publishing and release support",
  "Long-term maintenance and product updates",
  "Technical adaptation to changing platform requirements",
  "Brand implementation and digital brand support",
  "Product localization and international distribution",
  "Quality assurance and ongoing technical monitoring",
];

/* ─── page ────────────────────────────────────────────────────────────────── */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const phoneY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const PHONE_W = 200;
  const PHONE_SCALE = PHONE_W / NATIVE_W;
  const PHONE_H = Math.round(PHONE_W * (NATIVE_H / NATIVE_W));

  const FEAT_W = 240;
  const FEAT_SCALE = FEAT_W / NATIVE_W;
  const FEAT_H = Math.round(FEAT_W * (NATIVE_H / NATIVE_W));

  return (
    <div className="overflow-x-hidden">

      {/* ═══════════════════════════════════════════════════════════════════════
          1. HERO — blue-dark gradient, phone on right
         ══════════════════════════════════════════════════════════════════════ */}
      <section
        ref={heroRef}
        className="relative min-h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(130deg, #061720 0%, #092231 35%, #0c2d40 60%, #0e3954 100%)",
        }}
      >
        {/* Blue radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 65% 70% at 90% 10%, rgba(34,191,238,0.22) 0%, transparent 60%), radial-gradient(ellipse 40% 40% at 50% 95%, rgba(34,191,238,0.07) 0%, transparent 60%)",
          }}
        />

        {/* Subtle dot grid */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(rgba(34,191,238,0.10) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            maskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
            WebkitMaskImage: "radial-gradient(ellipse 80% 80% at 50% 50%, black 20%, transparent 100%)",
          }}
        />

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-10 lg:px-16 pt-32 pb-24 lg:py-0"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 lg:gap-20 items-center lg:min-h-screen">

            {/* Left: text */}
            <div className="lg:py-32">
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.38)",
                  marginBottom: "28px",
                }}
              >
                aqua eco — Mobile Technology
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(3rem, 8.5vw, 7rem)",
                  lineHeight: 0.91,
                  letterSpacing: "-0.03em",
                  textTransform: "uppercase",
                  color: "#ffffff",
                  marginBottom: "36px",
                }}
              >
                We build<br />digital<br />products.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
                style={{
                  fontSize: "17px",
                  lineHeight: 1.65,
                  color: "rgba(255,255,255,0.52)",
                  maxWidth: "460px",
                  marginBottom: "52px",
                }}
              >
                A focused mobile technology team. More than 10 years of experience
                across 200+ projects in consumer technology.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-wrap gap-4"
              >
                <Link
                  to={CONTACT}
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#22BFEE] text-white border border-[#22BFEE] transition-colors duration-200 hover:bg-[#0B8FC4] hover:border-[#0B8FC4]"
                  style={{ borderRadius: "999px" }}
                >
                  Get in touch
                </Link>
                <Link
                  to="/about"
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-white border border-white/20 transition-colors duration-200 hover:border-white/60"
                  style={{ borderRadius: "999px" }}
                >
                  About us
                </Link>
              </motion.div>
            </div>

            {/* Right: phone mockup */}
            <motion.div
              className="hidden lg:flex items-center justify-center self-center py-32"
              initial={{ opacity: 0, x: 36, y: 12 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              style={{ y: phoneY }}
            >
              {/* Glow behind phone */}
              <div
                className="absolute pointer-events-none"
                style={{
                  width: PHONE_W + 100,
                  height: PHONE_H + 60,
                  background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(34,191,238,0.18) 0%, transparent 70%)",
                  borderRadius: "50%",
                }}
              />
              <div
                style={{
                  width: PHONE_W,
                  height: PHONE_H,
                  overflow: "hidden",
                  borderRadius: "28px",
                  position: "relative",
                  boxShadow: "0 0 0 1px rgba(255,255,255,0.08), 0 40px 80px rgba(0,0,0,0.5)",
                  background: "#000",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/images/screen1.png"
                  alt="Amazon Alexa Soundbar App"
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                />
              </div>
            </motion.div>

          </div>
        </motion.div>

        {/* Bottom fade to next section */}
        <div
          className="absolute bottom-0 left-0 right-0 h-24 pointer-events-none"
          style={{ background: "linear-gradient(to bottom, transparent, #0a0a0a)" }}
        />
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          2. STATS — 3 numbers on dark
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-16 pb-20 md:pb-24">
        <div className="max-w-[1440px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: "1px solid #10202A" }}
          >
            {[
              { stat: "10+", label: "Years in mobile", body: "More than a decade building, shipping, and supporting digital products." },
              { stat: "200+", label: "Projects delivered", body: "Products across utilities, health, AI, media, audio, and smart devices." },
              { stat: "Full cycle", label: "Concept to support", body: "We stay involved beyond launch — through maintenance and continued evolution." },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.08}>
                <div
                  className="py-10 md:py-12"
                  style={{
                    paddingRight: i < 2 ? "clamp(20px, 3vw, 52px)" : "0",
                    borderRight: i < 2 ? "1px solid #10202A" : "none",
                    paddingLeft: i > 0 ? "clamp(20px, 3vw, 52px)" : "0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2rem, 4.5vw, 3.25rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: "#22BFEE",
                      marginBottom: "8px",
                    }}
                  >
                    {item.stat}
                  </p>
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#6C8794",
                      marginBottom: "12px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#435A66", maxWidth: "260px" }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          3. APP FEATURE — split layout showcasing the soundbar app
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDF6FB] px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28 overflow-hidden">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Text */}
            <Reveal>
              <Eyebrow>Our latest product</Eyebrow>
              <h2
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5vw, 4rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.93,
                  color: "#0a0a0a",
                  marginBottom: "24px",
                }}
              >
                Amazon Alexa<br />Soundbar
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.72,
                  color: "#435A66",
                  maxWidth: "420px",
                  marginBottom: "20px",
                }}
              >
                A native iOS companion app for Alexa-compatible soundbars. Volume,
                LED lighting effects, music playback, and streaming — all from one
                clean interface.
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.72,
                  color: "#435A66",
                  maxWidth: "420px",
                  marginBottom: "40px",
                }}
              >
                Connected over Wi-Fi. Free on the App Store.
                No subscriptions, no in-app purchases.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href={APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#22BFEE] text-white border border-[#22BFEE] transition-colors duration-200 hover:bg-[#0B8FC4] hover:border-[#0B8FC4]"
                  style={{ borderRadius: "999px" }}
                >
                  Download free
                </a>
                <Link
                  to="/app"
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-[#0a0a0a] border border-[#DCEAF1] transition-colors duration-200 hover:border-[#22BFEE]"
                  style={{ borderRadius: "999px" }}
                >
                  See all features
                </Link>
              </div>
            </Reveal>

            {/* Two phone screenshots */}
            <Reveal delay={0.12} className="relative flex justify-center lg:justify-end">
              <div className="flex gap-5 items-end">
                <motion.div
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.85, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: FEAT_W,
                    height: Math.round(FEAT_H * 0.72),
                    overflow: "hidden",
                    borderRadius: "24px",
                    position: "relative",
                    boxShadow: "0 24px 60px rgba(34,191,238,0.12), 0 0 0 1px #DCEAF1",
                    background: "#000",
                    flexShrink: 0,
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: NATIVE_W,
                      height: NATIVE_H,
                      transform: `scale(${FEAT_SCALE})`,
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                  >
                    <Screen3 />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 48 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    width: Math.round(FEAT_W * 0.82),
                    height: Math.round(FEAT_H * 0.58),
                    overflow: "hidden",
                    borderRadius: "20px",
                    position: "relative",
                    boxShadow: "0 16px 40px rgba(0,0,0,0.10), 0 0 0 1px #DCEAF1",
                    background: "#000",
                    flexShrink: 0,
                    marginBottom: "20px",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: NATIVE_W,
                      height: NATIVE_H,
                      transform: `scale(${Math.round(FEAT_W * 0.82) / NATIVE_W})`,
                      transformOrigin: "top left",
                      pointerEvents: "none",
                    }}
                  >
                    <Screen4 />
                  </div>
                </motion.div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          4. FEATURES GRID — 4 app capabilities, dark
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="mb-14">
            <Eyebrow light>App capabilities</Eyebrow>
            <h2
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.025em",
                lineHeight: 0.97,
                color: "#ffffff",
              }}
            >
              Everything in<br />one place
            </h2>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2"
            style={{ borderTop: "1px solid #10202A" }}
          >
            {features.map((f, i) => (
              <Reveal key={f.n} delay={(i % 2) * 0.08}>
                <div
                  className="py-8 md:py-10"
                  style={{
                    borderBottom: "1px solid #10202A",
                    borderRight: i % 2 === 0 ? "1px solid #10202A" : "none",
                    paddingRight: i % 2 === 0 ? "clamp(24px, 3vw, 52px)" : "0",
                    paddingLeft: i % 2 === 1 ? "clamp(24px, 3vw, 52px)" : "0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      fontSize: "10px",
                      letterSpacing: "0.08em",
                      color: "#22BFEE",
                      marginBottom: "14px",
                    }}
                  >
                    {f.n}
                  </p>
                  <h3
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.1rem, 2vw, 1.35rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.05,
                      color: "#ffffff",
                      marginBottom: "10px",
                    }}
                  >
                    {f.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6C8794", maxWidth: "340px" }}>
                    {f.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          5. CAPABILITIES — 3-col grid, pale blue
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDF6FB] px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <Reveal className="mb-14">
            <Eyebrow>From concept to long-term support</Eyebrow>
            <h2
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 800,
                fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
                textTransform: "uppercase",
                letterSpacing: "-0.025em",
                lineHeight: 0.97,
                color: "#0a0a0a",
              }}
            >
              What we do
            </h2>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: "1px solid #DCEAF1" }}
          >
            {capabilities.map((cap, i) => (
              <Reveal key={i} delay={(i % 3) * 0.05}>
                <div
                  className="flex gap-5 items-start py-6"
                  style={{
                    borderBottom: "1px solid #DCEAF1",
                    borderLeft: i % 3 > 0 ? "1px solid #DCEAF1" : "none",
                    paddingLeft: i % 3 > 0 ? "clamp(16px, 2vw, 32px)" : "0",
                    paddingRight: "clamp(16px, 2vw, 32px)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 700,
                      fontSize: "10px",
                      letterSpacing: "0.06em",
                      color: "#22BFEE",
                      minWidth: "24px",
                      paddingTop: "3px",
                      flexShrink: 0,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#0a0a0a" }}>{cap}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          6. PRODUCT LIFECYCLE — 4 steps, white
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-16 lg:gap-24 items-start">

            <Reveal>
              <Eyebrow>More than development</Eyebrow>
              <h2
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.97,
                  color: "#0a0a0a",
                  marginBottom: "24px",
                }}
              >
                Launching is only<br />the beginning
              </h2>
              <p style={{ fontSize: "16px", lineHeight: 1.72, color: "#435A66", maxWidth: "400px" }}>
                Products need continuous attention after release. Operating systems
                change, store policies evolve, APIs are updated. We place significant
                emphasis on long-term support.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ borderTop: "1px solid #DCEAF1" }}>
                {lifecycle.map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-8 items-start py-6"
                    style={{ borderBottom: "1px solid #DCEAF1" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        fontSize: "11px",
                        letterSpacing: "0.06em",
                        color: "#22BFEE",
                        paddingTop: "2px",
                        minWidth: "28px",
                        flexShrink: 0,
                      }}
                    >
                      {step.n}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          textTransform: "uppercase",
                          letterSpacing: "-0.005em",
                          lineHeight: 1.1,
                          color: "#0a0a0a",
                          marginBottom: "6px",
                        }}
                      >
                        {step.title}
                      </h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6C8794" }}>
                        {step.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          7. STATEMENT — large quote, pale blue
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#EDF6FB] px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div style={{ borderTop: "1px solid #DCEAF1", paddingTop: "52px" }}>
              <Eyebrow>Our approach</Eyebrow>
              <blockquote
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.75rem, 4.5vw, 3.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.97,
                  color: "#0a0a0a",
                  maxWidth: "860px",
                  marginBottom: "36px",
                }}
              >
                "Practical solutions, clear communication, attention to detail — products
                that keep evolving."
              </blockquote>
              <p
                style={{
                  fontSize: "12px",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  color: "#6C8794",
                }}
              >
                aqua eco — in mobile development since 2014
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════════
          8. CTA — get in touch
         ══════════════════════════════════════════════════════════════════════ */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-24 md:pb-36">
        <div className="max-w-[1440px] mx-auto">
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end"
            style={{ borderTop: "1px solid #10202A", paddingTop: "56px" }}
          >
            <Reveal>
              <Eyebrow light>Work with us</Eyebrow>
              <h2
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2.25rem, 6vw, 4.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.93,
                  color: "#ffffff",
                }}
              >
                Let's build<br />something<br />that lasts
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <p style={{ fontSize: "15px", lineHeight: 1.65, color: "#6C8794", marginBottom: "32px" }}>
                We work with both new product concepts and existing applications
                that need further development, modernization, or long-term support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={CONTACT}
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#22BFEE] text-white border border-[#22BFEE] transition-colors duration-200 hover:bg-[#0B8FC4] hover:border-[#0B8FC4]"
                  style={{ borderRadius: "999px" }}
                >
                  Get in touch
                </Link>
                <Link
                  to="/about"
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-white border border-[#1B3542] transition-colors duration-200 hover:border-white"
                  style={{ borderRadius: "999px" }}
                >
                  About us
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
