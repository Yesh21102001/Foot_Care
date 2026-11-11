import { WELLNESS_GLYPHS } from "./wellness-glyphs";
import { SvgGlyph } from "./SvgGlyph";

// A wellness illustration icon as inline SVG ("theraphy", or the old class form "flaticon-set-theraphy").
// Use only in server components: the path data is large and should not be sent as JavaScript.
export function WellnessIcon({ name }: { name: string }) {
  const key = name.replace(/^flaticon-set-/, "");
  const glyph = WELLNESS_GLYPHS[key];
  if (!glyph) return null;
  return (
    <i className="icon" aria-hidden="true">
      <SvgGlyph glyph={glyph} />
    </i>
  );
}
