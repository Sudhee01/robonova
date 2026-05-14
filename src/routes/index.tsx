import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  ArrowRight,
  Sparkles,
  Target,
  Lightbulb,
  Users,
  ChevronLeft,
  ChevronRight,
  X,
  Cpu,
  Wrench,
  Trophy,
  Calendar,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { assets, stats, projects, mentors, timeline, gallery } from "@/lib/site-data";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ROBONOVA — MITE Robotics & Innovation Club" },
      {
        name: "description",
        content:
          "Empowering students through robotics, automation, AI innovation and real-world engineering at MITE.",
      },
      { property: "og:title", content: "ROBONOVA — MITE Robotics & Innovation Club" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Stats />
      <Gallery />
      <ProjectsPreview />
      <MentorsPreview />
      <TimelineSection />
      <Contact />
    </>
  );
}

/* ---------------- Hero ---------------- */
function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28 bg-gradient-hero">
      <div className="absolute -top-20 -left-20 h-96 w-96 rounded-full bg-soft-blue opacity-70 blur-3xl animate-blob" />
      <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-gradient-primary opacity-25 blur-3xl animate-blob" />
      <div className="absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-primary-glow opacity-20 blur-3xl animate-blob" />

      <div className="container-page relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-semibold text-primary animate-fade-in">
            <Sparkles className="h-3.5 w-3.5" /> MITE Robotics & Innovation Club
          </div>
          <h1 className="mt-5 font-display text-5xl font-bold leading-[1.05] md:text-7xl animate-fade-up">
            ROBO<span className="gradient-text">NOVA</span>
            <br />
            <span className="text-foreground/80 text-4xl md:text-5xl font-semibold">
              Engineering Innovation Through
            </span>{" "}
            <span className="gradient-text text-4xl md:text-5xl font-semibold">Robotics & AI</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up">
            Empowering students through robotics, automation, AI innovation and
            real-world engineering projects.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 animate-fade-up">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-smooth"
            >
              Explore Club
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-smooth" />
            </Link>
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3 text-sm font-semibold hover:bg-accent transition-smooth"
            >
              View Projects
            </Link>
          </div>

          <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
            {[
              { k: "120+", v: "Members" },
              { k: "45+", v: "Projects" },
              { k: "30+", v: "Workshops" },
            ].map((s) => (
              <div key={s.v} className="rounded-xl glass p-3 text-center">
                <div className="text-xl font-bold gradient-text">{s.k}</div>
                <div className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  {s.v}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 -z-10 mx-auto h-[420px] w-[420px] rounded-full bg-gradient-primary opacity-20 blur-3xl" />
          <div className="relative mx-auto aspect-square max-w-md animate-float">
            <div className="absolute inset-0 rounded-[40px] glass-strong shadow-glow" />
            <img
              src={assets.heroRobot}
              alt="ROBONOVA mascot robot in innovation lab"
              className="relative h-full w-full rounded-[40px] object-cover p-3"
              width={1024}
              height={1024}
            />
            <img
              src={assets.logo}
              alt=""
              aria-hidden
              className="absolute -bottom-6 -left-6 h-24 w-24 rounded-2xl glass-strong p-2 shadow-elegant animate-float-slow"
            />
            <div className="absolute -top-4 right-2 rounded-2xl glass-strong px-4 py-3 shadow-elegant animate-float-slow">
              <div className="flex items-center gap-2 text-xs font-semibold">
                <span className="grid h-2 w-2 place-items-center rounded-full bg-primary animate-pulse-glow" />
                Lab live · 24/7
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- About ---------------- */
function About() {
  const items = [
    {
      icon: Target,
      title: "Vision",
      text: "To inspire innovation and technical excellence in robotics, automation and intelligent systems while empowering students to become future technology leaders.",
    },
    {
      icon: Cpu,
      title: "Mission",
      text: "Promote robotics learning, conduct workshops & competitions, encourage innovation and teamwork, and build real-world engineering solutions.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      text: "We turn ideas into working prototypes — from autonomous bots to AI-powered systems built right here at the MITE innovation lab.",
    },
    {
      icon: Users,
      title: "Collaboration",
      text: "A diverse community of engineers, designers and dreamers building together across departments and disciplines.",
    },
  ];

  return (
    <section className="py-24">
      <div className="container-page">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            About the Club
          </p>
          <h2 className="mt-2 max-w-2xl font-display text-3xl font-bold md:text-5xl">
            A community building the <span className="gradient-text">future of robotics</span>.
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <div className="group h-full rounded-3xl glass-strong p-6 shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <it.icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-xl font-semibold">{it.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Stats ---------------- */
function Stats() {
  return (
    <section className="py-16">
      <div className="container-page">
        <div className="rounded-[32px] bg-gradient-primary p-1 shadow-glow">
          <div className="rounded-[28px] bg-background/95 backdrop-blur p-8 md:p-12">
            <div className="grid gap-6 md:grid-cols-4">
              {stats.map((s, i) => (
                <Reveal key={s.label} delay={i * 80}>
                  <div className="text-center">
                    <div className="font-display text-4xl font-bold gradient-text md:text-6xl">
                      <Counter to={s.value} suffix={s.suffix} />
                    </div>
                    <div className="mt-2 text-sm font-medium uppercase tracking-wider text-muted-foreground">
                      {s.label}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Gallery ---------------- */
function Gallery() {
  const [active, setActive] = useState(0);
  const [open, setOpen] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % gallery.length), 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container-page">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Gallery
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            Moments from the <span className="gradient-text">lab & arena</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <div className="md:col-span-2 relative overflow-hidden rounded-3xl shadow-elegant aspect-[16/10]">
            {gallery.map((src, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="absolute inset-0 transition-smooth"
                style={{ opacity: active === i ? 1 : 0 }}
                aria-label={`Open image ${i + 1}`}
              >
                <img
                  src={src}
                  alt="ROBONOVA gallery"
                  className="h-full w-full object-cover hover:scale-105 transition-smooth"
                  loading="lazy"
                />
              </button>
            ))}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center gap-1.5 p-4">
              {gallery.map((_, i) => (
                <span
                  key={i}
                  className={`h-1.5 rounded-full transition-smooth ${active === i ? "w-8 bg-primary" : "w-2 bg-white/70"}`}
                />
              ))}
            </div>
            <button
              onClick={() => setActive((a) => (a - 1 + gallery.length) % gallery.length)}
              className="absolute left-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong shadow-elegant hover:bg-primary hover:text-primary-foreground transition-smooth"
              aria-label="Previous"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => setActive((a) => (a + 1) % gallery.length)}
              className="absolute right-3 top-1/2 -translate-y-1/2 grid h-10 w-10 place-items-center rounded-full glass-strong shadow-elegant hover:bg-primary hover:text-primary-foreground transition-smooth"
              aria-label="Next"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-1">
            {gallery.slice(0, 3).map((src, i) => (
              <button
                key={i}
                onClick={() => setOpen(i)}
                className="group overflow-hidden rounded-2xl shadow-elegant aspect-[4/3]"
              >
                <img
                  src={src}
                  alt="ROBONOVA"
                  loading="lazy"
                  className="h-full w-full object-cover group-hover:scale-110 transition-smooth"
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {open !== null && (
        <div
          onClick={() => setOpen(null)}
          className="fixed inset-0 z-[60] grid place-items-center bg-foreground/70 p-6 animate-fade-in"
        >
          <button
            className="absolute top-6 right-6 grid h-11 w-11 place-items-center rounded-full glass-strong"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={gallery[open]}
            alt="enlarged"
            className="max-h-[85vh] max-w-[92vw] rounded-2xl shadow-glow"
          />
        </div>
      )}
    </section>
  );
}

/* ---------------- Projects ---------------- */
function ProjectsPreview() {
  return (
    <section className="py-24">
      <div className="container-page">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
              Projects
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
              Built by students, <span className="gradient-text">tested in the field</span>
            </h2>
          </Reveal>
          <Link
            to="/projects"
            className="text-sm font-semibold text-primary inline-flex items-center gap-1.5 hover:gap-2 transition-smooth"
          >
            See all projects <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.slice(0, 3).map((p, i) => (
            <Reveal key={p.title} delay={i * 80}>
              <article className="group h-full overflow-hidden rounded-3xl glass-strong shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-smooth group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold">{p.title}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-2">{p.desc}</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-medium text-foreground/70"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <Link
                    to="/projects"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-smooth"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Mentors ---------------- */
function MentorsPreview() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container-page">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Mentors
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            Guided by <span className="gradient-text">expert faculty</span>
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="group h-full rounded-3xl glass-strong p-6 text-center shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <div className="mx-auto h-24 w-24 rounded-full bg-gradient-primary p-1 shadow-glow">
                  <div className="grid h-full w-full place-items-center rounded-full bg-background font-display text-2xl font-bold gradient-text">
                    {m.name
                      .split(" ")
                      .slice(-2)
                      .map((s) => s[0])
                      .join("")}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
                <p className="text-sm font-medium text-primary">{m.role}</p>
                <p className="text-xs text-muted-foreground">{m.dept}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Timeline ---------------- */
function TimelineSection() {
  return (
    <section className="py-24">
      <div className="container-page">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            History
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            Our <span className="gradient-text">journey so far</span>
          </h2>
        </Reveal>

        <div className="relative mt-14">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary-glow to-transparent md:-translate-x-1/2" />
          <div className="space-y-10">
            {timeline.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={t.year} delay={i * 60}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>*:first-child]:order-2"}`}>
                    <div className="hidden md:block" />
                    <div className={`pl-12 md:pl-0 ${left ? "md:pr-10 md:text-right" : "md:pl-10"}`}>
                      <span className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 grid h-4 w-4 place-items-center rounded-full bg-gradient-primary shadow-glow">
                        <span className="h-1.5 w-1.5 rounded-full bg-background" />
                      </span>
                      <div className="rounded-2xl glass-strong p-5 shadow-elegant inline-block max-w-md">
                        <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                          <Calendar className="h-3.5 w-3.5" /> {t.year}
                        </div>
                        <h3 className="mt-1 text-lg font-semibold">{t.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{t.desc}</p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- Contact ---------------- */
function Contact() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container-page grid gap-10 lg:grid-cols-2">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            Contact
          </p>
          <h2 className="mt-2 font-display text-3xl font-bold md:text-5xl">
            Let's <span className="gradient-text">build something</span> together
          </h2>
          <p className="mt-4 max-w-md text-muted-foreground">
            Interested in joining ROBONOVA, partnering with us, or sponsoring an event?
            Drop us a message — we'd love to hear from you.
          </p>

          <ul className="mt-8 grid gap-4">
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
        </Reveal>

        <Reveal delay={120}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll get back to you soon.");
            }}
            className="rounded-3xl glass-strong p-8 shadow-elegant"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <Field label="Full name" type="text" />
              <Field label="Email" type="email" />
            </div>
            <Field label="Subject" type="text" />
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
  );
}

function Field({ label, type }: { label: string; type: string }) {
  return (
    <div className="mt-4 first:mt-0 md:mt-0">
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
