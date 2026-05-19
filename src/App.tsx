import { useState, useEffect } from "react";

import sticker1  from "./assets/stickers/sticker1.jpeg";
import sticker2  from "./assets/stickers/sticker2.jpeg";
import sticker3  from "./assets/stickers/sticker3.jpeg";
import sticker4  from "./assets/stickers/sticker4.jpeg";
import sticker5  from "./assets/stickers/sticker5.jpeg";
import sticker6  from "./assets/stickers/sticker6.jpeg";
import sticker7  from "./assets/stickers/sticker7.jpeg";
import sticker8  from "./assets/stickers/sticker8.jpeg";
import sticker9  from "./assets/stickers/sticker9.jpeg";
import sticker10 from "./assets/stickers/sticker10.jpeg";
import sticker11 from "./assets/stickers/sticker11.jpeg";
import sticker12 from "./assets/stickers/sticker12.jpeg";

const STICKERS = [
  sticker1, sticker2, sticker3, sticker4,
  sticker5, sticker6, sticker7, sticker8,
  sticker9, sticker10, sticker11, sticker12,
];

// 3 per side, evenly spaced — [top, left, rot(deg), size(px)]
const STICKER_LAYOUT: [string, string, number, number][] = [
  // top
  ["-9%",  "-1%",  -8, 74],
  ["-8%",  "37%",   5, 68],
  ["-9%",  "75%",  -6, 72],
  // right
  ["10%",  "92%",   7, 70],
  ["41%",  "94%",  -5, 74],
  ["69%",  "91%",   6, 68],
  // bottom
  ["93%",  "72%",  -7, 72],
  ["94%",  "37%",   5, 68],
  ["93%",   "1%",  -6, 74],
  // left
  ["70%", "-10%",   8, 70],
  ["42%", "-11%",  -5, 74],
  ["13%",  "-9%",   6, 68],
];

const MAPS_URL = "https://maps.app.goo.gl/sdkEjNudocZarsDa8?g_st=ic";
const BIRTHDAY_DATE = new Date("2026-08-29T14:00:00");

const PALETTE = {
  cream: "#F9DBBD",
  pink:  "#FFA5AB",
  rose:  "#DA627D",
  wine:  "#A53860",
  dark:  "#450920",
};

const TITLE_STYLES = [
  { font: "'Playfair Display', serif",  weight: 900, bg: PALETTE.dark,  color: PALETTE.cream, rotate: "-3deg"   },
  { font: "'Abril Fatface', serif",     weight: 400, bg: PALETTE.rose,  color: "#fff",        rotate: "2deg"    },
  { font: "'Playfair Display', serif",  weight: 900, bg: PALETTE.cream, color: PALETTE.dark,  rotate: "-1.5deg", border: `1.5px solid ${PALETTE.dark}` },
  { font: "'Abril Fatface', serif",     weight: 400, bg: PALETTE.wine,  color: PALETTE.cream, rotate: "2.5deg"  },
  { font: "'Playfair Display', serif",  weight: 900, bg: PALETTE.pink,  color: PALETTE.dark,  rotate: "-2deg"   },
  { font: "'Abril Fatface', serif",     weight: 400, bg: PALETTE.dark,  color: PALETTE.pink,  rotate: "1.5deg"  },
  { font: "'Playfair Display', serif",  weight: 900, bg: PALETTE.rose,  color: "#fff",        rotate: "-2.5deg" },
  { font: "'Abril Fatface', serif",     weight: 400, bg: PALETTE.cream, color: PALETTE.wine,  rotate: "3deg",    border: `1.5px solid ${PALETTE.wine}` },
];

const INDIE = "'Indie Flower', cursive";

