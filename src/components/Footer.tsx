import { useTranslations } from "next-intl";
import { Mail, MapPin, Phone } from "lucide-react";
import { Link } from "@/i18n/navigation";
import { Logo } from "./Logo";
import { FacebookIcon, InstagramIcon, LinkedinIcon } from "./SocialIcons";

export function Footer() {
  const t = useTranslations("footer");
  const nav = useTranslations("nav");
  const activities = useTranslations("activities");

  const activityItems = activities.raw("items") as { title: string }[];

  return (
    <footer className="relative overflow-hidden bg-brand-950 text-white">
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-700/30 blur-3xl"
      />
      <div className="container-mia relative py-16">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          <div>
            <Logo dark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {t("description")}
            </p>
            <div className="mt-6 flex gap-3">
              {[FacebookIcon, InstagramIcon, LinkedinIcon].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/80 transition-colors hover:bg-brand-500 hover:text-white"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-300">
              {t("quickLinksTitle")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">{nav("home")}</Link></li>
              <li><Link href="/about" className="hover:text-white transition-colors">{nav("about")}</Link></li>
              <li><Link href="/activities" className="hover:text-white transition-colors">{nav("activities")}</Link></li>
              <li><Link href="/news" className="hover:text-white transition-colors">{nav("news")}</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">{nav("contact")}</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-300">
              {t("activitiesTitle")}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {activityItems.slice(0, 5).map((item) => (
                <li key={item.title}>{item.title}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-bold uppercase tracking-wider text-brand-300">
              {t("contactTitle")}
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/70">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>00225 07 08 78 18 / 00225 07 07 09 41 57</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>contact@scoops-mia.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" />
                <span>{t("address")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} SCOOPS MIA. {t("rights")}</p>
          <p>Société Coopérative Agricole MIA</p>
        </div>
      </div>
    </footer>
  );
}
