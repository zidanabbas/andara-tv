"use client";
import React from "react";
import Link from "next/link";
import listLink from "@/lib/utils/listLink";
import { usePathname } from "next/navigation";

export default function NavMobile({ isOpen }) {
  const pathname = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className={`block md:hidden min-h-screen w-full backdrop-blur-md top-14 right-0 absolute bg-primary h-14`}
        >
          <nav className="block h-96 py-2">
            <ul className="container flex w-full mt-2 flex-col gap-4">
              {listLink.map((path) => (
                <div
                  className={`container flex h-12 justify-end border-b-2 border-white py-1 hover:bg-secondary ${
                    pathname === path.link ? "bg-secondary " : "bg-primary"
                  } `}
                  key={path.name}
                >
                  <Link
                    href={path.link}
                    className={`flex items-center w-64 justify-end gap-4 font-semibold text-white`}
                  >
                    {path.name}
                    <div className="bg-white p-2 rounded-md text-secondary ">
                      {path.icon}
                    </div>
                  </Link>
                </div>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
