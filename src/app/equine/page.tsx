import type { Metadata } from "next";
import Link from "next/link";
import { equineServices, visitFees, practice } from "@/lib/practice";
import { EmergencyStrip } from "@/components/emergency-strip";

export const metadata: Metadata = {
  alternates: { canonical: "/equine" },
  title: "Equine Care",
  description:
    "Comprehensive equine veterinary care across East Yorkshire. First opinion, emergency, vaccinations and zone visits. Call Field and Farm Vets on 01377 252153.",
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  );
}

const vacc = visitFees.equineVaccinations;

export default function EquinePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/equine-horse.jpg"
          alt="Horse and rider"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/80">Services</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">Equine Care</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Comprehensive first opinion equine veterinary care — routine, emergency and specialist.
            Available 24 hours a day, 365 days a year.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">What we offer</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                First opinion equine care
              </h2>
              <p className="mt-5 text-lg text-mist">
                From routine vaccinations and dental care to emergency callouts and colt castrations,
                our equine vets provide the full range of first opinion services. When specialist
                referral is needed, we have close relationships with neighbouring referral practices.
              </p>
              <ul className="mt-8 space-y-3">
                {equineServices.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                      <CheckIcon className="h-3 w-3 text-brand" />
                    </span>
                    <span className="text-ink/80">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/equine-vet.jpg"
                alt="Vet with horse"
                className="w-full rounded-2xl object-cover aspect-video"
              />

              {/* Vaccination prices */}
              <div className="rounded-2xl bg-ground p-7 ring-1 ring-ink/5">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-mist">
                  Vaccination prices (exc. VAT)
                </p>
                <div className="mt-4 space-y-3">
                  {[
                    { label: "Flu & Tetanus", fee: vacc.fluTet },
                    { label: "Flu only", fee: vacc.flu },
                    { label: "Tetanus only", fee: vacc.tet },
                  ].map((v) => (
                    <div key={v.label} className="flex items-center justify-between border-b border-ink/5 pb-3 last:border-0 last:pb-0">
                      <p className="text-sm font-medium text-ink">{v.label}</p>
                      <p className="font-semibold text-brand">£{v.fee}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Zone visits promo */}
              <div className="rounded-2xl bg-brand-dark p-7 text-white">
                <p className="font-display text-lg font-bold text-white">Save with Zone Visits</p>
                <p className="mt-2 text-sm text-white/70">
                  Pre-book routine appointments 48+ hours in advance and pay just £25 + 50% off mileage.
                </p>
                <Link
                  href="/equine-zone-visits"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-brand-light hover:text-white"
                >
                  View zones &amp; pricing <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyStrip />

      {/* CTA */}
      <section className="bg-ground py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-bold text-ink">Book an equine appointment</h2>
          <p className="mx-auto mt-4 max-w-lg text-mist">
            Call us on <a href={practice.phoneHref} className="font-semibold text-brand">{practice.phone}</a> to
            arrange a visit or ask about zone visit availability in your area.
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <a href={practice.phoneHref} className="rounded-xl bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-mid">
              Call {practice.phone}
            </a>
            <Link href="/equine-zone-visits" className="rounded-xl bg-paper px-7 py-3.5 font-semibold text-brand ring-1 ring-brand/20 hover:bg-brand-light">
              Zone visit info
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
