import Link from "next/link";
import { Arrow, PageFrame } from "../components/site-chrome";
import { InteriorHero, QuotePanel } from "../components/marketing";

export default function FinancingPage() {
  return <PageFrame><main><InteriorHero eyebrow="Financing & rebates" title={<>A better system<br /><em>can fit your budget.</em></>} text="Monthly payment options and rebate support." image="/images/stock-home-financing.jpg" /><section className="section finance-detail"><div className="shell"><div className="section-heading"><div><p className="eyebrow">How it works</p><h2>Upgrade without<br /><em>the guesswork.</em></h2></div><p>Repair, replace, and pay with a clear plan.</p></div><div className="finance-steps"><div><strong>See your options</strong><p>Repair or replace. Compare side by side.</p></div><div><strong>Choose a payment plan</strong><p>Simple monthly options. No pressure.</p></div><div><strong>We handle the details</strong><p>Sizing, permits, and rebate paperwork.</p></div></div><div className="finance-banner"><div><strong>Systems starting at $89/month</strong><span>Potential rebates up to $2,000</span></div><Link className="button button-orange" href="/contact">Check eligibility <Arrow /></Link></div></div></section><QuotePanel /></main></PageFrame>;
}
