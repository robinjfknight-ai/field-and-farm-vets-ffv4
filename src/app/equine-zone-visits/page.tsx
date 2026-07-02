import type { Metadata } from "next";
import Link from "next/link";
import { practice } from "@/lib/practice";
import { ZonePricingTable } from "@/components/zone-pricing-table";

export const metadata: Metadata = {
  alternates: { canonical: "/equine-zone-visits" },
  title: "Equine Zone Visits",
  description:
    "Save on routine equine vet visits with Field and Farm Vets' zone visit programme. Pre-book 48 hours in advance and pay just £25 + 50% off mileage. East Yorkshire.",
};

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

const zoneServices = [
  "Vaccinations",
  "Prescription checks",
  "Dental examinations",
  "Blood samples",
  "Microchipping",
  "Passport paperwork",
  "Health checks",
  "Sedation services",
];

export default function EquineZoneVisitsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[65vh] min-h-[420px] items-end pb-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/equine-vet.jpg"
          alt="Equine veterinary care"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/80">Equine</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">
            Zone Visits
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            A smarter way to manage routine equine care. We group appointments geographically
            so you benefit from significantly reduced visit costs.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light/70">
                How it works
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
                Save on every routine visit
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Our zone visit programme schedules routine appointments on specific days in defined
                geographic zones. By grouping visits together we reduce travel time and pass the savings
                on to you — just{" "}
                <span className="font-semibold text-white">£25 + 50% off standard mileage</span>{" "}
                per visit.
              </p>

              <div className="mt-8 rounded-2xl bg-white/10 p-6">
                <p className="font-semibold text-white">To book a zone visit:</p>
                <ol className="mt-3 space-y-2 text-white/70">
                  <li className="flex gap-3">
                    <span className="shrink-0 font-display font-bold text-brand-light">1.</span>
                    Check your area is within a zone on the map
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-display font-bold text-brand-light">2.</span>
                    Call us at least 48 hours before your required date
                  </li>
                  <li className="flex gap-3">
                    <span className="shrink-0 font-display font-bold text-brand-light">3.</span>
                    We&apos;ll arrange your appointment within the zone schedule
                  </li>
                </ol>
              </div>

              <div className="mt-8">
                <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light/70 mb-4">
                  Zone visits cover
                </p>
                <div className="grid grid-cols-2 gap-2.5">
                  {zoneServices.map((s) => (
                    <div key={s} className="flex items-center gap-2.5">
                      <span className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-brand/40">
                        <CheckIcon className="h-2.5 w-2.5 text-white" />
                      </span>
                      <span className="text-sm text-white/75">{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-10">
                <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-brand-light/70">
                  Visit fees comparison
                </p>
                <ZonePricingTable />
              </div>

              <div className="mt-10">
                <a
                  href={practice.phoneHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-mid"
                >
                  Call to book: {practice.phone}
                </a>
              </div>
            </div>

            {/* Zone map */}
            <div className="rounded-3xl overflow-hidden bg-white/5 p-4">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/zone-map.png"
                alt="Field and Farm Vets equine zone visit map showing zones across East Yorkshire"
                className="w-full rounded-2xl"
              />
              <p className="mt-3 text-center text-xs text-white/40">
                Zone visit areas across East Yorkshire. Call to confirm your area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ strip */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8">
          <h2 className="font-display text-2xl font-bold text-ink">Common questions</h2>
          <div className="mt-8 space-y-6">
            {[
              {
                q: "Do I have to wait for a zone day for routine visits?",
                a: "Zone visits are for pre-planned routine care where you have flexibility on the date. For urgent or emergency visits, call us directly and we will attend as soon as possible at standard rates.",
              },
              {
                q: "What if I miss the 48-hour booking window?",
                a: "You can still book a standard visit at the normal visit rate. Zone visit pricing applies only when booked 48 or more hours in advance.",
              },
              {
                q: "Are zone visits available for all equine services?",
                a: "Zone visits cover vaccinations, dental examinations, prescription checks, blood samples, microchipping, passport paperwork, health checks and sedation. For complex or emergency work, standard visit rates apply.",
              },
              {
                q: "How is mileage calculated?",
                a: "Mileage is charged at £1.25/mile based on the return journey from our practice in Kirkburn. On zone visits, the mileage charge is 50% of the standard rate.",
              },
            ].map(({ q, a }) => (
              <div key={q} className="border-b border-ink/10 pb-6 last:border-0">
                <p className="font-display font-semibold text-ink">{q}</p>
                <p className="mt-2 text-mist">{a}</p>
              </div>
            ))}
          </div>
          <div className="mt-10">
            <Link href="/contact" className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-mid">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
