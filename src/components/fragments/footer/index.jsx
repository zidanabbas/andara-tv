import React from "react";
import Image from "next/image";
import Link from "next/link";
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx";
import { BsInstagram } from "react-icons/bs";
import { FaTwitter, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Footer() {
  return (
    <ContainerBody classname={"bg-primary max-h-96"}>
      <div className="container p-4">
        <div className="flex flex-wrap justify-between pb-9 py-2 gap-4">
          <Image
            src={"/images/logo-andara-tv2.png"}
            alt="andara tv"
            width={150}
            height={150}
          />
          <div className="flex items-center gap-2">
            <IoLocationOutline size={18} className="text-red-700" />
            <h2 className="text-md text-white">
              Jalan Andara, Pangkalan Jati Baru, Cinere, Depok
            </h2>
          </div>
        </div>
        <div className="flex justify-between px-4 py-2">
          <div className="flex flex-col gap-3 text-white">
            <Link href={"/"}>Home</Link>
            <Link href={"/about"}>About</Link>
            <Link href={"/gallery"}>Gallery</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className="flex flex-col gap-3">
            <h2 className="text-white text-xl">Social Media</h2>
            <div className="flex items-center gap-2">
              <BsInstagram size={18} className="text-pink-600" />
              <h2 className="text-white">Instagram</h2>
            </div>
            <div className="flex items-center gap-2">
              <FaTwitter size={18} className="text-blue-600" />
              <h2 className="text-white">Twitter</h2>
            </div>
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
