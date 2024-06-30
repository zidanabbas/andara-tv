import React from "react";

export default function SectionContainerBody({ classname, children }) {
  return (
    <div className={`container rounded-lg gap-6 px-6 py-6 ${classname}`}>
      {children}
    </div>
  );
}
