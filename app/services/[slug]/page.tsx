import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, PageFrame } from "../../components/site-chrome";
import { InteriorHero, QuotePanel, serviceData } from "../../components/marketing";

export function generateStaticParams() {
  return serviceData.filter((service) => service.slug !== "maintenance").map((service) => ({ slug: service.slug }));
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceData.find((item) => item.slug === slug && item.slug !== "maintenance");
  if (!service) notFound();
  return <PageFrame><main><InteriorHero eyebrow={service.eyebrow} title={<>{service.title}<br /><em>for your home.</em></>} text={service.detail} image={service.image} /><section className="section detail-section"><div className="shell detail-grid"><div><p className="eyebrow">What to expect</p><h2>A better service call starts with <em>better answers.</em></h2><Link className="button button-navy" href="/contact">Request {service.title} <Arrow /></Link></div><div className="detail-checklist">{service.bullets.map((bullet) => <div key={bullet}><strong>{bullet}</strong></div>)}</div></div></section><section className="process-section"><div className="shell"><p className="eyebrow">Our process</p><h2>Simple from the first call<br /><em>to the final check.</em></h2><div className="process-grid"><div><strong>We listen</strong><p>Tell us what changed.</p></div><div><strong>We diagnose</strong><p>We explain the options.</p></div><div><strong>We fix it right</strong><p>You approve the work.</p></div></div></div></section><QuotePanel /></main></PageFrame>;
}
