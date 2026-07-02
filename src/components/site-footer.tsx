import Link from "next/link";
import { practice, nav } from "@/lib/practice";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
  );
}

export function SiteFooter() {
  const midNav = nav.slice(0, Math.ceil(nav.length / 2));
  const rightNav = nav.slice(Math.ceil(nav.length / 2));

  return (
    <footer className="bg-dark text-white/70">
      {/* Emergency strip */}
      <div className="bg-plum">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:text-left sm:px-8">
          <p className="text-sm text-white/90">
            <span className="font-semibold text-white">24-hour emergency service</span>
            {" "}— available 365 days a year for farm and equine clients.
          </p>
          <a
            href={practice.phoneHref}
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-bold text-plum transition-colors hover:bg-white/90"
          >
            <PhoneIcon className="h-4 w-4" />
            {practice.phone}
          </a>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.6fr_1fr_1fr]">
        {/* Brand column */}
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={practice.logo}
            alt={practice.name}
            width={96}
            height={96}
            className="h-24 w-24 rounded-full object-cover ring-2 ring-white/20"
          />
          <p className="mt-4 font-display text-lg font-bold text-white">
            {practice.name}
          </p>
          <p className="mt-1 text-sm text-white/60">{practice.tagline}</p>

          <div className="mt-6 space-y-2.5 text-sm">
            <a href={practice.phoneHref} className="flex items-center gap-2.5 hover:text-white">
              <PhoneIcon className="h-4 w-4 shrink-0 text-brand-mid" />
              {practice.phone}
            </a>
            <a href={`mailto:${practice.email}`} className="flex items-center gap-2.5 hover:text-white">
              <MailIcon className="h-4 w-4 shrink-0 text-brand-mid" />
              {practice.email}
            </a>
            <a
              href={practice.address.mapsHref}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2.5 hover:text-white"
            >
              <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-mid" />
              <span>{practice.address.full}</span>
            </a>
          </div>

          {practice.facebook && (
            <a
              href={practice.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-sm font-semibold text-white ring-1 ring-white/10 transition-colors hover:bg-[#1877F2] hover:ring-[#1877F2]"
            >
              <FacebookIcon className="h-4 w-4" />
              Follow us on Facebook
            </a>
          )}
        </div>

        {/* Nav cols */}
        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {midNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">Practice</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            {rightNav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-white/30 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {new Date().getFullYear()} {practice.legalName} · {practice.address.postcode}</p>
          <p>Born from 40 years of East Yorkshire large-animal expertise</p>
        </div>
      </div>
    </footer>
  );
}
