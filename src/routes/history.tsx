import { createFileRoute } from "@tanstack/react-router";
import { Calendar, Trophy } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { timeline, achievements } from "@/lib/site-data";

export const Route = createFileRoute("/history")({
  head: () => ({
    meta: [
      { title: "History — ROBONOVA" },
      { name: "description", content: "Milestones, events and achievements of the MITE ROBONOVA Robotics & Innovation Club." },
      { property: "og:title", content: "History — ROBONOVA" },
    ],
  }),
  component: HistoryPage,
});

function HistoryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our Story"
        title={<>The <span className="gradient-text">ROBONOVA</span> journey</>}
        description="From a small group of robotics enthusiasts to a flagship innovation club at MITE — here are the milestones that shaped us."
      />
      <section className="py-20">
        <div className="container-page">
          <div className="relative">
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
                        <div className="rounded-2xl glass-strong p-6 shadow-elegant inline-block max-w-md">
                          <div className="flex items-center gap-2 text-xs font-semibold text-primary">
                            <Calendar className="h-3.5 w-3.5" /> {t.year}
                          </div>
                          <h3 className="mt-1 text-xl font-semibold">{t.title}</h3>
                          <p className="mt-2 text-sm text-muted-foreground">{t.desc}</p>
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

      {/* ── Achievements Section ── */}
<section className="py-20 bg-gradient-soft">
  <div className="container-page">
    <Reveal>
      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-primary">
        Achievements
      </p>
      <h2 className="mt-2 font-display text-3xl font-bold md:text-4xl">
        Winning on every <span className="gradient-text">front</span>
      </h2>
      <p className="mt-3 max-w-xl text-muted-foreground text-sm">
        Our students have stood up to the mark by conquering several championships in Robo War, Robot Soccer and more.
      </p>
    </Reveal>

    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {achievements.map((a, i) => (
        <Reveal key={i} delay={i * 60}>
          <div className="flex items-start gap-4 rounded-2xl glass-strong p-5 shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
              <Trophy className="h-5 w-5" />
            </span>
            <p className="text-sm text-muted-foreground leading-relaxed pt-1">{a}</p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
    </>
  );
}
