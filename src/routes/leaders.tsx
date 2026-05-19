import { createFileRoute } from "@tanstack/react-router";
import { Crown } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { leaders } from "@/lib/site-data";

export const Route = createFileRoute("/leaders")({
  head: () => ({
    meta: [
      { title: "Leaders — ROBONOVA" },
      { name: "description", content: "The student leadership team driving ROBONOVA forward." },
      { property: "og:title", content: "Leaders — ROBONOVA" },
    ],
  }),
  component: LeadersPage,
});

function LeadersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Leadership"
        title={<>Meet the <span className="gradient-text">core team</span></>}
        description="Students leading initiatives, projects and events across the ROBONOVA innovation lab."
      />
      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((l, i) => (
            <Reveal key={l.name} delay={i * 80}>
              <div className="group relative overflow-hidden rounded-3xl glass-strong p-6 shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-smooth group-hover:opacity-30" />
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-2xl bg-gradient-primary p-0.5 shadow-glow shrink-0">
                    {l.image ? (
                    <img
                    src={l.image}
                    alt={l.name}
                    className="h-full w-full rounded-2xl object-cover"
                    />
                    ) : (
                  <div className="grid h-full w-full place-items-center rounded-2xl bg-background font-display text-xl font-bold gradient-text">
                    {l.name.split(" ").map((s: string) => s[0]).join("")}
                  </div>
                  )}
                </div>
                  <div>
                    <h3 className="text-lg font-semibold">{l.name}</h3>
                    <p className="text-xs text-muted-foreground">{l.year}</p>
                  </div>
                </div>
                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-accent px-3 py-1.5 text-xs font-semibold text-primary">
                  <Crown className="h-3.5 w-3.5" /> {l.role}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
