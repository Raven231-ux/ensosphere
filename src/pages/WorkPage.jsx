import { useState } from "react";
import { ArrowRight, ArrowUpRight, ShoppingBag, PaintBucket, Home as HomeIcon } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import { work, workFilters } from "../data/content";

const cardArt = [
  { Icon: ShoppingBag, from: "#8a6f37", via: "#c9a24b", to: "#2a2418" },
  { Icon: PaintBucket, from: "#3a3020", via: "#c9a24b", to: "#16130f" },
  { Icon: HomeIcon, from: "#2a2418", via: "#8a6f37", to: "#0a0806" },
];

export default function WorkPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? work : work.filter((item) => item.tag === filter);

  return (
    <>
      <Seo
        path="/work"
        title="Work"
        description="Real strategies. Real results. Selected Google Ads case studies from Enso Sphere across retail e-commerce, paint & interiors and home improvement."
      />
      <section className="relative bg-ink-soft py-28 pt-40">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div className="max-w-xl">
              <SectionLabel index="05">Our Work</SectionLabel>
              <h1 className="mt-6 font-serif-display text-4xl leading-tight text-cream sm:text-5xl">
                Real strategies.
                <br />
                Real results.
              </h1>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-mist">
              We support ambitious brands across industries with campaigns
              designed to produce measurable commercial growth.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {workFilters.map((label) => (
              <button
                key={label}
                type="button"
                onClick={() => setFilter(label)}
                className={`rounded-sm border px-4 py-2 text-xs tracking-label uppercase transition-colors focus-ring ${
                  filter === label
                    ? "border-gold bg-gold/10 text-gold-light"
                    : "border-line text-mist hover:border-gold-dim hover:text-cream"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {filtered.map((item, i) => {
              const art = cardArt[i % cardArt.length];
              const Icon = art.Icon;
              return (
                <div
                  key={item.client}
                  className="group relative overflow-hidden rounded-md border border-line bg-panel transition-colors hover:border-gold-dim"
                >
                  <div
                    className="relative flex h-36 items-center justify-center overflow-hidden"
                    style={{
                      backgroundImage: `radial-gradient(circle at 30% 20%, ${art.via}55, transparent 60%), linear-gradient(135deg, ${art.from}, ${art.to})`,
                    }}
                  >
                    <div className="absolute inset-0 bg-grain opacity-30" aria-hidden="true" />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-panel via-transparent to-transparent opacity-90"
                      aria-hidden="true"
                    />
                    <Icon
                      size={40}
                      strokeWidth={1.25}
                      className="relative text-cream/70 transition-transform duration-300 group-hover:scale-110"
                    />
                    <ArrowUpRight
                      size={18}
                      className="absolute right-4 top-4 text-cream/60 transition-colors group-hover:text-gold-light"
                    />
                  </div>

                  <div className="p-7">
                    <p className="text-[11px] tracking-label uppercase text-gold">
                      {item.client}
                    </p>
                    <h2 className="mt-2 font-serif-display text-xl text-cream">
                      {item.channel}
                    </h2>

                    <div className="mt-8 border-t border-line pt-6">
                      <p className="font-serif-display text-3xl text-gold-light">
                        {item.metric}
                      </p>
                      <p className="mt-1 text-xs uppercase tracking-label text-mist">
                        {item.metricLabel}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="rounded-md border border-line bg-panel p-8 text-sm text-mist sm:col-span-2 lg:col-span-3">
                Case studies for this channel are coming soon.
              </div>
            )}

            <Link
              to="/contact"
              className="group flex flex-col items-start justify-center gap-3 rounded-md border border-dashed border-gold-dim bg-transparent p-8 transition-colors hover:bg-gold/5"
            >
              <span className="font-serif-display text-lg text-cream">
                View All Case Studies
              </span>
              <span className="inline-flex items-center gap-2 text-xs tracking-label uppercase text-gold-light">
                Get In Touch
                <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
