import { motion } from "motion/react";

import Screen1 from "../../imports/1320X28681/index";
import Screen2 from "../../imports/1320X28682/index";
import Screen3 from "../../imports/1320X28683/index";
import Screen4 from "../../imports/1320X28684/index";
import Screen5 from "../../imports/1320X28685/index";

const APP_STORE = "https://apps.apple.com/app/id6502056598";

const NATIVE_W = 1320;
const NATIVE_H = 2868;

/* ─── helpers ──────────────────────────────────────────────────────────────── */

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
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] }}
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
        fontSize: "11px",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: light ? "rgba(255,255,255,0.45)" : "#8a8a8a",
        marginBottom: "16px",
      }}
    >
      {children}
    </p>
  );
}

/* ─── data ────────────────────────────────────────────────────────────────── */

const stripScreens: React.ComponentType[] = [Screen1, Screen2, Screen3, Screen4, Screen5];

const features: {
  number: string;
  eyebrow: string;
  headline: string;
  body: string;
  Component: React.ComponentType;
  bg: string;
  textDark: boolean;
}[] = [
  {
    number: "01",
    eyebrow: "Home screen",
    headline: "Amazon Alexa\nSoundbar",
    body: "Your complete soundbar controller. Monitor connection status, adjust volume with precision, and access Apple Music playback — all from a single, clean interface.",
    Component: Screen1,
    bg: "#ffffff",
    textDark: true,
  },
  {
    number: "02",
    eyebrow: "Device connection",
    headline: "Connect\nDevices",
    body: "Discover and pair your SR-X40A soundbar in seconds. Real-time connection status, quick access to Sound Effect and LED Effect controls — always one tap away.",
    Component: Screen2,
    bg: "#0a0a0a",
    textDark: false,
  },
  {
    number: "03",
    eyebrow: "Playback",
    headline: "Control\nPlayback",
    body: "Full music player controls — play, pause, skip, and scrub through tracks. Album art, track info, and volume in one distraction-free interface.",
    Component: Screen3,
    bg: "#f5f5f3",
    textDark: true,
  },
  {
    number: "04",
    eyebrow: "LED control",
    headline: "Adjust\nLED Effects",
    body: "Choose from Rhythm, Cycle, Movie, Party, Christmas, Halloween, and more. Customize your soundbar's lighting to match any moment.",
    Component: Screen4,
    bg: "#0a0a0a",
    textDark: false,
  },
  {
    number: "05",
    eyebrow: "Streaming",
    headline: "Stream from\nFiles & Apps",
    body: "Browse and play directly from your device's music library. Connect to Files and your favorite apps — all audio sources accessible in one place.",
    Component: Screen5,
    bg: "#ffffff",
    textDark: true,
  },
];

/* ─── page ────────────────────────────────────────────────────────────────── */

