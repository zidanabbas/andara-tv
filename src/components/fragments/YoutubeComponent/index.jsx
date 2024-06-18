import React from "react";

export default function YoutubeComponent() {
  return (
    <div className="max-w-sm max-h-72 flex flex-col items-center rounded-lg p-4 relative shadow-xl shadow-slate-600">
      <iframe
        src="https://www.youtube.com/embed/sHsZt44Mg4w?si=KekyluQBsjgq4ijo"
        title="YouTube video player"
        width={200}
        height={200}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      />
    </div>
  );
}
