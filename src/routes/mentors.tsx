import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { mentors } from "@/lib/site-data";

export const Route = createFileRoute("/mentors")({
  head: () => ({
    meta: [
      { title: "Mentors — ROBONOVA" },
      { name: "description", content: "Meet the faculty mentors guiding the ROBONOVA Robotics & Innovation Club at MITE." },
      { property: "og:title", content: "Mentors — ROBONOVA" },
    ],
  }),
  component: MentorsPage,
});

function MentorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Mentors"
        title={<>Guided by <span className="gradient-text">expert faculty</span></>}
        description="Our mentors bring decades of academic and industry experience in robotics, AI, embedded systems and design."
      />
      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {mentors.map((m, i) => (
            <Reveal key={m.name} delay={i * 80}>
              <div className="group h-full rounded-3xl glass-strong p-6 text-center shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <div className="mx-auto h-28 w-28 rounded-full bg-gradient-primary p-1 shadow-glow">
                  <div className="grid h-full w-full place-items-center rounded-full bg-background font-display text-3xl font-bold gradient-text">
                    {m.name.split(" ").slice(-2).map((s) => s[0]).join("")}
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
                <p className="text-sm font-medium text-primary">{m.role}</p>
                <p className="text-xs text-muted-foreground">{m.dept}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{m.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
