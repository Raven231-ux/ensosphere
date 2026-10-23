import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
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
    `group relative py-2 text-xs tracking-label uppercase transition-colors hover:text-gold-light focus-ring rounded ${
      isActive ? "text-gold-light" : "text-mist"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <div
        className={`mx-auto w-full max-w-7xl border transition-[background-color,border-color,box-shadow,border-radius] duration-500 ${
          open ? "rounded-3xl" : "rounded-full"
        } ${
          scrolled || open
            ? "border-line/80 bg-ink/80 shadow-[0_18px_50px_-28px_rgba(0,0,0,0.95)] backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}
      >
        <div className="flex h-16 items-center justify-between gap-6 px-5 sm:px-7 lg:h-[4.5rem]">
          <Link
            to="/"
            className="flex items-center focus-ring rounded"
            aria-label="Enso Sphere home"
          >
            <Logo markClassName="h-8 w-8" textClassName="text-lg sm:text-xl" />
          </Link>

          <nav className="hidden items-center gap-9 lg:flex" aria-label="Primary">
            {nav.map((item) => (
              <NavLink key={item.href} to={item.href} className={linkClass}>
                {({ isActive }) => (
                  <>
                    {item.label}
                    <span
                      className={`absolute -bottom-0.5 left-0 h-px bg-gold transition-[width] duration-300 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                      aria-hidden="true"
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="btn-sheen hidden rounded-full border border-gold-dim px-5 py-2.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring lg:inline-block"
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
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {open && (
          <div className="border-t border-line/80 px-2 pb-4 pt-2 lg:hidden">
            <nav className="flex flex-col" aria-label="Mobile">
              {nav.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm tracking-label uppercase text-mist transition-colors hover:bg-gold/5 hover:text-gold-light"
                >
                  {item.label}
                </NavLink>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-3 rounded-full border border-gold-dim px-5 py-3 text-center text-xs tracking-label uppercase text-gold-light hover:border-gold hover:bg-gold/10"
              >
                Let's Connect
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
