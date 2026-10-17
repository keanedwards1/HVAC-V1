"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

export const phone = "(555) 019-2831";
export const phoneHref = `tel:${phone.replace(/\D/g, "")}`;

export function Arrow() {
  return <span aria-hidden="true">→</span>;
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <div className="announcement"><div className="shell announcement-inner"><span className="status-dot" /><span>24/7 emergency service</span><a href={phoneHref}>Call {phone} <Arrow /></a></div></div>
      <header className="site-header"><div className="shell header-inner"><Link className="brand" href="/"><span className="brand-symbol van-logo" aria-hidden="true" /><span><strong>Northline</strong><small>Heating &amp; Air</small></span></Link><nav className={`main-nav ${menuOpen ? "is-open" : ""}`} aria-label="Primary navigation"><Link href="/services">Services</Link><Link href="/financing">Financing</Link><Link href="/about">About</Link><Link href="/service-areas">Service areas</Link><Link href="/contact">Contact</Link></nav><div className="header-contact"><a href={phoneHref}><span className="phone-glyph">☎</span><span><small>Call now</small><strong>{phone}</strong></span></a><Link className="button button-orange" href="/contact">Request service <Arrow /></Link></div><button className="menu-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button></div></header>
    </>
  );
}

export function LeadForm({ compact = false }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }
  if (sent) return <div className={`lead-form form-success-card ${compact ? "is-compact" : ""}`} role="status" aria-live="polite"><span className="success-check">✓</span><strong>We’ve got it.</strong><p>A local comfort specialist will call you shortly.</p><a href={phoneHref}>Need help now? Call {phone}</a></div>;
  return <form className={`lead-form ${compact ? "is-compact" : ""}`} onSubmit={handleSubmit}><div className="form-intro"><span className="form-label">REQUEST SERVICE</span><strong>What needs attention?</strong></div><label>Name<input name="name" placeholder="Your name" required /></label><label>Phone<input name="phone" type="tel" placeholder="(555) 555-5555" required /></label><label>Service needed<select name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Emergency AC repair</option><option>Heating / furnace repair</option><option>New system quote</option><option>Maintenance / tune-up</option></select></label><label>Zip code<input name="zip" inputMode="numeric" placeholder="78701" required /></label><button type="submit" className="button button-navy form-button">Get my free quote <Arrow /></button></form>;
}

export function SiteFooter() {
  return <footer className="site-footer"><div className="shell footer-grid"><div><Link className="brand footer-brand" href="/"><span className="brand-symbol van-logo" aria-hidden="true" /><span><strong>Northline</strong><small>Heating &amp; Air</small></span></Link><p>Local comfort. Honest work.</p></div><div><h3>Services</h3><Link href="/services/ac-repair">AC repair</Link><Link href="/services/ac-installation">AC installation</Link><Link href="/services/heating-repair">Heating repair</Link><Link href="/services/indoor-air-quality">Indoor air quality</Link></div><div><h3>Company</h3><Link href="/about">About Northline</Link><Link href="/about/our-team">Our team</Link><Link href="/about/reviews">Reviews</Link><Link href="/service-areas">Service areas</Link></div><div><h3>Contact</h3><a href={phoneHref}>{phone}</a><span>7 days · 7am–8pm</span><span>24/7 emergency service</span><Link href="/legal/privacy-policy">Privacy policy</Link></div></div><div className="shell footer-bottom"><span>© 2026 Northline Heating &amp; Air Conditioning</span><span><Link href="/legal/privacy-policy">Privacy</Link> · <Link href="/legal/terms-of-service">Terms</Link></span></div></footer>;
}

export function MobileBar() {
  return <div className="mobile-bar"><a href={phoneHref}><span>☎</span> Call now</a><Link href="/contact"><span>▣</span> Request service</Link></div>;
}

export function PageCta({ title = "Ready for better comfort?", text = "Call now or book online." }: { title?: string; text?: string }) {
  return <section className="final-cta"><div className="shell"><p className="eyebrow eyebrow-light">Northline Heating &amp; Air</p><h2>{title}</h2><p>{text}</p><div><a className="button button-orange button-large" href={phoneHref}>Call {phone} <Arrow /></a><Link className="button button-light button-large" href="/contact">Schedule online <Arrow /></Link></div></div></section>;
}

export function PageFrame({ children }: { children: React.ReactNode }) {
  return <><SiteHeader />{children}<PageCta /><SiteFooter /><MobileBar /></>;
}
