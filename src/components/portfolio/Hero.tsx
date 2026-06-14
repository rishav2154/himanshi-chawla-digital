import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, Sparkles } from "lucide-react";
import { profile, roles, floatingStats } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { Hero3D } from "./Hero3D";


export function Hero() {
  const [roleIdx, setRoleIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setRoleIdx((p) => (p + 1) % roles.length), 2400);
    return () => clearInterval(i);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 pt-28 pb-20 overflow-hidden">
      <div className="max-w-6xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-1.5 text-xs font-medium">
            <Sparkles className="size-3.5 text-secondary" />
            Available for new opportunities & collaborations
          </span>
        </motion.div>

        <Hero3D />

        <div className="mt-8 text-center">

          <SplitTitle text={profile.name} />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="mt-4 text-sm md:text-base text-muted-foreground tracking-wide uppercase"
          >
            {profile.role}
          </motion.p>

          <div className="mt-8 h-12 flex items-center justify-center">
            <motion.div
              key={roleIdx}
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-xl md:text-3xl font-semibold text-gradient-brand"
            >
              {roles[roleIdx]}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-3"
          >
            <MagneticButton href="#projects" variant="primary">
              View Portfolio <ArrowRight className="size-4" />
            </MagneticButton>
            <MagneticButton href="#contact" variant="ghost">
              <Mail className="size-4" /> Contact Me
            </MagneticButton>
            <MagneticButton href="#contact" variant="outline">
              <Download className="size-4" /> Resume
            </MagneticButton>
          </motion.div>
        </div>

        <FloatingStats />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2 text-xs text-muted-foreground">
          <span>Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="size-6 rounded-full border border-white/20 flex items-start justify-center p-1"
          >
            <span className="block w-0.5 h-2 rounded-full bg-white/60" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

function SplitTitle({ text }: { text: string }) {
  return (
    <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-[-0.04em] leading-[0.95]">
      {text.split("").map((c, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 60, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ delay: 0.4 + i * 0.04, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="inline-block text-gradient"
          style={{ whiteSpace: c === " " ? "pre" : "normal" }}
        >
          {c}
        </motion.span>
      ))}
    </h1>
  );
}

function FloatingStats() {
  return (
    <div className="mt-20 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
      {floatingStats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6 + i * 0.08 }}
          whileHover={{ y: -6, scale: 1.03 }}
          className="glass rounded-2xl p-4 text-center group hover:shadow-glow transition-shadow"
        >
          <div className="text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
          <div className="mt-1 text-sm font-semibold text-gradient-brand">{s.value}</div>
        </motion.div>
      ))}
    </div>
  );
}
