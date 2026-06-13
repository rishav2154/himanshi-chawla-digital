import { motion } from "framer-motion";
import { Section } from "./Section";
import { skills } from "@/data/portfolio";
import { Cloud, Code, Megaphone } from "lucide-react";

const icons = { Technical: Code, Business: Cloud, Marketing: Megaphone };
const tints = {
  Technical: "from-violet-500/30 to-fuchsia-500/10",
  Business: "from-cyan-500/30 to-blue-500/10",
  Marketing: "from-pink-500/30 to-rose-500/10",
};

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title={<>A galaxy of <span className="text-gradient-brand">capabilities</span></>}
      description="From cloud architectures to growth playbooks — a versatile, full-spectrum skill set."
    >
      <div className="grid lg:grid-cols-3 gap-6">
        {(Object.keys(skills) as Array<keyof typeof skills>).map((cat, idx) => {
          const Icon = icons[cat];
          return (
            <motion.div
              key={cat}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="relative glass-strong rounded-3xl p-7 overflow-hidden group"
            >
              <div className={`absolute -top-20 -right-20 size-60 rounded-full blur-3xl opacity-50 bg-gradient-to-br ${tints[cat]}`} />
              <div className="relative">
                <div className="flex items-center gap-3">
                  <div className="size-11 rounded-2xl glass flex items-center justify-center">
                    <Icon className="size-5 text-secondary" />
                  </div>
                  <h3 className="text-xl font-semibold">{cat}</h3>
                </div>
                <div className="mt-6 flex flex-wrap gap-2">
                  {skills[cat].map((s, i) => (
                    <motion.span
                      key={s}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 + i * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className="px-3 py-1.5 rounded-full text-xs font-medium glass hover:bg-white/10 hover:shadow-glow transition-all cursor-default"
                    >
                      {s}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
