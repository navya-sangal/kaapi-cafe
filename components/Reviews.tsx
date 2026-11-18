import type { CSSProperties } from "react";
import { reviews } from "@/data/site";

export default function Reviews() {
  return (
    <section className="section reviews" id="reviews">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">Kind words</p>
          <h2>What our regulars say</h2>
        </div>
        <div className="reviews__grid">
          {reviews.map((r, i) => (
            <blockquote
              key={r.name}
              className="review"
              data-reveal
              style={{ "--reveal-delay": `${i * 100}ms` } as CSSProperties}
            >
              <p className="review__stars" role="img" aria-label="5 out of 5 stars">
                ★★★★★
              </p>
              <p className="review__quote">“{r.quote}”</p>
              <footer>
                <strong>{r.name}</strong>
                <span className="muted">{r.detail}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
