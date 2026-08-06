export function FacebookIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M13.5 22v-8.4h2.8l.4-3.3h-3.2V8.1c0-.95.26-1.6 1.63-1.6H17V3.5A21 21 0 0 0 14.4 3.3c-2.6 0-4.4 1.6-4.4 4.5v2.5H7.2v3.3H10V22h3.5Z" />
    </svg>
  );
}

export function InstagramIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedinIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor">
      <path d="M4.98 3.5a2 2 0 1 1 0 4 2 2 0 0 1 0-4ZM3.4 8.75h3.16V21H3.4V8.75Zm6.2 0h3.03v1.68h.04c.42-.8 1.46-1.65 3-1.65 3.2 0 3.8 2.1 3.8 4.85V21h-3.16v-5.72c0-1.37-.03-3.12-1.9-3.12-1.92 0-2.21 1.5-2.21 3.02V21H9.6V8.75Z" />
    </svg>
  );
}
