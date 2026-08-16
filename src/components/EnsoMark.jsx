export default function EnsoMark({ className = "h-9 w-9", animate = false }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Enso Sphere mark"
    >
      <defs>
        <linearGradient id="ensoRingGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8a6f37" />
          <stop offset="45%" stopColor="#e8c874" />
          <stop offset="100%" stopColor="#c9a24b" />
        </linearGradient>
        <radialGradient id="ensoGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="24" cy="32" r="19" fill="url(#ensoGlow)" className="text-gold" />

      {/* Textured brush-stroke ring: layered strokes at slightly different widths/opacities/offsets */}
      <circle
        cx="24"
        cy="32"
        r="15"
        fill="none"
        stroke="url(#ensoRingGrad)"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeDasharray="86 8"
        transform="rotate(-8 24 32)"
      />
      <circle
        cx="24.6"
        cy="31.4"
        r="15"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="70 24"
        opacity="0.35"
        className="text-gold-light"
        transform="rotate(-8 24 32)"
      />

      <g className={animate ? "animate-spin-slow" : ""} style={{ transformOrigin: "40px 32px" }}>
        <circle cx="40" cy="32" r="13" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-light" opacity="0.9" />
        <ellipse cx="40" cy="32" rx="13" ry="5" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-light" opacity="0.7" />
        <ellipse cx="40" cy="32" rx="5" ry="13" fill="none" stroke="currentColor" strokeWidth="1" className="text-gold-light" opacity="0.7" />
        <ellipse cx="40" cy="32" rx="13" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-gold-dim" opacity="0.6" transform="rotate(45 40 32)" />
        <ellipse cx="40" cy="32" rx="13" ry="9" fill="none" stroke="currentColor" strokeWidth="0.75" className="text-gold-dim" opacity="0.4" transform="rotate(-45 40 32)" />

        <circle cx="49" cy="23" r="1.7" fill="currentColor" className="text-gold-light" />
        <circle cx="31" cy="24" r="1.1" fill="currentColor" className="text-gold-light" opacity="0.85" />
        <circle cx="45" cy="41" r="1" fill="currentColor" className="text-gold-light" opacity="0.7" />
        <circle cx="35" cy="38" r="0.8" fill="currentColor" className="text-gold" opacity="0.6" />
      </g>
    </svg>
  );
}
