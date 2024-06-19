import Image from "next/image";
import React from "react";

export default function ImageCard({ src, alt }) {
  return (
    <div className="max-w-64 max-h-64 p-2 bg-white rounded-lg">
      <Image
        src={src}
        alt={alt}
        width={500}
        height={500}
        className="w-auto h-auto rounded-lg hover:scale-105 ease-in-out duration-500"
      />
    </div>
  );
}
