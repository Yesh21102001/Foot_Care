import Image, { type ImageProps } from "next/image";
import { IMAGE_DIMENSIONS } from "../data/image-dimensions";

type PhotoProps = Omit<ImageProps, "src" | "width" | "height"> & { src: string };

/**
 * next/image for a file in public/images. Width and height come from IMAGE_DIMENSIONS, so callers (and data passed in as
 * props) only need the path. The CSS still controls the displayed size; base.css gives every img `height: auto`.
 */
export function Photo({ src, alt, ...rest }: PhotoProps) {
  const size = IMAGE_DIMENSIONS[src];
  if (!size) throw new Error(`Photo: no dimensions for ${src}. Add it to src/data/image-dimensions.ts.`);
  return <Image src={src} alt={alt} width={size[0]} height={size[1]} {...rest} />;
}
