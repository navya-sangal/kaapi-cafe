"use client";

import { useState } from "react";
import { site } from "@/data/site";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our story" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="nav">
      <div className="container nav__inner">
        <a href="#top" className="nav__logo">
          {site.name}
        </a>

        <nav className={`nav__links ${open ? "is-open" : ""}`} aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="#reserve" className="btn btn--small" onClick={() => setOpen(false)}>
            Reserve a table
          </a>
        </nav>

        <button
          className="nav__toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
