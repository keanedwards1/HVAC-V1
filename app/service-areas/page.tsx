import Link from "next/link";
import { Arrow, PageFrame } from "../components/site-chrome";
import { AreaMap, QuotePanel } from "../components/marketing";

const cities = [
  { slug: "austin", name: "Austin", zips: "78701 · 78702 · 78703 · 78704" },
  { slug: "round-rock", name: "Round Rock", zips: "78664 · 78665 · 78681" },
  { slug: "cedar-park", name: "Cedar Park", zips: "78613 · 78630 · 78641" },
];

export default function ServiceAreasPage() {
  return <PageFrame><main><section className="interior-hero"><div className="shell interior-hero-grid"><div><p className="eyebrow">Service areas</p><h1>Good service should be <em>close to home.</em></h1><p className="interior-lede">Northline serves Austin, Round Rock, Cedar Park, and the surrounding communities.</p><div className="hero-actions"><a className="button button-orange button-large" href="tel:5550192831">Check my zip code <Arrow /></a></div></div><AreaMap /></div></section><section className="section"><div className="shell"><div className="section-heading"><div><p className="eyebrow">Local coverage</p><h2>Find your city.<br /><em>Find your team.</em></h2></div><p>Each local page includes the neighborhoods, zip codes, and common comfort concerns we see in that community.</p></div><div className="coverage-grid">{cities.map((city) => <Link className="coverage-card" href={`/service-areas/${city.slug}`} key={city.slug}><strong>{city.name}</strong><span>{city.zips}</span><b>View local service <Arrow /></b></Link>)}</div></div></section><QuotePanel /></main></PageFrame>;
}
