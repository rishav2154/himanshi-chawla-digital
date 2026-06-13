import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Cursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    const over = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setHover(!!t.closest("a, button, [data-magnetic]"));
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", over);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", over);
    };
  }, []);

  return (
    <>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden md:block"
        animate={{ x: pos.x - 6, y: pos.y - 6, scale: hover ? 1.6 : 1 }}
        transition={{ type: "spring", stiffness: 500, damping: 30, mass: 0.3 }}
      >
        <div className="size-3 rounded-full bg-white mix-blend-difference" />
      </motion.div>
      <motion.div
        aria-hidden
        className="pointer-events-none fixed top-0 left-0 z-[99] hidden md:block"
        animate={{ x: pos.x - 120, y: pos.y - 120 }}
        transition={{ type: "spring", stiffness: 80, damping: 20 }}
      >
        <div className="size-60 rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED 0%, transparent 70%)" }} />
      </motion.div>
    </>
  );
}
