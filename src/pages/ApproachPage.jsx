import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { approach } from "../data/content";

export default function ApproachPage() {
  return (
    <>
      <Seo
        path="/approach"
        title="Approach"
        description="Discover, Strategise, Execute, Optimise, Growth — a strategic process, thoughtfully executed, built to perform."
      />
      <section className="relative overflow-hidden py-28 pt-40">
        <Container className="relative">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionLabel index="04">Our Approach</SectionLabel>
              <h1 className="mt-6 font-serif-display text-4xl leading-tight text-cream sm:text-5xl">
                A strategic process.
                <br />
                Thoughtfully executed.
                <br />
                Built to perform.
              </h1>
              <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
                Our approach is grounded in clarity, close collaboration and
                continuous improvement.
              </p>
              <Link
                to="/contact"
                className="btn-sheen group mt-10 inline-flex items-center gap-2 rounded-full border border-gold-dim px-6 py-3.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring"
              >
                Work With Us
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <ol>
              {approach.map((item, i) => (
                <Reveal
                  as="li"
                  key={item.step}
                  delay={i * 50}
                  className="group relative grid grid-cols-[2.5rem_1fr] gap-5 pb-10 last:pb-0"
                >
                  <div className="relative flex justify-center">
                    {i < approach.length - 1 && (
                      <span
                        className="absolute inset-y-0 top-10 w-px bg-gradient-to-b from-gold/40 via-line to-transparent"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim bg-ink text-[11px] tracking-label text-gold-light transition-[border-color,background-color,box-shadow] duration-300 group-hover:border-gold group-hover:bg-gold/10 group-hover:shadow-[0_0_26px_-4px_rgba(201,162,75,0.6)]">
                      {item.step}
                    </span>
                  </div>
                  <div className="pt-1.5">
                    <h2 className="font-serif-display text-xl text-cream transition-colors group-hover:text-gold-light sm:text-2xl">
                      {item.title}
                    </h2>
                    <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">
                      {item.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
