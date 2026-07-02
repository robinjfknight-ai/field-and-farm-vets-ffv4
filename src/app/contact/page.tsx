import type { Metadata } from "next";
import { practice } from "@/lib/practice";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact",
  description:
    "Contact Field and Farm Vets. Call 01377 252153 or email admin@fieldandfarmvets.co.uk. Based at Manor Farm Offices, Kirkburn, Driffield, East Yorkshire YO25 9DU.",
};

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  );
}

function PinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
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

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[55vh] min-h-[380px] items-end pb-12">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/premises-2.jpg"
          alt="Field and Farm Vets premises"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/50 to-dark/20" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/80">Contact</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">Get in touch</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Call, email, or come and find us at Manor Farm Offices, Kirkburn.
          </p>
        </div>
      </section>

      {/* Contact details */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Contact info */}
            <div>
              <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">Contact details</h2>
              <p className="mt-4 text-mist">
                We are always happy to hear from farmers and horse owners — whether it&apos;s a quick
                question or you need us urgently.
              </p>

              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <PhoneIcon className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-mist">Phone</p>
                    <a href={practice.phoneHref} className="font-display text-2xl font-bold text-ink hover:text-brand">
                      {practice.phone}
                    </a>
                    <p className="mt-1 text-sm text-mist">Available 24 hours a day, 365 days a year</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <MailIcon className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-mist">Email</p>
                    <a href={`mailto:${practice.email}`} className="font-semibold text-brand hover:text-brand-dark">
                      {practice.email}
                    </a>
                    <p className="mt-1 text-sm text-mist">For non-urgent enquiries</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand/10">
                    <PinIcon className="h-5 w-5 text-brand" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-wide text-mist">Address</p>
                    <p className="font-semibold text-ink">Manor Farm Offices</p>
                    <p className="text-mist">Kirkburn, Driffield</p>
                    <p className="text-mist">East Yorkshire YO25 9DU</p>
                    <a
                      href={practice.address.mapsHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm font-semibold text-brand hover:text-brand-dark"
                    >
                      Get directions →
                    </a>
                  </div>
                </div>

                {practice.facebook && (
                  <div className="flex items-start gap-4">
                    <span className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1877F2]/10">
                      <FacebookIcon className="h-5 w-5 text-[#1877F2]" />
                    </span>
                    <div>
                      <p className="text-sm font-semibold uppercase tracking-wide text-mist">Facebook</p>
                      <a
                        href={practice.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#1877F2] hover:text-[#1465d4]"
                      >
                        Follow us on Facebook
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Map + premises image */}
            <div className="space-y-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/map-kirkburn.png"
                alt="Map showing Kirkburn location"
                className="w-full rounded-2xl"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/premises-1.jpg"
                alt="Field and Farm Vets premises at Kirkburn"
                className="w-full rounded-2xl object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Emergency */}
      <section className="bg-plum py-10">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-white/60">
                Emergency
              </p>
              <h2 className="mt-2 font-display text-2xl font-bold text-white">
                24-hour emergency service — 365 days a year
              </h2>
              <p className="mt-2 text-white/70">
                For all farm and equine emergencies, call the same number any time.
              </p>
            </div>
            <a
              href={practice.phoneHref}
              className="inline-flex shrink-0 items-center gap-2 rounded-2xl bg-white px-8 py-4 font-display text-xl font-bold text-plum hover:bg-white/90"
            >
              <PhoneIcon className="h-6 w-6" />
              {practice.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
