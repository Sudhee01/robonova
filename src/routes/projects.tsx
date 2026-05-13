import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — ROBONOVA" },
      { name: "description", content: "Robotics projects built by ROBONOVA — autonomous bots, robotic arms, drones, swarm robotics and more." },
      { property: "og:title", content: "Projects — ROBONOVA" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title={<>Engineering <span className="gradient-text">in motion</span></>}
        description="A showcase of robotics and automation projects designed and built by ROBONOVA members."
      />
      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 60}>
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
                  <p className="mt-1.5 text-sm text-muted-foreground">{p.desc}</p>
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
                  <button className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-smooth">
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
