"use client"
import React, { useEffect, useRef } from "react"
import ContainTitle from "@/components/ui/ContainTitle"
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody"
import { Swiper, SwiperSlide } from "swiper/react"
import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay
} from "swiper/modules"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import CardTalent from "../Card/CardTalent"

export default function CrewTalentComponent() {
  const swiperRef = useRef(null)
  const progressCircle = useRef(null)
  const onAutoplayTimeLeft = (s, time, progress) => {
    if (progressCircle.current) {
      progressCircle.current.style.setProperty("--progress", 1 - progress)
    }
    // Update progress content inside progress circle
    if (progressCircle.current && progressCircle.current.firstChild) {
      progressCircle.current.firstChild.textContent = `${Math.ceil(time / 1000)}s`
    }
  }

  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper) {
      const swiperInstance = swiperRef.current.swiper
      swiperInstance.update()
    }
  }, [])

  return (
    <div className="w-full bg-primary py-24">
      <SectionContainerBody classname="bg-background-color overflow-hidden">
        <ContainTitle
          title="Crew & Talent"
          classname="text-white bg-primary rounded-md w-full"
        />
        <div className="container py-12 relative">
          <Swiper
            ref={swiperRef}
            modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false
            }}
            // pagination={{
            //   el: ".swiper-pagination",
            //   clickable: true
            // }}
            pagination={{
              type: "bullets",
              clickable: true
            }}
            // navigation={true}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 0.2
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30
              }
            }}
          >
            {[...Array(7)].map((_, index) => (
              <SwiperSlide key={index} className="p-2">
                <div className="flex items-center justify-center">
                  <CardTalent
                    src="/images/crew1.png"
                    alt="SUTRADARA DAN PENULIS CERITA"
                    role="SUTRADARA DAN PENULIS CERITA"
                    name="Sofwan Amin"
                    description=" Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia, tempora ducimus reiciendis ea, saepe, dolor eligendi voluptatum deleniti modi omnis placeat laborum. Vel mollitia neque blanditiis, molestiae, architecto maiores, ipsa optio illum id enim soluta. Aspernatur voluptatibus repellendus rerum maiores mollitia nobis. Nostrum iste, ab necessitatibus dicta error quidem laudantium, veritatis facilis, vel totam ea repellat architecto ipsum temporibus aliquam molestiae magni sunt provident doloremque adipisci maxime. Repudiandae magni perspiciatis libero! Numquam voluptas eos doloremque perspiciatis minus aspernatur minima, quam tempora error, at non saepe sequi cumque velit cum esse necessitatibus suscipit labore! Inventore assumenda esse fuga voluptate minus, laudantium iure distinctio corrupti maxime consequatur suscipit soluta perferendis architecto modi commodi repellendus exercitationem corporis rerum eaque doloribus fugit nesciunt, similique adipisci consequuntur. Voluptates dolor quod sint inventore voluptas adipisci commodi vero maiores, blanditiis, ex ullam molestiae nihil porro provident similique nesciunt, cupiditate aut aliquam quaerat temporibus est? Adipisci, officia quam."
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <div
            className="progress-circle absolute bottom-4 right-4 flex items-center justify-center"
            ref={progressCircle}
          >
            <div className="progress-content text-white"></div>
          </div> */}
        </div>
      </SectionContainerBody>
    </div>
  )
}
