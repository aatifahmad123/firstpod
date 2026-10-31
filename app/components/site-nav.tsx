"use client";

import { useState } from "react";

type SiteNavProps = {
  latestHref: string;
  contactHref: string;
};

function MenuIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

export default function SiteNav({
  latestHref,
  contactHref,
}: SiteNavProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="site-nav">
      <a className="brand" href="/">
        <span className="brand-mark">F</span>
        <span>FIRSTPOD</span>
      </a>
      <div className="nav-actions">
        <div className="nav-links">
          <a href={latestHref}>Latest</a>
          <a href="/archive">Archive</a>
          <a href={contactHref}>Contact</a>
        </div>
      </div>
      <button
        className="menu-button"
        type="button"
        aria-expanded={menuOpen}
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen((open) => !open)}
      >
        <MenuIcon />
      </button>
      {menuOpen && (
        <div className="mobile-nav-links">
          <a href={latestHref} onClick={() => setMenuOpen(false)}>Latest</a>
          <a href="/archive" onClick={() => setMenuOpen(false)}>Archive</a>
          <a href={contactHref} onClick={() => setMenuOpen(false)}>Contact</a>
        </div>
      )}
    </nav>
  );
}
