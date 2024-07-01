import Image from "next/image"
import React from "react"

export default function ImageCard({ src, alt }) {
  return (
    <div className="sm:w-64 md:w-80 lg:w-72 p-2 bg-white rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-full object-cover rounded-lg hover:scale-105 ease-in-out duration-500"
      />
    </div>
  )
}
