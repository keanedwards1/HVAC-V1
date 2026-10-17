import Image from "next/image";
import Link from "next/link";
import { Arrow, LeadForm } from "./site-chrome";

export const serviceData = [
  { slug: "ac-repair", title: "AC repair", eyebrow: "Cooling service", description: "Fast fixes for hot homes and noisy systems.", detail: "We find the fault, explain the fix, and get your cool air back.", image: "/images/stock-hvac-diagnostics.jpg", bullets: ["Same-day response", "Leaks and noise", "Motors and compressors"] },
  { slug: "ac-installation", title: "AC installation", eyebrow: "Cooling installation", description: "Right-sized systems, installed cleanly.", detail: "A better system starts with the right size and a careful install.", image: "/images/stock-hvac-install.jpg", bullets: ["Home assessment", "High-efficiency options", "Clean installation"] },
  { slug: "heating-repair", title: "Heating repair", eyebrow: "Heating service", description: "Safe, fast repair for furnaces and heat pumps.", detail: "Clear recommendations and careful work to keep your home warm.", image: "/images/stock-hvac-heating.jpg", bullets: ["Furnace diagnostics", "Heat pump service", "Safety checks"] },
  { slug: "furnace-installation", title: "Furnace installation", eyebrow: "Heating installation", description: "Efficient furnace replacements with simple options.", detail: "We match the equipment to your home, comfort, and budget.", image: "/images/stock-hvac-controls.jpg", bullets: ["Right-size calculation", "Quiet equipment", "Warranty registration"] },
  { slug: "heat-pump-services", title: "Heat pump services", eyebrow: "Heat pump service", description: "Year-round support for modern heat pumps.", detail: "Repair, maintenance, and replacement from one experienced team.", image: "/images/stock-hvac-pressure.jpg", bullets: ["Heat pump repair", "Seasonal maintenance", "Replacement options"] },
  { slug: "ductless-mini-split", title: "Ductless mini-split", eyebrow: "Specialty comfort", description: "Room-by-room comfort without ductwork.", detail: "A flexible fit for additions, garages, offices, and more.", image: "/images/stock-hvac-heat-pump.jpg", bullets: ["Room-by-room zoning", "Low-profile install", "Service and repair"] },
  { slug: "indoor-air-quality", title: "Indoor air quality", eyebrow: "Air quality", description: "Cleaner air through filtration and humidity control.", detail: "Improve the air your family breathes every day.", image: "/images/stock-home-interior.jpg", bullets: ["Whole-home filters", "Humidity control", "Ventilation options"] },
  { slug: "system-replacement", title: "System replacement", eyebrow: "Whole-home comfort", description: "High-efficiency systems with rebate support.", detail: "Compare repair and replacement with honest numbers.", image: "/images/stock-hvac-electrical.jpg", bullets: ["Custom load calculation", "Top-brand equipment", "Rebate support"] },
  { slug: "maintenance", title: "Maintenance plans", eyebrow: "Preventive care", description: "Tune-ups that help prevent surprise repairs.", detail: "VIP members get priority scheduling and repair savings.", image: "/images/stock-hvac-panel.jpg", bullets: ["21-point inspection", "Priority scheduling", "Repair discounts"] },
];

export function InteriorHero({ eyebrow, title, text, image = "/images/stock-hvac-workshop.jpg" }: { eyebrow: string; title: React.ReactNode; text: string; image?: string }) {
  return <section className="interior-hero"><div className="shell interior-hero-grid"><div><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="interior-lede">{text}</p><div className="hero-actions"><Link className="button button-orange button-large" href="/contact">Request service <Arrow /></Link><a className="text-link" href="tel:5550192831">Call (555) 019-2831 <Arrow /></a></div></div><div className="interior-image"><Image src={image} alt="Northline HVAC service" fill priority sizes="(max-width: 720px) 100vw, 45vw" /><span className="image-label">Licensed &amp; insured</span></div></div></section>;
}

export function ServiceGrid({ limit = 4 }: { limit?: number }) {
  const data = serviceData.slice(0, limit);
  return <div className="service-grid">{data.map((service, index) => <article className="service-card" key={service.slug}><div className="service-card-image"><Image src={service.image} alt={`${service.title} service`} fill sizes="(max-width: 720px) 100vw, 25vw" /></div><div className="service-icon">{index === 0 ? "❄" : index === 1 ? "♨" : index === 2 ? "↗" : "✓"}</div><h3>{service.title}</h3><p>{service.description}</p><ul>{service.bullets.slice(0, 2).map((item) => <li key={item}>✓ {item}</li>)}</ul><Link className="card-link" href={service.slug === "maintenance" ? "/maintenance-plan" : `/services/${service.slug}`}>Learn more <Arrow /></Link></article>)}</div>;
}

export function TrustBand() {
  return <section className="trust-row"><div className="shell trust-grid"><div><strong>4.9 ★★★★★</strong><span>250+ verified reviews</span></div><div><strong>NATE certified</strong><span>Factory-trained technicians</span></div><div><strong>Upfront pricing</strong><span>No surprise charges</span></div><div><strong>Licensed &amp; insured</strong><span>License #[123456]</span></div></div></section>;
}

export function QuotePanel() {
  return <section className="quote-panel"><div className="shell quote-grid"><div><p className="eyebrow">Need help now?</p><h2>Let’s get your home<br /><em>feeling right again.</em></h2><p>Tell us what’s wrong. We’ll call you back.</p></div><LeadForm compact /></div></section>;
}

export function ReviewCards() {
  return <div className="reviews-grid"><article className="review-card"><div className="review-stars">★★★★★</div><p>“Our AC went out in the middle of a 95° heatwave on a Saturday. They had a technician at our door in under two hours and had cold air blowing within 30 minutes.”</p><footer><span className="review-avatar">M</span><span><strong>Marcus T.</strong><small>Austin, TX · Verified customer</small></span></footer></article><article className="review-card"><div className="review-stars">★★★★★</div><p>“The crew was polite, kept everything spotless, and guided us through getting a utility rebate. Highly recommend them to anyone.”</p><footer><span className="review-avatar avatar-blue">S</span><span><strong>Sarah L.</strong><small>Round Rock, TX · Verified customer</small></span></footer></article><div className="review-aside"><span className="google-mark">G</span><strong>4.9</strong><span>average rating</span><small>250+ reviews from local homeowners</small></div></div>;
}

export function AreaMap({ city = "Austin" }: { city?: string }) {
  const location = `${city}, TX`;
  return <div className="area-map"><iframe title={`Google map of ${location}`} src={`https://www.google.com/maps?q=${encodeURIComponent(location)}&output=embed`} loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div>;
}
