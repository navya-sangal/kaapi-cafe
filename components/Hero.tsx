import { site } from "@/data/site";
import { Star } from "./Icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div className="hero__text">
          <p className="eyebrow">Est. 2021 · Bandra West</p>
          <h1>
            Good coffee
            <br />
            takes its <em>time.</em>
          </h1>
          <p className="hero__lead">
            South Indian filter kaapi, small-batch bakes and an all-day breakfast menu, served in a sunlit
            corner of Chapel Road.
          </p>
          <div className="hero__actions">
            <a href="#reserve" className="btn">
              Reserve a table
            </a>
            <a href="#menu" className="btn btn--ghost">
              See the menu
            </a>
          </div>
          <dl className="hero__stats">
            <div>
              <dt>
                4.8
                <Star label="stars" />
              </dt>
              <dd>1,200+ Google reviews</dd>
            </div>
            <div>
              <dt>Open daily</dt>
              <dd>{site.hours[0].time}</dd>
            </div>
          </dl>
        </div>

        <div className="hero__art" aria-hidden="true">
          <div className="cup">
            <div className="cup__steam">
              <span />
              <span />
              <span />
            </div>
            <div className="cup__body" />
            <div className="cup__handle" />
            <div className="cup__saucer" />
          </div>
          <div className="hero__badge">
            <strong>
              <span className="rupee">₹</span>140
            </strong>
            <span>Classic filter kaapi</span>
          </div>
        </div>
      </div>
    </section>
  );
}
