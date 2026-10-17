import Link from "next/link";
import { Arrow, PageFrame } from "../components/site-chrome";
import { AreaMap, QuotePanel } from "../components/marketing";

export default function ServiceAreaPage() {
  return <PageFrame><main><section className="interior-hero area-hero"><div className="shell interior-hero-grid"><div><p className="eyebrow">Service area</p><h1>Good service should be <em>close to home.</em></h1><p className="interior-lede">Northline serves Austin, Round Rock, Cedar Park, Buda, and surrounding communities.</p><div className="hero-actions"><a className="button button-orange button-large" href="tel:5550192831">Check my zip code <Arrow /></a></div></div><AreaMap /></div></section><section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Communities we serve</p><h2>Local coverage,<br /><em>local response.</em></h2></div><p>Don’t see your zip code listed? Call us. We may still be able to service your street.</p></div><div className="coverage-grid"><div><strong>Austin</strong><span>78701 · 78702 · 78703 · 78704 · 78745</span></div><div><strong>Round Rock</strong><span>78664 · 78665 · 78681</span></div><div><strong>Cedar Park</strong><span>78613 · 78630 · 78641</span></div><div><strong>Buda &amp; Kyle</strong><span>78610 · 78640 · 78620</span></div></div></div></section><QuotePanel /></main></PageFrame>;
}
