import Image from "next/image";
import React from "react";

export default function MediaPartnerComponent() {
  return (
    <div className="max-w-64 md:max-w-xs object-contain">
      <Image
        src={"/images/ilustrator.png"}
        alt="ilustrator"
        width={150}
        height={200}
        className="w-auto h-auto bg-slate-200 rounded-lg"
      />
    </div>
  );
}
