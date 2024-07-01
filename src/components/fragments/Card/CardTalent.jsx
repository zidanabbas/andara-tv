import Image from "next/image"
import React from "react"

export default function CardTalent({ src, alt, role, name, description }) {
  return (
    <div className=" sm:w-64 md:w-80 lg:w-72 mb-8 sm:mb-0 overflow-hidden rounded-lg shadow-lg shadow-slate-500">
      <Image
        src={src}
        width={500}
        height={500}
        alt={alt}
        className="w-full max-h-48 object-contain object-center bg-primary/50 "
      />
      <div className="text-white  bg-primary px-6 py-4">
        <h2 className="text-base text-center font-semibold mb-2">{role}</h2>
        <h3 className="text-base font-bold mb-2">{name}</h3>
        <p className="text-sm text-pretty font-medium">
          {description.substring(0, 120)} {description.length > 120 && "..."}
        </p>
      </div>
    </div>
  )
}
