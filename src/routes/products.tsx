import { createFileRoute } from "@tanstack/react-router";
import { Package, ShoppingCart } from "lucide-react";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — ROBONOVA" },
      { name: "description", content: "Robotics kits, learning packs and educational hardware from ROBONOVA." },
      { property: "og:title", content: "Products — ROBONOVA" },
    ],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Products"
        title={<>ROBONOVA <span className="gradient-text">hardware lineup</span></>}
        description="Designed by students for students — affordable robotics kits to kickstart your engineering journey."
      />
      <section className="py-20">
        <div className="container-page grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {products.map((p, i) => (
            <Reveal key={p.name} delay={i * 80}>
              <div className="group flex h-full flex-col rounded-3xl glass-strong p-6 shadow-elegant transition-smooth hover:-translate-y-1 hover:shadow-glow">
                <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow">
                  <Package className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{p.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground flex-1">{p.desc}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-display text-xl font-bold gradient-text">{p.price}</span>
                  <button className="grid h-10 w-10 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow hover:scale-105 transition-smooth">
                    <ShoppingCart className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
