import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

/**
 * Pure CSS/SVG 3D orb with layered rotating rings, an inner glowing core,
 * orbiting particles and parallax tilt on pointer move. Zero extra deps.
 */
export function Hero3D() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rx = useSpring(useTransform(my, [-1, 1], [18, -18]), { stiffness: 120, damping: 14 });
  const ry = useSpring(useTransform(mx, [-1, 1], [-22, 22]), { stiffness: 120, damping: 14 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const el = ref.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      mx.set(x * 2);
      my.set(y * 2);
    };
    const onLeave = () => { mx.set(0); my.set(0); };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, [mx, my]);

  return (
    <div
      ref={ref}
      className="relative mx-auto mt-12 w-[320px] h-[320px] md:w-[420px] md:h-[420px]"
      style={{ perspective: 1200 }}
    >
      <motion.div
        style={{ rotateX: rx, rotateY: ry, transformStyle: "preserve-3d" }}
        className="relative w-full h-full"
      >
        {/* Glow halo */}
        <div className="absolute inset-0 rounded-full blur-3xl opacity-60"
          style={{ background: "radial-gradient(circle, rgba(124,58,237,0.6), rgba(6,182,212,0.3) 40%, transparent 70%)" }} />

        {/* Core orb */}
        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[22%] rounded-full"
          style={{
            background: "radial-gradient(circle at 30% 30%, #fff, #c4b5fd 25%, #7C3AED 55%, #1e1b4b 100%)",
            boxShadow: "0 0 80px rgba(124,58,237,0.7), inset -20px -30px 60px rgba(0,0,0,0.6), inset 20px 20px 40px rgba(255,255,255,0.15)",
            transform: "translateZ(40px)",
          }}
        />

        {/* Rotating rings */}
        {[
          { size: 100, dur: 18, tilt: 70, color: "rgba(124,58,237,0.7)" },
          { size: 88, dur: 22, tilt: -60, color: "rgba(6,182,212,0.7)" },
          { size: 110, dur: 28, tilt: 30, color: "rgba(236,72,153,0.6)" },
        ].map((r, i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{ duration: r.dur, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border-2"
            style={{
              borderColor: r.color,
              width: `${r.size}%`,
              height: `${r.size}%`,
              left: `${(100 - r.size) / 2}%`,
              top: `${(100 - r.size) / 2}%`,
              transform: `rotateX(${r.tilt}deg) translateZ(0)`,
              boxShadow: `0 0 30px ${r.color}`,
            }}
          />
        ))}

        {/* Orbiting particles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i / 8) * Math.PI * 2;
          const radius = 180;
          return (
            <motion.div
              key={i}
              animate={{ rotate: 360 }}
              transition={{ duration: 14 + i, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 size-2"
              style={{ transformOrigin: "0 0" }}
            >
              <div
                className="size-2 rounded-full"
                style={{
                  background: i % 2 ? "#06B6D4" : "#EC4899",
                  boxShadow: `0 0 12px ${i % 2 ? "#06B6D4" : "#EC4899"}`,
                  transform: `translate(${Math.cos(angle) * radius}px, ${Math.sin(angle) * radius}px) translateZ(60px)`,
                }}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
