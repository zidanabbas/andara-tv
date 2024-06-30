import React from "react";

export default function CardVideo({ embed, title, classname }) {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${embed}`}
      title={title}
      width="100%"
      height="100%"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      className={`rounded-lg aspect-video ${classname}`}
    />
  );
}
