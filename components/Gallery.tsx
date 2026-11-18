import Image from "next/image";
import type { CSSProperties } from "react";
import { gallery } from "@/data/site";

// Photos come from data/site.ts. next/image resizes each one for the visitor's screen,
// converts it to a modern format (WebP) and only loads it when it's about to scroll into view.
export default function Gallery() {
  return (
    <section className="section gallery" aria-label="Gallery">
      <div className="container gallery__grid">
        {gallery.map((photo, i) => (
          <figure
            key={photo.src}
            className="tile"
            data-reveal
            style={{ "--reveal-delay": `${i * 80}ms` } as CSSProperties}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              // How wide the photo is shown, so the browser downloads the right size:
              // the first tile is twice as big as the others.
              sizes={i === 0 ? "(max-width: 860px) 100vw, 560px" : "(max-width: 860px) 50vw, 280px"}
              className="tile__img"
            />
            <figcaption>{photo.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
