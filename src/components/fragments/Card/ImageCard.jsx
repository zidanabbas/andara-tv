import Image from "next/image";
import React from "react";

export default function ImageCard() {
  return (
    <div className="max-w-64 max-h-64">
      <Image
        src={"/images/ilustrator.png"}
        alt="ilustrator"
        width={500}
        height={500}
        className="w-auto h-auto bg-white rounded-lg"
      />
    </div>
  );
}
