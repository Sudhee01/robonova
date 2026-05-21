import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, MapPin, Tag, CheckCircle2, Sparkles, X, ZoomIn } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { events, type EventStatus } from "@/lib/site-data";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Events — ROBONOVA" },
      { name: "description", content: "Upcoming and past events by ROBONOVA — workshops, competitions, seminars and more." },
      { property: "og:title", content: "Events — ROBONOVA" },
    ],
  }),
  component: EventsPage,
});

const FILTERS: { label: string; value: EventStatus | "all" }[] = [
  { label: "All Events", value: "all" },
  { label: "Upcoming", value: "upcoming" },
  { label: "Completed", value: "completed" },
];

const STATUS_STYLES: Record<EventStatus, { pill: string; dot: string; label: string; bar: string }> = {
  upcoming: {
    pill: "bg-primary/10 text-primary border border-primary/20",
    dot: "bg-primary animate-pulse",
    label: "Upcoming",
    bar: "bg-gradient-primary",
  },
  ongoing: {
    pill: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    dot: "bg-emerald-400 animate-pulse",
    label: "Live Now",
    bar: "bg-emerald-400",
  },
  completed: {
    pill: "bg-muted text-muted-foreground border border-border",
    dot: "bg-muted-foreground",
    label: "Completed",
    bar: "bg-muted-foreground/30",
  },
};

const CATEGORY_COLORS: Record<string, string> = {
  Workshop:    "bg-blue-500/10 text-blue-500 border-blue-500/20",
  Competition: "bg-orange-500/10 text-orange-500 border-orange-500/20",
  Seminar:     "bg-purple-500/10 text-purple-500 border-purple-500/20",
  Fest:        "bg-pink-500/10 text-pink-500 border-pink-500/20",
};

