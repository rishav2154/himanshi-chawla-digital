import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import { Section } from "./Section";
import { profile } from "@/data/portfolio";
import { MagneticButton } from "./MagneticButton";
import { Calendar, Download, Linkedin, Mail, Phone, Send } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: FormEvent) => { e.preventDefault(); setSent(true); };

  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title={<>Let's build something <span className="text-gradient-brand">together</span></>}
      description="Open to roles, partnerships and product collaborations."
    >
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-2 glass-strong rounded-3xl p-7 space-y-5"
        >
          <ContactRow icon={<Mail className="size-4" />} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
          <ContactRow icon={<Phone className="size-4" />} label="Phone" value={profile.phone} href={`tel:${profile.phone}`} />
          <ContactRow icon={<Linkedin className="size-4" />} label="LinkedIn" value="himanshi-chawla" href={profile.linkedin} />
          <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
            <MagneticButton href={`mailto:${profile.email}`} variant="primary"><Calendar className="size-4" /> Schedule Meeting</MagneticButton>
            <MagneticButton href="#" variant="ghost"><Download className="size-4" /> Resume</MagneticButton>
          </div>
        </motion.div>

        <motion.form
          onSubmit={submit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-3 relative glass-strong rounded-3xl p-7"
        >
          <div className="absolute -inset-px rounded-3xl opacity-40"
            style={{ background: "conic-gradient(from 0deg,#7C3AED,#06B6D4,#EC4899,#7C3AED)", filter: "blur(20px)", zIndex: -1 }} />
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" />
            <Field label="Email" name="email" type="email" />
          </div>
          <div className="mt-4"><Field label="Subject" name="subject" /></div>
          <div className="mt-4"><Field label="Message" name="message" textarea /></div>
          <div className="mt-6">
            <MagneticButton variant="primary">
              {sent ? "Sent ✓" : <>Send Message <Send className="size-4" /></>}
            </MagneticButton>
          </div>
        </motion.form>
      </div>
    </Section>
  );
}

function ContactRow({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href: string }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
      <div className="size-10 rounded-2xl glass flex items-center justify-center group-hover:shadow-glow transition-shadow">{icon}</div>
      <div>
        <div className="text-[11px] uppercase tracking-wider text-muted-foreground">{label}</div>
        <div className="text-sm font-medium group-hover:text-gradient-brand">{value}</div>
      </div>
    </a>
  );
}

function Field({ label, name, type = "text", textarea }: { label: string; name: string; type?: string; textarea?: boolean }) {
  const cls = "peer w-full bg-transparent border border-white/10 rounded-2xl px-4 pt-5 pb-2 text-sm outline-none focus:border-primary focus:shadow-glow transition-all placeholder-transparent";
  return (
    <div className="relative">
      {textarea ? (
        <textarea id={name} name={name} required rows={4} placeholder={label} className={cls} />
      ) : (
        <input id={name} name={name} type={type} required placeholder={label} className={cls} />
      )}
      <label htmlFor={name} className="absolute left-4 top-1.5 text-[10px] uppercase tracking-wider text-muted-foreground pointer-events-none">{label}</label>
    </div>
  );
}
