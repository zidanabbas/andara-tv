"use client"
import React, { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { FreeMode, Thumbs, Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/free-mode"
import "swiper/css/thumbs"
import "swiper/css/navigation"
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody"
import ContainTitle from "@/components/ui/ContainTitle"
import VideoComponent from "./VideoComponent"
import Button from "@/components/ui/Button"
import { getVideos } from "@/services/youtube-api"
import Image from "next/image"

export default function YoutubeComponent() {
  const [lastVideos, setLastVideos] = useState([])
  const [thumbsSwiper, setThumbsSwiper] = useState(null)

  useEffect(() => {
    const fetchYoutubeVideo = async () => {
      const storedVideos = localStorage.getItem("LastVideos")
      if (storedVideos) {
        setLastVideos(JSON.parse(storedVideos))
      } else {
        const items = await getVideos()
        setLastVideos(items)
        localStorage.setItem("LastVideos", JSON.stringify(items))
      }
    }

    fetchYoutubeVideo()
  }, [])

  return (
    <SectionContainerBody classname="my-24 flex flex-wrap justify-center">
      <ContainTitle
        title="Video Youtube"
        classname="font-semibold text-white bg-primary rounded-md w-full"
      />
      <ContainTitle
        title="Paling Terbaru"
        classname="font-bold text-primary text-xl sm:text-2xl md:text-3xl"
      />
      <div className="w-full rounded-xl bg-slate-100 border border-third">
        {lastVideos.length > 0 ? (
          <>
            <Swiper
              spaceBetween={10}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Thumbs]}
              className="mySwiperMain w-full md:max-w-5xl mx-auto"
              centeredSlides={true}
              breakpoints={{
                640: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 1
                },
                1024: {
                  slidesPerView: 1
                },
                1280: {
                  slidesPerView: 1
                }
              }}
            >
              {lastVideos.map((item) => (
                <SwiperSlide
                  key={item.id.videoId}
                  className="p-2 w-full mx-auto"
                >
                  <VideoComponent
                    embed={item.id.videoId}
                    title={item.snippet.title}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={2}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Thumbs, Navigation]}
              className="mySwiperThumbs mt-4"
              navigation={true}
              breakpoints={{
                640: {
                  slidesPerView: 3,
                  spaceBetween: 10
                },
                768: {
                  slidesPerView: 4,
                  spaceBetween: 15
                },
                1024: {
                  slidesPerView: 5,
                  spaceBetween: 10
                }
              }}
            >
              {lastVideos.map((item) => (
                <SwiperSlide key={item.id.videoId} className="p-1">
                  <Image
                    src={item.snippet.thumbnails.default.url}
                    alt={item.snippet.title}
                    width={500}
                    height={500}
                    className="aspect-auto w-full object-cover rounded-lg"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </>
        ) : (
          <h1 className="text-base text-center font-medium">
            Tunggu sebentar ye cang 😁 ....
          </h1>
        )}
      </div>
      <Button href="/youtube">Read More</Button>
    </SectionContainerBody>
  )
}
