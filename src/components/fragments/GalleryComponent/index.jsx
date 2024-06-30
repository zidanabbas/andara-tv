"use client";
import React, { useEffect, useState } from "react";
import Button from "@/components/ui/Button";
import ContainTitle from "@/components/ui/ContainTitle";
import ImageCard from "../Card/ImageCard";
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody";
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody";

export default function GalleryComponent() {
  const [DataGallery, setDataGallery] = useState([]);

  useEffect(() => {
    async function fetchDataGallery() {
      const response = await fetch("/api/gallery");
      const data = await response.json();
      setDataGallery(data.data);
    }

    return fetchDataGallery;
  }, []);

  return (
    <ContainerBody classname={"bg-primary py-24"}>
      <SectionContainerBody
        title={"Gallery"}
        classname={"bg-background-color flex flex-wrap justify-center"}
      >
        <ContainTitle title={"Gallery"} classname={"text-primary w-full"} />
        <div className="w-full rounded-xl max-h-[800px] overflow-x-auto bg-primary/75 flex flex-wrap items-center justify-center lg:flex-row gap-4 lg:gap-6 px-4 py-6">
          {DataGallery.map((item) => (
            <ImageCard key={item.id} src={item.url} alt={item.url} />
          ))}
        </div>
        <Button href="/gallery">Read More</Button>
      </SectionContainerBody>
    </ContainerBody>
  );
}
