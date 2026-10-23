import { ArrowRight, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import Marquee from "../components/Marquee";
import { LogoMark } from "../components/Logo";
import {
  IconTarget,
  IconMagnifierChart,
  IconChatDots,
  IconBarGrowth,
} from "../components/BrandIcons";
import { expertise } from "../data/content";

const icons = [IconTarget, IconMagnifierChart, IconChatDots, IconBarGrowth];

const channels = [
  { name: "PPC", note: "Qualified demand, measured return" },
  { name: "SEO", note: "Search and AI-led visibility" },
  { name: "Social Media", note: "Reach, relevance and trust" },
];

export default function HomePage() {
  return (
    <>
      <Seo
        path="/"
        description="Enso Sphere is a strategic digital marketing agency helping ambitious brands grow through PPC, SEO and social media."
      />

      <section className="relative overflow-hidden pt-20">
        <div
          className="pointer-events-none absolute -right-32 top-0 h-[min(560px,90vw)] w-[min(560px,90vw)] rounded-full bg-gold/[0.07] blur-3xl"
          aria-hidden="true"
        />
        <Container className="relative grid gap-16 pb-20 pt-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:pb-24 lg:pt-20">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-line/90 bg-ink/40 px-3.5 py-1.5">
              <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold-light opacity-70" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-gold-light" />
              </span>
              <span className="text-[10px] tracking-label uppercase text-gold-light">
                Taking on new partners
              </span>
            </div>

            <h1 className="mt-7 font-serif-display text-5xl leading-[1.04] text-cream sm:text-6xl lg:text-[4.5rem]">
              Drives Growth.
              <br />
              <span className="text-gold-gradient">Creates Impact.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-relaxed text-mist sm:text-lg">
              Enso Sphere is a strategic digital marketing agency helping
              ambitious brands grow through PPC, SEO and social media.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                to="/services"
                className="btn-sheen group inline-flex items-center gap-2 rounded-full border border-gold-dim px-6 py-3.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring"
              >
                Explore Our Services
                <ArrowRight
                  size={15}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
              <Link
                to="/approach"
                className="group inline-flex items-center gap-2 text-xs tracking-label uppercase text-mist transition-colors hover:text-cream focus-ring rounded"
              >
                Our Approach
                <span
                  className="h-px w-6 bg-gold-dim transition-[width,background-color] group-hover:w-9 group-hover:bg-gold"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={80} className="relative">
            <div
              className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-gold/[0.05] blur-3xl"
              aria-hidden="true"
            />
            <div className="surface lux-edge edge-glow relative rounded-2xl p-7 sm:p-9">
              <div className="flex items-start justify-between gap-6">
                <div>
                  <span className="chip">What We Do</span>
                  <p className="mt-4 max-w-[16rem] font-serif-display text-2xl leading-snug text-cream">
                    Three channels. One connected strategy.
                  </p>
                </div>
                <LogoMark className="h-12 w-12 shrink-0" />
              </div>

              <ul className="mt-8 border-t border-line/80">
                {channels.map((channel, i) => (
                  <li key={channel.name} className="group/row border-b border-line/80">
                    <div className="flex items-baseline justify-between gap-4 py-4 transition-transform duration-300 group-hover/row:translate-x-1">
                      <div className="flex items-baseline gap-4">
                        <span className="text-[10px] tracking-label text-gold">
                          0{i + 1}
                        </span>
                        <div>
                          <p className="text-sm tracking-label uppercase text-cream">
                            {channel.name}
                          </p>
                          <p className="mt-1 text-xs text-mist">{channel.note}</p>
                        </div>
                      </div>
                      <ArrowRight
                        size={14}
                        className="shrink-0 text-gold-dim transition-colors group-hover/row:text-gold-light"
                        aria-hidden="true"
                      />
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
                <p className="text-xs leading-relaxed text-mist">
                  <span className="text-cream">166 clients</span> supported
                  <br />
                  across <span className="text-cream">21 industries</span>
                </p>
                <div className="flex items-center gap-2 text-mist">
                  <div className="flex text-gold-light" aria-hidden="true">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star key={i} size={13} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <span className="text-[10px] tracking-label uppercase">
                    Google Reviews
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      <Marquee />

      <section className="relative">
        <Container className="py-20 sm:py-24">
          <Reveal className="mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-label uppercase text-gold-light">
              Our Expertise
            </p>
            <h2 className="mt-4 font-serif-display text-3xl text-cream sm:text-4xl">
              PPC. SEO. Social Media.
              <br />
              All working together.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {expertise.map((item, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={item.title} delay={i * 60}>
                  <div className="surface surface-hover lux-edge edge-glow group relative h-full rounded-xl p-7">
                    <div className="flex items-center justify-between">
                      <div className="pulse-ring flex h-12 w-12 items-center justify-center rounded-full border border-gold-dim bg-ink/60 text-gold-light transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                        <Icon size={20} />
                      </div>
                      <span className="chip">0{i + 1}</span>
                    </div>
                    <h3 className="mt-6 text-sm tracking-label uppercase text-cream">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-mist">
                      {item.description}
                    </p>
                    <Link
                      to="/services"
                      className="mt-5 inline-flex items-center gap-1.5 text-xs tracking-label uppercase text-gold-light transition-colors hover:text-gold focus-ring rounded"
                    >
                      Learn More
                      <span className="sr-only"> about {item.title}</span>
                      <ArrowRight
                        size={12}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <Container className="pb-24 sm:pb-28">
        <Reveal>
          <div className="surface relative overflow-hidden rounded-2xl px-8 py-16 text-center sm:px-12">
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/60 to-transparent"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_120%_at_50%_0%,rgba(201,162,75,0.14),transparent_70%)]"
              aria-hidden="true"
            />
            <div className="relative">
              <h2 className="font-serif-display text-3xl text-cream sm:text-4xl">
                Balance. Connection. Growth.
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-mist sm:text-base">
                The strongest marketing happens when strategy, channels and
                data work together. That is where sustainable growth begins.
              </p>
              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-7 gap-y-4">
                <Link
                  to="/approach"
                  className="btn-sheen group inline-flex items-center gap-2 rounded-full border border-gold-dim px-6 py-3 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10 focus-ring"
                >
                  Our Approach
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
                <Link
                  to="/contact"
                  className="text-xs tracking-label uppercase text-mist transition-colors hover:text-cream focus-ring rounded"
                >
                  Let's Connect
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </>
  );
}
