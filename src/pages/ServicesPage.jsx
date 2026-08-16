import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
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
      <section className="relative bg-ink-soft py-28 pt-40">
        <Container>
          <div className="max-w-2xl">
            <SectionLabel index="03">Our Services</SectionLabel>
            <h1 className="mt-6 font-serif-display text-4xl leading-tight text-cream sm:text-5xl">
              Focused digital marketing
              <br />
              solutions designed to grow
              <br />
              your brand.
            </h1>
            <p className="mt-6 text-base leading-relaxed text-mist">
              From strategy to execution, our services help you become
              visible at the right moment, reach the right audience and turn
              attention into action.
            </p>
          </div>

          <div className="mt-16 grid gap-px overflow-hidden rounded-md border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => {
              const Icon = icons[i];
              return (
                <div
                  key={service.title}
                  className="group relative bg-panel p-7 transition-colors hover:bg-ink"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-gold-dim text-gold-light">
                    <Icon size={19} />
                  </div>
                  <h2 className="mt-5 text-sm tracking-label uppercase text-cream">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-mist">
                    {service.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12">
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 text-xs tracking-label uppercase text-gold-light transition-colors hover:text-gold focus-ring rounded"
            >
              View All Services
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
