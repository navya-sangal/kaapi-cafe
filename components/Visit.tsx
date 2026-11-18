import type { CSSProperties } from "react";
import { site } from "@/data/site";
import { ArrowRight } from "./Icons";

export default function Visit() {
  const query = encodeURIComponent(site.map.query);
  const directionsUrl = `https://www.google.com/maps/search/?api=1&query=${query}`;
  // Google's free embed link: no API key or account needed.
  const embedUrl = `https://maps.google.com/maps?q=${query}&z=${site.map.zoom}&output=embed`;

  return (
    <section className="section visit" id="visit">
      <div className="container visit__inner">
        <div data-reveal>
          <p className="eyebrow">Visit us</p>
          <h2>Find the yellow door on Chapel Road.</h2>
          <p className="muted">{site.address}</p>
          <a href={directionsUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
            Get directions
            <ArrowRight />
          </a>
        </div>
        <div className="visit__card" data-reveal style={{ "--reveal-delay": "100ms" } as CSSProperties}>
          <h3>Opening hours</h3>
          <ul className="hours">
            {site.hours.map((h) => (
              <li key={h.days}>
                <span>{h.days}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
          <h3>Say hello</h3>
          <ul className="contact">
            <li>
              <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
            <li>{site.instagram} on Instagram</li>
          </ul>
        </div>
        <div className="visit__map" data-reveal>
          <iframe
            src={embedUrl}
            title={`Map showing ${site.name} at ${site.address}`}
            // "lazy" = the map only loads when someone scrolls near it, so it doesn't slow the page down.
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>
    </section>
  );
}
