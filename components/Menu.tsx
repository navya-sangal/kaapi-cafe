"use client";

import { useState } from "react";
import { menu } from "@/data/site";

const categories = Object.keys(menu);

export default function Menu() {
  const [active, setActive] = useState(categories[0]);

  return (
    <section className="section menu" id="menu">
      <div className="container">
        <div className="section__head" data-reveal>
          <p className="eyebrow">The menu</p>
          <h2>Small menu. Made properly.</h2>
        </div>

        <div className="tabs" role="tablist" aria-label="Menu categories" data-reveal>
          {categories.map((c) => (
            <button
              key={c}
              id={`menu-tab-${c}`}
              role="tab"
              aria-selected={active === c}
              aria-controls="menu-panel"
              className={`tab ${active === c ? "is-active" : ""}`}
              onClick={() => setActive(c)}
            >
              {c}
            </button>
          ))}
        </div>

        {/* data-reveal goes on the panel, not the items: the items are replaced when you switch tab */}
        <div id="menu-panel" role="tabpanel" aria-labelledby={`menu-tab-${active}`} data-reveal>
          <ul className="menu__list">
            {menu[active].map((item) => (
              <li key={item.name} className="menu__item">
                <div className="menu__row">
                  <h3>
                    {item.name}
                    {item.tag && <span className={`tag tag--${item.tag.toLowerCase()}`}>{item.tag}</span>}
                  </h3>
                  <span className="menu__dots" aria-hidden="true" />
                  <span className="menu__price">
                    <span className="rupee">₹</span>
                    {item.price}
                  </span>
                </div>
                <p className="muted">{item.description}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
