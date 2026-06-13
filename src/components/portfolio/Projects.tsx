import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Section } from "./Section";
import { projects } from "@/data/portfolio";
import { ArrowUpRight, Github } from "lucide-react";
import type { MouseEvent } from "react";

export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title={<>Selected <span className="text-gradient-brand">work</span></>}
      description="Products built to solve real problems with measurable impact."
    >
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <TiltCard key={p.title} index={i} project={p} />
        ))}
      </div>
    </Section>
  );
}

function TiltCard({ project, index }: { project: typeof projects[number]; index: number }) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 200, damping: 20 });
  const sy = useSpring(my, { stiffness: 200, damping: 20 });
  const rx = useTransform(sy, [-50, 50], [8, -8]);
  const ry = useTransform(sx, [-50, 50], [-8, 8]);

  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    mx.set(e.clientX - r.left - r.width / 2);
    my.set(e.clientY - r.top - r.height / 2);
  };
  const reset = () => { mx.set(0); my.set(0); };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{ rotateX: rx, rotateY: ry, transformPerspective: 1200 }}
      className="group relative glass-strong rounded-3xl p-8 overflow-hidden hover:shadow-glow transition-all"
    >
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{ background: "radial-gradient(600px circle at var(--x,50%) var(--y,50%), rgba(124,58,237,0.15), transparent 40%)" }} />
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tags.map((t) => (
          <span key={t} className="text-[10px] uppercase tracking-wider px-2 py-1 rounded-full glass text-muted-foreground">{t}</span>
        ))}
      </div>
      <h3 className="text-2xl font-semibold">{project.title}</h3>
      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{project.description}</p>
      <ul className="mt-5 grid grid-cols-2 gap-1.5">
        {project.features.map((f) => (
          <li key={f} className="text-xs text-muted-foreground flex items-center gap-1.5">
            <span className="size-1 rounded-full bg-accent" />{f}
          </li>
        ))}
      </ul>
      <div className="mt-6 flex gap-2">
        <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full glass hover:bg-white/10 transition-colors">
          Live Demo <ArrowUpRight className="size-3.5" />
        </a>
        <a href="#" className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-2 rounded-full glass hover:bg-white/10 transition-colors">
          <Github className="size-3.5" /> Code
        </a>
      </div>
    </motion.div>
  );
}
