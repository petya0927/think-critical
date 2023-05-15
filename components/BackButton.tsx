import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

export default function BackButton({ className }: { className?: string }) {
  const router = useRouter();

  return (
    <Link
      href="/"
      onClick={() => router.back()}
      className={
        className || "xl:absolute xl:top-48 mr-auto xl:-translate-x-[140px]"
      }
    >
      <Image
        src={"/assets/icons/arrow-back-green-icon.svg"}
        alt="Back"
        width={40}
        height={40}
        quality={100}
        placeholder="empty"
        loading="lazy"
        className="cursor-pointer w-full h-full"
      />
    </Link>
  );
}
