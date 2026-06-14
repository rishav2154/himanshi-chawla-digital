import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { MagneticButton } from "./MagneticButton";

export function CTA() {
  return (
    <section className="relative py-28 md:py-36 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative glass rounded-3xl p-10 md:p-16 overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/10 opacity-60" />
          <div className="absolute -top-32 -right-32 size-96 rounded-full bg-primary/20 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 size-96 rounded-full bg-primary/10 blur-3xl" />

          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-primary mb-6">
              <Sparkles className="size-3.5" />
              Let's build something extraordinary
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-gradient leading-[1.1] max-w-3xl mx-auto">
              Have a bold idea? Let's bring it to life.
            </h2>
            <p className="mt-6 text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether it's a launch, a turnaround, or a leap — I'm in the room with founders and teams who want to ship work that matters.
            </p>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <MagneticButton>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-3 text-sm font-semibold shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
                  Start a conversation
                  <ArrowRight className="size-4" />
                </a>
              </MagneticButton>
              <a href="#projects" className="inline-flex items-center gap-2 rounded-full glass px-7 py-3 text-sm font-semibold hover:border-primary/40 transition-colors">
                Explore my work
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
