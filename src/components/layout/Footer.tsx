import Link from "next/link";
import Image from "next/image";
import { siteConfig, footer } from "@/lib/content";

export function Footer() {
  return (
    <footer className="bg-stone-900 text-stone-300">
      <div className="container-wide py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr_1fr] gap-12 lg:gap-8">

          {/* Brand column */}
          <div>
            <div className="mb-5">
              <div className="w-24 h-24 rounded-2xl bg-white/8 flex items-center justify-center overflow-hidden">
                <Image
                  src="/pictures/ppu-logo.jpg"
                  alt="Peak Performance Unleashed"
                  width={88}
                  height={88}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-sm text-stone-400 leading-relaxed max-w-xs mb-6">
              {footer.tagline}
            </p>
            <div className="flex gap-3">
              {Object.entries(siteConfig.social).map(([key, href]) => (
                <a
                  key={key}
                  href={href}
                  aria-label={key === "email" ? "Send an email" : "LinkedIn"}
                  target={key === "email" ? undefined : "_blank"}
                  rel={key === "email" ? undefined : "noopener noreferrer"}
                  className="w-9 h-9 rounded-full bg-white/8 hover:bg-clay-500 flex items-center justify-center text-stone-400 hover:text-white transition-all duration-200"
                >
                  <SocialIcon name={key} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {footer.columns.map((col) => (
            <div key={col.heading}>
              <h4 className="text-xs font-semibold uppercase tracking-[0.12em] text-stone-500 mb-4">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-stone-400 hover:text-gold-500 transition-colors duration-150"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-6 border-t border-white/8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-600">
          <p>{footer.legal}</p>
          <p>
            <a href={`mailto:${siteConfig.contact.email}`} className="hover:text-stone-400 transition-colors">
              {siteConfig.contact.email}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ name }: { name: string }) {
  if (name === "linkedin")
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    );
  if (name === "email")
    return (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    );
  return null;
}
