import React from "react";

export default function SectionPage({ children }) {
  return (
    <div className="container h-full flex flex-col justify-center md:items-center lg:flex-row gap-4 py-4">
      {children}
    </div>
  );
}
