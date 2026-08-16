import { Quote, MousePointerClick, SearchCode, BarChart3 } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
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
      <section className="relative bg-ink py-28 pt-40">
        <Container>
          <div className="max-w-2xl">
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
          </div>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {insights.map((post, i) => {
              const art = postArt[i % postArt.length];
              const Icon = art.Icon;
              return (
                <article
                  key={post.title}
                  className="group flex flex-col overflow-hidden rounded-md border border-line bg-panel transition-colors hover:border-gold-dim"
                >
                  <div
                    className="relative flex h-32 items-center justify-center overflow-hidden"
                    style={{
                      backgroundImage: `radial-gradient(circle at 70% 30%, ${art.via}55, transparent 60%), linear-gradient(135deg, ${art.from}, ${art.to})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
                    <Icon
                      size={34}
                      strokeWidth={1.25}
                      className="relative text-cream/70 transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <div className="flex items-center justify-between text-[11px] tracking-label uppercase text-gold">
                      <span>{post.tag}</span>
                      <span>{post.date}</span>
                    </div>
                    <h2 className="mt-4 font-serif-display text-xl leading-snug text-cream">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-mist">
                      {post.excerpt}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="relative border-t border-line bg-ink-soft py-28">
        <Container>
          <SectionLabel>Professional Trust</SectionLabel>
          <h2 className="mt-6 max-w-xl font-serif-display text-3xl leading-tight text-cream sm:text-4xl">
            Built across teams, agencies and client work.
          </h2>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {testimonials.map((t) => (
              <blockquote
                key={t.name}
                className="rounded-md border border-line bg-panel p-7"
              >
                <Quote className="text-gold-dim" size={22} aria-hidden="true" />
                <p className="mt-4 text-sm leading-relaxed text-cream/90">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-5 text-xs tracking-label uppercase text-mist">
                  {t.name} <span className="text-gold-dim">&middot;</span> {t.role}
                </footer>
              </blockquote>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
