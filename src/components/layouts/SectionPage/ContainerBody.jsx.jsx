import React from "react";

export default function ContainerBody({ children, classname }) {
  return (
    <section
      className={`w-full flex h-screen justify-center items-center  ${classname}`}
    >
      {children}
    </section>
  );
}
