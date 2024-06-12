import Image from "next/image";
import React from "react";

export default function SectionBody({ children }) {
  return (
    <section className="w-full h-screen flex justify-center items-center pt-16">
      {children}
    </section>
  );
}
