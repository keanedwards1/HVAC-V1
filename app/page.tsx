"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Arrow, LeadForm, MobileBar, PageCta, SiteFooter, SiteHeader } from "./components/site-chrome";
import { AreaMap, ReviewCards, ServiceGrid, TrustBand } from "./components/marketing";

export default function Home() {
  const [city, setCity] = useState("Austin");
  useEffect(() => {
    const value = new URLSearchParams(window.location.search).get("city");
    if (value) setCity(value.replace(/[-_]/g, " "));
  }, []);

  return <><SiteHeader /><main>
    <section className="hero" id="top"><div className="shell hero-grid"><div className="hero-copy"><p className="eyebrow">Local HVAC service · {city}</p><h1>Fast heating &amp; AC help in <em>{city}.</em></h1><p className="hero-lede">Same-day repair. Clear pricing. Respectful technicians.</p><div className="hero-actions"><a className="button button-orange button-large" href="tel:5550192831">Call now: (555) 019-2831 <Arrow /></a><Link className="text-link" href="/contact">Schedule online <Arrow /></Link></div><div className="hero-proof"><span>✓ Same-day dispatch</span><span>✓ No surprise fees</span><span>✓ Fixed-right guarantee</span></div></div><div className="hero-photo-wrap"><Image className="hero-photo" src="/images/stock-hvac-hero.jpg" alt="HVAC technician checking a residential electrical control panel" fill priority sizes="(max-width: 720px) 100vw, 52vw" /><div className="hero-photo-shade" /><div className="photo-caption"><span className="live-dot" /><strong>Techs on call now</strong><small>{city} + nearby communities</small></div><div className="rating-card"><span className="google-mark">G</span><span><strong>4.9 <b>★★★★★</b></strong><small>250+ verified Google reviews</small></span></div></div></div><div className="shell lead-wrap"><LeadForm /></div></section>
    <TrustBand />
    <section className="section services-section" id="services"><div className="shell"><div className="section-heading"><div><p className="eyebrow">HVAC services</p><h2>Fix it today.<br /><em>Keep it running.</em></h2></div><p>Repair, replacement, and maintenance from one local team.</p></div><ServiceGrid /></div></section>
    <section className="split-section" id="why-us"><div className="shell split-grid"><div className="split-image"><Image src="/images/stock-home-bedroom.jpg" alt="Bright residential bedroom with comfortable natural light" fill sizes="(max-width: 720px) 100vw, 50vw" /><span>Clean work. Clear answers.</span></div><div className="split-copy"><p className="eyebrow">The Northline standard</p><h2>A local HVAC company you’ll feel good <em>calling back.</em></h2><p>We show up, explain the problem, and price the work before we begin.</p><div className="standards"><div><strong>Background-checked technicians</strong></div><div><strong>Clean home guarantee</strong></div><div><strong>Fixed-right guarantee</strong></div></div><Link className="text-link" href="/contact">Meet your comfort team <Arrow /></Link></div></div></section>
    <section className="financing-section" id="financing"><div className="shell financing-grid"><div><p className="eyebrow eyebrow-light">System replacement</p><h2>New comfort without the <em>big upfront bill.</em></h2><p>Compare a high-efficiency system with monthly payments and rebate support.</p><Link className="button button-orange" href="/financing">Explore replacement options <Arrow /></Link></div><div className="financing-facts"><div><strong>$89<span>/mo</span></strong><small>starting payment</small></div><div><strong>$2,000</strong><small>rebate support</small></div><div><strong>10 yr</strong><small>warranty options</small></div></div></div></section>
    <section className="section review-section" id="reviews"><div className="shell"><div className="section-heading"><div><p className="eyebrow">What your neighbors say</p><h2>Good work travels <em>fast.</em></h2></div><Link className="text-link" href="/reviews">Read all reviews <Arrow /></Link></div><ReviewCards /></div></section>
    <section className="section area-section"><div className="shell area-grid"><div><p className="eyebrow">Service area</p><h2>Close to home in {city} and the communities <em>around it.</em></h2><p>Don’t see your zip code? Call and we’ll check.</p><div className="area-list"><div><strong>{city}</strong><span>78701 · 78702 · 78703</span></div><div><strong>Round Rock</strong><span>78664 · 78665 · 78681</span></div><div><strong>Cedar Park</strong><span>78613 · 78630 · 78641</span></div></div><Link className="button button-navy" href="/service-area">See our service area <Arrow /></Link></div><AreaMap city={city} /></div></section>
    <PageCta />
  </main><SiteFooter /><MobileBar /></>;
}
