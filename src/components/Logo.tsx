import Link from "next/link";

export function LogoMark({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 64 64"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-grad" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#68ba52" />
          <stop offset="1" stopColor="#2b6321" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="32" fill="url(#logo-grad)" />
      <path
        d="M32 46c-8-4-13-11-13-19a13 13 0 0 1 13-13 13 13 0 0 1 13 13c0 8-5 15-13 19Z"
        fill="white"
        fillOpacity="0.14"
      />
      <path
        d="M20 40c4-10 8-16 12-24"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M32 16c1 6-1 11-5 15"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d="M32 24c3 4 3 8 1 13"
        stroke="white"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <ellipse cx="32" cy="46" rx="12" ry="3.4" fill="white" fillOpacity="0.9" />
    </svg>
  );
}

export function Logo({
  className = "",
  dark = false,
}: {
  className?: string;
  dark?: boolean;
}) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      <LogoMark className="h-11 w-11 shrink-0 drop-shadow-sm" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-heading font-extrabold tracking-tight text-lg ${
            dark ? "text-white" : "text-brand-900"
          }`}
        >
          SCOOPS <span className="text-brand-500">MIA</span>
        </span>
        <span
          className={`text-[10px] font-medium tracking-[0.18em] uppercase ${
            dark ? "text-white/60" : "text-stone-500"
          }`}
        >
          Coopérative Agricole
        </span>
      </span>
    </Link>
  );
}
