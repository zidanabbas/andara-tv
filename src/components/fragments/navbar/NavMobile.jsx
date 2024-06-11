import React from "react";
import LogoBrand from "@/components/ui/LogoBrand";
import { CgMenuMotion } from "react-icons/cg";
import NavLink from "./NavLink";
import Link from "next/link";
import listLink from "@/lib/utils/listLink";
import { usePathname } from "next/navigation";

export default function NavMobile({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`w-screen md:hidden min-h-screen -top-3 -left-2  bg-primary  absolute ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="bg-white h-16 w-full flex items-center justify-between px-4 py-2">
        <div className="container flex w-full justify-between">
          <LogoBrand />
          <button
            className="px-2 py-1 bg-secondary text-white rounded-md"
            onClick={toggleMenu}
          >
            <CgMenuMotion size={24} />
          </button>
        </div>
      </div>
      <nav className="block">
        <ul className="container flex w-full mt-2 flex-col gap-2">
          {listLink.map((path) => (
            <div
              className={`container flex h-12 justify-end border-b-2 border-gray-300 py-1 hover:bg-secondary ${
                pathname === path.link
                  ? "bg-secondary text-white"
                  : "bg-primary"
              } `}
              key={path.name}
            >
              <Link
                href={path.link}
                className={`flex items-center w-64 justify-end gap-4 font-semibold`}
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
  );
}
