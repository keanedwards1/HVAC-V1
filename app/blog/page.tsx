import Link from "next/link";
import { Arrow, PageFrame } from "../components/site-chrome";

const articles = [
  { slug: "how-to-know-your-ac-needs-repair", category: "AC repair", title: "How to know when your AC needs repair", text: "The early signs that a small cooling issue is becoming a bigger one." },
  { slug: "should-you-repair-or-replace-your-furnace", category: "Heating", title: "Should you repair or replace your furnace?", text: "A practical way to compare age, repair cost, comfort, and efficiency." },
  { slug: "simple-ways-to-improve-indoor-air-quality", category: "Indoor air", title: "Simple ways to improve indoor air quality", text: "Small changes that can make the air in your home feel cleaner." },
];

export default function BlogPage() {
  return <PageFrame><main><section className="interior-hero"><div className="shell interior-hero-grid"><div><p className="eyebrow">Northline notes</p><h1>Helpful answers for a <em>more comfortable home.</em></h1><p className="interior-lede">Plain-English guidance for repairs, maintenance, replacement, and indoor air quality.</p></div><div className="blog-feature"><span>Featured guide</span><strong>Keep your system ready for the season ahead.</strong><Link href="/blog/how-to-know-your-ac-needs-repair">Read the guide <Arrow /></Link></div></div></section><section className="section"><div className="shell"><div className="blog-grid">{articles.map((article) => <article className="blog-card" key={article.slug}><span>{article.category}</span><h2>{article.title}</h2><p>{article.text}</p><Link href={`/blog/${article.slug}`}>Read article <Arrow /></Link></article>)}</div></div></section></main></PageFrame>;
}
