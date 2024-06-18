import Image from "next/image";
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody";
import React from "react";
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx.jsx";

export default function Banner() {
  return (
    <ContainerBody>
      <div
        className="w-full h-screen flex items-center  pt-12 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/banner.png')` }}
      >
        <div className="container flex flex-col lg:flex-row items-center justify-center">
          <div className="w-full">
            <Image
              src={"/images/ilustrator.png"}
              width={500}
              height={500}
              alt="ilustrator"
              className="w-full object-cover"
            />
          </div>
          <div className="w-full lg:w-3/5">
            <div className="w-full text-center lg:h-36 flex flex-col justify-center items-center gap-2 md:gap-4 lg:gap-3">
              <h1 className="text-2xl md:text-3xl 2xl:text-4xl font-bold">
                ANDARA TV{" "}
                <span className="text-primary inline-block">OFFICIAL</span>
              </h1>
              <h3 className="text-xl lg:text-2xl font-normal">
                Berkolaborasi menggalih potensi
              </h3>
            </div>
          </div>
        </div>
      </div>
    </ContainerBody>
  );
}
