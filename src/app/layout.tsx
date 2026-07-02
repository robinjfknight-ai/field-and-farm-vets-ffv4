import type { Metadata, Viewport } from "next";
import { Manrope, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { practice } from "@/lib/practice";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const nunito = Nunito_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.fieldandfarmvets.co.uk"),
  title: {
    default: "Field and Farm Vets | Farm & Equine Vets | East Yorkshire",
    template: "%s · Field and Farm Vets",
  },
  description:
    "Field and Farm Vets provide expert farm animal and equine veterinary care across East Yorkshire. 24/7/365 emergency service. Based in Kirkburn, Driffield.",
  openGraph: {
    title: practice.name,
    description:
      "Expert large animal veterinary care — farm, equine and small-holdings. Available 24 hours, 365 days a year. East Yorkshire.",
    type: "website",
    locale: "en_GB",
    siteName: practice.name,
  },
  twitter: {
    card: "summary_large_image",
    title: practice.name,
    description:
      "Expert large animal veterinary care across East Yorkshire. 24/7/365 emergency service.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#226663",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${manrope.variable} ${nunito.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <SiteHeader />
        <main className="flex-1">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
