import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#leadership", label: "Leadership" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(latest > prev && latest > 200);
  });

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" },
    );
    links.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  return (
    <motion.header
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      className="fixed top-4 inset-x-0 z-50 flex justify-center px-4"
    >
      <nav className="glass-strong rounded-full px-3 py-2 flex items-center gap-1 shadow-elevated w-full max-w-4xl">
        <a href="#home" className="px-3 py-1.5 font-bold text-gradient-brand text-sm tracking-tight">HC.</a>
        <ul className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                data-magnetic
                className={`relative px-3 py-1.5 text-xs font-medium rounded-full transition-colors ${
                  active === l.href.slice(1) ? "text-white" : "text-muted-foreground hover:text-white"
                }`}
              >
                {active === l.href.slice(1) && (
                  <motion.span
                    layoutId="navactive"
                    className="absolute inset-0 rounded-full"
                    style={{ background: "linear-gradient(135deg,rgba(124,58,237,0.4),rgba(6,182,212,0.3))" }}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden lg:inline-flex ml-auto items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-semibold text-white"
          style={{ background: "linear-gradient(135deg,#7C3AED,#EC4899)" }}
        >
          Let's Talk
        </a>
        <button
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden ml-auto p-2 rounded-full hover:bg-white/10"
          aria-label="Toggle menu"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-20 inset-x-4 glass-strong rounded-3xl p-4"
          >
            <ul className="grid gap-1">
              {links.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={() => setOpen(false)}
                    className="block px-4 py-3 rounded-2xl text-sm hover:bg-white/5"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
