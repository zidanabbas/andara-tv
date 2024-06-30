import React from "react";
import CardVideo from "@/components/ui/CardVideo";

export default function VideoComponent({ embed, title }) {
  return (
    <div className="max-w-md md:max-w-3xl md:h-72 flex items-center justify-center rounded-lg p-3 overflow-hidden shadow-md shadow-slate-900">
      <CardVideo embed={embed} title={title} />
    </div>
  );
}
