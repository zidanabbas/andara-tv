import React from "react";
import listLink from "@/lib/utils/listLink";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink() {
  const pathname = usePathname();
  return (
    <nav className="hidden md:flex items-center px-3 text-black py-1">
      <ul className="flex min-w-[300px] justify-between w-full">
        {listLink.map((path) => (
          <div className="flex gap-2 items-center" key={path.name}>
            <Link
              href={path.link}
              className={`flex items-center gap-2 ${
                pathname === path.link ? "text-primary bg-white" : "text-black"
              }}`}
            >
              {path.name}
            </Link>
          </div>
        ))}
      </ul>
    </nav>
  );
}
