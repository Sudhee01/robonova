import { Link } from "@tanstack/react-router";
import { Github, Instagram, Linkedin, Twitter, Mail } from "lucide-react";
import { assets, navLinks } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="mt-24 border-t bg-gradient-soft">
      <div className="container-page py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3">
              <img src={assets.logo} alt="ROBONOVA" className="h-12 w-12 object-contain" />
              <div>
                <div className="font-display text-xl font-bold">
                  ROBO<span className="gradient-text">NOVA</span>
                </div>
                <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                  MITE Robotics & Innovation Club
                </p>
              </div>
            </div>
            <p className="mt-4 max-w-md text-sm text-muted-foreground">
              Empowering students through robotics, automation, AI innovation and real-world
              engineering projects at Mangalore Institute of Technology & Engineering.
            </p>
            <div className="mt-5 flex gap-3">
              {[Github, Instagram, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid h-10 w-10 place-items-center rounded-full glass hover:bg-gradient-primary hover:text-primary-foreground transition-smooth"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              {navLinks.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="hover:text-primary transition-smooth">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold">Reach Us</h4>
            <ul className="mt-4 grid gap-2 text-sm text-muted-foreground">
              <li>MITE Campus, Moodabidri</li>
              <li>Karnataka 574225, India</li>
              <li>robonova@mite.ac.in</li>
              <li>+91 98765 43210</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t pt-6 text-xs text-muted-foreground md:flex-row">
          <p>© {new Date().getFullYear()} ROBONOVA — MITE Robotics & Innovation Club.</p>
          <p>
            Designed by <span className="gradient-text font-semibold">ROBONOVA</span> Web Team
          </p>
        </div>
      </div>
    </footer>
  );
}