export default function OurApp() {
  // Strip: target width ~257px (height clamp max 560px → 560 * 1320/2868 ≈ 257px)
  const STRIP_W = 257;
  const STRIP_SCALE = STRIP_W / NATIVE_W;

  // Feature screenshot: target max width 280px
  const FEAT_W = 280;
  const FEAT_SCALE = FEAT_W / NATIVE_W;

  return (
    <div className="overflow-x-hidden">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-[#0a0a0a] text-white px-6 md:px-10 lg:px-16 pt-36 md:pt-44 pb-24 md:pb-32">
        <div className="max-w-[1440px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <p
              style={{
                fontSize: "11px",
                fontWeight: 600,
                textTransform: "uppercase",
                letterSpacing: "0.14em",
                color: "rgba(255,255,255,0.4)",
                marginBottom: "28px",
              }}
            >
              aqua eco — iOS App
            </p>

            <h1
              style={{
                fontFamily: "'Archivo', sans-serif",
                fontWeight: 900,
                fontSize: "clamp(2.75rem, 8vw, 6.5rem)",
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                textTransform: "uppercase",
                color: "#ffffff",
                maxWidth: "820px",
                marginBottom: "32px",
              }}
            >
              Amazon Alexa<br />Soundbar
            </h1>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.55)",
                maxWidth: "480px",
                marginBottom: "44px",
              }}
            >
              Control your Alexa-compatible soundbar from iPhone. Volume, LED effects,
              playback, and streaming — one app for everything.
            </p>

            <a
              href={APP_STORE}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-white text-[#0a0a0a] border border-white transition-colors duration-200 hover:bg-transparent hover:text-white"
              style={{ borderRadius: "2px" }}
            >
              Download on the App Store
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── PROMO SCROLL STRIP ────────────────────────────────────────────── */}
      <section className="bg-white pt-20 md:pt-28 pb-16 md:pb-20">
        <div
          className="flex gap-3 md:gap-4 overflow-x-auto px-6 md:px-10 lg:px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {stripScreens.map((Component, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 flex flex-col gap-3"
            >
              {/* overflow container clips to clamp height */}
              <div
                style={{
                  height: "clamp(340px, 46vw, 560px)",
                  width: STRIP_W,
                  overflow: "hidden",
                  borderRadius: "2px",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: NATIVE_W,
                    height: NATIVE_H,
                    transform: `scale(${STRIP_SCALE})`,
                    transformOrigin: "top left",
                    pointerEvents: "none",
                  }}
                >
                  <Component />
                </div>
              </div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#8a8a8a",
                  flexShrink: 0,
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
            </motion.div>
          ))}
          <div className="shrink-0 w-6 md:w-10 lg:w-16" />
        </div>
      </section>

      {/* ── FEATURE SECTIONS ──────────────────────────────────────────────── */}
      {features.map((f, i) => {
        const reversed = i % 2 !== 0;
        const color = f.textDark ? "#0a0a0a" : "#ffffff";
        const muted = f.textDark ? "#8a8a8a" : "rgba(255,255,255,0.5)";
        const divider = f.textDark ? "#e4e4e0" : "#1c1c1c";

        return (
          <section key={f.number} style={{ backgroundColor: f.bg }}>
            <div
              className="max-w-[1440px] mx-auto px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-20 md:pb-28"
              style={{ borderTop: `1px solid ${divider}` }}
            >
              <div
                className={`flex flex-col ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              >
                {/* Screenshot */}
                <Reveal delay={0.05} className="w-full lg:w-5/12 flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.015 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    style={{
                      width: "clamp(160px, 24vw, 280px)",
                      aspectRatio: `${NATIVE_W}/${NATIVE_H}`,
                      overflow: "hidden",
                      borderRadius: "2px",
                      position: "relative",
                      boxShadow: f.textDark
                        ? "0 24px 64px rgba(0,0,0,0.12)"
                        : "0 24px 64px rgba(0,0,0,0.45)",
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
                      <f.Component />
                    </div>
                  </motion.div>
                </Reveal>

                {/* Text */}
                <Reveal delay={0.12} className="w-full lg:w-7/12">
                  <p
                    style={{
                      fontSize: "11px",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                      color: muted,
                      marginBottom: "8px",
                    }}
                  >
                    {f.number} / {f.eyebrow}
                  </p>

                  <h2
                    style={{
                      fontFamily: "'Archivo', sans-serif",
                      fontWeight: 900,
                      fontSize: "clamp(2.25rem, 5vw, 4rem)",
                      textTransform: "uppercase",
                      letterSpacing: "-0.03em",
                      lineHeight: 0.95,
                      color,
                      marginBottom: "28px",
                      whiteSpace: "pre-line",
                    }}
                  >
                    {f.headline}
                  </h2>

                  <div
                    style={{
                      width: "40px",
                      height: "1px",
                      backgroundColor: divider,
                      marginBottom: "28px",
                    }}
                  />

                  <p
                    style={{
                      fontSize: "16px",
                      lineHeight: 1.7,
                      color: muted,
                      maxWidth: "440px",
                    }}
                  >
                    {f.body}
                  </p>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      {/* ── PLATFORM INFO ─────────────────────────────────────────────────── */}
      <section className="bg-[#f5f5f3] px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32">
        <div
          className="max-w-[1440px] mx-auto"
          style={{ borderTop: "1px solid #e4e4e0", paddingTop: "52px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            <Reveal>
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
                Platform
              </p>
              <h2
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  color: "#0a0a0a",
                  marginBottom: "24px",
                }}
              >
                Designed<br />for iPhone
              </h2>
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#8a8a8a", maxWidth: "380px" }}>
                Built exclusively for iOS, making full use of Apple's platform to deliver
                a seamless, native experience for your Amazon Alexa-compatible soundbar.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="space-y-0">
                {[
                  { label: "Requires", value: "iOS 15.0 or later" },
                  { label: "Compatible with", value: "iPhone, iPad" },
                  { label: "Language", value: "English" },
                  { label: "Price", value: "Free" },
                  { label: "Developer", value: "aqua eco d.o.o." },
                ].map((row, i, arr) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-baseline py-4"
                    style={{
                      borderTop: "1px solid #e4e4e0",
                      borderBottom: i === arr.length - 1 ? "1px solid #e4e4e0" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#8a8a8a",
                      }}
                    >
                      {row.label}
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#0a0a0a" }}>
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <a
                  href={APP_STORE}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#0a0a0a] text-white border border-[#0a0a0a] transition-colors duration-200 hover:bg-transparent hover:text-[#0a0a0a]"
                  style={{ borderRadius: "2px" }}
                >
                  Get it free on the App Store
                </a>
              </div>
            </Reveal>

          </div>
        </div>
      </section>
    </div>
  );
}
