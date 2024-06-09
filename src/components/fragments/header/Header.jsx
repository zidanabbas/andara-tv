import React from "react";
import Image from "next/image";
import NavLink from "../navbar/NavLink";

export default function Header() {
  return (
    <header className="w-full h-14 fixed flex items-center px-14 drop-shadow-xl bg-slate-100">
      <div className="w-full flex justify-between px-2">
        <div className="p-2">
          <Image
            src="/images/logo-andara-tv.png"
            alt="logo"
            width={140}
            height={140}
          />
        </div>
        <NavLink />
      </div>
    </header>
  );
}
