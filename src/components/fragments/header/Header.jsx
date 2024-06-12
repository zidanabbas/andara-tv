"use client";
import React, { useState, useEffect } from "react";
import NavLink from "../navbar/NavLink";
import NavMobile from "../navbar/NavMobile";
import LogoBrand from "@/components/ui/LogoBrand";
import { MdMenu } from "react-icons/md";
import { CgMenuMotion } from "react-icons/cg";
import { usePathname } from "next/navigation";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <header className="w-full h-14 fixed flex justify-between items-center px-2 md:px-16 drop-shadow-xl bg-transparent backdrop-blur-xl">
        <div className="container ">
          <div className="w-full relative flex justify-between px-2 ">
            <LogoBrand />
            <NavLink />
            <button
              className="md:hidden px-2 py-1 text-black"
              onClick={toggleMenu}
            >
              {!isOpen ? <MdMenu size={30} /> : <CgMenuMotion size={30} />}
            </button>
          </div>
          {isOpen && <NavMobile isOpen={isOpen} />}
        </div>
      </header>
    </>
  );
}
