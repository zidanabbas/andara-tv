"use client";
import React, { useState } from "react";
import NavLink from "../navbar/NavLink";
import NavMobile from "../navbar/NavMobile";
import LogoBrand from "@/components/ui/LogoBrand";
import { MdMenu } from "react-icons/md";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <header className="w-full h-14 fixed flex justify-between items-center px-2 md:px-16 drop-shadow-xl bg-white">
        <div className="container relative">
          <div className="w-full flex justify-between px-2 ">
            <LogoBrand />
            <NavLink />
            <button
              className="md:hidden px-2 py-1 text-black"
              onClick={toggleMenu}
            >
              <MdMenu size={30} />
            </button>
          </div>
          {isOpen && <NavMobile setIsOpen={setIsOpen} isOpen={isOpen} />}
        </div>
      </header>
    </>
  );
}
