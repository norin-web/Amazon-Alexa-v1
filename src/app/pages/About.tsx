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

function SectionH2({
  children,
  light = false,
  maxWidth,
}: {
  children: React.ReactNode;
  light?: boolean;
  maxWidth?: string;
}) {
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
        maxWidth: maxWidth ?? "none",
      }}
    >
      {children}
    </h2>
  );
}

const bodyStyle = (light = false, maxWidth?: string): React.CSSProperties => ({
  fontSize: "16px",
  lineHeight: 1.72,
  color: light ? "#8a8a8a" : "#5a5a5a",
  maxWidth: maxWidth ?? "none",
});

export default function About() {
  const stats = [
    { value: "10+", label: "Years of experience" },
    { value: "200+", label: "Projects completed" },
    { value: "Full cycle", label: "Concept to launch" },
    { value: "Direct", label: "No communication layers" },
  ];

  const services = [
    {
      title: "Mobile development",
      body: "We build and maintain iOS and Android applications — from early architecture decisions through release and ongoing updates.",
    },
    {
      title: "Platform operations",
      body: "App Store and Google Play preparation, release management, compliance with updated platform requirements, and post-launch support.",
    },
    {
      title: "Connected products",
      body: "Companion applications for hardware and technology ecosystems — device interaction, API integration, and appropriate brand implementation.",
    },
    {
      title: "Long-term support",
      body: "Continued technical involvement: performance improvements, redesign, modernization, compatibility updates, and iterative development.",
    },
  ];

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
              A focused team with long-term experience
            </h1>
            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.7,
                color: "#8a8a8a",
                maxWidth: "580px",
              }}
            >
              We are a small, experienced technology team focused on building, launching,
              and supporting mobile applications and digital products. For more than 10 years,
              we have worked across mobile development, product design, technical implementation,
              publishing, maintenance, and brand-related support.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── STATS ROW ────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-16 pb-0">
        <div className="max-w-[1440px] mx-auto">
          <div
            className="grid grid-cols-2 md:grid-cols-4"
            style={{ borderTop: "1px solid #e4e4e0" }}
          >
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 0.07}>
                <div
                  className="py-10 md:py-12"
                  style={{
                    borderLeft: i > 0 ? "1px solid #e4e4e0" : "none",
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
                      color: "#8a8a8a",
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

      {/* ── WHO WE ARE ───────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            <Reveal>
              <Eyebrow>Who we are</Eyebrow>
              <SectionH2 maxWidth="520px">
                Compact team.<br />Complete involvement.
              </SectionH2>

              <div
                className="mt-8 space-y-5"
                style={{ borderTop: "1px solid #e4e4e0", paddingTop: "32px" }}
              >
                <p style={bodyStyle(false, "520px")}>
                  Our size allows us to stay close to every product we work on. Instead of
                  separating development, product thinking, and ongoing support into isolated
                  processes, we approach each project as a complete digital product —
                  considering how it is designed, how it works, how it is distributed, how
                  users interact with it, and how it should evolve after launch.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  This allows us to maintain direct communication, make decisions quickly,
                  and keep experienced people involved throughout the lifecycle of a project
                  rather than only during its initial development.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  We work with both new product concepts and existing applications that need
                  further development, modernization, or long-term technical support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="overflow-hidden" style={{ aspectRatio: "4/3", borderRadius: "2px" }}>
                <ImageWithFallback
                  src={officePhoto}
                  alt="aqua eco office workspace"
                  className="w-full h-full object-cover"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── TEAM PHOTO ───────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f3]">
        <Reveal>
          <div className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-8">
            <Eyebrow>Our team</Eyebrow>
            <SectionH2 maxWidth="540px">
              People behind<br />the product
            </SectionH2>
          </div>

          <div className="w-full overflow-hidden" style={{ aspectRatio: "16/7", minHeight: "320px" }}>
            <ImageWithFallback
              src={teamPhoto}
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

      {/* ── SERVICES ─────────────────────────────────────────────────────────── */}
      <section className="bg-white px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-16">
            <Eyebrow>What we do</Eyebrow>
            <SectionH2 maxWidth="560px">
              Full lifecycle.<br />Every stage.
            </SectionH2>
          </Reveal>

          <div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
            style={{ borderTop: "1px solid #e4e4e0" }}
          >
            {services.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.07}>
                <div
                  className="py-10"
                  style={{
                    borderLeft: i > 0 ? "1px solid #e4e4e0" : "none",
                    paddingLeft: i > 0 ? "clamp(16px, 2vw, 32px)" : "0",
                    paddingRight: "clamp(16px, 2vw, 32px)",
                  }}
                >
                  <h3
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 800,
                      fontSize: "0.95rem",
                      textTransform: "uppercase",
                      letterSpacing: "-0.005em",
                      lineHeight: 1.1,
                      color: "#0a0a0a",
                      marginBottom: "12px",
                    }}
                  >
                    {s.title}
                  </h3>
                  <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#8a8a8a" }}>
                    {s.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONNECTED PRODUCTS & CURRENT WORK ───────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-16">
            <Eyebrow>Connected products & emerging ecosystems</Eyebrow>
            <SectionH2 light maxWidth="720px">
              A growing focus<br />area of our work
            </SectionH2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

            <Reveal>
              <div
                className="space-y-5"
                style={{ borderTop: "1px solid #1c1c1c", paddingTop: "36px" }}
              >
                <p style={bodyStyle(true, "520px")}>
                  Modern applications often need to interact with external devices, third-party
                  services, APIs, platform ecosystems, subscriptions, cloud infrastructure,
                  and established technology brands.
                </p>
                <p style={bodyStyle(true, "520px")}>
                  For those projects, our role extends beyond writing software. We help structure
                  the complete product experience and make sure its technical implementation,
                  presentation, distribution, and continued development remain consistent.
                </p>
                <p style={bodyStyle(true, "520px")}>
                  Our current work includes projects involving Alexa-compatible audio and
                  connected-device experiences, with particular attention to companion
                  applications, device interaction, platform requirements, and appropriate
                  brand implementation. We approach this carefully — separating technical
                  integration, product functionality, and brand usage so each element can be
                  developed according to the requirements of the relevant provider.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="space-y-0"
                style={{ borderTop: "1px solid #1c1c1c", paddingTop: "36px" }}
              >
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
                    style={{ borderBottom: "1px solid #1c1c1c" }}
                  >
                    <p
                      style={{
                        fontSize: "11px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.08em",
                        color: "#8a8a8a",
                        minWidth: "88px",
                        paddingTop: "2px",
                        flexShrink: 0,
                      }}
                    >
                      {row.label}
                    </p>
                    <p style={{ fontSize: "14px", lineHeight: 1.6, color: "#ffffff" }}>
                      {row.value}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── HOW WE WORK ──────────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f3] px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-20 md:pb-28">
        <div className="max-w-[1440px] mx-auto">

          <Reveal className="mb-16">
            <Eyebrow>How we work</Eyebrow>
            <SectionH2 maxWidth="560px">
              Flexible by design.<br />Reliable by choice.
            </SectionH2>
          </Reveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <Reveal>
              <div
                className="space-y-6"
                style={{ borderTop: "1px solid #e4e4e0", paddingTop: "36px" }}
              >
                <p style={bodyStyle(false, "520px")}>
                  Technology projects rarely remain unchanged from beginning to end. New user
                  feedback, business priorities, platform requirements, and technical limitations
                  can influence the product at any stage.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  For this reason, we build our work around flexibility and clear communication.
                  We provide realistic solutions, explain technical decisions in an understandable
                  way, and help clients choose the most effective path rather than simply following
                  an initial specification without question.
                </p>
                <p style={bodyStyle(false, "520px")}>
                  For early-stage concepts, we help transform initial requirements into a functional
                  and testable solution. For established applications, we focus on stability,
                  improvement, modernization, and long-term support.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div
                className="space-y-0"
                style={{ borderTop: "1px solid #e4e4e0", paddingTop: "36px" }}
              >
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
                      <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#8a8a8a" }}>
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

      {/* ── CTA ──────────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-28 md:pb-40">
        <div className="max-w-[1440px] mx-auto">
          <Reveal>
            <div style={{ borderTop: "1px solid #1c1c1c", paddingTop: "52px" }}>
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
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-white text-[#0a0a0a] border border-white transition-colors duration-200 hover:bg-transparent hover:text-white"
                  style={{ borderRadius: "2px" }}
                >
                  Get in touch
                </Link>
                <Link
                  to="/app"
                  className="inline-block px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-transparent text-white border border-[#2a2a2a] transition-colors duration-200 hover:border-white"
                  style={{ borderRadius: "2px" }}
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
