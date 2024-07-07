import Image from "next/image"
import React from "react"

export default function MediaImage() {
  return (
    <div className="sm:w-64 md:w-80 lg:w-72 mb-4 sm:mb-0 shadow-lg">
      <Image
        src={"/images/ilustrator.webp"}
        alt="ilustrator"
        width={500}
        height={500}
        className="w-auto bg-slate-500 rounded-lg"
      />
    </div>
  )
}
