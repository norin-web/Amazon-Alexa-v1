import { motion } from "motion/react";
import { Link } from "react-router";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";

import teamPhoto from "../../imports/xbig_99bbb64fdbac5034e839ae976b9c3f84.jpeg";
import officePhoto from "../../imports/1580740251LfwTm.jpg";

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

const h2Style = (light = false): React.CSSProperties => ({
  fontFamily: "'Archivo', sans-serif",
  fontWeight: 800,
  fontSize: "clamp(1.875rem, 4vw, 3.25rem)",
  textTransform: "uppercase",
  letterSpacing: "-0.025em",
  lineHeight: 0.97,
  color: light ? "#ffffff" : "#0a0a0a",
});

const bodyStyle = (light = false, maxWidth?: string): React.CSSProperties => ({
  fontSize: "16px",
  lineHeight: 1.72,
  color: light ? "#6C8794" : "#435A66",
  maxWidth: maxWidth ?? "none",
});

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

export default function About() {
  return (
    <div className="overflow-x-hidden bg-white text-[#0a0a0a]">

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white pt-32 md:pt-40 pb-24 md:pb-32 px-6 md:px-10 lg:px-16">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Eyebrow>About aqua eco</Eyebrow>
            <h1
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.5rem, 7vw, 5.75rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#ffffff",
                marginBottom: "32px",
                maxWidth: "860px",
              }}
            >
              A focused team<br />with long-term<br />experience
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#6C8794",
                maxWidth: "600px",
              }}
            >
              We are a small, experienced technology team focused on building, launching,
              and supporting mobile applications and digital products. For more than 10 years,
              we have worked across mobile development, product design, technical implementation,
              publishing, maintenance, and brand-related support. During that time, our team
              has contributed to more than 200 projects across a broad range of consumer
              technology categories.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-16 pb-0">
        <div className="max-w-[1440px] mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderTop: "1px solid #DCEAF1" }}
          >
            {[
              { value: "10+", label: "Years of experience" },
              { value: "200+", label: "Projects completed" },
              { value: "Full cycle", label: "Concept to launch" },
              { value: "Direct", label: "No communication layers" },
            ].map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div
                  className="py-10 md:py-12"
                  style={{
                    borderLeft: i > 0 ? "1px solid #DCEAF1" : "none",
                    paddingLeft: i > 0 ? "clamp(16px, 2.5vw, 36px)" : "0",
                    paddingRight: "clamp(16px, 2.5vw, 36px)",
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.025em",
                      lineHeight: 1,
                      color: "#0a0a0a",
                      marginBottom: "8px",
                    }}
                  >
                    {s.value}
                  </p>
                  <p
                    style={{
                      fontSize: "12px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      color: "#6C8794",
                    }}
                  >
                    {s.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── FROM CONCEPT TO LONG-TERM SUPPORT ───────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <Reveal>
              <Eyebrow>From concept to long-term support</Eyebrow>
              <h2 style={{ ...h2Style(), marginBottom: "28px", maxWidth: "520px" }}>
                Full lifecycle.<br />Every stage.
              </h2>
              <div className="space-y-5" style={{ borderTop: "1px solid #DCEAF1", paddingTop: "32px" }}>
                <p style={bodyStyle(false, "520px")}>
                  Our work covers the full lifecycle of a mobile product. We help transform early
                  concepts into structured applications, develop and refine functionality, prepare
                  products for distribution, support releases and updates, and continue maintaining
                  products as platform requirements and user expectations change.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  Our size allows us to stay close to every product we work on. Instead of
                  separating development, product thinking, and ongoing support into isolated
                  processes, we approach each project as a complete digital product —
                  considering how it is designed, how it works, how it is distributed, how
                  users interact with it, and how it should evolve after launch.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div style={{ paddingTop: "68px" }}>
                <p
                  style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    color: "#6C8794",
                    marginBottom: "16px",
                  }}
                >
                  Our experience includes
                </p>
                <div style={{ borderTop: "1px solid #DCEAF1" }}>
                  {capabilities.map((cap, i) => (
                    <div
                      key={i}
                      className="flex gap-5 items-start py-4"
                      style={{ borderBottom: "1px solid #DCEAF1" }}
                    >
                      <span
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 700,
                          fontSize: "10px",
                          letterSpacing: "0.06em",
                          color: "#22BFEE",
                          minWidth: "22px",
                          paddingTop: "3px",
                          flexShrink: 0,
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p style={{ fontSize: "14px", lineHeight: 1.65, color: "#0a0a0a" }}>{cap}</p>
                    </div>
                  ))}
                </div>
                <p style={{ ...bodyStyle(false, "520px"), marginTop: "20px" }}>
                  We work with both new product concepts and existing applications that need
                  further development, modernization, or long-term technical support.
                </p>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── EXPERIENCE ACROSS CATEGORIES ────────────────────────────────────── */}
      <section className="bg-[#EDF6FB] px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-16">
            <Eyebrow>Experience across different product categories</Eyebrow>
            <h2 style={{ ...h2Style(), maxWidth: "640px" }}>
              Broad experience.<br />Deep involvement.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <Reveal>
              <div className="space-y-5" style={{ borderTop: "1px solid #DCEAF1", paddingTop: "32px" }}>
                <p style={bodyStyle(false, "520px")}>
                  Over the years, we have worked on products in areas including utilities,
                  productivity, artificial intelligence, health and wellness, media, audio,
                  smart devices, connected products, and consumer technology.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  This variety has given us experience with projects that require more than
                  traditional mobile development. Modern applications often need to interact
                  with external devices, third-party services, APIs, platform ecosystems,
                  subscriptions, cloud infrastructure, and established technology brands.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  For those projects, our role extends beyond writing software. We help structure
                  the complete product experience and make sure its technical implementation,
                  presentation, distribution, and continued development remain consistent.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-px" style={{ borderTop: "1px solid #DCEAF1", paddingTop: "32px" }}>
                {[
                  "Utilities",
                  "Productivity",
                  "Artificial intelligence",
                  "Health & wellness",
                  "Media",
                  "Audio",
                  "Smart devices",
                  "Connected products",
                  "Consumer technology",
                ].map((cat) => (
                  <div key={cat} className="flex items-center gap-3 py-3">
                    <span
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "999px",
                        background: "#22BFEE",
                        flexShrink: 0,
                      }}
                    />
                    <p style={{ fontSize: "14px", color: "#0a0a0a", lineHeight: 1.4 }}>{cat}</p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── TEAM PHOTO ───────────────────────────────────────────────────────── */}
      <section className="bg-white">
        <Reveal>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-8">
            <Eyebrow>Our team</Eyebrow>
            <h2 style={{ ...h2Style(), maxWidth: "540px" }}>
              People behind<br />the product
            </h2>
          </div>

          <div className="w-full overflow-hidden" style={{ aspectRatio: "16/7", minHeight: "320px" }}>
            <img
              src="/images/team-photo.jpg"
              alt="aqua eco team"
              className="w-full h-full object-cover object-top"
            />
          </div>

          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 py-12">
            <p style={bodyStyle(false, "640px")}>
              After more than a decade of work and over 200 completed and supported projects,
              our focus remains the same: building reliable digital products, maintaining them
              responsibly, and creating long-term working relationships around the technology
              we develop.
            </p>
          </div>
        </Reveal>
      </section>

      {/* ── CONNECTED PRODUCTS ───────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-16">
            <Eyebrow light>Connected products and emerging ecosystems</Eyebrow>
            <h2 style={{ ...h2Style(true), maxWidth: "720px" }}>
              A growing focus<br />area of our work
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <Reveal>
              <div className="space-y-5" style={{ borderTop: "1px solid #10202A", paddingTop: "36px" }}>
                <p style={bodyStyle(true, "520px")}>
                  A growing part of our work is focused on applications that interact with
                  connected devices and established technology ecosystems.
                </p>
                <p style={bodyStyle(true, "520px")}>
                  Our current work includes projects involving Alexa-compatible audio and
                  connected-device experiences, with particular attention to companion
                  applications, device interaction, platform requirements, and appropriate
                  brand implementation.
                </p>
                <p style={bodyStyle(true, "520px")}>
                  We approach this type of work carefully, separating technical integration,
                  product functionality, and brand usage so that each element can be developed
                  and managed according to the requirements of the relevant platform and
                  technology provider.
                </p>
                <p style={bodyStyle(true, "520px")}>
                  As connected products continue to become a larger part of everyday technology,
                  we see mobile applications increasingly serving as the bridge between users,
                  hardware, cloud services, and digital ecosystems.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-0" style={{ borderTop: "1px solid #10202A", paddingTop: "36px" }}>
                {[
                  { label: "Focus", value: "Companion applications for connected hardware" },
                  { label: "Ecosystems", value: "Audio, smart devices, cloud services" },
                  { label: "Current work", value: "Alexa-compatible audio experiences" },
                  { label: "Approach", value: "Technical integration, product, brand — separated" },
                  { label: "Scope", value: "Device interaction, APIs, platform requirements" },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex items-start gap-8 py-5"
                    style={{ borderBottom: "1px solid #10202A" }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#6C8794",
                        minWidth: "88px",
                        paddingTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      {row.label}
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#ffffff" }}>{row.value}</p>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── MORE THAN DEVELOPMENT ────────────────────────────────────────────── */}
      <section className="bg-[#EDF6FB] px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-16">
            <Eyebrow>More than development</Eyebrow>
            <h2 style={{ ...h2Style(), maxWidth: "600px" }}>
              Launching is only<br />the beginning
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

            <Reveal>
              <div className="space-y-5" style={{ borderTop: "1px solid #DCEAF1", paddingTop: "36px" }}>
                <p style={bodyStyle(false, "520px")}>
                  Launching an application is only one stage of its lifecycle. Products need
                  continuous attention after release: operating systems change, store policies
                  evolve, APIs are updated, devices change, and users expect products to remain
                  reliable over time.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  For this reason, we place significant emphasis on long-term product support.
                  We continue working with projects after launch through maintenance, technical
                  improvements, compatibility updates, interface refinements, release management,
                  and the implementation of new functionality.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  For brand-related projects, we also help ensure that the way a product is
                  presented digitally remains consistent across the application itself, store
                  presence, user-facing materials, and future updates.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-0" style={{ borderTop: "1px solid #DCEAF1", paddingTop: "36px" }}>
                {[
                  {
                    n: "01",
                    title: "Practical decisions",
                    body: "We base every recommendation on real implementation experience — not theory. 200+ completed projects inform how we approach new ones.",
                  },
                  {
                    n: "02",
                    title: "Direct communication",
                    body: "No account managers, no relay layers. You work with the same team that builds the product.",
                  },
                  {
                    n: "03",
                    title: "Long-term thinking",
                    body: "We build software that is easier to maintain and develop over time. Stability and scalability are architectural decisions, not afterthoughts.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="flex gap-8 py-8"
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
                      {item.n}
                    </span>
                    <div>
                      <h3
                        style={{
                          fontFamily: "'Archivo', sans-serif",
                          fontWeight: 800,
                          fontSize: "0.95rem",
                          textTransform: "uppercase",
                          letterSpacing: "-0.005em",
                          color: "#0a0a0a",
                          marginBottom: "8px",
                        }}
                      >
                        {item.title}
                      </h3>
                      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#6C8794" }}>
                        {item.body}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* ── FOCUSED TEAM STATEMENT ───────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div style={{ borderTop: "1px solid #DCEAF1", paddingTop: "52px" }}>
              <Eyebrow>A focused team with long-term experience</Eyebrow>
              <blockquote
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3.5vw, 2.75rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.025em",
                  lineHeight: 0.97,
                  color: "#0a0a0a",
                  maxWidth: "820px",
                  marginBottom: "36px",
                }}
              >
                "We value practical solutions, clear communication, attention to detail, and
                products that can continue evolving long after their first release."
              </blockquote>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12" style={{ borderTop: "1px solid #DCEAF1", paddingTop: "40px" }}>
                <p style={bodyStyle(false, "520px")}>
                  We deliberately remain a relatively small technology team. This allows us to
                  maintain direct communication, make decisions quickly, and keep experienced
                  people involved throughout the lifecycle of a project rather than only during
                  its initial development.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  After more than a decade of work and over 200 completed and supported projects,
                  our focus remains the same: building reliable digital products, maintaining them
                  responsibly, and creating long-term working relationships around the technology
                  we develop.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-28 md:pb-40">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div style={{ borderTop: "1px solid #10202A", paddingTop: "52px" }}>
              <h2
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 5.5vw, 4.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.93,
                  color: "#ffffff",
                  maxWidth: "720px",
                  marginBottom: "40px",
                }}
              >
                Let's build something that lasts
              </h2>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#22BFEE] text-white border border-[#22BFEE] transition-colors duration-200 hover:bg-[#0B8FC4] hover:border-[#0B8FC4]"
                  style={{ borderRadius: "999px" }}
                >
                  Get in touch
                </Link>
                <Link
                  to="/app"
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-white border border-[#1B3542] transition-colors duration-200 hover:border-white"
                  style={{ borderRadius: "999px" }}
                >
                  See our iOS app
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </div>
  );
}
