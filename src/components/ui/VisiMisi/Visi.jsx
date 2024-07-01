import React from "react"
import ContainTitle from "../ContainTitle"

export default function Visi() {
  return (
    <div className="sm:w-full md:w-1/2 px-4 py-4 shadow-lg border">
      <div className="sm:w-2/3 mx-auto">
        <ContainTitle
          title={"Visi"}
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
  )
}
