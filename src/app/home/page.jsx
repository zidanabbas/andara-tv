import Banner from "@/components/fragments/Banner";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HomePage() {
  return (
    <main>
      <Banner />

      {/* profile */}
      <section className="w-full h-screen flex items-center py-36 justify-center">
        <div className="container border border-slate-700 rounded-lg flex flex-col gap-4 min-h-min px-6 py-8">
          <h2 className="text-base w-20  font-bold text-primary text-center">
            Profile
          </h2>
          <div className=" rounded-xl bg-slate-100 flex flex-col justify-center items-center lg:flex-row gap-6 lg:gap-4 px-4 py-2">
            <div className="w-full lg:w-2/4 text-center flex flex-col gap-2 justify-center text-primary">
              <h1 className="text-xl md:text-2xl lg:text-2xl font-bold uppercase ">
                Andara tv entertainment
              </h1>
              <p className="text-md md:text-xl lg:text-xl text-wrap">
                Andara TV merupakan media kreatifitas dari potensi warga andara.
                Andara TV memberikan tontonan yang menggambarkan kehidupan
                masyarakat betawi pinggiran dan problematika masyrakatnya yang
                dikemas secara komedi ala Betawi.
              </p>
            </div>
            <div className="w-full lg:w-2/4 flex justify-center">
              <Image
                src={"/images/ilustrator.png"}
                width={500}
                height={500}
                alt="ilustrator"
                className="w-auto h-auto bg-white rounded-lg"
              />
            </div>
          </div>
          <Link href="/profile" className="flex justify-center">
            <button className="bg-primary text-white rounded-lg p-2">
              Read More
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}
