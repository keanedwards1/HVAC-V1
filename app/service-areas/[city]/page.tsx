import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, PageFrame } from "../../components/site-chrome";
import { AreaMap, QuotePanel, ServiceGrid, TrustBand } from "../../components/marketing";

const cities = {
  austin: { name: "Austin", zips: "78701 · 78702 · 78703 · 78704 · 78745", note: "From downtown homes to South Austin neighborhoods, we keep local systems running through every season." },
  "round-rock": { name: "Round Rock", zips: "78664 · 78665 · 78681", note: "Fast response for Round Rock homeowners who want a clear answer and a clean repair." },
  "cedar-park": { name: "Cedar Park", zips: "78613 · 78630 · 78641", note: "Comfort service for Cedar Park homes, additions, and growing families." },
};

export function generateStaticParams() { return Object.keys(cities).map((city) => ({ city })); }

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city: slug } = await params;
  const city = cities[slug as keyof typeof cities];
  if (!city) notFound();
  return <PageFrame><main><section className="interior-hero city-hero"><div className="shell interior-hero-grid"><div><p className="eyebrow">Northline in {city.name}</p><h1>HVAC service that <em>shows up.</em></h1><p className="interior-lede">{city.note}</p><div className="hero-actions"><Link className="button button-orange button-large" href="/contact">Request service <Arrow /></Link><a className="text-link" href="tel:5550192831">Call (555) 019-2831 <Arrow /></a></div></div><AreaMap city={city.name} /></div></section><TrustBand /><section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Serving {city.name}</p><h2>Comfort help for <em>every season.</em></h2></div><p>Our local team handles repairs, maintenance, replacements, and indoor air quality for homes in and around {city.name}.</p></div><ServiceGrid /></div></section><section className="local-proof"><div className="shell local-proof-grid"><div><p className="eyebrow eyebrow-light">Local coverage</p><h2>Serving {city.name}<br /><em>and nearby.</em></h2><p>Common zip codes: {city.zips}</p></div><div><strong>Need a zip check?</strong><p>Call us and we’ll confirm coverage for your street before we schedule.</p><a className="button button-orange" href="tel:5550192831">Call Northline <Arrow /></a></div></div></section><QuotePanel /></main></PageFrame>;
}
