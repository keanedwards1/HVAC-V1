import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow, PageFrame } from "../../components/site-chrome";

const articles = {
  "how-to-know-your-ac-needs-repair": { category: "AC repair", title: "How to know when your AC needs repair", intro: "A few small warning signs can help you catch a cooling problem before it becomes an emergency.", sections: ["Warm air from the vents can mean a refrigerant, airflow, or compressor problem. If the system is running but the home is not cooling, it is worth having the system checked instead of turning the thermostat lower.", "Unexpected sounds are another useful clue. Grinding, rattling, or repeated clicking can point to a part that needs attention. A quick diagnosis can help prevent a small repair from becoming a larger one.", "If your system is more than 10 years old and repairs are becoming frequent, ask for a repair-versus-replace comparison. A good contractor should show you both options clearly."] },
  "should-you-repair-or-replace-your-furnace": { category: "Heating", title: "Should you repair or replace your furnace?", intro: "Age, repair cost, comfort, and efficiency all matter when you are deciding what to do next.", sections: ["Start with the age of the system and the pattern of repairs. One normal repair does not automatically mean replacement, but repeated failures can change the math.", "Look at comfort and operating cost, too. Uneven temperatures, rising utility bills, and a system that runs constantly can be signs that replacement deserves a closer look.", "Ask for clear numbers. A trustworthy HVAC company should explain the repair, the replacement option, and the expected tradeoffs without using pressure." ] },
  "simple-ways-to-improve-indoor-air-quality": { category: "Indoor air", title: "Simple ways to improve indoor air quality", intro: "Cleaner indoor air starts with the basics: filtration, airflow, and humidity balance.", sections: ["Replace filters on the schedule recommended for your home and filter type. A dirty filter restricts airflow and makes the equipment work harder.", "If rooms feel stuffy or dusty, ask about whole-home filtration or ventilation options. The right improvement depends on the home, not just the product label.", "Humidity matters, too. A comfort assessment can help determine whether your home would benefit from better humidity control in addition to filtration." ] },
};

export function generateStaticParams() { return Object.keys(articles).map((article) => ({ article })); }

export default async function ArticlePage({ params }: { params: Promise<{ article: string }> }) {
  const { article: slug } = await params;
  const article = articles[slug as keyof typeof articles];
  if (!article) notFound();
  return <PageFrame><main><article className="article-page"><div className="shell article-shell"><p className="eyebrow">{article.category} · Northline notes</p><h1>{article.title}</h1><p className="article-intro">{article.intro}</p><div className="article-body">{article.sections.map((section) => <p key={section}>{section}</p>)}<div className="article-next"><strong>Have a comfort question?</strong><span>Talk with a local Northline specialist.</span><Link className="button button-orange" href="/contact">Request service <Arrow /></Link></div></div></div></article></main></PageFrame>;
}
