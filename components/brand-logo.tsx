export function BrandLogo({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <rect width="120" height="120" rx="28" fill="rgba(22,26,34,0.95)" />
      <rect x="28" y="32" width="64" height="56" rx="6" stroke="#f9c74f" strokeWidth="5" fill="none" />
      <path d="M36 48 H84 M36 62 H72 M36 76 H78" stroke="#90e0ef" strokeWidth="4" strokeLinecap="round" />
      <circle cx="88" cy="76" r="10" fill="#f9c74f" />
    </svg>
  );
}
