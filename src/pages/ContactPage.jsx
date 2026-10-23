import { useState } from "react";
import { ArrowRight, Mail, Globe2, MapPin, Phone } from "lucide-react";
import Container from "../components/Container";
import SectionLabel from "../components/SectionLabel";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import SocialIcon from "../components/SocialIcon";
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

  const inputClass =
    "mt-2 w-full rounded-lg border border-line bg-ink/70 px-4 py-3 text-sm text-cream placeholder:text-mist/50 transition-colors hover:border-gold-dim/70 focus:border-gold/60 focus-ring";

  return (
    <>
      <Seo
        path="/contact"
        title="Contact"
        description="Ready to strengthen your visibility and create measurable growth? Get in touch with Enso Sphere — working across South Africa, the UK, UAE, United States and Australia."
      />
      <section className="relative overflow-hidden py-28 pt-40">
        <WaveLines className="pointer-events-none absolute inset-x-0 bottom-0 h-64 w-full text-gold opacity-25" />
        <Container className="relative">
          <div className="grid gap-16 lg:grid-cols-2">
            <Reveal>
              <SectionLabel index="05">Get In Touch</SectionLabel>
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

              <div className="mt-10 space-y-3">
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="group flex items-center gap-4 rounded-xl border border-transparent px-2 py-2 text-sm text-mist transition-colors hover:border-line hover:bg-ink/40 hover:text-cream"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim text-gold-light transition-[border-color,box-shadow] duration-300 group-hover:border-gold group-hover:shadow-[0_0_22px_-6px_rgba(201,162,75,0.7)]">
                    <Mail size={16} />
                  </span>
                  {contactInfo.email}
                </a>
                <a
                  href={`tel:${contactInfo.phoneHref}`}
                  className="group flex items-center gap-4 rounded-xl border border-transparent px-2 py-2 text-sm text-mist transition-colors hover:border-line hover:bg-ink/40 hover:text-cream"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim text-gold-light transition-[border-color,box-shadow] duration-300 group-hover:border-gold group-hover:shadow-[0_0_22px_-6px_rgba(201,162,75,0.7)]">
                    <Phone size={16} />
                  </span>
                  {contactInfo.phone}
                </a>
                <div className="flex items-center gap-4 px-2 py-2 text-sm text-mist">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold-dim text-gold-light">
                    <MapPin size={16} />
                  </span>
                  {contactInfo.location}
                </div>
                <div className="flex items-start gap-4 px-2 py-2 text-sm text-mist">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold-dim text-gold-light">
                    <Globe2 size={16} />
                  </span>
                  <span className="pt-2">{contactInfo.markets}</span>
                </div>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {socials
                  .filter((s) => s.label !== "Email")
                  .map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="group flex items-center gap-2 rounded-full border border-line bg-ink/40 px-4 py-2.5 text-[10px] tracking-label uppercase text-mist transition-colors hover:border-gold hover:text-gold-light"
                    >
                      <SocialIcon
                        label={s.label}
                        className="h-3.5 w-3.5 opacity-75 grayscale transition duration-300 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                      {s.label}
                    </a>
                  ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <form
                onSubmit={handleSubmit}
                className="surface lux-edge rounded-2xl p-8"
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
                      className={inputClass}
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
                      className={inputClass}
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
                      className={inputClass}
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
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your growth objective..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-sheen group mt-8 inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3.5 text-xs tracking-label uppercase text-ink transition-colors hover:bg-gold-light focus-ring"
                >
                  Send Message
                  <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </Reveal>
          </div>
        </Container>
      </section>
    </>
  );
}
