import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody";
import Button from "@/components/ui/Button";
import ContainTitle from "@/components/ui/ContainTitle";
import Image from "next/image";
import React from "react";

export default function ProfileComponent() {
  return (
    <SectionContainerBody
      classname={"border border-slate-600 my-10 flex flex-wrap justify-center"}
      title={"Profile"}
    >
      <ContainTitle title={"Profile"} classname={"text-primary w-full"} />
      <div className="rounded-xl bg-slate-100/60 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-4 px-3 py-2 md:max-h-[600px] mb-3">
        <div className="w-full md:w-1/2 lg:w-1/2 flex flex-col gap-4 md:gap-5 lg:gap-6 justify-center text-primary px-3 py-4">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-bold uppercase tracking-wide ">
            Andara tv entertainment
          </h1>
          <p className="text-md lg:text-xl first-letter:text-7xl first-letter:float-left first-letter:mr-3">
            Andara TV merupakan media kreatifitas dari potensi warga andara.
            Andara TV memberikan tontonan yang menggambarkan kehidupan
            masyarakat betawi pinggiran dan problematika masyrakatnya yang
            dikemas secara komedi ala Betawi.
          </p>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5">
          <Image
            src={"/images/gallery/syuting-1.jpeg"}
            width={500}
            height={500}
            alt="ilustrator"
            className="w-auto object-cover rounded-lg"
          />
        </div>
      </div>
      <Button href={"/profile"}>Read More</Button>
    </SectionContainerBody>
  );
}
