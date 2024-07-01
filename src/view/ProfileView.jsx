import VisiMisiComponent from "@/components/fragments/VisiMisiComponent"
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody"
import Button from "@/components/ui/Button"
import ContainTitle from "@/components/ui/ContainTitle"
import Misi from "@/components/ui/VisiMisi/Misi"
import Visi from "@/components/ui/VisiMisi/Visi"
import Image from "next/image"
import React from "react"

export default function ProfileView() {
  return (
    <>
      <div
        className="container object-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url('/images/banner.png')`,
          height: "270px",
          position: "relative"
        }}
      >
        <Image
          src={"/images/icon-andara-tv.png"}
          alt="avatar"
          width={500}
          height={500}
          className="w-32 bg-slate-200 p-2 rounded-full"
          style={{
            position: "absolute",
            bottom: "0",
            left: "50%",
            transform: "translateX(-50%)" + "translateY(50%)",
            right: "0",
            objectFit: "cover"
          }}
        />
      </div>

      <div className="container flex items-center justify-between">
        <Button href="/contact">Contact</Button>
        <Button href="/youtube">Youtube</Button>
      </div>
      <SectionContainerBody classname={""}>
        <div className="container py-5">
          <ContainTitle
            title={"Andara TV Entertainment"}
            classname={
              "text-center text-primary uppercase text-lg sm:text-xl md:text-2xl lg:text-4xl"
            }
          />
          <p className="tracking-widest text-base font-medium px-2 text-center text-slate-500">
            Andara TV merupakan media kreatifitas dari potensi warga andara.
            Andara TV memberikan tontonan yang menggambarkan kehidupan
            masyarakat betawi pinggiran dan problematika masyrakatnya yang
            dikemas secara komedi ala Betawi.
          </p>
        </div>
      </SectionContainerBody>

      <VisiMisiComponent title={"Tujuan"} classname={"text-primary "}>
        <p className="text-slate-700 px-6 py-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum nemo
          itaque alias, perspiciatis necessitatibus sapiente debitis voluptatum
          voluptate doloribus cupiditate natus fugit error officia magni
          voluptas vero ex eius ipsum consequatur quasi nostrum rem modi. Quam
          culpa accusamus vero eum, sequi dignissimos hic nulla aperiam, natus
          molestiae minima magnam. Tempora.
        </p>
      </VisiMisiComponent>

      <VisiMisiComponent title={"Visi dan Misi"} classname={"text-primary"}>
        <Visi />
        <Misi />
      </VisiMisiComponent>
    </>
  )
}
