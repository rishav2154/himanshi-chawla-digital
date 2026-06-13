import { useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "ghost" | "outline";
  className?: string;
  onClick?: () => void;
}

export function MagneticButton({ children, href, variant = "primary", className = "", onClick }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const handle = (e: MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "translate(0,0)";
  };

  const base = "relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-shadow duration-300 will-change-transform";
  const styles = {
    primary: "text-white shadow-glow hover:shadow-glow-pink",
    ghost: "glass text-white hover:bg-white/10",
    outline: "border border-white/20 text-white hover:bg-white/5",
  }[variant];
  const bg = variant === "primary"
    ? { background: "linear-gradient(135deg,#7C3AED 0%,#06B6D4 50%,#EC4899 100%)" }
    : undefined;

  const inner = (
    <motion.div
      ref={ref}
      data-magnetic
      onMouseMove={handle}
      onMouseLeave={reset}
      onClick={onClick}
      className={`${base} ${styles} ${className}`}
      style={bg}
      transition={{ type: "spring", stiffness: 200, damping: 15 }}
    >
      {children}
    </motion.div>
  );

  return href ? <a href={href} className="inline-block">{inner}</a> : inner;
}
