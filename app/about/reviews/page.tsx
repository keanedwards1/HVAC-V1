import { PageFrame } from "../../components/site-chrome";
import { ReviewCards, QuotePanel } from "../../components/marketing";

export default function AboutReviewsPage() {
  return <PageFrame><main><section className="interior-hero reviews-hero"><div className="shell interior-hero-grid"><div><p className="eyebrow">Customer reviews</p><h1>Good work travels <em>fast.</em></h1><p className="interior-lede">Real homeowners choose Northline for clear communication, clean work, and comfort that lasts.</p></div><div className="review-hero-score"><span className="google-mark">G</span><strong>4.9</strong><div className="review-stars">★★★★★</div><p>250+ verified reviews from local homeowners</p></div></div></section><section className="section review-section"><div className="shell"><ReviewCards /></div></section><QuotePanel /></main></PageFrame>;
}
