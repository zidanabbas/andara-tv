import React from "react";
import ContainerBody from "../SectionPage/ContainerBody.jsx";
import Link from "next/link";
import Image from "next/image";
import SectionContainerBody from "../SectionPage/SectionContainerBody.jsx";
import ImageCard from "@/components/fragments/Card/ImageCard.jsx";

export default function Gallery() {
  return (
    <ContainerBody classname={"bg-primary pt-28 pb-28 px-4 md:px-10"}>
      <SectionContainerBody title={"Gallery"} classname={"bg-background-color"}>
        <div className="w-full rounded-xl bg-primary/75 flex flex-col items-center lg:flex-row gap-4 lg:gap-6 px-4 py-6">
          <ImageCard />
        </div>
        <Link href="/profile" className="flex justify-end">
          <button className="bg-primary text-white rounded-lg p-2">
            Read More
          </button>
        </Link>
      </SectionContainerBody>
    </ContainerBody>
  );
}
