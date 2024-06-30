import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import listLink from "@/lib/utils/listLink";

export default function Footer() {
  return (
    <ContainerBody classname={"bg-primary"}>
      <div className="container py-5">
        <div className="flex flex-wrap items-center justify-between py-2 px-4 gap-4">
          <Image
            src={"/images/logo-andara-tv2.png"}
            alt="andara tv"
            width={500}
            height={500}
            className="w-48"
            loading="eager"
          />
          <div className="flex items-center gap-2">
            <IoLocationOutline size={18} className="text-red-700" />
            <h2 className="text-base font-light text-white">
              Jalan Andara, Pangkalan Jati Baru, Cinere, Depok
            </h2>
          </div>
        </div>
        <div className="sm:flex sm:justify-between gap-4 px-4 py-2">
          <div className="flex flex-col gap-3 mb-4 md:mb-0">
            {listLink.map((path) => (
              <Link
                key={path.name}
                href={path.link}
                className="flex items-center gap-3 text-white hover:text-red-700"
              >
                <span className="bg-white p-1 rounded-lg text-secondary">
                  {path.icon}
                </span>
                {path.name}
              </Link>
            ))}
          </div>
          <div className="flex flex-col items-start gap-3">
            <h2 className="text-white text-xl">Find Us On Social Media</h2>
            <Link
              href={"https://www.instagram.com/andaratv/"}
              className="flex items-center gap-2"
            >
              <BsInstagram size={18} className="text-pink-600" />
              <h2 className="text-white">Instagram</h2>
            </Link>
            <Link href={"#"} className="flex items-center gap-2">
              <FaTwitter size={18} className="text-blue-600" />
              <h2 className="text-white">Twitter</h2>
            </Link>
            <div className="flex items-center gap-2">
              <FaWhatsapp size={18} className="text-green-600" />
              <h2 className="text-white">Whatsapp</h2>
            </div>
          </div>
        </div>
      </div>
    </ContainerBody>
  );
}
