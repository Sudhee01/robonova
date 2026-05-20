import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, X, Users, Clock, Tag, Cpu } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { projects, type Project } from "@/lib/site-data";

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
  const [selected, setSelected] = useState<Project | null>(null);

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
                  <p className="mt-1.5 text-sm text-muted-foreground line-clamp-3">{p.desc}</p>
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
                  <button
                    onClick={() => setSelected(p)}
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:gap-2 transition-smooth"
                  >
                    View Details <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Modal */}
      {selected && (
        <ProjectModal project={selected} onClose={() => setSelected(null)} />
      )}
    </>
  );
}

function ProjectModal({ project: p, onClose }: { project: Project; onClose: () => void }) {
  return (
    /* Backdrop */
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      {/* Modal box — stop click bubbling */}
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl glass-strong shadow-elegant"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-accent hover:bg-accent/80 transition-smooth"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Project image */}
        <div className="aspect-[16/9] overflow-hidden rounded-t-3xl">
          <img
            src={p.image}
            alt={p.title}
            className="h-full w-full object-cover"
          />
        </div>

        {/* Content */}
        <div className="p-7 grid gap-6">

          {/* Title */}
          <div>
            <h2 className="font-display text-2xl font-bold">{p.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
          </div>

          {/* Tech stack */}
          <div>
            <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              <Cpu className="h-3.5 w-3.5" /> Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-glow"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Technical details */}
          {p.details && p.details.length > 0 && (
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                <Tag className="h-3.5 w-3.5" /> Technical Details
              </p>
              <ul className="grid gap-2">
                {p.details.map((d) => (
                  <li key={d} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Applications */}
          {p.applications && p.applications.length > 0 && (
            <div>
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                <ArrowRight className="h-3.5 w-3.5" /> Applications
              </p>
              <ul className="grid gap-2">
                {p.applications.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Team + Duration */}
          {(p.teamSize || p.duration) && (
            <div className="flex flex-wrap gap-4 pt-2 border-t border-border">
              {p.teamSize && (
                <div className="flex items-center gap-2 text-sm">
                  <Users className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Team Members:</span>
                  <span className="font-semibold">{p.teamSize}</span>
                </div>
              )}
              {p.duration && (
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="h-4 w-4 text-primary" />
                  <span className="text-muted-foreground">Duration:</span>
                  <span className="font-semibold">{p.duration}</span>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}