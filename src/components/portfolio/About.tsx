import { motion } from "framer-motion";
import { Section } from "./Section";
import { bento, profile } from "@/data/portfolio";

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title={<>Engineering depth.<br /><span className="text-gradient-brand">Business intuition.</span></>}
      description={profile.intro}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[180px] gap-4">
        {bento.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            whileHover={{ y: -4 }}
            className={`group relative glass rounded-3xl p-6 overflow-hidden hover:shadow-glow transition-all ${b.span ?? ""}`}
          >
            <div className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.3),rgba(6,182,212,0.2),rgba(236,72,153,0.3))", filter: "blur(20px)" }} />
            <div className="relative">
              <div className="text-xs uppercase tracking-wider text-muted-foreground">0{i + 1}</div>
              <h3 className="mt-2 text-xl font-semibold">{b.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{b.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <p className="mt-10 text-center text-muted-foreground max-w-3xl mx-auto">{profile.about}</p>
    </Section>
  );
}
