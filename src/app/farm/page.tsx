import type { Metadata } from "next";
import Link from "next/link";
import { farmServices, visitFees, practice } from "@/lib/practice";
import { EmergencyStrip } from "@/components/emergency-strip";

export const metadata: Metadata = {
  alternates: { canonical: "/farm" },
  title: "Farm Services",
  description:
    "Proactive farm animal veterinary care across East Yorkshire. Cattle, sheep, pigs and more. 24/7/365 emergency service. Call Field and Farm Vets on 01377 252153.",
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

const farmFees = visitFees.farm;

export default function FarmPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[65vh] min-h-[420px] items-end pb-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/farm-cow-vet.jpg"
          alt="Vet with cattle"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/80">Services</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">Farm Services</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Proactive, practical veterinary care for herds and flocks of any size across East Yorkshire.
            From routine fertility visits to 24-hour emergency cover.
          </p>
        </div>
      </section>

      {/* Services list */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">What we offer</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                Comprehensive farm animal care
              </h2>
              <p className="mt-5 text-lg text-mist">
                We take a modern, proactive approach to farm animal medicine — working with you to
                improve herd health, production and welfare. From CHECS-accredited disease testing
                to BCVA-standard bull fertility examinations, our team delivers the full spectrum of
                farm animal veterinary services.
              </p>
              <ul className="mt-8 space-y-3">
                {farmServices.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
                      <CheckIcon className="h-3 w-3 text-brand" />
                    </span>
                    <span className="text-ink/80">{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fee card + images */}
            <div className="space-y-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farm-blood.jpg"
                alt="Vet blood sampling a cow"
                className="w-full rounded-2xl object-cover aspect-video"
              />

              <div className="rounded-2xl bg-brand-dark p-7 text-white">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/70">
                  Farm visit fees (exc. VAT, eff. {farmFees.effectiveDate})
                </p>
                <div className="mt-5 space-y-3">
                  {[
                    { label: farmFees.prebooked.label, fee: `£${farmFees.prebooked.fee.toFixed(2)}`, note: "Pre-booked appointments" },
                    { label: farmFees.standard.label, fee: `£${farmFees.standard.fee.toFixed(2)}`, note: "" },
                    { label: farmFees.ooh.label, fee: `£${farmFees.ooh.fee.toFixed(2)}`, note: "Any time, day or night" },
                  ].map((row) => (
                    <div key={row.label} className="flex items-start justify-between gap-4 border-b border-white/10 pb-3 last:border-0 last:pb-0">
                      <div>
                        <p className="text-sm font-medium text-white">{row.label}</p>
                        {row.note && <p className="text-xs text-white/50">{row.note}</p>}
                      </div>
                      <p className="shrink-0 font-semibold text-brand-light">{row.fee} + mileage</p>
                    </div>
                  ))}
                </div>
                <p className="mt-4 text-xs text-white/40">
                  Mileage at £{farmFees.mileage}/mile return. All fees exc. VAT.
                </p>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farm-barn.jpg"
                alt="Vet and farmer in barn"
                className="w-full rounded-2xl object-cover aspect-video"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Herd health focus */}
      <section className="bg-ground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farm-lamb.jpg"
                alt="Vet with lamb"
                className="w-full aspect-[4/3] object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Herd health</p>
              <h2 className="mt-3 font-display text-3xl font-bold text-ink sm:text-4xl">
                Proactive, partnership-based medicine
              </h2>
              <p className="mt-5 text-mist">
                We believe prevention is better than treatment. Our vets work alongside you to design
                herd health schemes that reduce disease, improve fertility and support your Red Tractor
                and AHWP compliance obligations.
              </p>
              <p className="mt-4 text-mist">
                We are CHECS-accredited for IBR, BVDV, leptospirosis and neospora testing, and our BCVA-trained
                vets carry out bull breeding soundness examinations to BCVA standards.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-mid"
                >
                  Talk to us <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EmergencyStrip />

      {/* CTA */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-bold text-ink">Ready to talk to one of our farm vets?</h2>
          <p className="mx-auto mt-4 max-w-lg text-mist">
            Call us on <a href={practice.phoneHref} className="font-semibold text-brand">{practice.phone}</a> or
            send us a message — we&apos;re always happy to chat about how we can help your operation.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="rounded-xl bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-mid">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
