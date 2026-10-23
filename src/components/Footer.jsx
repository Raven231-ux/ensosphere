import { Link } from "react-router-dom";
import { Mail, MapPin, Phone } from "lucide-react";
import Logo from "./Logo";
import Container from "./Container";
import SocialIcon from "./SocialIcon";
import { nav, socials, contactInfo } from "../data/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-line bg-ink/40 backdrop-blur-sm">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent"
        aria-hidden="true"
      />
      <Container className="grid gap-12 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2 lg:col-span-1">
          <Link to="/" className="inline-flex focus-ring rounded" aria-label="Enso Sphere home">
            <Logo markClassName="h-8 w-8" textClassName="text-lg" />
          </Link>
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
                  className="group inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-cream"
                >
                  <span className="h-px w-0 bg-gold transition-[width] duration-300 group-hover:w-3" aria-hidden="true" />
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 text-sm text-mist transition-colors hover:text-cream"
              >
                <span className="h-px w-0 bg-gold transition-[width] duration-300 group-hover:w-3" aria-hidden="true" />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xs tracking-label uppercase text-gold-light">Connect</h2>
          <ul className="mt-4 space-y-3 text-sm text-mist">
            <li>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <Mail size={14} className="text-gold-dim" aria-hidden="true" />
                {contactInfo.email}
              </a>
            </li>
            <li>
              <a
                href={`tel:${contactInfo.phoneHref}`}
                className="inline-flex items-center gap-2.5 transition-colors hover:text-cream"
              >
                <Phone size={14} className="text-gold-dim" aria-hidden="true" />
                {contactInfo.phone}
              </a>
            </li>
            <li>
              <span className="inline-flex items-center gap-2.5">
                <MapPin size={14} className="text-gold-dim" aria-hidden="true" />
                {contactInfo.location}
              </span>
            </li>
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
                    className="group inline-flex items-center gap-2.5 transition-colors hover:text-cream"
                  >
                    <SocialIcon
                      label={s.label}
                      className="h-3.5 w-3.5 opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                    />
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
