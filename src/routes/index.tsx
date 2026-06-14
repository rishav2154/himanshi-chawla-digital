import { createFileRoute } from "@tanstack/react-router";
import { Loader } from "@/components/portfolio/Loader";
import { Cursor } from "@/components/portfolio/Cursor";
import { AuroraBackground, ScrollProgress } from "@/components/portfolio/Background";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { Marquee } from "@/components/portfolio/Marquee";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Certifications } from "@/components/portfolio/Certifications";
import { Leadership } from "@/components/portfolio/Leadership";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Services } from "@/components/portfolio/Services";
import { Education } from "@/components/portfolio/Education";
import { Testimonials } from "@/components/portfolio/Testimonials";
import { Process } from "@/components/portfolio/Process";
import { FAQ } from "@/components/portfolio/FAQ";
import { CTA } from "@/components/portfolio/CTA";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Himanshi Chawla — Head of Business Development & Co-Founder" },
      { name: "description", content: "Portfolio of Himanshi Chawla — MCA Cloud Computing, Cyber Security enthusiast, Business Development leader and Co-Founder at NeoSankalp." },
      { property: "og:title", content: "Himanshi Chawla — Building Technology. Driving Growth." },
      { property: "og:description", content: "Award-winning portfolio: Cloud, Cyber Security, Business Development, Marketing and Entrepreneurship." },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="relative">
      <Loader />
      <Cursor />
      <AuroraBackground />
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Skills />
      <Process />
      <Experience />
      <Education />
      <Projects />
      <Certifications />
      <Leadership />
      <Achievements />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </main>
  );
}
