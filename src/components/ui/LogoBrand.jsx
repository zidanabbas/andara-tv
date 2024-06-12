import Image from "next/image";
import Link from "next/link";

export default function LogoBrand() {
  return (
    <Link href="/" className="p-2 flex items-center">
      <Image
        src="/images/logo-andara-tv.png"
        alt="Andara TV"
        width={150}
        height={150}
        className="w-auto h-auto"
        loading="lazy"
      />
    </Link>
  );
}
