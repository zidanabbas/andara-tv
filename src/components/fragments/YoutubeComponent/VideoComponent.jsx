import React from "react"
import CardVideo from "@/components/ui/CardVideo"

export default function VideoComponent({ embed, title }) {
  return (
    <div className="w-full aspect-[16/9] bg-primary rounded-lg overflow-hidden shadow-lg relative">
      <CardVideo embed={embed} title={title} />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
        <h3 className="text-white text-lg font-semibold text-right">{title}</h3>
      </div>
    </div>
  )
}
