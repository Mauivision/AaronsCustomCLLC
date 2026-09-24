import Image from "next/image";

type ImageBandProps = {
  src: string;
  alt: string;
  caption?: string;
};

export default function ImageBand({ src, alt, caption }: ImageBandProps) {
  return (
    <figure className="relative w-full">
      <div className="relative aspect-[21/9] min-h-[240px] md:min-h-[320px]">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
        />
        {caption && (
          <figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-warm-charcoal/70 to-transparent px-6 py-6 text-sm text-warm-stone/90 md:px-12 md:py-8 md:text-base">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
