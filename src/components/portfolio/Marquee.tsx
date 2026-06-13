import { marqueeItems } from "@/data/portfolio";

export function Marquee() {
  const items = [...marqueeItems, ...marqueeItems];
  return (
    <div className="relative overflow-hidden py-8 border-y border-white/5 glass">
      <div className="flex gap-12 whitespace-nowrap animate-marquee">
        {items.map((it, i) => (
          <span key={i} className="text-xl md:text-3xl font-semibold text-muted-foreground flex items-center gap-12">
            {it}
            <span className="size-1.5 rounded-full bg-primary" />
          </span>
        ))}
      </div>
    </div>
  );
}
