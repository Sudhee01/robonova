import { createFileRoute } from "@tanstack/react-router";
import { Users } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Counter } from "@/components/Counter";
import { members } from "@/lib/site-data";

export const Route = createFileRoute("/members")({
  head: () => ({
    meta: [
      { title: "Members — ROBONOVA" },
      { name: "description", content: "ROBONOVA's diverse student community across departments at MITE." },
      { property: "og:title", content: "Members — ROBONOVA" },
    ],
  }),
  component: MembersPage,
});

function MembersPage() {
  const total = members.reduce((a, b) => a + b.count, 0);
  return (
    <>
      <PageHeader
        eyebrow="Members"
        title={<>A community of <span className="gradient-text">{total}+ innovators</span></>}
        description="Students from every engineering discipline come together to learn, build and compete."
      />
      <section className="py-20">
        <div className="container-page">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {members.map((m, i) => (
              <Reveal key={m.dept} delay={i * 70}>
                <div className="rounded-3xl glass-strong p-6 shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                      <Users className="h-5 w-5" />
                    </span>
                    <span className="font-display text-3xl font-bold gradient-text">
                      <Counter to={m.count} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-lg font-semibold">{m.dept}</h3>
                  <div className="mt-3 h-2 rounded-full bg-accent overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary"
                      style={{ width: `${(m.count / total) * 100}%` }}
                    />
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <div className="mt-12 rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-glow text-center">
              <h3 className="font-display text-3xl font-bold">Become a ROBONOVA member</h3>
              <p className="mt-2 opacity-90">Open to all MITE students passionate about robotics and innovation.</p>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
