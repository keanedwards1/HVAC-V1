import Link from "next/link";
import { Arrow, PageFrame } from "../components/site-chrome";
import { InteriorHero, QuotePanel, ServiceGrid, serviceData } from "../components/marketing";

export default function ServicesPage() {
  return <PageFrame><main><InteriorHero eyebrow="Services" title={<>The right fix for<br /><em>every season.</em></>} text="Repairs, maintenance, and replacements from one local team." image="/images/stock-indoor-unit.jpg" /><section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What we do</p><h2>Comfort service,<br /><em>done properly.</em></h2></div><p>Clear recommendations. Work that lasts.</p></div><ServiceGrid limit={serviceData.length} /></div></section><section className="dark-callout"><div className="shell callout-grid"><div><p className="eyebrow eyebrow-light">Not sure what you need?</p><h2>Tell us what your system is doing.</h2><p>We’ll point you to the right next step.</p></div><Link className="button button-orange" href="/contact">Talk with a specialist <Arrow /></Link></div></section><QuotePanel /></main></PageFrame>;
}
