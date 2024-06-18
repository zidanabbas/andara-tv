import Link from "next/link";
import React from "react";

export default function Button({ onClick, href }) {
  return (
    <button
      className="bg-primary text-white px-4 py-2 rounded-full"
      onClick={onClick}
    >
      <Link href={href}>{children}</Link>
    </button>
  );
}
