const base = {
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function IconPulse({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="1.4" aria-hidden="true">
      <circle cx="24" cy="24" r="19" opacity="0.35" />
      <path
        d="M8 26h9l3-9 6 18 3-9h11"
        strokeWidth="3"
      />
      <circle cx="20" cy="17" r="2.2" fill="currentColor" stroke="none" />
      <circle cx="29" cy="35" r="2.2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconTarget({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="2.2" aria-hidden="true">
      <circle cx="21" cy="24" r="13" />
      <circle cx="21" cy="24" r="7" />
      <circle cx="21" cy="24" r="1.8" fill="currentColor" stroke="none" />
      <path d="M21 24 L38 10" />
      <path d="M38 10 L30 10.5 M38 10 L37.5 18" />
    </svg>
  );
}

export function IconCompass({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="2" aria-hidden="true">
      <circle cx="24" cy="24" r="14" />
      <path d="M24 4v6M24 38v6M4 24h6M38 24h6" />
      <path d="M24 15 L29 24 L24 33 L19 24 Z" />
      <circle cx="24" cy="24" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconMagnifierChart({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="2" aria-hidden="true">
      <circle cx="21" cy="21" r="14" />
      <path d="M13 25 L18 18 L23 22 L29 12" strokeWidth="2.4" />
      <circle cx="18" cy="18" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="23" cy="22" r="1.6" fill="currentColor" stroke="none" />
      <path d="M31 31 L41 41" strokeWidth="3" />
    </svg>
  );
}

export function IconDocumentPen({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="2" aria-hidden="true">
      <path d="M13 6h16l7 7v29a1 1 0 0 1-1 1H13a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" />
      <path d="M29 6v7h7" />
      <path d="M17 21h13M17 27h13" />
      <path d="M31 33 L40 24 L44 28 L35 37 L30 38.5Z" />
    </svg>
  );
}

export function IconChatDots({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="2" aria-hidden="true">
      <path d="M8 12a3 3 0 0 1 3-3h26a3 3 0 0 1 3 3v18a3 3 0 0 1-3 3H20l-8 7v-7h-1a3 3 0 0 1-3-3Z" />
      <circle cx="16" cy="21" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="24" cy="21" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="32" cy="21" r="1.6" fill="currentColor" stroke="none" />
      <path d="M17.6 21h5M25.6 21h5" strokeWidth="1.2" />
    </svg>
  );
}

export function IconBarGrowth({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="2.2" aria-hidden="true">
      <path d="M6 41h36" />
      <path d="M11 41V29M21 41V22M31 41V14" strokeWidth="4" />
      <path d="M9 27 L20 17 L27 21 L41 8" />
      <path d="M41 8 L33 7.5 M41 8 L40.5 16" />
    </svg>
  );
}

export function IconBrowserCursor({ size = 22, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} {...base} strokeWidth="2" aria-hidden="true">
      <rect x="5" y="8" width="32" height="24" rx="3" />
      <path d="M5 15h32" />
      <circle cx="10.5" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <circle cx="14" cy="11.5" r="1" fill="currentColor" stroke="none" />
      <path d="M13 21h14M13 26h9" strokeWidth="1.4" />
      <path d="M27 27 L43 34 L36.5 36 L34 43Z" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WaveLines({ className = "", strokeWidth = 1 }) {
  const rows = 11;
  return (
    <svg
      viewBox="0 0 400 200"
      preserveAspectRatio="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="waveFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="55%" stopColor="currentColor" stopOpacity="0.9" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
      </defs>
      {Array.from({ length: rows }).map((_, i) => {
        const yOffset = 100 + (i - rows / 2) * 7;
        return (
          <path
            key={i}
            d={`M0 ${yOffset} C 100 ${yOffset - 10}, 150 ${yOffset + 40}, 220 ${yOffset - 5} S 340 ${yOffset - 45}, 400 ${yOffset - 20}`}
            fill="none"
            stroke="url(#waveFade)"
            strokeWidth={strokeWidth}
          />
        );
      })}
    </svg>
  );
}

export function TexturedOrb({ className = "" }) {
  const speckles = Array.from({ length: 46 }).map((_, i) => {
    const angle = (i * 137.5) % 360;
    const radius = 6 + ((i * 3.7) % 34);
    const rad = (angle * Math.PI) / 180;
    const x = 60 + Math.cos(rad) * radius;
    const y = 60 + Math.sin(rad) * radius * 0.9;
    const r = 0.4 + (i % 5) * 0.25;
    return { x, y, r, o: 0.15 + (i % 4) * 0.12 };
  });

  return (
    <svg viewBox="0 0 120 120" className={className} aria-hidden="true">
      <defs>
        <radialGradient id="orbBody" cx="38%" cy="32%" r="75%">
          <stop offset="0%" stopColor="#2a2418" />
          <stop offset="55%" stopColor="#16130f" />
          <stop offset="100%" stopColor="#0a0806" />
        </radialGradient>
        <radialGradient id="orbRim" cx="72%" cy="78%" r="60%">
          <stop offset="0%" stopColor="#e8c874" stopOpacity="0.55" />
          <stop offset="45%" stopColor="#c9a24b" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#c9a24b" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="orbSheen" cx="32%" cy="24%" r="30%">
          <stop offset="0%" stopColor="#f3ecdd" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#f3ecdd" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle cx="60" cy="60" r="52" fill="url(#orbBody)" />
      <circle cx="60" cy="60" r="52" fill="url(#orbRim)" />
      <circle cx="60" cy="60" r="52" fill="url(#orbSheen)" />
      {speckles.map((s, i) => (
        <circle key={i} cx={s.x} cy={s.y} r={s.r} fill="#c9a24b" opacity={s.o} />
      ))}
      <circle cx="60" cy="60" r="52" fill="none" stroke="#c9a24b" strokeOpacity="0.25" strokeWidth="0.75" />
    </svg>
  );
}

export function HorizonArc({ className = "" }) {
  return (
    <svg viewBox="0 0 800 200" preserveAspectRatio="none" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="arcFade" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
          <stop offset="50%" stopColor="currentColor" stopOpacity="1" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </linearGradient>
        <radialGradient id="arcGlow" cx="50%" cy="0%" r="75%">
          <stop offset="0%" stopColor="currentColor" stopOpacity="0.35" />
          <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="800" height="200" fill="url(#arcGlow)" />
      <path d="M0 60 Q400 -20 800 60" fill="none" stroke="url(#arcFade)" strokeWidth="1.5" />
      <path d="M0 66 Q400 -12 800 66" fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="0.75" />
      <circle cx="480" cy="18" r="2.5" fill="currentColor" />
    </svg>
  );
}
