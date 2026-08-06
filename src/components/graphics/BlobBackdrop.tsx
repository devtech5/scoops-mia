export function BlobBackdrop({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute -z-10 blur-3xl opacity-40 ${className}`}
    >
      <svg viewBox="0 0 600 600" className="h-full w-full">
        <path
          fill="currentColor"
          d="M451.5 320Q436 390 375 431.5Q314 473 245 456Q176 439 132 384.5Q88 330 104 258.5Q120 187 178 138Q236 89 306.5 100Q377 111 424 165.5Q471 220 461.5 270Q452 320 451.5 320Z"
        />
      </svg>
    </div>
  );
}
