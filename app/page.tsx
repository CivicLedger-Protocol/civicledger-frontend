import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { ExpectedPages } from "@/components/expected-pages";

export default function HomePage() {
  return (
    <>
      <section className="landing-hero">
        <div className="landing-orbs" aria-hidden />
        <div className="landing-hero-inner">
          <BrandLogo className="landing-logo" aria-label="CivicLedger logo" />
          <span className="tag">Public procurement · Transparent spend</span>
          <h1 className="hero-headline">Spend the public can verify.</h1>
          <p
            className="landing-lead"
            dangerouslySetInnerHTML={{ __html: "CivicLedger connects <strong>tenders, milestones, and disbursements</strong> on Soroban\u2014so agencies, donors, and citizens trace money from award to delivery without trusting a single database owner." }}
          />
          <div className="landing-cta-row">
            <Link href="/roadmap" className="cta">View roadmap</Link>
            <Link href="/solutions" className="cta-secondary">Solutions for agencies</Link>
          </div>
          <ul className="landing-stats">
            <li>Tamper-evident tenders</li>
            <li>Milestone escrow</li>
            <li>Vendor reputation signals</li>
          </ul>
        </div>
      </section>

      <section className="landing-pillars">
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>◆</div>
          <h3>Tender integrity</h3>
          <p>Publish bid windows and awards where watchdogs can verify.</p>
        </article>
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>◇</div>
          <h3>Evidence-linked payouts</h3>
          <p>Funds move when objective milestones pass—not anecdotes.</p>
        </article>
        <article className="landing-pillar">
          <div className="landing-pillar-icon" aria-hidden>○</div>
          <h3>Civic dashboards</h3>
          <p>Transparency routes built for real oversight workflows.</p>
        </article>
      </section>

      <p className="landing-trust">Built for ministries, NGOs, and civil society monitoring teams.</p>

      <ExpectedPages />
    </>
  );
}
