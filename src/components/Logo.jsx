import { useId } from "react";

/**
 * Brand mark: an open enso ring meeting a fine gold sphere.
 * Drawn as vectors so it stays crisp in the nav, footer and favicon.
 */
export function LogoMark({ className = "h-9 w-9" }) {
  const gid = useId().replace(/:/g, "");
  const grad = `logo-gold-${gid}`;

  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      role="img"
      aria-label="Enso Sphere"
    >
      <defs>
        <linearGradient id={grad} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#e8c874" />
          <stop offset="52%" stopColor="#c9a24b" />
          <stop offset="100%" stopColor="#8a6f37" />
        </linearGradient>
      </defs>

      <circle
        cx="25"
        cy="32"
        r="15"
        fill="none"
        stroke={`url(#${grad})`}
        strokeWidth="5.6"
        strokeLinecap="round"
        strokeDasharray="83 11"
        transform="rotate(-12 25 32)"
      />

      <g stroke={`url(#${grad})`} fill="none">
        <circle cx="41" cy="32" r="13" strokeWidth="2" />
        <ellipse cx="41" cy="32" rx="13" ry="5.4" strokeWidth="1.35" opacity="0.85" />
        <ellipse cx="41" cy="32" rx="5.4" ry="13" strokeWidth="1.35" opacity="0.85" />
        <ellipse
          cx="41"
          cy="32"
          rx="13"
          ry="6.4"
          strokeWidth="1"
          opacity="0.5"
          transform="rotate(42 41 32)"
        />
      </g>

      <circle cx="50.5" cy="22.5" r="2" fill="#e8c874" />
    </svg>
  );
}

export default function Logo({
  className = "",
  markClassName = "h-9 w-9",
  textClassName = "text-xl",
}) {
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <LogoMark className={markClassName} />
      <span
        className={`font-serif-display tracking-[0.15em] text-cream ${textClassName}`}
      >
        ENSO SPHERE
      </span>
    </span>
  );
}
