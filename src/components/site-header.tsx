"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { practice, nav } from "@/lib/practice";

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
  );
}

function MenuIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // All pages have a full-bleed hero image — header should be readable on all of them
  const isHeroPage = true;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const headerBg =
    isHeroPage && !scrolled && !open
      ? "bg-gradient-to-b from-dark/70 to-transparent"
      : "bg-brand-dark/95 backdrop-blur-md shadow-lg";

  return (
    <header className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${headerBg}`}>
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={practice.logo}
            alt={practice.name}
            width={168}
            height={168}
            className="h-[168px] w-[168px] rounded-full object-cover ring-2 ring-white/30"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-lg px-3.5 py-2 text-sm font-semibold transition-colors ${
                  active
                    ? "bg-white/20 text-white"
                    : "text-white/80 hover:bg-white/10 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Right: phone + hamburger */}
        <div className="flex items-center gap-3">
          <a
            href={practice.phoneHref}
            className="hidden items-center gap-2 rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white ring-1 ring-white/20 transition-colors hover:bg-brand-mid sm:flex"
          >
            <PhoneIcon className="h-4 w-4" />
            {practice.phone}
          </a>
          <a
            href={practice.phoneHref}
            aria-label={`Call ${practice.phone}`}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 sm:hidden"
          >
            <PhoneIcon className="h-5 w-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20 lg:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="border-t border-white/10 bg-brand-dark lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-8">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl px-4 py-3 text-base font-semibold text-white/80 hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <a
              href={practice.phoneHref}
              className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-brand px-4 py-3 text-base font-semibold text-white"
            >
              <PhoneIcon className="h-5 w-5" />
              {practice.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
