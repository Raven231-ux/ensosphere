import { Link } from "react-router-dom";
import EnsoMark from "./EnsoMark";
import Container from "./Container";
import { nav, socials, contactInfo } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-soft">
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3">
            <EnsoMark className="h-8 w-8 text-gold" />
            <span className="font-serif-display text-lg tracking-[0.15em] text-cream">
              ENSO SPHERE
            </span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-mist">
            Make your mark online.
          </p>
        </div>

        <div>
          <h2 className="text-xs tracking-label uppercase text-gold-light">Navigate</h2>
          <ul className="mt-4 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className="text-sm text-mist transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/contact" className="text-sm text-mist transition-colors hover:text-cream">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs tracking-label uppercase text-gold-light">Connect</h2>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li>
              <a href={`mailto:${contactInfo.email}`} className="transition-colors hover:text-cream">
                {contactInfo.email}
              </a>
            </li>
            <li>{contactInfo.location}</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs tracking-label uppercase text-gold-light">Follow</h2>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            {socials
              .filter((s) => s.label !== "Email")
              .map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="transition-colors hover:text-cream"
                  >
                    {s.label}
                  </a>
                </li>
              ))}
          </ul>
        </div>
      </Container>

      <div className="border-t border-line">
        <Container className="flex flex-col items-center gap-2 py-6 text-xs text-mist sm:flex-row sm:justify-between">
          <p>© {year} Enso Sphere. All rights reserved.</p>
          <p className="tracking-label uppercase">Make Your Mark Online</p>
        </Container>
      </div>
    </footer>
  );
}
