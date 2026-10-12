import type { ComponentProps } from "react";
import { preload } from "react-dom";
import manifest from "@/data/image-manifest.json";
import { getAssetPath } from "@/lib/assets";

type ImageEntry = {
  width: number;
  height: number;
  version: string;
  variants: Array<{ src: string; width: number }>;
};
type ResponsiveImageProps = Omit<
  ComponentProps<"img">,
  "src" | "srcSet" | "width" | "height" | "alt"
> & {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
};
const images: Record<string, ImageEntry> = manifest;
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export function ResponsiveImage({
  src,
  width,
  height,
  fill = false,
  priority = false,
  sizes,
  className,
  loading,
  fetchPriority,
  ...props
}: ResponsiveImageProps) {
  if (!src.startsWith("/") || src.startsWith("//")) {
    throw new Error("ResponsiveImage requires a local public asset.");
  }
  const original =
    basePath && src.startsWith(`${basePath}/`) ? src.slice(basePath.length) : src;
  const image = images[original];
  if (!image && /\.(jpe?g|png|webp|avif)$/i.test(original)) {
    throw new Error(`Run npm run images:build for ${original}`);
  }
  const variants = image?.variants ?? [];
  const url = (variant: { src: string }) =>
    `${getAssetPath(variant.src)}?v=${image.version}`;
  const defaultSrc = variants.length ? url(variants[variants.length - 1]) : src;
  const srcSet = variants.length
    ? variants.map((variant) => `${url(variant)} ${variant.width}w`).join(", ")
    : undefined;
  const displayWidth = width ?? image?.width;
  const imageSizes =
    sizes ?? (fill ? "100vw" : displayWidth ? `${displayWidth}px` : undefined);
  if (priority) {
    preload(defaultSrc, {
      as: "image",
      imageSrcSet: srcSet,
      imageSizes,
      fetchPriority: "high",
    });
  }
  return (
    <img
      {...props}
      src={defaultSrc}
      srcSet={srcSet}
      sizes={imageSizes}
      width={displayWidth}
      height={height ?? image?.height}
      loading={priority ? "eager" : loading ?? "lazy"}
      decoding="async"
      fetchPriority={priority ? "high" : fetchPriority}
      className={`${fill ? "responsive-image-fill " : ""}${className ?? ""}`}
      data-image-source={original}
    />
  );
}
