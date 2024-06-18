import Image from "next/image";
import Link from "next/link";
import React from "react";
import ContainerBody from "../SectionPage/ContainerBody.jsx.jsx";
import SectionContainerBody from "../SectionPage/SectionContainerBody.jsx";

export default function ProfileSection() {
  return (
    <ContainerBody classname={"pt-28 pb-28 px-4 md:px-10"}>
      <SectionContainerBody
        classname={"border border-slate-600"}
        title={"Profile"}
      >
        <div className="rounded-xl bg-slate-100/60 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-4 px-3 py-2 md:max-h-[600px]">
          <div className="w-full lg:w-2/4 text-center flex flex-col gap-2 justify-center text-primary px-3 py-4">
            <h1 className="text-xs sm:text-base md:text-xl lg:text-2xl font-bold uppercase tracking-wide ">
              Andara tv entertainment
            </h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg 2xl:text-xl text-pretty p-1">
              Andara TV merupakan media kreatifitas dari potensi warga andara.
              Andara TV memberikan tontonan yang menggambarkan kehidupan
              masyarakat betawi pinggiran dan problematika masyrakatnya yang
              dikemas secara komedi ala Betawi.
            </p>
          </div>
          <div className="w-2/3 md:w-full lg:w-2/3">
            <Image
              src={"/images/ilustrator.png"}
              width={500}
              height={500}
              alt="ilustrator"
              className="w-auto md:w-full object-cover rounded-lg"
            />
          </div>
        </div>
        <Link href="/profile" className="flex justify-center">
          <button className="bg-primary text-white rounded-lg p-2">
            Read More
          </button>
        </Link>
      </SectionContainerBody>
    </ContainerBody>
  );
}
