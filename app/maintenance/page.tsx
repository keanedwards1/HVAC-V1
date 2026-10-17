import Link from "next/link";
import { Arrow, PageFrame } from "../components/site-chrome";
import { InteriorHero, QuotePanel } from "../components/marketing";

export default function MaintenancePage() {
  return <PageFrame><main><InteriorHero eyebrow="Preventive care" title={<>A little care now.<br /><em>Fewer surprises later.</em></>} text="Seasonal tune-ups. Priority scheduling. Repair savings." image="/images/stock-hvac-toolbelt.jpg" /><section className="section detail-section"><div className="shell detail-grid"><div><p className="eyebrow">VIP maintenance plan</p><h2>Make comfort the thing you <em>don’t have to think about.</em></h2><p>21-point tune-ups before the season gets busy. VIP members get priority dispatch and 15% off repairs.</p><Link className="button button-navy" href="/contact">Join the VIP plan <Arrow /></Link></div><div className="detail-checklist"><div><strong>Spring and fall tune-ups</strong><p>Keep equipment ready.</p></div><div><strong>Priority scheduling</strong><p>Move to the front of the line.</p></div><div><strong>Discounted repairs</strong><p>Save 15% on eligible work.</p></div></div></div></section><QuotePanel /></main></PageFrame>;
}
