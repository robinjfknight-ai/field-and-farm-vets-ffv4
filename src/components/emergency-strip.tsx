import { practice } from "@/lib/practice";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

export function EmergencyStrip() {
  return (
    <section className="bg-plum py-10 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
              Emergency service
            </p>
            <h2 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">
              We&apos;re here 24 hours a day,<br className="hidden sm:block" /> 365 days a year
            </h2>
            <p className="mt-2 text-white/70">
              Farm and equine emergencies — call the same number any time, day or night.
            </p>
          </div>
          <a
            href={practice.phoneHref}
            className="inline-flex shrink-0 items-center gap-3 rounded-2xl bg-white px-8 py-4 font-display text-xl font-bold text-plum transition-colors hover:bg-white/90"
          >
            <PhoneIcon className="h-6 w-6" />
            {practice.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
