import React from "react";
import ContainerBody from "../SectionPage/ContainerBody.jsx";
import Link from "next/link";
import SectionContainerBody from "../SectionPage/SectionContainerBody.jsx";
import ImageCard from "@/components/fragments/Card/ImageCard.jsx";
import DataGallery from "@/lib/utils/DataGallery.js";

export default function Gallery() {
  return (
    <ContainerBody classname={"bg-primary pt-28 pb-28 px-4 md:px-10"}>
      <SectionContainerBody title={"Gallery"} classname={"bg-background-color"}>
        <div className="w-full rounded-xl max-h-[500px] overflow-x-auto bg-primary/75 flex flex-wrap items-center justify-center lg:flex-row gap-4 lg:gap-6 px-4 py-6">
          {DataGallery.map((item) => (
            <ImageCard key={item.id} src={item.url} alt={item.alt} />
          ))}
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
