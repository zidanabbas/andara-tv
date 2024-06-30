import React from "react";
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx";
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody";
import ContainTitle from "@/components/ui/ContainTitle";
import MediaImage from "@/components/ui/MediaImage";

export default function MediaPartnerComponent() {
  return (
    <ContainerBody classname={"py-24"}>
      <SectionContainerBody classname={"bg-primary"} title={"Media Partner"}>
        <ContainTitle
          title={"Media Partner"}
          classname={"font-semibold text-white"}
        />
        <div className="container rounded-xl bg-white sm:flex sm:flex-wrap sm:justify-evenly gap-4 sm:gap-6 py-4 overflow-scroll max-h-[700px]">
          <MediaImage />
        </div>
      </SectionContainerBody>
    </ContainerBody>
  );
}
