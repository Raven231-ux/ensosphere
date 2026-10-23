import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { stats, contactInfo } from "../data/content";

export default function AboutPage() {
  return (
    <>
      <Seo
        path="/about"
        title="About"
        description="Enso Sphere is a digital marketing partner for brands with ambition — combining strategic thinking, creative clarity and performance marketing."
      />
      <section className="relative py-24 pt-36">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <Reveal>
              <SectionLabel index="02">About Enso Sphere</SectionLabel>
              <h1 className="mt-6 max-w-2xl text-balance font-serif-display text-4xl leading-[1.1] text-cream sm:text-5xl">
                We are a digital marketing partner for brands with ambition.
              </h1>
              <p className="mt-7 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
                We combine strategic thinking, creative clarity and
                performance marketing to help brands reach the right
                audience, strengthen their visibility and grow with purpose.
              </p>
            </Reveal>

            <Reveal delay={60}>
              <div className="surface lux-edge edge-glow relative rounded-2xl p-8">
                <span className="chip">At A Glance</span>
                <dl className="mt-6 divide-y divide-line/80">
                  {stats.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex items-end justify-between gap-6 py-6 first:pt-0 last:pb-0"
                    >
                      <dt className="text-xs tracking-label uppercase text-mist">
                        {stat.label}
                      </dt>
                      <dd className="num-lining font-serif-display text-4xl leading-none text-gold-light sm:text-5xl">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 border-t border-line/80 pt-6 text-xs leading-relaxed text-mist">
                  {contactInfo.markets}
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
