import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Section } from "./Section";
import { experiences } from "@/data/portfolio";
import { Briefcase } from "lucide-react";

export function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title={<>A journey across <span className="text-gradient-brand">industries</span></>}
      description="Hands-on roles spanning engineering, security, marketing and entrepreneurship."
    >
      <div ref={ref} className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
        <motion.div
          className="absolute left-4 md:left-1/2 top-0 w-px origin-top"
          style={{ height: lineHeight, background: "linear-gradient(180deg,#7C3AED,#06B6D4,#EC4899)" }}
        />
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className={`relative flex md:items-center ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
            >
              <div className="absolute left-4 md:left-1/2 -translate-x-1/2 size-4 rounded-full shadow-glow"
                style={{ background: "linear-gradient(135deg,#7C3AED,#EC4899)" }} />
              <div className="ml-12 md:ml-0 md:w-1/2 md:px-8">
                <div className="glass-strong rounded-2xl p-6 hover:shadow-glow transition-shadow group">
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <Briefcase className="size-3.5" /> {exp.period}
                  </div>
                  <h3 className="mt-2 text-lg font-semibold">{exp.company}</h3>
                  <p className="text-sm text-gradient-brand font-medium">{exp.role}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-1.5">
                    {exp.points.map((p) => (
                      <li key={p} className="text-xs text-muted-foreground flex items-center gap-1.5">
                        <span className="size-1 rounded-full bg-secondary" />{p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
