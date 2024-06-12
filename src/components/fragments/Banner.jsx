import Image from "next/image";
import React from "react";
import SectionPage from "../layouts/section/SectionPage";

export default function Banner() {
  return (
    <section className="w-full h-screen">
      <div
        className="w-full flex items-center  pt-12 h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/images/banner.png')` }}
      >
        <SectionPage>
          <div className="w-full md:w-2/3 flex justify-center">
            <Image
              src={"/images/ilustrator.png"}
              width={500}
              height={500}
              alt="ilustrator"
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full md:w-2/4 lg:w-3/5">
            <div className="w-full text-center h-full flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">
                ANDARA TV{" "}
                <span className="text-primary inline-block">OFFICIAL</span>
              </h1>
              <h3 className="text-lg md:text-2xl lg:text-2xl font-normal">
                Berkolaborasi menggalih potensi
              </h3>
            </div>
          </div>
        </SectionPage>
      </div>
    </section>
  );
}
