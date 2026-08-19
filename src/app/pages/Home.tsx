import { motion } from "motion/react";
import { Link } from "react-router";

const CONTACT = "/contact";

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
      viewport={{ once: true, margin: "-48px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p
      style={{
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "#8a8a8a",
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

function SectionH2({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <h2
      style={{
        fontFamily: "'Archivo', sans-serif",
        fontWeight: 800,
        fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
        textTransform: "uppercase",
        letterSpacing: "-0.025em",
        lineHeight: 0.97,
        color: light ? "#ffffff" : "#0a0a0a",
      }}
    >
      {children}
    </h2>
  );
}

/* ─── page ──────────────────────────────────────────────────────────────────── */

export default function Home() {
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

  const workAreas = [
    {
      label: "New products",
      headline: "Concept to launch",
      body: "We help transform early ideas into structured, functional applications — design, development, and distribution handled as a single process.",
      img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      label: "Existing products",
      headline: "Modernization & support",
      body: "We continue development on established applications — improving functionality, adapting to platform changes, and maintaining quality over time.",
      img: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
    {
      label: "Connected ecosystems",
      headline: "Devices & platforms",
      body: "We build companion apps for connected hardware — integrating with audio systems, smart devices, and established technology ecosystems.",
      img: "https://images.unsplash.com/photo-1545454675-3531b543be5d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
    },
  ];

  const lifecycle = [
    {
      n: "01",
      title: "Concept & structure",
      body: "Early requirements transformed into a functional, testable product plan.",
    },
    {
      n: "02",
      title: "Development & design",
      body: "Technical implementation, interface design, and refinement through to first release.",
    },
    {
      n: "03",
      title: "Publishing & distribution",
      body: "App Store preparation, release management, and international distribution.",
    },
    {
      n: "04",
      title: "Long-term support",
      body: "Ongoing maintenance, OS updates, API changes, and iterative improvement after launch.",
    },
  ];

  return (
    <div className="overflow-x-hidden bg-[#0a0a0a]">

      {/* ────────────────────────────────────────────────────────────────────────
          1. HERO — typographic, no image
         ─────────────────────────────────────────────────────────────────────── */}
      <section
        className="relative flex flex-col justify-end bg-[#0a0a0a]"
        style={{ height: "100vh", minHeight: "640px" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(ellipse 80% 60% at 65% 20%, rgba(255,255,255,0.03) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10 max-w-[1440px] mx-auto w-full px-6 md:px-10 lg:px-16 pb-16 md:pb-20 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
            style={{ maxWidth: "760px" }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.35)",
                marginBottom: "24px",
              }}
            >
              aqua eco — Mobile Technology
            </p>

            <h1
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(3.25rem, 9.5vw, 7.5rem)",
                lineHeight: 0.91,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "36px",
              }}
            >
              We build<br />digital<br />products.
            </h1>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.5)",
                maxWidth: "460px",
                marginBottom: "52px",
              }}
            >
              A focused mobile technology team. More than 10 years of experience
              across 200+ projects in consumer technology.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to={CONTACT}
                className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-white text-[#0a0a0a] border border-white transition-colors duration-200 hover:bg-transparent hover:text-white"
                style={{ borderRadius: "2px" }}
              >
                Get in touch
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-white border border-[#2a2a2a] transition-colors duration-200 hover:border-white"
                style={{ borderRadius: "2px" }}
              >
                About us
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-px bg-[#1c1c1c]" />
      </section>

      {/* ────────────────────────────────────────────────────────────────────────
          2. STATS — 3 facts
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-24 pb-24 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {[
              {
                stat: "10+",
                label: "Years in mobile development",
                body: "More than a decade building, shipping, and supporting digital products across consumer technology.",
              },
              {
                stat: "200+",
                label: "Projects delivered",
                body: "Products across utilities, health, AI, media, audio, smart devices, and connected ecosystems.",
              },
              {
                stat: "Full cycle",
                label: "Concept to ongoing support",
                body: "We stay involved beyond launch — through maintenance, updates, and continued evolution.",
              },
            ].map((item, i) => (
              <Reveal key={item.stat} delay={i * 0.09}>
                <div
                  className="py-10 md:py-12"
                  style={{
                    borderTop: "1px solid #1c1c1c",
                    paddingRight: i < 2 ? "clamp(24px, 3vw, 56px)" : "0",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2.25rem, 5vw, 3.5rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      color: "#ffffff",
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
                      color: "#8a8a8a",
                      marginBottom: "14px",
                    }}
                  >
                    {item.label}
                  </p>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#8a8a8a", maxWidth: "280px" }}>
                    {item.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────
          3. CAPABILITIES — 9-item grid
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f3] px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-14">
            <Eyebrow>From concept to long-term support</Eyebrow>
            <SectionH2>What we do</SectionH2>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: "1px solid #e4e4e0" }}
          >
            {capabilities.map((cap, i) => (
              <Reveal key={i} delay={(i % 3) * 0.06}>
                <div
                  className="flex gap-5 items-start py-7"
                  style={{
                    borderBottom: "1px solid #e4e4e0",
                    borderLeft: i % 3 > 0 ? "1px solid #e4e4e0" : "none",
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
                      color: "#c4c4c0",
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

      {/* ────────────────────────────────────────────────────────────────────────
          4. WORK AREAS — 3 card columns
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-14">
            <Eyebrow>Experience across categories</Eyebrow>
            <SectionH2>
              Three areas<br />of focus
            </SectionH2>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-3"
            style={{ borderTop: "1px solid #e4e4e0" }}
          >
            {workAreas.map((area, i) => (
              <Reveal key={area.label} delay={i * 0.07}>
                <article
                  className="group bg-white"
                  style={{
                    borderLeft: i > 0 ? "1px solid #e4e4e0" : "none",
                    paddingLeft: i > 0 ? "clamp(20px, 2.5vw, 40px)" : "0",
                    paddingRight: i < 2 ? "clamp(20px, 2.5vw, 40px)" : "0",
                  }}
                >
                  <div
                    className="overflow-hidden"
                    style={{ aspectRatio: "4/3", marginBottom: "24px" }}
                  >
                    <img
                      src={area.img}
                      alt={area.label}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                  <Eyebrow>{area.label}</Eyebrow>
                  <h3
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(1.1rem, 1.8vw, 1.35rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.015em",
                      lineHeight: 1.05,
                      color: "#0a0a0a",
                      marginBottom: "12px",
                    }}
                  >
                    {area.headline}
                  </h3>
                  <p
                    style={{
                      fontSize: "14px",
                      lineHeight: 1.65,
                      color: "#8a8a8a",
                      marginBottom: "28px",
                    }}
                  >
                    {area.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────
          5. CONNECTED PRODUCTS — dark, editorial
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <Reveal>
              <Eyebrow>Connected products & emerging ecosystems</Eyebrow>
              <SectionH2 light>
                The bridge<br />between devices<br />and users
              </SectionH2>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="space-y-5"
                style={{ borderTop: "1px solid #1c1c1c", paddingTop: "36px" }}
              >
                <p style={{ fontSize: "16px", lineHeight: 1.72, color: "#8a8a8a", maxWidth: "520px" }}>
                  A growing part of our work involves applications that interact with connected
                  devices and established technology ecosystems — companion applications, device
                  interaction, platform requirements, and appropriate brand implementation.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.72, color: "#8a8a8a", maxWidth: "520px" }}>
                  Our current work includes projects involving Alexa-compatible audio and
                  connected-device experiences. We approach this carefully — separating
                  technical integration, product functionality, and brand usage so each
                  element meets the requirements of the relevant platform and technology provider.
                </p>
                <p style={{ fontSize: "16px", lineHeight: 1.72, color: "#8a8a8a", maxWidth: "520px" }}>
                  As connected products become a larger part of everyday technology, mobile
                  applications increasingly serve as the bridge between users, hardware,
                  cloud services, and digital ecosystems.
                </p>
              </div>

              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  to="/app"
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-white border border-[#2a2a2a] transition-colors duration-200 hover:border-white"
                  style={{ borderRadius: "2px" }}
                >
                  See our iOS app
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────
          6. PRODUCT LIFECYCLE — left text + right numbered list
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <Reveal>
              <Eyebrow>More than development</Eyebrow>
              <SectionH2>
                Launching is only<br />the beginning
              </SectionH2>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: 1.72,
                  color: "#5a5a5a",
                  maxWidth: "440px",
                  marginTop: "28px",
                }}
              >
                Products need continuous attention after release. Operating systems change,
                store policies evolve, APIs are updated, devices change — users expect
                reliability over time. We place significant emphasis on long-term support.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ borderTop: "1px solid #e4e4e0" }}>
                {lifecycle.map((step) => (
                  <div
                    key={step.n}
                    className="flex gap-8 items-start py-7"
                    style={{ borderBottom: "1px solid #e4e4e0" }}
                  >
                    <span
                      style={{
                        fontFamily: "'Archivo', sans-serif",
                        fontWeight: 700,
                        fontSize: "11px",
                        letterSpacing: "0.06em",
                        color: "#8a8a8a",
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
                      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#8a8a8a" }}>
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

      {/* ────────────────────────────────────────────────────────────────────────
          7. STATEMENT — large editorial quote
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f3] px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div style={{ borderTop: "1px solid #e4e4e0", paddingTop: "52px" }}>
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
                  color: "#8a8a8a",
                }}
              >
                aqua eco — in mobile development since 2014
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────────────────────
          8. CTA — get in touch
         ─────────────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-36">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-end">

            <Reveal>
              <Eyebrow>Work with us</Eyebrow>
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
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.65,
                  color: "#8a8a8a",
                  marginBottom: "32px",
                }}
              >
                We work with both new product concepts and existing applications that need
                further development, modernization, or long-term technical support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to={CONTACT}
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-white text-[#0a0a0a] border border-white transition-colors duration-200 hover:bg-transparent hover:text-white"
                  style={{ borderRadius: "2px" }}
                >
                  Get in touch
                </Link>
                <Link
                  to="/about"
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-white border border-[#2a2a2a] transition-colors duration-200 hover:border-white"
                  style={{ borderRadius: "2px" }}
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
