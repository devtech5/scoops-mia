import {
  Sprout,
  Wheat,
  Ship,
  Users,
  Warehouse,
  TreeDeciduous,
  HandHeart,
  Tractor,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  sprout: Sprout,
  wheat: Wheat,
  ship: Ship,
  team: Users,
  warehouse: Warehouse,
  tree: TreeDeciduous,
  heart: HandHeart,
  tractor: Tractor,
};

const GRADIENTS: Record<string, string> = {
  a: "from-brand-600 via-brand-500 to-brand-700",
  b: "from-brand-700 via-brand-800 to-brand-900",
  c: "from-earth-500 via-brand-600 to-brand-800",
  d: "from-brand-500 via-brand-700 to-earth-600",
};

export function PlaceholderArt({
  icon,
  tone = "a",
  className = "",
}: {
  icon: keyof typeof ICONS;
  tone?: keyof typeof GRADIENTS;
  className?: string;
}) {
  const Icon = ICONS[icon] ?? Sprout;
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br ${GRADIENTS[tone]} ${className}`}
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-20"
        viewBox="0 0 200 200"
        preserveAspectRatio="xMidYMid slice"
      >
        <circle cx="20" cy="180" r="70" fill="white" fillOpacity="0.15" />
        <circle cx="190" cy="10" r="90" fill="white" fillOpacity="0.08" />
        <path
          d="M0 150 Q 50 110 100 150 T 200 150 V200 H0 Z"
          fill="white"
          fillOpacity="0.08"
        />
      </svg>
      <div className="absolute inset-0 bg-noise opacity-30 mix-blend-overlay" />
      <div className="relative flex h-full w-full items-center justify-center">
        <Icon className="h-[28%] w-[28%] text-white/85" strokeWidth={1.4} />
      </div>
    </div>
  );
}
