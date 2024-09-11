"use client"
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

const BackLink = () => {
  const router = useRouter();
  return (
    <button onClick={() => router.back()} className="inline-flex items-center text-lg text-green-600 hover:underline">
      <ArrowLeft size={16} className="mr-2" />
      Return Back
    </button>
  );
};

export default BackLink;
