// Small icons drawn as SVG instead of the "★" and "→" characters. The site's fonts don't
// include those characters, so they'd depend on the visitor's device having a font that does,
// and would show as an empty box on ones that don't.

/** Pass a `label` when the star carries meaning on its own (e.g. "4.8 stars"); leave it out
    when the text around it already says it, and screen readers will skip it. */
export function Star({ label }: { label?: string }) {
  const a11y = label ? { role: "img", "aria-label": label } : { "aria-hidden": true };
  return (
    <svg className="icon icon--star" viewBox="0 0 24 24" focusable="false" {...a11y}>
      <path
        fill="currentColor"
        d="M12 1.8l3.1 6.6 7.2.9-5.3 5 1.4 7.1L12 17.9l-6.4 3.5L7 14.3l-5.3-5 7.2-.9z"
      />
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg className="icon" viewBox="0 0 24 24" focusable="false" aria-hidden="true">
      <path
        d="M4 12h15m-6-6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
