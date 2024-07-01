import Banner from "@/components/fragments/banner"
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx"
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody"
import Button from "@/components/ui/Button"
import CardVideo from "@/components/ui/CardVideo"
import ContainTitle from "@/components/ui/ContainTitle"
import React from "react"

export default function YoutubeView() {
  return (
    <>
      <ContainerBody classname={"mx-auto"}>
        <SectionContainerBody classname={"py-16m mt-10 lg:mt-12"}>
          <div className="md:flex md:items-center md:justify-evenly gap-3">
            <div className="md:w-1/2 lg:w-1/2 aspect-video md:aspect-[16/14] lg:aspect-[16/9]">
              <CardVideo
                embed={"YRaDc2f_LOs?si=fkoACLfJu6EAlzSS"}
                title={"andara"}
              />
            </div>
            <div className="w-full md:w-1/2 lg:max-w-md">
              <div className="mb-3">
                <ContainTitle
                  title={"Episode Terbaru"}
                  classname={"text-red-700 text-xl sm:text-xl md:text-2xl"}
                />
                <p className="px-4 py-2 text-base tracking-widest">
                  <span className="text-red-600 font-bold">Episode :</span>{" "}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
                  placeat quidem laboriosam nostrum iste eius mollitia molestiae
                  laborum dolore, modi voluptatibus, expedita eveniet fugiat
                  quasi, eos repudiandae accusantium ea! Ea.
                </p>
              </div>
              <div className="flex gap-4">
                <Button href="/contact" classname={"bg-red-600"}>
                  Subscribe
                </Button>
                <Button href="/contact">Youtube Channel</Button>
              </div>
            </div>
          </div>

          <div className="container mt-5">
            <ContainTitle title={"Episode Terbaru"} />
            <div className="flex gap-2 mb-3 px-4 py-2">
              <label htmlFor="search" className="px-2 py-1">
                search video :
              </label>
              <input type="text" className="min-w-md rounded-lg bg-slate-100" />
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-4">
              <CardVideo
                embed={"YRaDc2f_LOs?si=fkoACLfJu6EAlzSS"}
                classname={"sm:max-w-xs  md:max-w-md"}
                title={"andara"}
              />
              <CardVideo
                embed={"YRaDc2f_LOs?si=fkoACLfJu6EAlzSS"}
                title={"andara"}
              />
              <CardVideo
                embed={"YRaDc2f_LOs?si=fkoACLfJu6EAlzSS"}
                title={"andara"}
              />
              <CardVideo
                embed={"YRaDc2f_LOs?si=fkoACLfJu6EAlzSS"}
                title={"andara"}
              />
              <CardVideo
                embed={"YRaDc2f_LOs?si=fkoACLfJu6EAlzSS"}
                title={"andara"}
              />
            </div>
          </div>
        </SectionContainerBody>
      </ContainerBody>
    </>
  )
}
