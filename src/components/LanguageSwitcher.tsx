"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale } from "next-intl";

export function LanguageSwitcher({ dark = false }: { dark?: boolean }) {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <div
      className={`inline-flex items-center rounded-full border p-0.5 text-xs font-semibold ${
        dark ? "border-white/25" : "border-brand-200"
      }`}
    >
      {routing.locales.map((loc) => (
        <button
          key={loc}
          onClick={() => router.replace(pathname, { locale: loc })}
          aria-current={loc === locale}
          className={`rounded-full px-2.5 py-1 uppercase transition-colors cursor-pointer ${
            loc === locale
              ? "bg-brand-600 text-white"
              : dark
              ? "text-white/70 hover:text-white"
              : "text-stone-500 hover:text-brand-700"
          }`}
        >
          {loc}
        </button>
      ))}
    </div>
  );
}
