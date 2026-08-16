import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import EnsoMark from "./EnsoMark";
import Container from "./Container";
import { nav } from "../data/content";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const linkClass = ({ isActive }) =>
    `text-xs tracking-label uppercase transition-colors hover:text-gold-light focus-ring rounded ${
      isActive ? "text-gold-light" : "text-mist"
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-ink/90 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Link
          to="/"
          className="flex items-center gap-3 focus-ring rounded"
          aria-label="Enso Sphere home"
        >
          <EnsoMark className="h-8 w-8 text-gold" />
          <span className="font-serif-display text-xl tracking-[0.15em] text-cream">
            ENSO SPHERE
          </span>
        </Link>

        <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
          {nav.map((item) => (
            <NavLink key={item.href} to={item.href} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link
          to="/contact"
          className="hidden rounded-sm border border-gold-dim px-5 py-2.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring lg:inline-block"
        >
          Let's Connect
        </Link>

        <button
          type="button"
          className="text-cream lg:hidden focus-ring rounded"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </Container>

      {open && (
        <div className="border-t border-line bg-ink lg:hidden">
          <Container className="flex flex-col gap-1 py-6">
            {nav.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setOpen(false)}
                className="rounded px-2 py-3 text-sm tracking-label uppercase text-mist hover:text-gold-light"
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-3 inline-block rounded-sm border border-gold-dim px-5 py-3 text-center text-xs tracking-label uppercase text-gold-light hover:border-gold hover:bg-gold/10"
            >
              Let's Connect
            </Link>
          </Container>
        </div>
      )}
    </header>
  );
}