function EventsPage() {
  const [filter, setFilter] = useState<EventStatus | "all">("all");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [posterModal, setPosterModal] = useState<{ src: string; title: string } | null>(null);

  const filtered = filter === "all" ? events : events.filter((e) => e.status === filter);
  const upcoming = events.filter((e) => e.status === "upcoming").length;

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={<>Where robots <span className="gradient-text">come alive</span></>}
        description="Workshops, competitions and seminars organised by ROBONOVA — join us and level up your skills."
      >
        {upcoming > 0 && (
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-2 text-sm font-medium text-primary">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
            {upcoming} upcoming event{upcoming > 1 ? "s" : ""} — Register now
          </div>
        )}
      </PageHeader>

      <section className="py-20">
        <div className="container-page">

          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`rounded-full px-5 py-2 text-sm font-semibold transition-smooth ${
                  filter === f.value
                    ? "bg-gradient-primary text-primary-foreground shadow-glow"
                    : "glass-strong text-foreground/70 hover:text-foreground"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">
              No events in this category yet. Check back soon!
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event, i) => {
                const styles = STATUS_STYLES[event.status];
                const catColor = CATEGORY_COLORS[event.category] ?? "bg-accent text-foreground/70 border-border";
                const isExpanded = expanded === event.id;

                return (
                  <Reveal key={event.id} delay={i * 60}>
                    <article className="group h-full flex flex-col rounded-3xl glass-strong shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow overflow-hidden">

                      {/* Image OR gradient placeholder */}
                      <div className="relative aspect-[16/9] overflow-hidden">
                        {event.image ? (
                          <button
                            onClick={() => setPosterModal({ src: event.image!, title: event.title })}
                            className="relative h-full w-full group/img block"
                          >
                            <img
                              src={event.image}
                              alt={event.title}
                              className="h-full w-full object-cover transition-smooth group-hover/img:scale-105"
                            />
                            {/* Zoom overlay on hover */}
                            <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/30 transition-smooth flex items-center justify-center">
                              <ZoomIn className="h-8 w-8 text-white opacity-0 group-hover/img:opacity-100 transition-smooth drop-shadow-lg" />
                            </div>
                          </button>
                        ) : (
                          <div className={`h-full w-full flex flex-col items-center justify-center gap-3 ${
                            event.status === "upcoming"
                              ? "bg-gradient-to-br from-primary/20 to-primary/5"
                              : "bg-gradient-to-br from-muted/60 to-muted/20"
                          }`}>
                            <span className={`text-4xl font-display font-bold ${
                              event.status === "upcoming" ? "gradient-text" : "text-muted-foreground/40"
                            }`}>
                              {event.date.split(",")[0]}
                            </span>
                            <span className={`text-xs font-semibold uppercase tracking-widest ${
                              event.status === "upcoming" ? "text-primary/60" : "text-muted-foreground/40"
                            }`}>
                              {event.category}
                            </span>
                          </div>
                        )}

                        {/* Status badge over image */}
                        <div className="absolute top-3 right-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${styles.pill}`}>
                            <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                            {styles.label}
                          </span>
                        </div>

                        {/* Category badge over image */}
                        <div className="absolute top-3 left-3">
                          <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[11px] font-semibold backdrop-blur-sm ${catColor}`}>
                            <Tag className="h-3 w-3" />
                            {event.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex flex-col gap-3 p-5 flex-1">

                        {/* Title */}
                        <h3 className="font-display text-base font-bold leading-snug line-clamp-2">
                          {event.title}
                        </h3>

                        {/* Meta row */}
                        <ul className="grid gap-1.5 text-xs text-muted-foreground">
                          <li className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5 shrink-0 text-primary" />
                            {event.date}
                          </li>
                          <li className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5 shrink-0 text-primary" />
                            {event.time}
                          </li>
                          <li className="flex items-center gap-2">
                            <MapPin className="h-3.5 w-3.5 shrink-0 text-primary" />
                            {event.venue}
                          </li>
                        </ul>

                        {/* Description — expandable */}
                        <p className={`text-sm text-muted-foreground leading-relaxed ${isExpanded ? "" : "line-clamp-2"}`}>
                          {event.desc}
                        </p>
                        {event.desc.length > 100 && (
                          <button
                            onClick={() => setExpanded(isExpanded ? null : event.id)}
                            className="text-xs text-primary font-semibold text-left hover:underline"
                          >
                            {isExpanded ? "Show less" : "Read more"}
                          </button>
                        )}

                        {/* Highlights */}
                        {event.highlights && event.highlights.length > 0 && (
                          <div className="rounded-2xl bg-accent/50 p-3 mt-1">
                            <p className="mb-2 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                              {event.status === "upcoming" ? "Details" : "Highlights"}
                            </p>
                            <ul className="grid gap-1">
                              {event.highlights.map((h) => (
                                <li key={h} className="flex items-start gap-2 text-xs text-muted-foreground">
                                  <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                                  {h}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}

                        {/* Spacer */}
                        <div className="flex-1" />

                        {/* CTA */}
                        {event.status === "upcoming" && event.registrationUrl && (
                          <a
                            href={event.registrationUrl}
                            className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-gradient-primary px-4 py-2 text-xs font-semibold text-primary-foreground shadow-glow hover:scale-[1.02] transition-smooth w-fit"
                          >
                            Register Now <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        )}
                      </div>
                    </article>
                  </Reveal>
                );
              })}
            </div>
          )}

          {/* Bottom CTA */}
          <Reveal delay={200}>
            <div className="mt-20 rounded-3xl glass-strong shadow-elegant p-10 text-center">
              <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-display text-2xl font-bold">Want to host an event with us?</h3>
              <p className="mt-3 text-muted-foreground max-w-md mx-auto text-sm">
                We collaborate with departments, companies and student clubs to run workshops and competitions. Reach out and let's build something together.
              </p>
              <a
                href="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-smooth"
              >
                Get in touch <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Poster Modal */}
      {posterModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fade-in"
          onClick={() => setPosterModal(null)}
        >
          <div
            className="relative max-w-lg w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setPosterModal(null)}
              className="absolute -top-4 -right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-background shadow-elegant hover:bg-accent transition-smooth"
            >
              <X className="h-4 w-4" />
            </button>

            {/* Poster image */}
            <img
              src={posterModal.src}
              alt={posterModal.title}
              className="w-full rounded-2xl shadow-glow"
            />

            {/* Title below */}
            <p className="mt-3 text-center text-sm font-semibold text-white drop-shadow">
              {posterModal.title}
            </p>
          </div>
        </div>
      )}
    </>
  );
}