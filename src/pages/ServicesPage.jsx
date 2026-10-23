import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import {
  IconCompass,
  IconTarget,
  IconMagnifierChart,
  IconChatDots,
  IconBarGrowth,
  IconPulse,
  IconDocumentPen,
  IconBrowserCursor,
} from "../components/BrandIcons";
import { services } from "../data/content";

const icons = [
  IconTarget,
  IconMagnifierChart,
  IconChatDots,
  IconCompass,
  IconPulse,
  IconDocumentPen,
  IconBarGrowth,
  IconBrowserCursor,
];

export default function ServicesPage() {
  return (
    <>
      <Seo
        path="/services"
        title="Services"
        description="PPC & Google Ads, SEO & AI Search, Social Media, Digital Strategy, Paid Social, Content Strategy, Analytics & Tracking, and CRO — focused digital marketing solutions from Enso Sphere."
      />
      <section className="relative py-28 pt-40">
        <Container>
          <Reveal className="max-w-2xl">
            <SectionLabel index="03">Our Services</SectionLabel>
            <h1 className="mt-6 font-serif-display text-4xl leading-tight text-cream sm:text-5xl lg:text-6xl">
              Focused digital marketing
              <br />
              solutions designed to grow
              <br />
              your brand.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-mist sm:text-lg">
              From strategy to execution, our services help you become
              visible at the right moment, reach the right audience and turn
              attention into action.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = icons[i];
              return (
                <Reveal key={service.title} delay={(i % 4) * 60}>
                  <div className="surface surface-hover lux-edge edge-glow group relative h-full rounded-xl p-7">
                    <div className="flex items-center justify-between">
                      <div className="pulse-ring flex h-11 w-11 items-center justify-center rounded-full border border-gold-dim bg-ink/60 text-gold-light transition-colors duration-300 group-hover:border-gold group-hover:text-gold">
                        <Icon size={19} />
                      </div>
                      <span className="chip">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h2 className="mt-6 text-sm tracking-label uppercase text-cream">
                      {service.title}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-mist">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </Container>
      </section>
    </>
  );
}
