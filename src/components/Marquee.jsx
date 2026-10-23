const disciplines = [
  "PPC & Google Ads",
  "SEO & AI Search",
  "Social Media",
  "Paid Social",
  "Content Strategy",
  "Analytics & Tracking",
  "CRO & Landing Pages",
];

export default function Marquee() {
  return (
    <div className="marquee relative border-y border-line/70 bg-ink/25 py-5">
      <div className="marquee-track items-center gap-10">
        {[0, 1].map((copy) => (
          <div
            key={copy}
            className="flex items-center gap-10"
            aria-hidden={copy === 1}
          >
            {disciplines.map((item) => (
              <span
                key={`${copy}-${item}`}
                className="flex items-center gap-10 whitespace-nowrap text-[11px] tracking-label uppercase text-mist"
              >
                {item}
                <span
                  className="h-1 w-1 rotate-45 bg-gold/70"
                  aria-hidden="true"
                />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
