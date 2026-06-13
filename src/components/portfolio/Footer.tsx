import { ArrowUp, Linkedin, Mail, Phone } from "lucide-react";
import { profile } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="relative mt-20 pt-20 pb-10 px-4 overflow-hidden">
      <div className="absolute top-0 inset-x-0 h-px"
        style={{ background: "linear-gradient(90deg,transparent,rgba(124,58,237,0.6),rgba(6,182,212,0.6),rgba(236,72,153,0.6),transparent)" }} />
      <svg className="absolute top-2 inset-x-0 w-full h-12 text-primary/20" viewBox="0 0 1200 60" preserveAspectRatio="none">
        <path d="M0,30 Q300,0 600,30 T1200,30 V60 H0 Z" fill="currentColor" />
      </svg>

      <div className="max-w-7xl mx-auto relative">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gradient-brand">Himanshi Chawla</div>
            <p className="mt-3 text-sm text-muted-foreground max-w-md">
              Empowering Growth Through Technology, Strategy & Innovation.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Quick Links</div>
            <ul className="space-y-2 text-sm">
              {["about", "skills", "experience", "projects", "contact"].map((l) => (
                <li key={l}><a href={`#${l}`} className="hover:text-gradient-brand capitalize">{l}</a></li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground mb-3">Connect</div>
            <ul className="space-y-2 text-sm">
              <li><a href={`mailto:${profile.email}`} className="flex items-center gap-2 hover:text-gradient-brand"><Mail className="size-3.5" /> Email</a></li>
              <li><a href={`tel:${profile.phone}`} className="flex items-center gap-2 hover:text-gradient-brand"><Phone className="size-3.5" /> Phone</a></li>
              <li><a href={profile.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-gradient-brand"><Linkedin className="size-3.5" /> LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Himanshi Chawla. Crafted with care.</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full glass px-4 py-2 text-xs hover:shadow-glow transition-shadow">
            Back to top <ArrowUp className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
