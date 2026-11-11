import type { Glyph } from "./glyph";

// Draws a font glyph as an inline SVG: 1em tall and as wide as the glyph (like the icon font), in the current text colour.
export function SvgGlyph({ glyph, className }: { glyph: Glyph; className?: string }) {
  return (
    <svg
      className={className ? `svg-icon ${className}` : "svg-icon"}
      viewBox={`0 0 ${glyph.w} ${glyph.h}`}
      style={{ width: `${(glyph.w / glyph.h).toFixed(4)}em`, height: "1em" }}
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path transform={`translate(0 ${glyph.asc}) scale(1 -1)`} d={glyph.d} />
    </svg>
  );
}
