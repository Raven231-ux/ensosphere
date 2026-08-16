import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import EnsoMark from "../components/EnsoMark";
import Seo from "../components/Seo";
import { IconTarget, IconMagnifierChart, IconChatDots, IconBarGrowth, HorizonArc } from "../components/BrandIcons";
import LogoStrip from "../components/LogoStrip";
import { expertise } from "../data/content";

const icons = [IconTarget, IconMagnifierChart, IconChatDots, IconBarGrowth];

export default function HomePage() {
  return (
    <>
      <Seo
        path="/"
        description="Enso Sphere is a strategic digital marketing agency helping ambitious brands grow through PPC, SEO and social media."
      />
      <section className="relative overflow-hidden bg-ink pt-20">
        <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" aria-hidden="true" />
        <div
          className="pointer-events-none absolute -right-40 top-1/4 h-[620px] w-[620px] rounded-full bg-gold/10 blur-3xl"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute right-10 top-10 h-[320px] w-[320px] rounded-full bg-gold-light/10 blur-2xl"
          aria-hidden="true"
        />
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-0 h-full w-full text-gold"
          aria-hidden="true"
        >
          <defs>
            <linearGradient id="cometFade" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="currentColor" stopOpacity="0" />
              <stop offset="55%" stopColor="currentColor" stopOpacity="0.5" />
              <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M 50 15 Q 68 28, 82 55"
            fill="none"
            stroke="url(#cometFade)"
            strokeWidth="0.15"
            vectorEffect="non-scaling-stroke"
          />
          {[
            [58, 12, 0.35], [67, 20, 0.25], [74, 34, 0.3], [22, 42, 0.22],
            [88, 18, 0.28], [12, 22, 0.2], [40, 8, 0.25], [80, 70, 0.22],
          ].map(([x, y, r], i) => (
            <circle key={i} cx={x} cy={y} r={r} fill="currentColor" className="text-gold-light" opacity="0.55" />
          ))}
        </svg>
        <HorizonArc className="pointer-events-none absolute -bottom-10 left-0 h-64 w-full text-gold opacity-90" />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-gold/10 to-transparent"
          aria-hidden="true"
        />

        <Container className="relative grid gap-16 pb-28 pt-16 lg:grid-cols-2 lg:items-center lg:pt-24">
          <div>
            <p className="text-xs tracking-label uppercase text-gold-light">
              Digital Marketing That
            </p>
            <h1 className="mt-6 font-serif-display text-5xl leading-[1.05] text-cream sm:text-6xl lg:text-7xl">
              Drives Growth.
              <br />
              <span className="text-gold-gradient">Creates Impact.</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
              Enso Sphere is a strategic digital marketing agency helping
              ambitious brands grow through PPC, SEO and social media.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-5">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 rounded-sm border border-gold-dim px-6 py-3.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring"
              >
                Explore Our Services
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/work"
                className="text-xs tracking-label uppercase text-mist transition-colors hover:text-cream focus-ring rounded"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute h-[26rem] w-[26rem] rounded-full border border-gold-dim/20" aria-hidden="true" />
            <div className="relative h-72 w-72 sm:h-96 sm:w-96">
              <div className="absolute inset-0 rounded-full bg-gold/10 blur-3xl" aria-hidden="true" />
              <div className="absolute inset-8 rounded-full bg-gold-light/5 blur-2xl" aria-hidden="true" />
              <EnsoMark className="h-full w-full text-gold animate-float" animate />
            </div>
          </div>
        </Container>

        <div className="relative border-t border-line py-10">
          <Container>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-[11px] tracking-label uppercase text-mist">
                Trusted Across 21 Industries
              </p>
              <div className="flex items-center gap-2 text-mist">
                <div className="flex text-gold-light" aria-hidden="true">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} fill="currentColor" strokeWidth={0} />
                  ))}
                </div>
                <span className="text-xs tracking-label uppercase">Google Reviews</span>
              </div>
            </div>
            <LogoStrip className="mt-8" />
          </Container>
        </div>

        <div className="relative border-t border-line bg-ink-soft">
          <Container className="py-20">
            <div className="mx-auto max-w-2xl text-center">
              <p className="text-xs tracking-label uppercase text-gold-light">Our Expertise</p>
              <h2 className="mt-4 font-serif-display text-3xl text-cream sm:text-4xl">
                PPC. SEO. Social Media.
                <br />
                All working together.
              </h2>
            </div>

            <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
              {expertise.map((item, i) => {
                const Icon = icons[i];
                return (
                  <div key={item.title} className="text-center sm:text-left">
                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-gold-dim text-gold-light sm:mx-0">
                      <Icon size={22} />
                    </div>
                    <h3 className="mt-5 text-sm tracking-label uppercase text-cream">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">{item.description}</p>
                    <Link
                      to="/services"
                      className="mt-3 inline-flex items-center gap-1.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:text-gold"
                    >
                      Learn More About {item.title}
                      <ArrowRight size={12} />
                    </Link>
                  </div>
                );
              })}
            </div>
          </Container>
        </div>

        <Container className="py-20">
          <div className="relative overflow-hidden rounded-md border border-line bg-panel px-8 py-16 text-center">
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-gold/5 via-transparent to-gold/5"
              aria-hidden="true"
            />
            <h2 className="font-serif-display text-3xl text-cream sm:text-4xl">
              Balance. Connection. Growth.
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mist sm:text-base">
              The strongest marketing happens when strategy, channels and
              data work together. That is where sustainable growth begins.
            </p>
            <Link
              to="/approach"
              className="mt-8 inline-flex items-center gap-2 rounded-sm border border-gold-dim px-6 py-3 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring"
            >
              Our Approach
              <ArrowRight size={15} />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
