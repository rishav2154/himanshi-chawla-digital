import { motion } from "framer-motion";
import { Section } from "./Section";

const steps = [
  { n: "01", title: "Discover", body: "Deep listening, market scan, and unambiguous goal-setting." },
  { n: "02", title: "Design", body: "Strategy + system architecture aligned to outcomes, not outputs." },
  { n: "03", title: "Deliver", body: "Rapid execution with weekly checkpoints and measurable progress." },
  { n: "04", title: "Scale", body: "Optimize, automate and compound — turn wins into repeatable engines." },
];

export function Process() {
  return (
    <Section
      id="process"
      eyebrow="How I Work"
      title={<>A Four-Step <span className="text-gradient">Operating System</span></>}
      description="From first call to scaled outcome — a disciplined process designed for clarity and velocity."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {steps.map((s, i) => (
          <motion.div
            key={s.n}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="relative glass rounded-2xl p-7 overflow-hidden group hover:border-primary/40 transition-all"
          >
            <span className="absolute -top-4 -right-2 text-7xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
              {s.n}
            </span>
            <div className="relative">
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