function RansomChar({ char, idx }: { char: string; idx: number }) {
  if (char === " ") return <span style={{ display: "inline-block", width: "0.28em" }} />;
  const s = TITLE_STYLES[idx % TITLE_STYLES.length];
  return (
    <span style={{
      display: "inline-block",
      fontFamily: s.font,
      fontWeight: s.weight,
      fontSize: "1em",
      color: s.color,
      background: s.bg,
      padding: "1px 4px 2px",
      margin: "1px",
      borderRadius: 3,
      transform: `rotate(${s.rotate})`,
      verticalAlign: "middle",
      border: s.border || "none",
      boxShadow: `1px 2px 0 ${PALETTE.dark}44`,
      lineHeight: 1.1,
    }}>
      {char.toUpperCase()}
    </span>
  );
}

function RansomTitle({ text, baseIdx = 0, fontSize = "1.4rem" }: { text: string; baseIdx?: number; fontSize?: string }) {
  return (
    <span style={{ fontSize, lineHeight: 1.6 }}>
      {text.split("").map((ch, i) => <RansomChar key={i} char={ch} idx={baseIdx + i} />)}
    </span>
  );
}

function CountUnit({ value, label }: { value: number; label: string }) {
  return (
    <div style={{ textAlign: "center", minWidth: 40 }}>
      <div style={{
        background: PALETTE.dark,
        color: PALETTE.cream,
        fontFamily: INDIE,
        fontSize: "1.25rem",
        lineHeight: 1,
        padding: "5px 7px 3px",
        borderRadius: 4,
        letterSpacing: "0.02em",
      }}>{String(value).padStart(2, "0")}</div>
      <div style={{
        fontFamily: INDIE,
        fontSize: "0.65rem",
        color: PALETTE.wine,
        marginTop: 2,
      }}>{label}</div>
    </div>
  );
}

