import React from "react"
import Image from "next/image"
import MediaPartnerComponent from "@/components/fragments/MediaPartnerComponent"
import Banner from "@/components/fragments/banner"
import GalleryComponent from "@/components/fragments/GalleryComponent"
import CrewTalentComponent from "@/components/fragments/CrewTalentComponent"
import ProfileComponent from "@/components/fragments/ProfileComponent"
import YoutubeComponent from "@/components/fragments/YoutubeComponent"

export default function HomeView() {
  return (
    <>
      <Banner classname={"h-screen flex justify-center items-center"}>
        <div className="container mx-auto p-0">
          <div className="flex flex-col lg:flex-row items-center gap-4">
            <div className="w-full lg:w-2/3">
              <Image
                src="/images/ilustrator.webp"
                width={500}
                height={500}
                alt="ilustrator"
                className="w-full h-auto object-cover"
                priority
              />
            </div>
            <div className="w-full lg:w-1/3 gap-2">
              <h1 className="flex justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold gap-2">
                ANDARA TV <span className="text-primary">OFFICIAL</span>
              </h1>
              <h2 className="text-base sm:text-lg md:text-xl text-center font-normal">
                Berkolaborasi menggalih potensi
              </h2>
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
  )
}
