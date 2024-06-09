import React from "react";
import listLink from "@/lib/utils/listLink";
import Link from "next/link";
import { MdMenu } from "react-icons/md";

export default function NavLink() {
  return (
    <nav className="flex items-center px-3 py-1">
      <ul className="hidden min-w-[300px] md:flex justify-between w-full">
        {listLink.map((path) => (
          <div className="flex gap-2 items-center" key={path.name}>
            <Link href={path.link} className="flex items-center gap-2">
              {path.name}
            </Link>
          </div>
        ))}
      </ul>
      <button className="md:hidden">
        <MdMenu size={30} />
      </button>
    </nav>
  );
}
