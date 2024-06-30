import React from "react";

export default function Banner({ classname, children }) {
  return (
    <div
      className={`w-full bg-cover bg-center ${classname}`}
      style={{ backgroundImage: `url('/images/banner.png')` }}
    >
      {children}
    </div>
  );
}
