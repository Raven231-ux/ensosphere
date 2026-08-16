export const clientLogos = [
  { name: "ORS", file: "/logos/ors.svg" },
  { name: "Inzpire Health", file: "/logos/inzpire-health.png" },
  { name: "iGolf South Africa", file: "/logos/igolf-south-africa.png" },
  { name: "iDesign South Africa", file: "/logos/idesign-south-africa.png" },
  { name: "Scentlab SA", file: "/logos/scentlab-sa.png" },
  { name: "Harrie's Pancakes", file: "/logos/harries-pancakes.png" },
  { name: "Vatika Naturals", file: "/logos/vatika-afro-naturals.jpg" },
  { name: "Hair Network", file: "/logos/hair-network.png" },
];

export default function LogoStrip({ logos = clientLogos, className = "" }) {
  return (
    <div
      className={`grid grid-cols-2 gap-4 sm:grid-cols-4 ${className}`}
    >
      {logos.map((logo) => (
        <div
          key={logo.name}
          className="group flex h-24 items-center justify-center rounded-lg border border-gold-dim/40 bg-cream shadow-[0_8px_24px_-8px_rgba(0,0,0,0.6)] transition-all duration-300 hover:-translate-y-0.5 hover:border-gold hover:shadow-[0_12px_32px_-8px_rgba(201,162,75,0.35)] sm:h-28"
        >
          <img
            src={logo.file}
            alt={logo.name}
            title={logo.name}
            loading="lazy"
            className="max-h-14 w-auto max-w-[80%] object-contain sm:max-h-16"
          />
        </div>
      ))}
    </div>
  );
}
