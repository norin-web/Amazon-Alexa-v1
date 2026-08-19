import { motion } from "motion/react";

import Screen1 from "../../imports/1320X28681/index";
import Screen2 from "../../imports/1320X28682/index";
import Screen3 from "../../imports/1320X28683/index";
import Screen4 from "../../imports/1320X28684/index";
import Screen5 from "../../imports/1320X28685/index";

const APP_STORE = "https://apps.apple.com/app/id6797539419";

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

type StripItem = { Component?: React.ComponentType; imageSrc?: string };
type Feature = {
  number: string;
  eyebrow: string;
  headline: string;
  body: string;
  Component?: React.ComponentType;
  imageSrc?: string;
  bg: string;
  textDark: boolean;
};

const stripItems: StripItem[] = [
  { imageSrc: "/images/strip1.png" },
  { imageSrc: "/images/strip2.png" },
  { imageSrc: "/images/strip3.png" },
  { imageSrc: "/images/strip4.png" },
  { imageSrc: "/images/strip5.png" },
];

const features: Feature[] = [
  {
    number: "01",
    eyebrow: "Home screen",
    headline: "Amazon Alexa\nSoundbar",
    body: "Your complete soundbar controller. Monitor connection status, adjust volume with precision, and access Apple Music playback — all from a single, clean interface.",
    imageSrc: "/images/screen1.png",
    bg: "#ffffff",
    textDark: true,
  },
  {
    number: "02",
    eyebrow: "Device connection",
    headline: "Connect\nDevices",
    body: "Discover and pair your SR-X40A soundbar in seconds. Real-time connection status, quick access to Sound Effect and LED Effect controls — always one tap away.",
    imageSrc: "/images/screen2.png",
    bg: "#0a0a0a",
    textDark: false,
  },
  {
    number: "03",
    eyebrow: "Playback",
    headline: "Control\nPlayback",
    body: "Full music player controls — play, pause, skip, and scrub through tracks. Album art, track info, and volume in one distraction-free interface.",
    imageSrc: "/images/screen3.png",
    bg: "#EDF6FB",
    textDark: true,
  },
  {
    number: "04",
    eyebrow: "LED control",
    headline: "Adjust\nLED Effects",
    body: "Choose from Rhythm, Cycle, Movie, Party, Christmas, Halloween, and more. Customize your soundbar's lighting to match any moment.",
    imageSrc: "/images/screen4.png",
    bg: "#0a0a0a",
    textDark: false,
  },
  {
    number: "05",
    eyebrow: "Streaming",
    headline: "Stream from\nFiles & Apps",
    body: "Browse and play directly from your device's music library. Connect to Files and your favorite apps — all audio sources accessible in one place.",
    imageSrc: "/images/screen5.png",
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
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">

            {/* Left: text */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="flex-1"
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
                className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#22BFEE] text-white border border-[#22BFEE] transition-colors duration-200 hover:bg-[#0B8FC4] hover:border-[#0B8FC4] hover:text-white"
                style={{ borderRadius: "999px" }}
              >
                Download on the App Store
              </a>
            </motion.div>

            {/* Right: Alexa device image */}
            <motion.div
              initial={{ opacity: 0, x: 32 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.0, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:flex justify-center items-center flex-shrink-0"
            >
              <img
                src="/images/alexa-device.png"
                alt="Amazon Alexa"
                style={{ width: "360px", maxWidth: "100%", display: "block" }}
              />
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── PROMO SCROLL STRIP ────────────────────────────────────────────── */}
      <section className="bg-white pt-20 md:pt-28 pb-16 md:pb-20">
        <div
          className="flex items-end justify-center gap-3 md:gap-4 overflow-x-auto px-6 md:px-10 lg:px-16"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {stripItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="shrink-0 flex flex-col gap-3"
            >
              <div
                style={{
                  height: "clamp(340px, 46vw, 560px)",
                  width: STRIP_W,
                  overflow: "hidden",
                  borderRadius: "2px",
                  position: "relative",
                }}
              >
                {item.imageSrc ? (
                  <img
                    src={item.imageSrc}
                    alt={`Screen ${i + 1}`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  />
                ) : item.Component ? (
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
                    <item.Component />
                  </div>
                ) : null}
              </div>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  color: "#6C8794",
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
        const muted = f.textDark ? "#6C8794" : "rgba(255,255,255,0.5)";
        const divider = f.textDark ? "#DCEAF1" : "#10202A";

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
                      borderRadius: "56px",
                      position: "relative",
                      boxShadow: f.textDark
                        ? "0 24px 64px rgba(0,0,0,0.12)"
                        : "0 24px 64px rgba(0,0,0,0.45)",
                    }}
                  >
                    {f.imageSrc ? (
                      <img
                        src={f.imageSrc}
                        alt={f.eyebrow}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                      />
                    ) : f.Component ? (
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
                    ) : null}
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
      <section className="bg-[#EDF6FB] px-6 md:px-10 lg:px-16 pt-24 md:pt-32 pb-24 md:pb-32">
        <div
          className="max-w-[1440px] mx-auto"
          style={{ borderTop: "1px solid #DCEAF1", paddingTop: "52px" }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            <Reveal>
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "#6C8794",
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
              <p style={{ fontSize: "15px", lineHeight: 1.7, color: "#6C8794", maxWidth: "380px" }}>
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
                      borderTop: "1px solid #DCEAF1",
                      borderBottom: i === arr.length - 1 ? "1px solid #DCEAF1" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "#6C8794",
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
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-[#22BFEE] text-white border border-[#22BFEE] transition-colors duration-200 hover:bg-[#0B8FC4] hover:border-[#0B8FC4] hover:text-white"
                  style={{ borderRadius: "999px" }}
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
