import React from "react"

export default function CardVideo({ embed, title }) {
  return (
    <div className="w-full h-full">
      <iframe
        className="w-full h-full"
        src={`https://www.youtube.com/embed/${embed}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  )
}
