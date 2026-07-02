import Link from "next/link";
import { smallholdersClub } from "@/lib/practice";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}

export function SmallholdersClubCard() {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-sm ring-1 ring-lavender/40 md:p-10">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <span className="inline-block rounded-lg bg-lavender-light px-3 py-1 text-xs font-semibold uppercase tracking-widest text-plum">
            Membership
          </span>
          <h3 className="mt-3 font-display text-2xl font-bold text-ink">Small-Holders Club</h3>
          <p className="mt-2 text-mist">
            A practical membership for small-holding owners — from alpacas and goats to pigs and poultry.
          </p>
        </div>
        <div className="text-right">
          <p className="font-display text-4xl font-bold text-plum">
            £{smallholdersClub.monthly}
            <span className="text-lg font-normal text-mist">/month</span>
          </p>
          <p className="mt-1 text-sm text-mist">or £{smallholdersClub.annual}/year</p>
        </div>
      </div>

      <ul className="mt-8 grid gap-3 sm:grid-cols-2">
        {smallholdersClub.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3">
            <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10">
              <CheckIcon className="h-3 w-3 text-brand" />
            </span>
            <span className="text-sm text-ink/80">{benefit}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8">
        <Link
          href="/smallholdings"
          className="inline-flex items-center gap-2 rounded-xl bg-plum px-6 py-3 font-semibold text-white transition-colors hover:bg-plum-dark"
        >
          Learn more about the club
        </Link>
      </div>
    </div>
  );
}
