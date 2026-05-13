import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ROBONOVA" },
      { name: "description", content: "Get in touch with the ROBONOVA Robotics & Innovation Club at MITE." },
      { property: "og:title", content: "Contact — ROBONOVA" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="gradient-text">connect</span></>}
        description="Whether you want to join, partner, sponsor or just say hi — we'd love to hear from you."
      />
      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-3xl glass-strong p-8 shadow-elegant">
              <h3 className="font-display text-2xl font-bold">Reach us directly</h3>
              <ul className="mt-6 grid gap-4">
                {[
                  { icon: Mail, label: "robonova@mite.ac.in" },
                  { icon: Phone, label: "+91 98765 43210" },
                  { icon: MapPin, label: "MITE Campus, Moodabidri, Karnataka 574225" },
                ].map((c) => (
                  <li key={c.label} className="flex items-center gap-3">
                    <span className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <span className="text-sm font-medium">{c.label}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-2xl border">
                <iframe
                  title="MITE Map"
                  src="https://www.google.com/maps?q=Mangalore%20Institute%20of%20Technology%20%26%20Engineering&output=embed"
                  className="h-64 w-full"
                  loading="lazy"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks! We'll get back to you soon.");
              }}
              className="rounded-3xl glass-strong p-8 shadow-elegant"
            >
              <h3 className="font-display text-2xl font-bold">Send a message</h3>
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full name" type="text" />
                <Field label="Email" type="email" />
              </div>
              <div className="mt-4">
                <Field label="Subject" type="text" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth"
                />
              </div>
              <button
                type="submit"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-smooth"
              >
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth"
      />
    </div>
  );
}
