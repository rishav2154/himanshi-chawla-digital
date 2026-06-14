import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap } from "lucide-react";

const education = [
  { degree: "Master of Computer Applications (MCA)", field: "Cloud Computing", school: "Specialization in Cloud & Cyber Security", period: "Present" },
  { degree: "Bachelor of Computer Applications (BCA)", field: "Computer Science", school: "Foundation in software engineering & systems", period: "Completed" },
  { degree: "Certifications & Continuous Learning", field: "Cyber Security, Python, Cloud", school: "Coursera · Udemy · Self-led", period: "Ongoing" },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Academic Journey"
      title={<>Education & <span className="text-gradient">Learning</span></>}
      description="A foundation built on rigorous computer science, layered with hands-on cloud and security specialization."
    >
      <div className="relative max-w-4xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-primary/40 to-transparent" />
        {education.map((e, i) => (
          <motion.div
            key={e.degree}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className={`relative mb-10 md:mb-14 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:ml-auto md:pl-12"} pl-12 md:pl-0`}
          >
            <div className={`absolute top-4 size-8 rounded-full glass border border-primary/40 flex items-center justify-center ${i % 2 === 0 ? "md:-right-4 left-0 md:left-auto" : "md:-left-4 left-0"}`}>
              <GraduationCap className="size-4 text-primary" />
            </div>
            <div className="glass rounded-2xl p-6 hover:border-primary/40 transition-all">
              <span className="text-xs uppercase tracking-widest text-primary font-semibold">{e.period}</span>
              <h3 className="text-lg font-semibold mt-2">{e.degree}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.field}</p>
              <p className="text-sm text-muted-foreground/80 mt-2">{e.school}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
