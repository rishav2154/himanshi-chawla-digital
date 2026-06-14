import { motion } from "framer-motion";
import { Section } from "./Section";
import { Quote } from "lucide-react";

const testimonials = [
  { quote: "Himanshi blends rare business intuition with deep technical clarity. She ships outcomes, not opinions.", name: "Startup Founder", role: "Tech Partner" },
  { quote: "A natural leader. Strategic, decisive and incredibly easy to collaborate with across functions.", name: "Project Lead", role: "Enterprise Client" },
  { quote: "Her grasp of cloud and security is matched by her ability to turn complexity into commercial value.", name: "Engineering Manager", role: "Industry Mentor" },
];

export function Testimonials() {
  return (
    <Section
      id="testimonials"
      eyebrow="Voices"
      title={<>What People <span className="text-gradient">Say</span></>}
      description="Feedback from collaborators, mentors and partners across projects."
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="relative glass rounded-2xl p-7 hover:border-primary/40 transition-all"
          >
            <Quote className="size-8 text-primary/40 mb-4" />
            <p className="text-base leading-relaxed text-foreground/90">"{t.quote}"</p>
            <div className="mt-6 pt-4 border-t border-border/40">
              <p className="font-semibold">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