export default function VickyBirthday() {
  const [t, setT] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [added, setAdded] = useState(false);

  useEffect(() => {
    const tick = () => {
      const diff = BIRTHDAY_DATE.getTime() - new Date().getTime();
      if (diff <= 0) return setT({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setT({
        days:    Math.floor(diff / 86400000),
        hours:   Math.floor(diff / 3600000) % 24,
        minutes: Math.floor(diff / 60000) % 60,
        seconds: Math.floor(diff / 1000) % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const addCalendar = () => {
    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent("🎂 Vicky's Birthday!")}&dates=20260829T140000/20260830T100000&details=${encodeURIComponent("¡Celebración del cumpleaños de Victoria! 🌸")}&location=${encodeURIComponent("Quinta, Juárez, Nuevo León")}`;
    window.open(url, "_blank");
    setAdded(true);
    setTimeout(() => setAdded(false), 3000);
  };

  return (
    <div style={{
      height: "100dvh",
      background: `linear-gradient(145deg, ${PALETTE.cream} 0%, #fce8d8 45%, ${PALETTE.pink}55 100%)`,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "10px",
      position: "relative",
      overflow: "hidden",
    }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Indie+Flower&family=Playfair+Display:wght@900&family=Abril+Fatface&display=swap');
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-5px)} }
        @keyframes spin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .card { animation: float 5s ease-in-out infinite; }
        .btn-a:active { transform:translate(1px,1px)!important; box-shadow:1px 1px 0 ${PALETTE.dark}!important; }
        .sticker {
          position: absolute;
          border: 6px solid white;
          border-radius: 4px;
          box-shadow: 0 4px 14px rgba(0,0,0,0.2), 0 2px 6px rgba(0,0,0,0.12);
          object-fit: cover;
          transition: transform 0.2s ease;
          cursor: default;
        }
        .sticker:hover { transform: scale(1.1) !important; }
      `}</style>

      {/* Bg blobs */}
      <div style={{ position:"fixed", top:"-10%", right:"-10%", width:180, height:180, borderRadius:"50%", background:PALETTE.pink, opacity:0.2, filter:"blur(50px)", pointerEvents:"none" }} />
      <div style={{ position:"fixed", bottom:"-8%", left:"-8%", width:150, height:150, borderRadius:"50%", background:PALETTE.rose, opacity:0.15, filter:"blur(40px)", pointerEvents:"none" }} />

      {/* Floating petals */}
      {["🌸","✦","🌺","✿","🌸"].map((e, i) => (
        <div key={i} style={{
          position: "fixed",
          top: `${8 + i * 19}%`,
          left: i % 2 === 0 ? `${2 + i}%` : undefined,
          right: i % 2 !== 0 ? `${2 + i * 2}%` : undefined,
          fontSize: "0.8rem",
          opacity: 0.18,
          pointerEvents: "none",
          animation: `spin ${8 + i * 3}s linear infinite`,
        }}>{e}</div>
      ))}

      {/* CARD WRAPPER — stickers are absolute, clipped by outer overflow:hidden */}
      <div style={{ position: "relative", width: "100%", maxWidth: 360 }}>

        {/* Stickers */}
        {STICKERS.map((src, i) => {
          const [top, left, rot, size] = STICKER_LAYOUT[i];
          return (
            <img
              key={i}
              src={src}
              className="sticker"
              alt=""
              style={{ top, left, width: size, height: size, transform: `rotate(${rot}deg)`, zIndex: 0 }}
            />
          );
        })}

        {/* CARD */}
        <div className="card" style={{
          position: "relative",
          zIndex: 1,
          width: "100%",
          background: "rgba(255,252,248,0.97)",
          border: `1.5px solid ${PALETTE.pink}`,
          borderRadius: 14,
          boxShadow: `0 16px 40px ${PALETTE.rose}28, 0 4px 14px ${PALETTE.dark}12`,
          padding: "14px 16px 12px",
          outline: "5px solid rgba(255,252,248,0.97)",
          outlineOffset: "-12px",
        }}>

          {/* Top ornament */}
          <div style={{ textAlign: "center", marginBottom: 6 }}>
            <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
              <path d="M0 6 Q15 2 30 6 Q45 10 60 6 Q75 2 90 6 Q105 10 120 6" stroke={PALETTE.rose} strokeWidth="0.8" fill="none" opacity="0.7"/>
              <circle cx="60" cy="6" r="1.8" fill={PALETTE.rose} opacity="0.9"/>
              <circle cx="44" cy="6" r="1.1" fill={PALETTE.pink} opacity="0.7"/>
              <circle cx="76" cy="6" r="1.1" fill={PALETTE.pink} opacity="0.7"/>
            </svg>
          </div>

          {/* Title */}
          <div style={{ textAlign: "center", marginBottom: 1 }}>
            <RansomTitle text="Vicky's" baseIdx={0} fontSize="1.35rem" />
          </div>
          <div style={{ textAlign: "center", marginBottom: 10 }}>
            <RansomTitle text="Birthday" baseIdx={7} fontSize="1.35rem" />
          </div>

          {/* Divider */}
          <div style={{ height: "0.5px", background: `${PALETTE.pink}88`, marginBottom: 8 }} />

          {/* Date block */}
          <div style={{
            background: PALETTE.dark,
            borderRadius: 9,
            padding: "10px 14px",
            marginBottom: 7,
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: INDIE,
              fontSize: "0.6rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: PALETTE.pink,
              marginBottom: 5,
            }}>cuando</div>

            <div style={{
              fontFamily: INDIE,
              fontSize: "1.08rem",
              color: PALETTE.cream,
              lineHeight: 1.25,
              marginBottom: 7,
            }}>Sábado 29 de Agosto, 2026</div>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 8 }}>
              <div style={{
                fontFamily: INDIE, fontSize: "0.85rem",
                color: PALETTE.dark, background: PALETTE.cream,
                padding: "4px 10px", borderRadius: 4,
              }}>2:00 pm</div>
              <span style={{ fontFamily: INDIE, fontSize: "0.85rem", color: PALETTE.pink }}>→</span>
              <div style={{
                fontFamily: INDIE, fontSize: "0.85rem",
                color: "#fff", background: PALETTE.wine,
                padding: "4px 10px", borderRadius: 4,
              }}>10:00 am ☀️</div>
            </div>

            <div style={{
              fontFamily: INDIE, fontSize: "0.65rem",
              color: PALETTE.pink, marginTop: 4, opacity: 0.85,
            }}>sábado → domingo</div>
          </div>

          {/* Countdown */}
          <div style={{
            border: `1px solid ${PALETTE.pink}`,
            borderRadius: 9,
            padding: "7px 8px",
            marginBottom: 7,
            background: `${PALETTE.cream}44`,
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: INDIE, fontSize: "0.72rem",
              color: PALETTE.rose, marginBottom: 6,
            }}>faltan...</div>
            <div style={{ display: "flex", justifyContent: "center", gap: 10 }}>
              <CountUnit value={t.days}    label="días"  />
              <CountUnit value={t.hours}   label="horas" />
              <CountUnit value={t.minutes} label="min"   />
              <CountUnit value={t.seconds} label="seg"   />
            </div>
          </div>

          {/* Location */}
          <div style={{
            border: `1px solid ${PALETTE.rose}55`,
            borderRadius: 9,
            padding: "8px 12px",
            marginBottom: 7,
            background: `${PALETTE.cream}33`,
            textAlign: "center",
          }}>
            <div style={{
              fontFamily: INDIE, fontSize: "0.6rem",
              letterSpacing: "0.3em", textTransform: "uppercase",
              color: PALETTE.rose, marginBottom: 4,
            }}>dónde</div>
            <div style={{
              fontFamily: INDIE, fontSize: "1rem",
              color: PALETTE.dark, marginBottom: 1,
            }}>Quinta</div>
            <div style={{
              fontFamily: INDIE, fontSize: "0.78rem",
              color: PALETTE.wine, marginBottom: 8,
            }}>Juárez, Nuevo León</div>
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="btn-a" style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
              background: PALETTE.dark, color: PALETTE.cream,
              fontFamily: INDIE, fontSize: "0.75rem", letterSpacing: "0.1em",
              padding: "9px 0", borderRadius: 7, textDecoration: "none",
              boxShadow: `3px 3px 0 ${PALETTE.rose}`,
              transition: "transform 0.1s, box-shadow 0.1s",
            }}>↗  Ver en Google Maps</a>
          </div>

          {/* Calendar */}
          <button onClick={addCalendar} className="btn-a" style={{
            width: "100%",
            background: added ? PALETTE.dark : PALETTE.wine,
            color: PALETTE.cream,
            fontFamily: INDIE, fontSize: "0.78rem", letterSpacing: "0.08em",
            padding: "10px 0", border: "none", borderRadius: 7,
            boxShadow: added ? `1px 1px 0 ${PALETTE.dark}` : `3px 3px 0 ${PALETTE.dark}`,
            cursor: "pointer", marginBottom: 10,
            transition: "all 0.2s",
          }}>
            {added ? "✓ guardado!" : "↓ agregar al calendario"}
          </button>

          {/* Footer */}
          <div style={{ textAlign: "center" }}>
            <div style={{
              fontFamily: INDIE, fontSize: "0.82rem",
              color: PALETTE.wine, marginBottom: 5,
            }}>te espero con todo mi cariño ✦</div>
            <svg width="120" height="12" viewBox="0 0 120 12" fill="none">
              <path d="M0 6 Q15 10 30 6 Q45 2 60 6 Q75 10 90 6 Q105 2 120 6" stroke={PALETTE.rose} strokeWidth="0.8" fill="none" opacity="0.7"/>
              <circle cx="60" cy="6" r="1.8" fill={PALETTE.rose} opacity="0.9"/>
              <circle cx="44" cy="6" r="1.1" fill={PALETTE.pink} opacity="0.7"/>
              <circle cx="76" cy="6" r="1.1" fill={PALETTE.pink} opacity="0.7"/>
            </svg>
          </div>

        </div>
      </div>
    </div>
  );
}
