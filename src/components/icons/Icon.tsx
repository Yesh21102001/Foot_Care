import { FA_GLYPHS } from "./fa-glyphs";
import { SvgGlyph } from "./SvgGlyph";

// A Font Awesome icon as inline SVG. `name` is the icon name ("arrow-right"); the old class form ("fas fa-arrow-right")
// is accepted too. Rendered inside an <i> so existing styles that target the icon element keep working.
export function Icon({ name, className }: { name: string; className?: string }) {
  const key = name.split(" ").pop()!.replace(/^fa-/, "");
  const glyph = FA_GLYPHS[key];
  if (!glyph) return null;
  return (
    <i className={className ? `icon ${className}` : "icon"} aria-hidden="true">
      <SvgGlyph glyph={glyph} />
    </i>
  );
}
