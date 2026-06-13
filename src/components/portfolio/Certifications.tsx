import { motion } from "framer-motion";
import { Section } from "./Section";
import { certifications } from "@/data/portfolio";
import { Award } from "lucide-react";

export function Certifications() {
  return (
    <Section
      id="certifications"
      eyebrow="Certifications"
      title={<>Continuously <span className="text-gradient-brand">levelling up</span></>}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {certifications.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, rotateY: -30, y: 40 }}
            whileInView={{ opacity: 1, rotateY: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.7 }}
            whileHover={{ y: -8, rotateY: 6 }}
            style={{ transformPerspective: 1000 }}
            className="relative glass-strong rounded-3xl p-6 group overflow-hidden"
          >
            <div className="absolute inset-0 opacity-50"
              style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.1),transparent 50%,rgba(6,182,212,0.1))" }} />
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
              style={{ background: "conic-gradient(from 0deg, #7C3AED, #06B6D4, #EC4899, #7C3AED)", filter: "blur(8px)", zIndex: -1 }} />
            <div className="relative">
              <Award className="size-7 text-accent" />
              <h3 className="mt-4 text-base font-semibold leading-snug">{c.title}</h3>
              <p className="mt-2 text-xs text-muted-foreground">{c.issuer}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
