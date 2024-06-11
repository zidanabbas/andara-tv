import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function LogoBrand() {
  return (
    <Link href="/" className="p-2">
      <Image
        src="/images/logo-andara-tv.png"
        alt="logo"
        width={140}
        height={140}
        loading="eager"
      />
    </Link>
  );
}
