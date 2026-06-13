import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export function Loader() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = Date.now();
    const dur = 2200;
    let raf = 0;
    const tick = () => {
      const p = Math.min(100, ((Date.now() - start) / dur) * 100);
      setProgress(Math.floor(p));
      if (p < 100) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 250);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="bg-aurora absolute inset-0 opacity-60" />
          <div className="relative z-10 flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="relative"
            >
              <div className="absolute inset-0 -m-6 rounded-full blur-2xl opacity-60"
                style={{ background: "conic-gradient(from 0deg,#7C3AED,#06B6D4,#EC4899,#7C3AED)" }} />
              <div className="relative size-20 rounded-2xl glass-strong flex items-center justify-center text-3xl font-bold text-gradient-brand">
                HC
              </div>
            </motion.div>
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-semibold text-gradient">Himanshi Chawla</h1>
              <p className="mt-1 text-sm text-muted-foreground">Building Technology. Driving Growth.</p>
            </div>
            <div className="w-64 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                className="h-full rounded-full"
                style={{ background: "linear-gradient(90deg,#7C3AED,#06B6D4,#EC4899)" }}
                animate={{ width: `${progress}%` }}
                transition={{ ease: "linear" }}
              />
            </div>
            <p className="text-xs tabular-nums text-muted-foreground">{progress}%</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
