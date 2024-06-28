import React from "react";

export default function Banner({ classname, children }) {
  return (
    <div
      className={`w-full mx-auto py-28 bg-cover bg-center ${classname}`}
      style={{ backgroundImage: `url('/images/banner.png')` }}
    >
      {children}
    </div>
  );
}
