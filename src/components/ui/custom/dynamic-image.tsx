import { getImage } from "@/lib/getImage";
import { cn } from "@/lib/utils";
import Image, { ImageProps } from "next/legacy/image";

const DynamicImage = async ({
  src,
  alt,
  className,
  ...props
}: {
  src: string;
  alt: string;
  className?: string;
} & ImageProps) => {
  const { base64 } = await getImage(src);

  return (
    <div className={cn("relative", className)}>
      <Image
        src={src}
        alt={alt}
        placeholder="blur"
        blurDataURL={base64}
        layout="fill"
        objectFit="cover"
        objectPosition="center"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority
        {...props}
      />
    </div>
  );
};

export default DynamicImage;
