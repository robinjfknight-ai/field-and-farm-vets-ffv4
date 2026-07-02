import type { Metadata } from "next";
import Link from "next/link";
import { practice } from "@/lib/practice";
import { EmergencyStrip } from "@/components/emergency-strip";

export const metadata: Metadata = {
  alternates: { canonical: "/reviews" },
  title: "Reviews",
  description:
    "Read what farm and equine clients say about Field and Farm Vets in East Yorkshire. Trusted, practical, always available.",
};

const reviews = [
  {
    quote:
      "I have rescued and worked with horses for many years and you are one of the best vets I have had the pleasure to work with.",
    author: "Equine client",
    date: "February 2026",
  },
  {
    quote:
      "We understand that your animals are your livelihood, not just your responsibility. We're proud to support farmers and equine owners with dependable, practical veterinary care.",
    author: "Farm client",
    date: "2025",
  },
];

export default function ReviewsPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[80vh] items-end pb-16">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/farm-cow-exam.jpg"
          alt="Vet examining cow"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent" />
        <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-light/80">Client reviews</p>
          <h1 className="mt-3 font-display text-5xl font-bold text-white sm:text-6xl">
            What our clients say
          </h1>
          <p className="mt-4 max-w-xl text-lg text-white/80">
            We understand that your animals are your livelihood. Here&apos;s what farm and equine
            clients across East Yorkshire say about working with us.
          </p>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-paper">
        <div className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
          <div className="space-y-10">
            {reviews.map((r, i) => (
              <div key={i} className="rounded-3xl bg-ground p-8 ring-1 ring-ink/5 sm:p-10">
                <div className="flex gap-1 text-amber-400">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <svg key={s} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <blockquote className="mt-5 font-display text-xl font-bold leading-snug text-ink sm:text-2xl">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <p className="mt-5 text-sm text-mist">
                  {r.author} · {r.date}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-16 rounded-3xl bg-brand-dark p-8 text-center sm:p-12">
            <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
              We&apos;d love to hear from you
            </h2>
            <p className="mx-auto mt-4 max-w-md text-white/70">
              If you&apos;ve used Field and Farm Vets and would like to leave a review, please find
              us on Facebook or Google — or simply call to tell us how we did.
            </p>
            <div className="mt-6 flex justify-center gap-4 flex-wrap">
              {practice.facebook && (
                <a
                  href={practice.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl bg-[#1877F2] px-6 py-3 font-semibold text-white hover:bg-[#1465d4]"
                >
                  Leave a Facebook review
                </a>
              )}
              <Link href="/contact" className="rounded-xl bg-white/10 px-6 py-3 font-semibold text-white ring-1 ring-white/20 hover:bg-white/20">
                Get in touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      <EmergencyStrip />
    </>
  );
}
