import type { Metadata } from "next";
import Link from "next/link";
import { team, practice } from "@/lib/practice";
import { EmergencyStrip } from "@/components/emergency-strip";

export const metadata: Metadata = {
  alternates: { canonical: "/about" },
  title: "About Us",
  description:
    "Meet the team at Field and Farm Vets. Formed from the legacy of Aldgate Veterinary Practice, serving East Yorkshire farm and equine clients from our base in Kirkburn.",
};

function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/about-farm.jpg"
          alt="Field and Farm Vets team in the field"
          className="absolute inset-0 h-full w-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/80">Our story</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">About Us</h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            A dedicated large animal practice — born from 40 years of East Yorkshire veterinary expertise.
          </p>
        </div>
      </section>

      {/* Practice story */}
      <section className="bg-paper">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">Our history</p>
              <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">
                Built on 40 years of trust
              </h2>
              <div className="mt-5 space-y-4 text-mist">
                <p>
                  Field and Farm Vets was established in 2025 by David Smith and Emma McArthur,
                  developing the large animal services of Aldgate Veterinary Practice — which Keith
                  Dalby ran from 1984 through to his retirement in 2018.
                </p>
                <p>
                  We inherited not just the client relationships built over four decades, but a deep
                  understanding of the farming and equine communities of East Yorkshire. Our vets
                  are drawn from that same tradition — practical, knowledgeable, and committed to
                  the long-term health of your animals.
                </p>
                <p>
                  In October 2025 we moved to purpose-built premises at Manor Farm Offices, Kirkburn,
                  giving us a proper home dedicated entirely to large animal veterinary work.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/farm" className="rounded-xl bg-brand px-6 py-3 font-semibold text-white hover:bg-brand-mid">
                  Farm services
                </Link>
                <Link href="/equine" className="rounded-xl bg-ground px-6 py-3 font-semibold text-brand ring-1 ring-brand/20 hover:bg-brand-light">
                  Equine services
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero-team.jpg"
                alt="The Field and Farm Vets team"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-ground">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand">The people</p>
          <h2 className="mt-3 font-display text-4xl font-bold text-ink sm:text-5xl">Meet the team</h2>
          <p className="mt-4 max-w-2xl text-mist">
            Our experienced team brings together large animal vets, specialist TB testing, and dedicated
            administrative support — all committed to the practice Keith Dalby built.
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
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
                    <span className="font-display text-6xl font-bold text-brand/30">
                      {member.name[0]}
                    </span>
                  </div>
                )}
                <div className="p-5">
                  <p className="font-display font-bold text-ink">{member.name}</p>
                  <p className="mt-0.5 text-sm font-medium text-brand">{member.role}</p>
                  {member.bio && (
                    <p className="mt-3 text-sm leading-relaxed text-mist">{member.bio}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-brand-dark">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28">
          <h2 className="font-display text-4xl font-bold text-white sm:text-5xl">How we work</h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              {
                title: "Proactive, not reactive",
                body: "We believe prevention is better than treatment. Our herd health schemes and routine programmes keep your animals healthier and your costs lower.",
              },
              {
                title: "Practical and honest",
                body: "We give you straight advice, clear pricing, and realistic expectations. No unnecessary treatments, no hidden costs.",
              },
              {
                title: "Always available",
                body: "24 hours a day, 365 days a year — if you have an emergency, call the same number and we will be there.",
              },
            ].map(({ title, body }) => (
              <div key={title}>
                <h3 className="font-display text-xl font-bold text-white">{title}</h3>
                <p className="mt-3 text-white/60">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EmergencyStrip />

      <section className="bg-paper py-16">
        <div className="mx-auto max-w-7xl px-5 text-center sm:px-8">
          <h2 className="font-display text-3xl font-bold text-ink">Get in touch</h2>
          <p className="mx-auto mt-4 max-w-md text-mist">
            New to the practice or want to know more? We&apos;re always happy to chat.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/contact" className="rounded-xl bg-brand px-7 py-3.5 font-semibold text-white hover:bg-brand-mid">
              Contact us <ArrowIcon className="inline h-4 w-4 ml-1" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
