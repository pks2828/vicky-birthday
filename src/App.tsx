
const MAPS_URL = "https://maps.app.goo.gl/sdkEjNudocZarsDa8?g_st=ic";
const B = import.meta.env.BASE_URL;

export default function BirthdayInvitation() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Jost:wght@300;400;500&display=swap');

        @keyframes floatBalloons {
          0%,100% { transform: translateY(0px) rotate(-4deg); }
          50%      { transform: translateY(-10px) rotate(-4deg); }
        }
        @keyframes floatDiscoW {
          0%,100% { transform: rotate(10deg) translateY(0px); }
          50%      { transform: rotate(10deg) translateY(-8px); }
        }
        @keyframes floatDiscoR {
          0%,100% { transform: rotate(-8deg) translateY(0px); }
          50%      { transform: rotate(-8deg) translateY(-10px); }
        }
        @keyframes floatStarA {
          0%,100% { transform: rotate(-15deg) translateY(0px); }
          50%      { transform: rotate(-15deg) translateY(-6px); }
        }
        @keyframes floatStarB {
          0%,100% { transform: rotate(10deg) translateY(0px); }
          50%      { transform: rotate(10deg) translateY(-7px); }
        }
        @keyframes floatOverlay {
          0%,100% { transform: translateY(0px); }
          50%      { transform: translateY(-4px); }
        }
        @keyframes softPulse {
          0%,100% { opacity:1; }
          50%      { opacity:0.85; }
        }

        .maps-btn {
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          background: linear-gradient(135deg, #D4849E 0%, #B8607C 100%);
          color: #fff;
          border-radius: 999px;
          padding: 10px 22px;
          font-family: 'Jost', sans-serif;
          font-weight: 500;
          font-size: clamp(.78rem, 3.2vw, .88rem);
          letter-spacing: .08em;
          text-transform: uppercase;
          box-shadow: 0 4px 16px rgba(180,90,120,.25);
          transition: transform .15s, box-shadow .15s;
          white-space: nowrap;
        }
        .maps-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 7px 22px rgba(180,90,120,.35);
        }
        .maps-btn:active { transform: translateY(0); }
      `}</style>

      {/* ── OUTER PAGE ─────────────────────────────────────────────────── */}
      <div style={{
        minHeight: "100dvh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "10px 8px",
        background: "white",
      }}>

        {/* ══ CARD 9:16 ════════════════════════════════════════════════ */}
        <div className="card-tapiz" style={{
          position: "relative",
          width: "100%",
          maxWidth: 390,
          aspectRatio: "9/16",
          overflow: "hidden",
          borderRadius: 22,
          boxShadow: "0 20px 60px rgba(185,145,165,.22), 0 4px 16px rgba(185,145,165,.14)",
        }}>

          {/* ══════════════════════════════════════════════════════════════
              CAPA TRASERA — todo detrás de la persona
          ══════════════════════════════════════════════════════════════ */}

          

          {/* ── GLOBOS ROSAS — top-left ──────────────────────────────── */}
          <div style={{
            position: "absolute",
            top: "-3%", left: "-7%",
            zIndex: 3,
            width: "50%",
            animation: "floatBalloons 4.6s ease-in-out infinite",
          }}>
            <img
              src={`${B}globos_rosas.png`}
              alt=""
              style={{
                width: "100%", display: "block",
                filter: "drop-shadow(0 6px 18px rgba(200,100,140,.28))",
              }}
            />
          </div>

          {/* ── DISCO BLANCA — top-right ─────────────────────────────── */}
          <div style={{
            position: "absolute",
            top: "3%", right: "-5%",
            zIndex: 3,
            width: "32%",
            animation: "floatDiscoW 5.4s ease-in-out .6s infinite",
          }}>
            <img
              src={`${B}disco_blanca_sf.png`}
              alt=""
              style={{
                width: "100%", display: "block",
                filter: "drop-shadow(0 4px 14px rgba(160,160,180,.32))",
              }}
            />
          </div>



          {/* ── ESTRELLA GRIS grande — mid-left ─────────────────────── */}
          <div style={{
            position: "absolute",
            top: "40%", left: "1%",
            zIndex: 4,
            width: "18%",
            animation: "floatStarA 4.8s ease-in-out .3s infinite",
          }}>
            <img
              src={`${B}estrella_gris.png`}
              alt=""
              style={{
                width: "100%", display: "block",
                filter: "drop-shadow(0 2px 8px rgba(160,160,180,.3))",
                opacity: 0.9,
              }}
            />
          </div>

          {/* ── ESTRELLA ROSA grande — mid-right ────────────────────── */}
          <div style={{
            position: "absolute",
            top: "36%", right: "1%",
            zIndex: 4,
            width: "17%",
            animation: "floatStarB 5.2s ease-in-out .8s infinite",
          }}>
            <img
              src={`${B}estrella_rosa.png`}
              alt=""
              style={{
                width: "100%", display: "block",
                filter: "drop-shadow(0 2px 8px rgba(220,130,170,.3))",
                opacity: 0.85,
              }}
            />
          </div>

          {/* ── ESTRELLA GRIS pequeña — bottom-right ────────────────── */}
          <div style={{
            position: "absolute",
            bottom: "32%", right: "4%",
            zIndex: 4,
            width: "11%",
            animation: "floatStarA 6s ease-in-out 1.5s infinite",
          }}>
            <img
              src={`${B}estrella_gris.png`}
              alt=""
              style={{ width: "100%", display: "block", opacity: 0.7 }}
            />
          </div>

          {/* ── ESTRELLA ROSA pequeña — top-center-left ─────────────── */}
          <div style={{
            position: "absolute",
            top: "18%", left: "5%",
            zIndex: 4,
            width: "10%",
            animation: "floatStarB 5.5s ease-in-out 2s infinite",
          }}>
            <img
              src={`${B}estrella_rosa.png`}
              alt=""
              style={{ width: "100%", display: "block", opacity: 0.75 }}
            />
          </div>

          {/* ══════════════════════════════════════════════════════════════
              PERSONA — encima de todo el fondo decorativo
          ══════════════════════════════════════════════════════════════ */}
          <div style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            pointerEvents: "none",
          }}>
            <img
              src={`${B}vicky_nuevaSinFondo.png`}
              alt="Vicky"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>

          {/* ══════════════════════════════════════════════════════════════
              INFO — encima de todo, panel frosted en la base
          ══════════════════════════════════════════════════════════════ */}

          {/* panel frosted glass */}
          <div style={{
            position: "absolute",
            bottom: 0, left: 0, right: 0,
            height: "26%",
            zIndex: 20,
            background: "linear-gradient(to bottom, rgba(244,241,234,0) 0%, rgba(244,241,234,.85) 30%, rgba(244,241,234,.97) 100%)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
          }} />

          {/* divider */}
          <div style={{
            position: "absolute",
            bottom: "23%", left: "50%",
            transform: "translateX(-50%)",
            zIndex: 21,
            width: "65%", height: "1.5px",
            background: "linear-gradient(90deg, transparent, rgba(200,160,180,.5), transparent)",
          }} />

          {/* contenido info */}
          <div style={{
            position: "absolute",
            bottom: "8%", left: "50%",
            transform: "translateX(-50%)",
            zIndex: 22,
            width: "88%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 8,
          }}>
            {/* fecha */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: ".85rem" }}>📅</span>
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "clamp(.72rem, 3vw, .86rem)",
                fontWeight: 400,
                color: "#6B4055",
                letterSpacing: ".04em",
              }}>Sábado, 29 de Agosto 2026 · 2:00 pm</span>
            </div>

            {/* dirección */}
            <div style={{ display: "flex", alignItems: "center", gap: 5 }}>
              <span style={{ fontSize: ".82rem" }}>📍</span>
              <span style={{
                fontFamily: "'Jost', sans-serif",
                fontSize: "clamp(.69rem, 2.8vw, .82rem)",
                fontWeight: 300,
                color: "#6B4055",
                textAlign: "center",
                letterSpacing: ".03em",
              }}>Alagua 701, Jardines de la Silla, 67288</span>
            </div>

            {/* botón maps */}
            <a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="maps-btn">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
              Ver en Google Maps
            </a>
          </div>

          {/* closing */}
          <div style={{
            position: "absolute",
            bottom: "1.5%", left: 0, right: 0,
            zIndex: 22,
            textAlign: "center",
            padding: "0 16px",
            animation: "softPulse 4s ease-in-out infinite",
          }}>
            <p style={{
              fontFamily: "'Dancing Script', cursive",
              fontSize: "clamp(.88rem, 3.8vw, 1.1rem)",
              fontWeight: 700,
              color: "#C87A9C",
              letterSpacing: ".01em",
            }}>Los esperooooo a todooooss 🎉</p>
          </div>

        </div>
      </div>
    </>
  );
}
