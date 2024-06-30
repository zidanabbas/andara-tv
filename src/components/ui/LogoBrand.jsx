import Image from "next/image";
import Link from "next/link";

export default function LogoBrand() {
  return (
    <Link href="/" className="p-2 flex items-center">
      <Image
        src="/images/logo-andara-tv.png"
        alt="Andara TV"
        width={500}
        height={500}
        className="w-32 h-auto"
        loading="eager"
      />
    </Link>
  );
}
