import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import EnsoMark from "../components/EnsoMark";
import Seo from "../components/Seo";
import { stats } from "../data/content";

export default function AboutPage() {
  return (
    <>
      <Seo
        path="/about"
        title="About"
        description="Enso Sphere is a digital marketing partner for brands with ambition — combining strategic thinking, creative clarity and performance marketing."
      />
      <section className="relative bg-ink py-28 pt-40">
        <Container>
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionLabel index="02">About Enso Sphere</SectionLabel>
              <h1 className="mt-6 font-serif-display text-4xl leading-tight text-cream sm:text-5xl">
                We are a digital marketing
                <br />
                partner for brands with
                <br />
                ambition.
              </h1>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-mist">
                We combine strategic thinking, creative clarity and
                performance marketing to help brands reach the right
                audience, strengthen their visibility and grow with purpose.
              </p>
              <Link
                to="/work"
                className="group mt-10 inline-flex items-center gap-2 rounded-sm border border-gold-dim px-6 py-3.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring"
              >
                Our Story
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            <div className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80">
              <div className="absolute inset-0 rounded-full bg-gold/5 blur-2xl" aria-hidden="true" />
              <EnsoMark className="h-full w-full text-gold" />
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-line pt-14 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <p className="font-serif-display text-4xl text-gold-light sm:text-5xl">
                  {stat.value}
                </p>
                <p className="mt-2 text-xs uppercase tracking-label text-mist">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
