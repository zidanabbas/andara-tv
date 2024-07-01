import Image from "next/image"

export default function GridGallery() {
  return (
    <div className="grid grid-cols-2 p-2 gap-2 md:grid-cols-4 md:gap-4">
      <h2 className="h-15 text-xl font-light text-slate-500 md:col-start-4 md:row-start-2 md:flex">
        <span className="self-center">Andara TV Entertainment</span>
      </h2>
      <h2 className="h-15 text-xl font-light text-slate-500 md:col-start-2 md:row-start-2 md:flex">
        <span className="self-end">Property of Andara TV</span>
      </h2>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-1.jpeg"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-700 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 md:row-start-3 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-2.JPG"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-3.JPG"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-4.jpeg"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-5.JPG"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-6.JPG"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 md:col-start-2 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-7.JPG"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 md:col-start-4 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-8.jpeg"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 md:col-start-3 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-9.JPG"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <div className="h-15 aspect-[4/3] rounded-lg md:aspect-[3/4] xl:aspect-[4/3] overflow-hidden relative group hover:scale-95 md:col-start-3 shadow-md shadow-slate-800">
        <Image
          src={"/images/gallery/syuting-10.jpeg"}
          width={500}
          height={500}
          alt="Andara TV"
          className="absolute group-hover:scale-125 transition-all duration-500 w-full h-full object-cover"
          loading="eager"
        />
      </div>
    </div>
  )
}
