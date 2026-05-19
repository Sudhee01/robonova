import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Calendar, Clock, MapPin, Tag, CheckCircle2, Sparkles } from "lucide-react";
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

const STATUS_STYLES: Record<EventStatus, { pill: string; dot: string; label: string }> = {
  upcoming: {
    pill: "bg-primary/10 text-primary border border-primary/20",
    dot: "bg-primary animate-pulse",
    label: "Upcoming",
  },
  ongoing: {
    pill: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    dot: "bg-emerald-400 animate-pulse",
    label: "Live Now",
  },
  completed: {
    pill: "bg-muted text-muted-foreground border border-border",
    dot: "bg-muted-foreground",
    label: "Completed",
  },
};

function EventsPage() {
  const [filter, setFilter] = useState<EventStatus | "all">("all");

  const filtered = filter === "all" ? events : events.filter((e) => e.status === filter);
  const upcoming = events.filter((e) => e.status === "upcoming").length;

  return (
    <>
      <PageHeader
        eyebrow="Events"
        title={
          <>
            Where robots <span className="gradient-text">come alive</span>
          </>
        }
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

          {/* Events grid */}
          {filtered.length === 0 ? (
            <div className="py-24 text-center text-muted-foreground">
              No events in this category yet. Check back soon!
            </div>
          ) : (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filtered.map((event, i) => (
                <Reveal key={event.id} delay={i * 60}>
                  <article className="group h-full flex flex-col rounded-3xl glass-strong shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow overflow-hidden">

                    {/* Coloured top bar per status */}
                    <div
                      className={`h-1.5 w-full ${
                        event.status === "upcoming"
                          ? "bg-gradient-primary"
                          : event.status === "ongoing"
                          ? "bg-emerald-400"
                          : "bg-muted-foreground/30"
                      }`}
                    />

                    <div className="flex flex-col gap-4 p-6 flex-1">
                      {/* Category + Status row */}
                      <div className="flex items-center justify-between gap-2 flex-wrap">
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-foreground/70">
                          <Tag className="h-3 w-3" />
                          {event.category}
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-semibold ${STATUS_STYLES[event.status].pill}`}
                        >
                          <span className={`h-1.5 w-1.5 rounded-full ${STATUS_STYLES[event.status].dot}`} />
                          {STATUS_STYLES[event.status].label}
                        </span>
                      </div>

                      {/* Title + desc */}
                      <div>
                        <h3 className="font-display text-lg font-bold leading-snug">{event.title}</h3>
                        <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{event.desc}</p>
                      </div>

                      {/* Meta info */}
                      <ul className="grid gap-2 text-xs text-muted-foreground mt-auto">
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

                      {/* Highlights (completed events) */}
                      {event.highlights && event.highlights.length > 0 && (
                        <div className="mt-2 rounded-2xl bg-accent/50 p-4">
                          <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                            Highlights
                          </p>
                          <ul className="grid gap-1.5">
                            {event.highlights.map((h) => (
                              <li key={h} className="flex items-start gap-2 text-xs">
                                <CheckCircle2 className="h-3.5 w-3.5 mt-0.5 shrink-0 text-primary" />
                                {h}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* CTA for upcoming */}
                      {event.status === "upcoming" && event.registrationUrl && (
                        <a
                          href={event.registrationUrl}
                          className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2.5 transition-smooth"
                        >
                          Register Now <ArrowRight className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <Reveal delay={200}>
            <div className="mt-20 rounded-3xl glass-strong shadow-elegant p-10 text-center">
              <Sparkles className="mx-auto mb-4 h-8 w-8 text-primary" />
              <h3 className="font-display text-2xl font-bold">
                Want to host an event with us?
              </h3>
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
    </>
  );
}
