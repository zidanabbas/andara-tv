import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody"
import Button from "@/components/ui/Button"
import ContainTitle from "@/components/ui/ContainTitle"
import Image from "next/image"
import React from "react"

export default function ProfileComponent() {
  return (
    <SectionContainerBody
      classname={"my-10 flex flex-wrap justify-center"}
      title={"Profile"}
    >
      <ContainTitle
        title={"Profile"}
        classname={"text-white bg-primary rounded-md w-full"}
      />
      <div className="rounded-xl bg-slate-100/60 flex flex-col md:flex-row justify-center md:justify-evenly items-center gap-4 px-3 py-2 mb-3">
        <div className="w-full h-full lg:flex lg:flex-wrap lg:justify-center lg:items-center md:w-1/2 lg:w-1/2 text-primary px-3 py-4">
          <div className="px-2 py-1">
            <h1 className="text-base md:text-lg lg:text-xl xl:text-2xl text-center font-bold uppercase tracking-wide mb-2">
              Andara tv entertainment
            </h1>
            <p className="text-base text-center lg:text-xl">
              Andara TV merupakan media kreatifitas dari potensi warga andara.
              Andara TV memberikan tontonan yang menggambarkan kehidupan
              masyarakat betawi pinggiran dan problematika masyrakatnya yang
              dikemas secara komedi ala Betawi.
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/2 lg:w-2/5 hover:drop-shadow-[0_15px_15px_rgba(252,143,0,0.5)]">
          <Image
            src={"/images/gallery/syuting-1.jpeg"}
            width={500}
            height={500}
            alt="ilustrator"
            className="w-auto object-cover rounded-lg hover:scale-90 hover:duration-500"
          />
        </div>
      </div>
      <Button href={"/profile"}>Read More</Button>
    </SectionContainerBody>
  )
}
