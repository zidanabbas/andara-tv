import React from "react"
import ContainTitle from "../ContainTitle"

export default function Visi() {
  return (
    <div className="sm:w-full md:w-1/2 px-4 py-4 hover:border hover:border-primary hover:duration-500">
      <div className="sm:w-2/3 mx-auto">
        <ContainTitle
          title={"Visi"}
          classname={"text-primary font-bold uppercase text-center"}
        />
      </div>
      <div className="text-slate-700 mt-4 font-base">
        <p className="mb-2">
          - Menjadi wadah kolaborasi dalam menggalih potensi
        </p>
      </div>
    </div>
  )
}
