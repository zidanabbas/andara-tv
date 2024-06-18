import React from "react";
import Link from "next/link";

import ContainerBody from "../SectionPage/ContainerBody.jsx.jsx";
import SectionContainerBody from "../SectionPage/SectionContainerBody.jsx";
import CardTalent from "@/components/fragments/Card/CardTalent.jsx";

export default function CrewAndTalent() {
  return (
    <ContainerBody classname={"bg-primary pt-28 pb-28 px-4 md:px-10"}>
      <SectionContainerBody
        title={"Crew and Talent"}
        classname={"bg-background-color"}
      >
        <div className="rounded-xl bg-slate-100 flex flex-wrap md:flex-row justify-center items-center gap-4 px-4 py-4 overflow-x-scroll w-full max-h-[350px] md:max-h-fit">
          <CardTalent
            src={"/images/crew1.png"}
            alt="SUTRADARA DAN PENULIS CERITA"
            role={"SUTRADARA DAN PENULIS CERITA"}
            name="Sofwan Amin"
            description={
              "lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
          <CardTalent
            src={"/images/crew1.png"}
            alt="SUTRADARA DAN PENULIS CERITA"
            role={"SUTRADARA DAN PENULIS CERITA"}
            name="Sofwan Amin"
            description={
              "lorem ipsum dolor sit amet consectetur adipisicing elit. "
            }
          />
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
