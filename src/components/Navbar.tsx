import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { navLinks, assets } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-smooth",
        scrolled ? "py-2" : "py-4",
      )}
    >
      <div className="container-page">
        <nav
          className={cn(
            "flex items-center justify-between rounded-2xl px-4 py-2.5 transition-smooth",
            scrolled ? "glass-strong shadow-elegant" : "glass",
          )}
        >
          <Link to="/" className="flex items-center gap-2.5 group">
            <img src={assets.logo} alt="ROBONOVA" className="h-10 w-10 object-contain" />
            <div className="leading-tight">
              <div className="font-display text-lg font-bold tracking-tight">
                ROBO<span className="gradient-text">NOVA</span>
              </div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                MITE Robotics
              </div>
            </div>
          </Link>

          <ul className="hidden lg:flex items-center gap-1">
            {navLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-primary rounded-lg transition-smooth relative"
                  activeProps={{ className: "text-primary" }}
                  activeOptions={{ exact: l.to === "/" }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            to="/contact"
            className="hidden lg:inline-flex items-center rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-glow hover:scale-[1.03] transition-smooth"
          >
            Join Us
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((s) => !s)}
            className="lg:hidden rounded-lg p-2 hover:bg-accent transition-smooth"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {open && (
          <div className="lg:hidden mt-2 rounded-2xl glass-strong shadow-elegant p-4 animate-fade-in">
            <ul className="grid gap-1">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-smooth"
                    activeProps={{ className: "text-primary bg-accent" }}
                    activeOptions={{ exact: l.to === "/" }}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
