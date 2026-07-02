import type { Metadata } from "next";
import Link from "next/link";
import { practice, smallholdersClub } from "@/lib/practice";
import { SmallholdersClubCard } from "@/components/smallholders-club-card";

export const metadata: Metadata = {
  alternates: { canonical: "/smallholdings" },
  title: "Small-Holdings",
  description:
    "Veterinary care for small-holdings across East Yorkshire. Alpacas, goats, pigs, poultry and camelids. Small-Holders Club from £15/month. Field and Farm Vets.",
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  );
}

const animals = [
  { name: "Alpacas & Camelids", img: "/images/smallholdings-alpaca.jpg" },
  { name: "Goats", img: "/images/smallholdings-goats.jpg" },
  { name: "Pigs", img: "/images/farm-lamb.jpg" },
];

export default function SmallholdingsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/smallholdings-alpaca.jpg"
          alt="Alpacas at a small-holding"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/85 via-dark/30 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-lavender/90">Services</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">Small-Holdings</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            Bespoke veterinary care for your small-holding — from alpacas and goats to pet pigs
            and poultry. Whatever you keep, we can help.
          </p>
        </div>
      </section>

      {/* Species grid */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Species we treat</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
            All sizes, all species
          </h2>
          <p className="mt-5 max-w-2xl text-lg text-mist">
            Whether you have a handful of backyard chickens or a growing herd of alpacas, we provide
            tailored veterinary care for your situation. Our vets have wide experience with the full
            range of small-holding animals.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-3">
            {animals.map((a) => (
              <div key={a.name} className="overflow-hidden rounded-2xl bg-ground ring-1 ring-ink/5">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={a.img} alt={a.name} className="aspect-[4/3] w-full object-cover" />
                <p className="p-4 font-display font-bold text-ink">{a.name}</p>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl bg-ground p-5">
            <p className="text-sm font-medium text-ink">
              <span className="font-semibold">We also treat:</span> cattle, sheep, pet pigs, poultry and
              any other small-holding livestock. If you&apos;re not sure whether we can help, just call.
            </p>
          </div>
        </div>
      </section>

      {/* Club card */}
      <section className="bg-lavender-light">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-plum text-center">
            Membership
          </p>
          <h2 className="mb-10 text-center font-display text-4xl font-bold text-ink sm:text-5xl">
            Join the Small-Holders Club
          </h2>
          <SmallholdersClubCard />
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-bold text-ink">
            Talk to us about your small-holding
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-mist">
            We&apos;ll design a care package that fits your animals and your situation. Call us on{" "}
            <a href={practice.phoneHref} className="font-semibold text-brand">{practice.phone}</a>.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a href={practice.phoneHref} className="rounded-xl bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-mid">
              Call {practice.phone}
            </a>
            <Link href="/contact" className="rounded-xl bg-ground px-7 py-3.5 font-semibold text-brand ring-1 ring-brand/20 hover:bg-brand-light">
              Send a message
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
