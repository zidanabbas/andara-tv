import GridGallery from "@/components/fragments/GalleryComponent/GridGallery";
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx";
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody";
import ContainTitle from "@/components/ui/ContainTitle";
import React from "react";

export default function GalleryView() {
  return (
    <ContainerBody classname={"flex-none"}>
      <SectionContainerBody classname={"my-16"}>
        <ContainTitle
          title={"Gallery Andara TV Entertainment"}
          classname={"text-primary"}
        />
        <GridGallery />
      </SectionContainerBody>
    </ContainerBody>
  );
}
