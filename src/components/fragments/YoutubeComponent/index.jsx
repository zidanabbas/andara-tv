import React from "react";

export default function YoutubeComponent({ title, embed }) {
  return (
    <div className="max-w-md md:max-w-3xl md:h-72 flex items-center justify-center rounded-lg p-3 overflow-hidden shadow-md shadow-slate-900">
      <iframe
        src={`https://www.youtube.com/embed/${embed}`}
        title={title}
        width="100%"
        height="100%"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg aspect-auto"
      />
    </div>
  );
}
