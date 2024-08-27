import Image from "next/image";

export default function Loading() {
  return <div className="w-full h-full min-h-[80vh] flex justify-center items-center">
  <Image src={"/loader.gif"} alt={"loader"} width={300} height={300} />
</div>
}