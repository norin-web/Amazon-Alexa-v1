import { motion } from "motion/react";

import Screen1 from "../../imports/1320X28681/index";
import Screen2 from "../../imports/1320X28682/index";
import Screen3 from "../../imports/1320X28683/index";
import Screen4 from "../../imports/1320X28684/index";
import Screen5 from "../../imports/1320X28685/index";

const APP_STORE = "https://apps.apple.com/app/id6502056598";
const NATIVE_W = 1320;
const NATIVE_H = 2868;

const screens = [
  { Component: Screen1, label: "Home" },
  { Component: Screen2, label: "Connect" },
  { Component: Screen3, label: "Playback" },
  { Component: Screen4, label: "LED Effects" },
  { Component: Screen5, label: "Stream" },
];

const THUMB_W = 240;
const THUMB_SCALE = THUMB_W / NATIVE_W;

export default function AppStore() {
  return (
    <div className="overflow-x-hidden bg-[#0a0a0a] text-white">

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="px-6 md:px-10 lg:px-16 pt-36 md:pt-44 pb-24 md:pb-32">
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
                color: "rgba(255,255,255,0.38)",
                marginBottom: "28px",
              }}
            >
              aqua eco — App Store
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
                maxWidth: "900px",
                marginBottom: "32px",
              }}
            >
              Amazon Alexa<br />Soundbar
            </h1>

            <p
              style={{
                fontSize: "17px",
                lineHeight: 1.65,
                color: "rgba(255,255,255,0.5)",
                maxWidth: "460px",
                marginBottom: "44px",
              }}
            >
              The complete iOS controller for your Alexa-compatible soundbar.
              Free on the App Store.
            </p>

            <div className="flex flex-wrap gap-4 items-center">
              <a
                href={APP_STORE}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-white text-[#0a0a0a] border border-white transition-colors duration-200 hover:bg-transparent hover:text-white"
                style={{ borderRadius: "2px" }}
              >
                Download on the App Store
              </a>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: 500,
                  color: "rgba(255,255,255,0.35)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                }}
              >
                Free · iOS 15.0+
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── SCREENSHOTS ──────────────────────────────────────────────────── */}
      <section
        className="pb-24 md:pb-32"
        style={{ borderTop: "1px solid #1c1c1c" }}
      >
        <div
          className="flex gap-4 md:gap-6 overflow-x-auto px-6 md:px-10 lg:px-16 pt-16 md:pt-20"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {screens.map(({ Component, label }, i) => (
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
                  height: "clamp(340px, 44vw, 540px)",
                  width: THUMB_W,
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
                    transform: `scale(${THUMB_SCALE})`,
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
                  color: "rgba(255,255,255,0.3)",
                }}
              >
                {String(i + 1).padStart(2, "0")} — {label}
              </p>
            </motion.div>
          ))}
          <div className="shrink-0 w-6 md:w-10 lg:w-16" />
        </div>
      </section>

      {/* ── DETAILS TABLE ────────────────────────────────────────────────── */}
      <section
        className="px-6 md:px-10 lg:px-16 pt-20 md:pt-28 pb-28 md:pb-36"
        style={{ borderTop: "1px solid #1c1c1c" }}
      >
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <p
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  color: "rgba(255,255,255,0.35)",
                  marginBottom: "16px",
                }}
              >
                App details
              </p>
              <h2
                style={{
                  fontFamily: "'Archivo', sans-serif",
                  fontWeight: 900,
                  fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                  textTransform: "uppercase",
                  letterSpacing: "-0.03em",
                  lineHeight: 0.95,
                  color: "#ffffff",
                  marginBottom: "24px",
                }}
              >
                Native.<br />Free.<br />iOS only.
              </h2>
              <p
                style={{
                  fontSize: "15px",
                  lineHeight: 1.7,
                  color: "rgba(255,255,255,0.45)",
                  maxWidth: "380px",
                }}
              >
                Built specifically for iOS to deliver a clean, responsive experience
                for every Alexa-compatible soundbar.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <div>
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
                      borderTop: "1px solid #1c1c1c",
                      borderBottom: i === arr.length - 1 ? "1px solid #1c1c1c" : "none",
                    }}
                  >
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 600,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                        color: "rgba(255,255,255,0.35)",
                      }}
                    >
                      {row.label}
                    </span>
                    <span style={{ fontSize: "14px", fontWeight: 500, color: "#ffffff" }}>
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
                  className="inline-flex items-center px-7 py-[15px] text-[13px] font-semibold uppercase tracking-[0.06em] bg-white text-[#0a0a0a] border border-white transition-colors duration-200 hover:bg-transparent hover:text-white"
                  style={{ borderRadius: "2px" }}
                >
                  Get it free on the App Store
                </a>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
