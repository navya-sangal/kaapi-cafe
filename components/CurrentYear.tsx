"use client";

import { useEffect, useState } from "react";

// The page is pre-built, so a year worked out on the server is frozen at build time.
// We start with that year (so the HTML is never empty and matches what the server sent),
// then swap in the visitor's real current year once the page has loaded in the browser.
export default function CurrentYear({ initial }: { initial: number }) {
  const [year, setYear] = useState(initial);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return <>{year}</>;
}
