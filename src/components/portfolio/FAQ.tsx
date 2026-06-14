import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "./Section";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What kind of projects do you take on?", a: "Cloud architecture, cyber security audits, full-stack product builds, growth strategy and partnership-led GTM motions." },
  { q: "Do you work with early-stage startups?", a: "Yes — I co-founded one. I love the 0→1 chaos and helping founders find traction without burning runway." },
  { q: "How do you balance technology and business?", a: "I treat them as one system. Tech decisions are business decisions, and growth strategy must respect engineering reality." },
  { q: "What's the best way to reach you?", a: "Email or LinkedIn — both linked in the contact section. I usually respond within 24 hours on weekdays." },
  { q: "Are you open to collaborations and speaking?", a: "Absolutely. Workshops, podcasts, panels and advisory engagements — happy to chat." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section
      id="faq"
      eyebrow="FAQ"
      title={<>Frequently Asked <span className="text-gradient">Questions</span></>}
      description="The questions I hear most often — answered."
    >
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-primary/5 transition-colors"
              >
                <span className="text-base md:text-lg font-medium">{f.q}</span>
                <Plus className={`size-5 text-primary shrink-0 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`} />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-sm md:text-base text-muted-foreground leading-relaxed">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
