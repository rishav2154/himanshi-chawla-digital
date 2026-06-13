import { motion } from "framer-motion";
import CountUp from "react-countup";
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
              <CountUp end={a.value} duration={2.4} enableScrollSpy scrollSpyOnce />+
            </div>
            <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{a.label}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
