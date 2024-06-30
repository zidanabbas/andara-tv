import React from "react";
import ContainTitle from "../ContainTitle";

export default function Misi() {
  return (
    <div className="sm:w-full md:w-1/2 px-4 py-2 mt-4 sm:mt-0 shadow-lg border">
      <div className="sm:w-2/3 mx-auto">
        <ContainTitle
          title={"Misi"}
          classname={"text-primary font-bold uppercase text-center"}
        />
      </div>
      <div className="text-slate-700 mt-4">
        <p className="mb-2">
          - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Distinctio, iure!
        </p>
        <p className="mb-2">
          - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Distinctio, iure!
        </p>
        <p className="mb-2">
          - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Distinctio, iure!
        </p>
      </div>
    </div>
  );
}
