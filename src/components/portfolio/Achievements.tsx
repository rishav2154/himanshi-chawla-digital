import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { achievements } from "@/data/portfolio";

export function Achievements() {
  return (
    <Section
      id="achievements"
      eyebrow="By the numbers"
      title={<>Impact in <span className="text-gradient-brand">motion</span></>}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {achievements.map((a, i) => (
          <motion.div
            key={a.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="glass-strong rounded-3xl p-6 text-center hover:shadow-glow transition-shadow"
          >
            <div className="text-4xl md:text-5xl font-bold text-gradient-brand tabular-nums">
              <Counter target={a.value} />+
            </div>
            <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{a.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function Counter({ target, duration = 2000 }: { target: number; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf = 0;
    const step = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [inView, target, duration]);

  return <span ref={ref}>{val}</span>;
}
