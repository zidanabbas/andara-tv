import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { IoArrowBackCircleOutline } from "react-icons/io5"

export default function NotFound() {
  return (
    <ContainerBody classname={"h-screen"}>
      <section className="container sm:flex sm:flex-col justify-center md:items-center lg:flex-row gap-4 py-4">
        <div className="w-full">
          <Image
            src={"/images/ilustrator2.png"}
            width={500}
            height={500}
            alt="ilustrator"
            className="w-full object-cover"
            loading="eager"
          />
        </div>
        <div className="w-full md:w-2/3">
          <div className=" text-center h-full flex flex-col items-center gap-4 md:gap-6 justify-center px-2 py-4">
            <h1 className="text-3xl md:text-5xl font-bold">Ooopsss.. </h1>
            <h3 className="text-lg px-2 font-normal">
              Halaman yang anda cari sedang tidak tersedia😊
            </h3>
            <button className="flex gap-2 justify-center items-center bg-slate-500 hover:bg-slate-600 hover:delay-200 w-48 rounded-lg px-3 py-3 text-white">
              <IoArrowBackCircleOutline size={24} />
              <Link href="/">take me home</Link>
            </button>
          </div>
        </div>
      </section>
    </ContainerBody>
  )
}
