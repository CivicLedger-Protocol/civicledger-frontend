import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: {
    default: "CivicLedger",
    template: "%s | " + "CivicLedger",
  },
  description: "Transparent public procurement on Stellar.",
  applicationName: "CivicLedger",
  openGraph: {
    title: "CivicLedger",
    description: "Transparent public procurement on Stellar.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "CivicLedger",
    description: "Transparent public procurement on Stellar.",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    shortcut: "/icon.svg",
  },
};

const nav = [
  ["Solutions", "/solutions"],
  ["Architecture", "/architecture"],
  ["Transparency", "/transparency"],
  ["Roadmap", "/roadmap"],
  ["Issues", "/issues"],
  ["Docs", "/docs"],
  ["Contact", "/contact"],
] as const;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="nav">
          <div className="container nav-inner">
            <Link href="/" className="brand brand-with-logo">
              <Image
                src="/icon.svg"
                alt=""
                width={38}
                height={38}
                className="nav-logo"
                unoptimized
              />
              <span className="brand-text">CivicLedger</span>
            </Link>
            <nav className="links">
              {nav.map(([label, href]) => (
                <Link key={href} href={href}>{label}</Link>
              ))}
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
