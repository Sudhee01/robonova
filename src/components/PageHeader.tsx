import type { ReactNode } from "react";

export function PageHeader({
  eyebrow,
  title,
  description,
  children,
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-gradient-hero pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-blob" />
      <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-soft-blue opacity-60 blur-3xl animate-blob" />
      <div className="container-page relative">
        {eyebrow && (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="font-display text-4xl font-bold md:text-6xl animate-fade-up">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-lg text-muted-foreground animate-fade-up">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </section>
  );
}
