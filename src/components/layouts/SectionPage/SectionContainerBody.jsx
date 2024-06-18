import ContainTitle from "@/components/ui/ContainTitle";
import React from "react";

export default function SectionContainerBody({ classname, title, children }) {
  return (
    <div
      className={`container rounded-lg flex flex-col gap-4 px-6 py-6 justify-center items-center max-h-[500px] sm:max-h-[600px] md:max-h-[750px] lg:max-h-fit ${classname}`}
    >
      <ContainTitle title={title} />
      {children}
    </div>
  );
}
