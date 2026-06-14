import { motion } from "framer-motion";
import { Section } from "./Section";
import { Cloud, ShieldCheck, TrendingUp, Megaphone, Code2, Handshake } from "lucide-react";

const services = [
  { icon: Cloud, title: "Cloud Architecture", body: "Designing scalable, secure cloud-native systems across AWS, Azure & GCP." },
  { icon: ShieldCheck, title: "Cyber Security", body: "Threat assessment, security audits and proactive defense strategies." },
  { icon: TrendingUp, title: "Business Growth", body: "Pipeline ownership, partnerships & strategic GTM execution." },
  { icon: Megaphone, title: "Digital Marketing", body: "SEO, content strategy and brand storytelling that converts." },
  { icon: Code2, title: "Product Engineering", body: "Full-stack builds turning ideas into shippable, polished products." },
  { icon: Handshake, title: "Partnerships", body: "Win-win collaborations across industries, teams and ecosystems." },
];

export function Services() {
  return (
    <Section
      id="services"
      eyebrow="What I Do"
      title={<>Services & <span className="text-gradient">Capabilities</span></>}
      description="A full-stack offering across technology, security, marketing and business — designed for startups that want to move fast without breaking trust."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative glass rounded-2xl p-7 overflow-hidden hover:border-primary/40 transition-all"
          >
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
            <div className="relative">
              <div className="inline-flex items-center justify-center size-12 rounded-xl bg-primary/10 text-primary mb-5 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <s.icon className="size-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
