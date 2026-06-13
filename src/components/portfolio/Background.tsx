import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden
      className="fixed top-0 left-0 right-0 h-[3px] z-[80] origin-left"
      style={{
        scaleX: x,
        background: "linear-gradient(90deg,#7C3AED,#06B6D4,#EC4899)",
      }}
    />
  );
}

export function AuroraBackground() {
  return (
    <div aria-hidden className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-aurora animate-aurora"
        style={{ backgroundSize: "200% 200%" }} />
      <div className="absolute inset-0 grid-bg opacity-40 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <Orbs />
      <Particles />
      <div className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.5'/></svg>\")",
        }} />
    </div>
  );
}

function Orbs() {
  return (
    <>
      <motion.div
        className="absolute top-[10%] left-[5%] size-[420px] rounded-full blur-3xl opacity-40"
        style={{ background: "radial-gradient(circle,#7C3AED,transparent 70%)" }}
        animate={{ x: [0, 80, 0], y: [0, 40, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[15%] right-[10%] size-[460px] rounded-full blur-3xl opacity-30"
        style={{ background: "radial-gradient(circle,#06B6D4,transparent 70%)" }}
        animate={{ x: [0, -60, 0], y: [0, -30, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute top-[50%] left-[60%] size-[380px] rounded-full blur-3xl opacity-25"
        style={{ background: "radial-gradient(circle,#EC4899,transparent 70%)" }}
        animate={{ x: [0, -50, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
}

function Particles() {
  const [parts, setParts] = useState<{ x: number; y: number; s: number; d: number }[]>([]);
  useEffect(() => {
    const arr = Array.from({ length: 40 }).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      s: Math.random() * 2 + 1,
      d: Math.random() * 10 + 8,
    }));
    setParts(arr);
  }, []);
  return (
    <div className="absolute inset-0">
      {parts.map((p, i) => (
        <motion.span
          key={i}
          className="absolute rounded-full bg-white/40"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.s, height: p.s }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.d, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
