import { motion } from "framer-motion";
import { useState, type MouseEvent } from "react";
import { Section } from "./Section";
import { leadership } from "@/data/portfolio";
import { Crown } from "lucide-react";

export function Leadership() {
  return (
    <Section
      id="leadership"
      eyebrow="Leadership"
      title={<>Leadership & <span className="text-gradient-brand">Entrepreneurship</span></>}
      description="Building teams, owning outcomes and shipping companies."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {leadership.map((l, i) => (
          <Spotlight key={l.title} delay={i * 0.08}>
            <Crown className="size-6 text-secondary" />
            <h3 className="mt-4 text-lg font-semibold">{l.title}</h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{l.body}</p>
          </Spotlight>
        ))}
      </div>
    </Section>
  );
}

function Spotlight({ children, delay }: { children: React.ReactNode; delay: number }) {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    setPos({ x: e.clientX - r.left, y: e.clientY - r.top });
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      onMouseMove={move}
      className="relative glass rounded-3xl p-6 overflow-hidden group hover:shadow-glow transition-shadow"
    >
      <div
        className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background: `radial-gradient(400px circle at ${pos.x}px ${pos.y}px, rgba(124,58,237,0.2), transparent 40%)`,
        }}
      />
      <div className="relative">{children}</div>
    </motion.div>
  );
}
