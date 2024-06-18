import Image from "next/image";
import React from "react";

export default function CardTalent({ src, alt, role, name, description }) {
  return (
    <div className="w-56 md:min-w-64 overflow-hidden rounded-lg shadow-lg">
      <div className="w-full max-h-56 lg:max-h-64 px-2 md:px-6 bg-primary/60">
        <Image
          src={src}
          width={500}
          height={500}
          alt={alt}
          className="object-cover object-center h-48 sm:h-56 md:h-56 lg:h-64 "
        />
      </div>
      <div className="text-white text-center flex bg-primary flex-col px-2 py-3">
        <h2 className="w-full text-xs md:text-base lg:text-lg 2xl:text-xl font-bold">
          {role}
        </h2>
        <h3 className="text-base font-medium">{name}</h3>
        <div className="py-2 text-wrap font-light">
          <p className="text-base text-pretty">
            {description.substring(0, 100)} {description.length > 50 && "..."}
          </p>
        </div>
      </div>
    </div>
  );
}
