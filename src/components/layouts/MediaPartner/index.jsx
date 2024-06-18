import React from "react";
import ContainerBody from "../SectionPage/ContainerBody.jsx";
import MediaPartnerComponent from "@/components/fragments/MediaPartnerComponent/index.jsx";
import SectionContainerBody from "../SectionPage/SectionContainerBody.jsx";

export default function MediaPartner() {
  return (
    <ContainerBody classname={"pt-28 pb-28 px-4 md:px-10"}>
      <SectionContainerBody classname={"bg-slate-200"} title={"Media Partner"}>
        <div className="w-full rounded-xl bg-white flex flex-wrap justify-center gap-4 px-2 py-4 md:px-6 md:py-8 overflow-hidden">
          <MediaPartnerComponent />
        </div>
      </SectionContainerBody>
    </ContainerBody>
  );
}
