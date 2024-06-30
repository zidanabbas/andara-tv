import React from "react";
import Image from "next/image";
import MediaPartnerComponent from "@/components/fragments/MediaPartnerComponent";
import Banner from "@/components/fragments/banner";
import GalleryComponent from "@/components/fragments/GalleryComponent";
import CrewTalentComponent from "@/components/fragments/CrewTalentComponent";
import ProfileComponent from "@/components/fragments/ProfileComponent";
import YoutubeComponent from "@/components/fragments/YoutubeComponent";

export default function HomeView() {
  return (
    <>
      <Banner classname={"h-screen flex justify-center items-center"}>
        <div className="container">
          <div className="sm:flex sm:flex-col lg:flex-row items-center gap-4">
            <div className="w-full">
              <Image
                src={"/images/ilustrator.png"}
                width={500}
                height={500}
                alt="ilustrator"
                className="w-full h-full object-cover"
                priority
              />
            </div>
            <div className="w-full">
              <div className="text-center flex flex-col justify-center gap-2 md:gap-4 lg:gap-3">
                <h1 className="text-2xl sm:text-2xl md:text-4xl lg:text-5xl font-bold">
                  ANDARA TV{" "}
                  <span className="text-primary inline-block">OFFICIAL</span>
                </h1>
                <h2 className="text-lg sm:text-xl md:text-2xl font-semibold">
                  Berkolaborasi menggalih potensi
                </h2>
              </div>
            </div>
          </div>
        </div>
      </Banner>
      <ProfileComponent />
      <CrewTalentComponent />
      <YoutubeComponent />
      <GalleryComponent />
      <MediaPartnerComponent />
    </>
  );
}
