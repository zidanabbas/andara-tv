import SectionPage from "@/components/layouts/section/SectionPage";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";

export default function NotFound() {
  return (
    <section className="w-full h-screen flex justify-center bg-background">
      <div className="container">
        <SectionPage>
          <div className="w-full md:w-2/3 flex justify-center">
            <Image
              src={"/images/ilustrator2.png"}
              width={500}
              height={500}
              alt="ilustrator"
              className="w-auto h-auto"
            />
          </div>
          <div className="w-full md:w-2/4 lg:w-3/5">
            <div className="w-full text-center h-full flex flex-col gap-4">
              <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold">
                Ooopsss..{" "}
              </h1>
              <h3 className="text-lg md:text-2xl lg:text-2xl font-normal">
                Halaman yang anda cari sedang tidak tersedia😊
                <span className="text-base"> silahkan klik tombol kembali</span>
              </h3>
              <button className="flex gap-2 justify-center items-center">
                <IoArrowBackCircleOutline />
                <Link href="/">back</Link>
              </button>
            </div>
          </div>
        </SectionPage>
      </div>
    </section>
  );
}
