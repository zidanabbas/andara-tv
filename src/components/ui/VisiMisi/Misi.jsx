import React from "react"
import ContainTitle from "../ContainTitle"

export default function Misi() {
  return (
    <div className="sm:w-full md:w-1/2 px-4 py-2 mt-4 sm:mt-0 hover:border hover:border-primary hover:duration-500">
      <div className="sm:w-2/3 mx-auto">
        <ContainTitle
          title={"Misi"}
          classname={"text-primary font-bold uppercase text-center"}
        />
      </div>
      <div className="text-slate-700 mt-4 font-base">
        <p className="mb-2">
          - Meningkatkan keterampilan setiap anggota dalam berkesenian
        </p>
        <p className="mb-2">
          - Berkomitmen melestarikan seni dan budaya Indonesia
        </p>
        <p className="mb-2">
          - Bekerjasama saling berkolaborasi dengan organisasi sejenis untuk
          melestarikan seni dan budaya
        </p>
      </div>
    </div>
  )
}
