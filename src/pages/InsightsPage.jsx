import { Quote, MousePointerClick, SearchCode, BarChart3 } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import { insights, testimonials } from "../data/content";

const postArt = [
  { Icon: MousePointerClick, from: "#3a3020", via: "#c9a24b", to: "#0a0806" },
  { Icon: SearchCode, from: "#2a2418", via: "#8a6f37", to: "#16130f" },
  { Icon: BarChart3, from: "#3a3020", via: "#e8c874", to: "#0a0806" },
];

export default function InsightsPage() {
  return (
    <>
      <Seo
        path="/insights"
        title="Insights"
        description="Practical notes on paid search, technical SEO and measurement from Enso Sphere, plus professional recommendations for Michaela H. Luyt."
      />
      <section className="relative py-28 pt-40">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel>Insights</SectionLabel>
            <h1 className="mt-6 font-serif-display text-4xl leading-tight text-cream sm:text-5xl">
              Ideas, insights and strategies
              <br />
              for meaningful growth.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-mist">
              Practical notes on paid search, technical SEO and measurement
              &mdash; teaching what shows up in real, hands-on delivery work.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 lg:grid-cols-3">
            {insights.map((post, i) => {
              const art = postArt[i % postArt.length];
              const Icon = art.Icon;
              return (
                <Reveal key={post.title} delay={i * 70}>
                  <article className="surface surface-hover lux-edge group flex h-full flex-col overflow-hidden rounded-xl transition-colors hover:border-gold-dim">
                    <div
                      className="relative flex h-36 items-center justify-center overflow-hidden"
                      style={{
                        backgroundImage: `radial-gradient(circle at 70% 30%, ${art.via}55, transparent 60%), linear-gradient(135deg, ${art.from}, ${art.to})`,
                      }}
                    >
                      <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
                      <div
                        className="absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-cream/20 to-transparent transition-transform duration-500 group-hover:translate-x-[120%]"
                        aria-hidden="true"
                      />
                      <span className="chip absolute left-5 top-5 bg-ink/50 backdrop-blur-sm">
                        {post.tag}
                      </span>
                      <Icon
                        size={38}
                        strokeWidth={1.2}
                        className="relative text-cream/75 transition-transform duration-500 group-hover:-translate-y-1"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-7">
                      <span className="text-[10px] tracking-label uppercase text-gold">
                        {post.date}
                      </span>
                      <h2 className="mt-3 font-serif-display text-xl leading-snug text-cream transition-colors group-hover:text-gold-light">
                        {post.title}
                      </h2>
                      <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                        {post.excerpt}
                      </p>
                      <span className="mt-5 inline-flex items-center gap-2 text-[10px] tracking-label uppercase text-gold">
                        Publishing soon
                        <span className="h-px w-6 bg-gold" aria-hidden="true" />
                      </span>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative border-t border-line bg-panel/20 py-28">
        <Container>
          <Reveal>
            <SectionLabel>Professional Trust</SectionLabel>
            <h2 className="mt-6 max-w-xl font-serif-display text-3xl leading-tight text-cream sm:text-4xl">
              Built across teams, agencies and client work.
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} delay={(i % 2) * 60}>
                <blockquote className="surface surface-hover lux-edge relative h-full rounded-xl p-7">
                  <Quote className="text-gold-dim" size={22} aria-hidden="true" />
                  <p className="mt-4 text-sm leading-relaxed text-cream/90">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <footer className="mt-6 flex items-center justify-between gap-4 border-t border-line/70 pt-4 text-[10px] tracking-label uppercase text-mist">
                    <span>{t.name}</span>
                    <span className="text-gold">Recommendation</span>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
