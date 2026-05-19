import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone, CheckCircle2, Loader2 } from "lucide-react";
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

type Status = "idle" | "loading" | "success" | "error";

function ContactPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const form = e.currentTarget;

    try {
      const res = await fetch("https://formspree.io/f/xzdwzyyj", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={<>Let's <span className="gradient-text">connect</span></>}
        description="Whether you want to join, partner, sponsor or just say hi — we'd love to hear from you."
      />
      <section className="py-20">
        <div className="container-page grid gap-10 lg:grid-cols-2">

          {/* Left — Contact info + map */}
          <Reveal>
            <div className="rounded-3xl glass-strong p-8 shadow-elegant">
              <h3 className="font-display text-2xl font-bold">Reach us directly</h3>
              <ul className="mt-6 grid gap-4">
                {[
                  { icon: Mail, label: "robonova@mite.ac.in" },
                  { icon: Phone, label: "+91 78999 35978" },
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

          {/* Right — Formspree form */}
          <Reveal delay={120}>
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl glass-strong p-8 shadow-elegant"
            >
              <h3 className="font-display text-2xl font-bold">Send a message</h3>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <Field label="Full name" type="text" name="name" />
                <Field label="Email" type="email" name="email" />
              </div>
              <div className="mt-4">
                <Field label="Subject" type="text" name="subject" />
              </div>
              <div className="mt-4">
                <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth resize-none"
                />
              </div>

              {/* Success message */}
              {status === "success" && (
                <div className="mt-4 flex items-center gap-2 rounded-xl bg-primary/10 border border-primary/20 px-4 py-3 text-sm font-medium text-primary">
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Message sent! We'll get back to you soon.
                </div>
              )}

              {/* Error message */}
              {status === "error" && (
                <div className="mt-4 rounded-xl bg-destructive/10 border border-destructive/20 px-4 py-3 text-sm font-medium text-destructive">
                  Something went wrong. Please try again or email us directly.
                </div>
              )}

              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.01] transition-smooth disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : status === "success" ? (
                  <>
                    <CheckCircle2 className="h-4 w-4" />
                    Sent!
                  </>
                ) : (
                  <>
                    Send Message <ArrowRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  type,
  name,
}: {
  label: string;
  type: string;
  name: string;
}) {
  return (
    <div>
      <label className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
        {label}
      </label>
      <input
        required
        type={type}
        name={name}
        placeholder={label}
        className="mt-1.5 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-smooth"
      />
    </div>
  );
}