import { getPlaiceholder } from "plaiceholder";

export async function getImage(src: string) {
  const buffer = await fetch(src, { cache: "no-cache" }).then(async (res) =>
    Buffer.from(await res.arrayBuffer())
  );

  const {
    metadata: { width, height },
    ...placeholder
  } = await getPlaiceholder(buffer, { size: 8 });

  return {
    ...placeholder,
    img: { src, width, height },
  };
}
