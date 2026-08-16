import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import { TexturedOrb } from "../components/BrandIcons";
import { approach } from "../data/content";

export default function ApproachPage() {
  return (
    <>
      <Seo
        path="/approach"
        title="Approach"
        description="Discover, Strategise, Execute, Optimise — a strategic process, thoughtfully executed, built to perform."
      />
      <section className="relative overflow-hidden bg-ink py-28 pt-40">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
        <Container className="relative">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
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
                className="group mt-10 inline-flex items-center gap-2 rounded-sm border border-gold-dim px-6 py-3.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring"
              >
                Work With Us
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>

              <TexturedOrb className="mt-14 hidden h-56 w-56 lg:block" />
            </div>

            <ol className="relative border-l border-line pl-10">
              {approach.map((item) => (
                <li key={item.step} className="relative pb-14 last:pb-0">
                  <span className="absolute -left-[3.25rem] flex h-9 w-9 items-center justify-center rounded-full border border-gold-dim bg-ink text-xs text-gold-light">
                    {item.step}
                  </span>
                  <h2 className="font-serif-display text-xl text-cream">
                    {item.title}
                  </h2>
                  <p className="mt-2 max-w-sm text-sm leading-relaxed text-mist">
                    {item.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>
    </>
  );
}
