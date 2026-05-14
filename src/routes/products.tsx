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
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-24">
      
      {/* Background Blur Effects */}
      <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-orange-300/30 blur-3xl"></div>
      <div className="absolute bottom-10 right-10 h-96 w-96 rounded-full bg-orange-200/40 blur-3xl"></div>

      <div className="container-page relative z-10 flex items-center justify-center">
        
        {/* Glass Card */}
        <div className="glass-strong rounded-[40px] border border-white/30 bg-white/20 p-14 shadow-2xl backdrop-blur-xl text-center max-w-3xl">
          
          {/* Small Tag */}
          <div className="mb-6 inline-flex items-center rounded-full bg-orange-100 px-5 py-2 text-sm font-semibold tracking-wide text-orange-600 shadow-md">
            ROBONOVA PRODUCTS
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-5xl md:text-7xl font-black leading-tight text-slate-900">
            Coming{" "}
            <span className="bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 bg-clip-text text-transparent">
              Soon
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg leading-relaxed text-slate-600 md:text-xl">
            Our innovative robotics kits, automation hardware, and AI-powered
            products are currently under development.
          </p>

          <p className="mt-3 text-base text-slate-500">
            Stay connected with ROBONOVA for exciting launches and future updates.
          </p>

          {/* Decorative Line */}
          <div className="mx-auto mt-10 h-1 w-32 rounded-full bg-gradient-to-r from-orange-400 to-orange-600"></div>

          {/* Bottom Text */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 text-sm font-medium text-slate-500">
            <span className="rounded-full bg-white/60 px-4 py-2 shadow">
              Robotics Kits
            </span>
            <span className="rounded-full bg-white/60 px-4 py-2 shadow">
              AI Projects
            </span>
            <span className="rounded-full bg-white/60 px-4 py-2 shadow">
              Automation Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
