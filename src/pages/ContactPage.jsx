import { useState } from "react";
import { ArrowRight, Mail, Globe2, MapPin } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import { WaveLines } from "../components/BrandIcons";
import { contactInfo, socials } from "../data/content";

const initialForm = { name: "", email: "", company: "", message: "" };

export default function ContactPage() {
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(
      `New enquiry from ${form.name || "website contact form"}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${contactInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <>
      <Seo
        path="/contact"
        title="Contact"
        description="Ready to strengthen your visibility and create measurable growth? Get in touch with Enso Sphere — working across South Africa, the UK, UAE, United States and Australia."
      />
      <section className="relative overflow-hidden bg-ink py-28 pt-40">
      <WaveLines className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full text-gold opacity-30" />
      <Container className="relative">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionLabel index="06">Get In Touch</SectionLabel>
            <h1 className="mt-6 font-serif-display text-4xl leading-tight text-cream sm:text-5xl">
              Let's create something
              <br />
              extraordinary together.
            </h1>
            <p className="mt-6 max-w-md text-base leading-relaxed text-mist">
              Ready to strengthen your visibility and create measurable
              growth? Tell us where you are now and what you want to
              achieve.
            </p>

            <div className="mt-10 space-y-5">
              <a
                href={`mailto:${contactInfo.email}`}
                className="flex items-center gap-4 text-sm text-mist transition-colors hover:text-cream"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim text-gold-light">
                  <Mail size={16} />
                </span>
                {contactInfo.email}
              </a>
              <div className="flex items-center gap-4 text-sm text-mist">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim text-gold-light">
                  <MapPin size={16} />
                </span>
                {contactInfo.location}
              </div>
              <div className="flex items-start gap-4 text-sm text-mist">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-dim text-gold-light">
                  <Globe2 size={16} />
                </span>
                <span className="pt-2">{contactInfo.markets}</span>
              </div>
            </div>

            <div className="mt-10 flex gap-4">
              {socials
                .filter((s) => s.label !== "Email")
                .map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="rounded-sm border border-gold-dim px-4 py-2 text-xs tracking-label uppercase text-gold-light transition-colors hover:border-gold hover:bg-gold/10"
                  >
                    {s.label}
                  </a>
                ))}
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-md border border-line bg-panel p-8"
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="sm:col-span-1">
                <label htmlFor="name" className="text-xs tracking-label uppercase text-mist">
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-mist/50 focus-ring"
                  placeholder="Jane Smith"
                />
              </div>
              <div className="sm:col-span-1">
                <label htmlFor="email" className="text-xs tracking-label uppercase text-mist">
                  Email Address
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-mist/50 focus-ring"
                  placeholder="jane@company.com"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="company" className="text-xs tracking-label uppercase text-mist">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  value={form.company}
                  onChange={handleChange}
                  className="mt-2 w-full rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-mist/50 focus-ring"
                  placeholder="Company name"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="text-xs tracking-label uppercase text-mist">
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  className="mt-2 w-full resize-none rounded-sm border border-line bg-ink px-4 py-3 text-sm text-cream placeholder:text-mist/50 focus-ring"
                  placeholder="Tell us about your growth objective..."
                />
              </div>
            </div>

            <button
              type="submit"
              className="group mt-8 inline-flex items-center gap-2 rounded-sm bg-gold px-7 py-3.5 text-xs tracking-label uppercase text-ink transition-colors hover:bg-gold-light focus-ring"
            >
              Send Message
              <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
            </button>
          </form>
        </div>
      </Container>
      </section>
    </>
  );
}
