import type { CSSProperties } from "react";

const features = [
  {
    title: "Beans from Coorg",
    text: "We buy directly from two family estates and roast every Tuesday in small batches.",
  },
  {
    title: "Baked every morning",
    text: "Our buns, loaves and cookies come out of the oven at 7 am. When they're gone, they're gone.",
  },
  {
    title: "Stay as long as you like",
    text: "Fast Wi-Fi, plenty of plug points and no time limits on weekdays. Laptops welcome.",
  },
];

export default function Story() {
  return (
    <section className="section story" id="story">
      <div className="container story__inner">
        <div data-reveal>
          <p className="eyebrow">Our story</p>
          <h2>A neighbourhood café, the way they used to be.</h2>
          <p className="muted">
            Kaapi &amp; Co. started as a weekend coffee cart outside Mount Mary. Five years later we have
            forty seats, a tiny bakery and the same rule: everything is made by hand, in-house, every day.
          </p>
        </div>
        <ul className="features">
          {features.map((f, i) => (
            <li
              key={f.title}
              className="feature"
              data-reveal
              style={{ "--reveal-delay": `${(i + 1) * 100}ms` } as CSSProperties}
            >
              <span className="feature__num">0{i + 1}</span>
              <div>
                <h3>{f.title}</h3>
                <p className="muted">{f.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
