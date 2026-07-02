import type { Metadata } from "next";
import Link from "next/link";
import { practice, team, smallholdersClub } from "@/lib/practice";
import { EmergencyStrip } from "@/components/emergency-strip";
import { SmallholdersClubCard } from "@/components/smallholders-club-card";
import { ZonePricingTable } from "@/components/zone-pricing-table";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

const species = [
  {
    label: "Farm",
    subtitle: "Cattle, sheep, pigs & more",
    href: "/farm",
    img: "/images/farm-cow-vet.jpg",
  },
  {
    label: "Equine",
    subtitle: "First opinion & emergency care",
    href: "/equine",
    img: "/images/equine-horse.jpg",
  },
  {
    label: "Small-Holdings",
    subtitle: "Alpacas, goats, poultry & beyond",
    href: "/smallholdings",
    img: "/images/smallholdings-alpaca.jpg",
  },
];

const stats = [
  { value: "24/7", label: "365 days a year" },
  { value: "7", label: "Experienced vets" },
  { value: "3", label: "Disciplines covered" },
  { value: "40+", label: "Years of lineage" },
];

const directorTeam = team.slice(0, 4);

export default function HomePage() {
  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className="relative flex min-h-screen items-end pb-16 pt-32">
        {/* Background photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/hero-team.jpg"
          alt="Field and Farm Vets team"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />

        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="inline-block rounded-lg bg-brand/80 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm">
            East Yorkshire · Farm &amp; Equine Vets
          </p>
          <h1 className="mt-4 font-display text-5xl font-bold text-white sm:text-6xl lg:text-7xl">
            Field &amp; Farm<br />Vets
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80 sm:text-xl">
            Expert large animal veterinary care — farm, equine and small-holdings.
            Available 24 hours a day, 365 days a year.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/farm"
              className="rounded-xl bg-brand px-7 py-3.5 font-semibold text-white transition-colors hover:bg-brand-mid"
            >
              Farm Services
            </Link>
            <Link
              href="/equine"
              className="rounded-xl bg-white/15 px-7 py-3.5 font-semibold text-white backdrop-blur-sm ring-1 ring-white/30 transition-colors hover:bg-white/25"
            >
              Equine Care
            </Link>
          </div>
        </div>
      </section>

      {/* ── Species selector ─────────────────────────────────── */}
      <section>
        <div className="grid md:grid-cols-3">
          {species.map((s) => (
            <Link
              key={s.href}
              href={s.href}
              className="group relative flex h-72 items-end overflow-hidden md:h-96"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={s.img}
                alt={s.label}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent transition-opacity duration-300 group-hover:from-dark/60" />
              <div className="relative w-full p-7">
                <p className="font-display text-2xl font-bold text-white">{s.label}</p>
                <p className="mt-1 text-sm text-white/70">{s.subtitle}</p>
                <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-white/60 transition-colors group-hover:text-white">
                  Learn more <ArrowIcon className="h-3.5 w-3.5" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── About / Mission ──────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-20">
            {/* Image */}
            <div className="relative overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/farm-barn.jpg"
                alt="Vet and farmer in barn"
                className="aspect-[4/5] w-full object-cover lg:aspect-auto lg:h-full"
              />
            </div>
            {/* Text */}
            <div className="flex flex-col justify-center">
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                Our story
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                Rooted in East Yorkshire
              </h2>
              <p className="mt-5 text-lg text-mist">
                Field and Farm Vets was born from the legacy of Aldgate Veterinary Practice —
                serving East Yorkshire farmers and horse owners since 1984. When Keith Dalby retired
                after 34 years, David Smith and Emma McArthur continued that tradition under a
                practice dedicated entirely to large animal care.
              </p>
              <p className="mt-4 text-mist">
                In October 2025 we moved into our purpose-built premises at Manor Farm Offices,
                Kirkburn — giving our team the space to deliver the proactive, practical veterinary
                care that farms and equine clients in East Yorkshire deserve.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4">
                {stats.map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-3xl font-bold text-brand">{s.value}</p>
                    <p className="mt-1 text-sm text-mist">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 font-semibold text-brand hover:text-brand-dark"
                >
                  Meet the team <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 24hr Emergency strip ─────────────────────────────── */}
      <EmergencyStrip />

      {/* ── Zone Visits promo ────────────────────────────────── */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-light/70">
                Equine zone visits
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
                Save on every routine equine visit
              </h2>
              <p className="mt-5 text-lg text-white/70">
                Our zone visit programme reduces the cost of routine equine care by grouping appointments
                geographically. Pre-book 48 hours in advance and pay just{" "}
                <span className="font-semibold text-white">£25 + 50% off standard mileage</span> — versus
                the standard visit rate.
              </p>
              <p className="mt-4 text-white/60">
                Zone visits cover vaccinations, dental exams, blood samples, microchips, prescription
                checks, health checks and sedation services.
              </p>

              <div className="mt-8">
                <ZonePricingTable />
              </div>

              <div className="mt-8">
                <Link
                  href="/equine-zone-visits"
                  className="inline-flex items-center gap-2 rounded-xl bg-brand px-6 py-3 font-semibold text-white transition-colors hover:bg-brand-mid"
                >
                  View zone map &amp; book <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/zone-map.png"
                alt="Field and Farm Vets equine zone visit map"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Small-Holders Club ───────────────────────────────── */}
      <section className="bg-lavender-light">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:gap-16 lg:items-center">
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/smallholdings-alpaca.jpg"
                alt="Alpaca at a small-holding"
                className="aspect-square w-full object-cover"
              />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-plum">
                Membership
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                Small-Holders Club
              </h2>
              <p className="mt-5 text-lg text-mist">
                Whether you keep alpacas, goats, pigs or poultry, the Small-Holders Club gives you
                veterinary expertise and a community of fellow small-holding owners — for just{" "}
                <span className="font-semibold text-ink">£{smallholdersClub.monthly}/month</span>.
              </p>
              <ul className="mt-6 space-y-3">
                {smallholdersClub.benefits.slice(0, 4).map((b) => (
                  <li key={b} className="flex items-start gap-3 text-ink/80">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/15">
                      <CheckIcon className="h-3 w-3 text-brand" />
                    </span>
                    <span className="text-sm">{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Link
                  href="/smallholdings"
                  className="inline-flex items-center gap-2 rounded-xl bg-plum px-6 py-3 font-semibold text-white transition-colors hover:bg-plum-dark"
                >
                  Join the club <ArrowIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Team teaser ──────────────────────────────────────── */}
      <section className="bg-ground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Our people</p>
              <h2 className="mt-2 font-display text-4xl font-bold text-ink sm:text-5xl">
                Meet the team
              </h2>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm font-semibold text-brand hover:text-brand-dark"
            >
              See everyone <ArrowIcon className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {directorTeam.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl bg-paper ring-1 ring-ink/5"
              >
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="aspect-square w-full object-cover object-top"
                  />
                ) : (
                  <div className="flex aspect-square items-center justify-center bg-brand-light">
                    <span className="font-display text-5xl font-bold text-brand/30">
                      {member.name[0]}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <p className="font-display font-bold text-ink">{member.name}</p>
                  <p className="mt-0.5 text-sm text-mist">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Review ───────────────────────────────────────────── */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 sm:py-28">
          <div className="flex justify-center gap-1 text-amber-400">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg key={s} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
          <blockquote className="mt-6 font-display text-2xl font-bold leading-snug text-ink sm:text-3xl">
            &ldquo;I have rescued and worked with horses for many years and you are one of the best vets
            I have had the pleasure to work with.&rdquo;
          </blockquote>
          <p className="mt-5 text-sm text-mist">Equine client · February 2026</p>
        </div>
      </section>

      {/* ── New premises ─────────────────────────────────────── */}
      <section className="bg-ground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">
                Our home
              </p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                New premises in Kirkburn
              </h2>
              <p className="mt-5 text-lg text-mist">
                Since October 2025 we operate from purpose-built premises at Manor Farm Offices,
                Kirkburn, near Driffield. Our new home gives us the space and facilities to serve
                farms and equine clients across East Yorkshire.
              </p>
              <div className="mt-6 rounded-2xl bg-brand-light p-5">
                <p className="font-semibold text-brand-dark">{practice.address.full}</p>
                <a
                  href={practice.address.mapsHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 text-sm text-brand hover:text-brand-dark"
                >
                  Get directions <ArrowIcon className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/premises-1.jpg"
                alt="Field and Farm Vets premises"
                className="rounded-2xl object-cover w-full aspect-[4/3]"
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/premises-2.jpg"
                alt="Field and Farm Vets new premises"
                className="rounded-2xl object-cover w-full aspect-[4/3]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Contact CTA ──────────────────────────────────────── */}
      <section className="bg-brand-dark py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Get in touch
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/70">
            Call us on <a href={practice.phoneHref} className="font-semibold text-white hover:text-brand-light">{practice.phone}</a> or email{" "}
            <a href={`mailto:${practice.email}`} className="font-semibold text-white hover:text-brand-light">{practice.email}</a>
          </p>
          <p className="mt-2 text-white/50 text-sm">{practice.address.full}</p>
          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="rounded-xl bg-white px-7 py-3.5 font-semibold text-brand-dark transition-colors hover:bg-white/90"
            >
              Contact us
            </Link>
            <a
              href={practice.phoneHref}
              className="rounded-xl bg-brand/80 px-7 py-3.5 font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-brand"
            >
              Call now
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
