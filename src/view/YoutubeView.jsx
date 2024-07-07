"use client"
import React, { useEffect, useState } from "react"
import ContainerBody from "@/components/layouts/SectionPage/ContainerBody.jsx"
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody"
import Button from "@/components/ui/Button"
import CardVideo from "@/components/ui/CardVideo"
import ContainTitle from "@/components/ui/ContainTitle"
import { getVideos, getSingleVideo } from "@/services/youtube-api"

export default function YoutubeView() {
  const [videos, setVideos] = useState([])
  const [lastVideo, setLastVideo] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredVideos, setFilteredVideos] = useState([])

  // mengambil data semua video terakhir dari API atau localStorage
  useEffect(() => {
    const fetchVideos = async () => {
      const storedVideos = localStorage.getItem("LastVideos")
      if (storedVideos) {
        setVideos(JSON.parse(storedVideos))
      } else {
        const items = await getVideos()
        setVideos(items)
        localStorage.setItem("videos", JSON.stringify(items))
      }
    }
    fetchVideos()
  }, [])
  console.log(videos)
  // mengambil data single video dari API atau localStorage
  useEffect(() => {
    const fetchSingleVideo = async () => {
      const storedSingleVideo = localStorage.getItem("singleVideo")
      if (storedSingleVideo) {
        setLastVideo(JSON.parse(storedSingleVideo))
      } else {
        const items = await getSingleVideo()
        setLastVideo(items)
        localStorage.setItem("singleVideo", JSON.stringify(items))
      }
    }
    fetchSingleVideo()
  }, [])

  // console.log(lastVideo)
  const handleSearch = (e) => {
    e.preventDefault()
    const search = e.target.value.toLowerCase()
    setSearchTerm(search)
    const filtered = videos.filter((item) =>
      item.snippet.title.toLowerCase().includes(search)
    )
    setFilteredVideos(filtered)
  }

  return (
    <>
      <ContainerBody classname={"mx-auto"}>
        <SectionContainerBody classname={"py-16m mt-10 lg:mt-12"}>
          <div className="md:flex md:items-center md:justify-evenly gap-3 py-5">
            <div className="md:w-1/2 lg:w-1/2 aspect-video md:aspect-[16/14] lg:aspect-[16/9]">
              {lastVideo.length > 0 ? (
                lastVideo.map((item) => (
                  <CardVideo
                    key={item.id.videoId}
                    embed={item.id.videoId}
                    title={item.snippet.title}
                  />
                ))
              ) : (
                <div className="container h-full flex items-center justify-center border border-slate-500">
                  <p>loading....</p>
                </div>
              )}
            </div>
            <div className="w-full md:w-1/2 lg:max-w-md">
              <ContainTitle
                title={"Video Terbaru"}
                classname={
                  "text-white text-xl sm:text-xl md:text-2xl text-center bg-red-700"
                }
              />
              <div className="mb-3 max-h-72 grid place-content-center overflow-hidden">
                {lastVideo.length > 0
                  ? lastVideo.map((item) => (
                      <React.Fragment key={item.id.videoId}>
                        <p className="px-4 py-2 text-base tracking-widest font-semibold">
                          <span className="text-red-600 font-bold">Title:</span>{" "}
                          {item.snippet.title || "Tidak ada title"}
                        </p>
                        <p className="px-4 py-2 text-base tracking-widest">
                          <span className="text-red-600 font-bold">
                            Deskripsi:
                          </span>{" "}
                          {item.snippet.description
                            ? item.snippet.description.length > 100
                              ? item.snippet.description.substring(0, 100) +
                                "..."
                              : item.snippet.description
                            : "Tidak ada deskripsi untuk video ini."}
                        </p>
                      </React.Fragment>
                    ))
                  : null}
              </div>
              <div className="flex gap-4 px-4">
                <Button
                  href="https://youtube.com/@andaratventertainment?si=RzIvFf7v8_BNhspE"
                  classname={"bg-red-700 hover:bg-red-600"}
                  target={"_blank"}
                >
                  Youtube Channel
                </Button>
              </div>
            </div>
          </div>

          <div className="container mt-4">
            <ContainTitle
              title={"Video Kami"}
              classname={"text-white bg-red-700 rounded-md"}
            />
            <div className="flex items-center gap-2 mb-3 md:px-4 md:py-2">
              <p htmlFor="search" className="px-2 py-1">
                Search
              </p>
              <input
                type="text"
                className="h-7 min-w-md rounded-lg bg-slate-100 pl-2"
                value={searchTerm}
                onChange={handleSearch}
              />
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 lg:gap-4">
              {searchTerm && filteredVideos.length > 0 ? (
                filteredVideos.map((item) => (
                  <CardVideo
                    key={item.id.videoId}
                    embed={item.id.videoId}
                    classname={"sm:max-w-xs  md:max-w-md"}
                    title={item.snippet.title}
                  />
                ))
              ) : !searchTerm && videos.length > 0 ? (
                videos.map((item) => (
                  <CardVideo
                    key={item.id.videoId}
                    embed={item.id.videoId}
                    classname={"sm:max-w-xs  md:max-w-md"}
                    title={item.snippet.title}
                  />
                ))
              ) : (
                <div className="flex items-center justify-center w-full h-full">
                  <p className="text-sm">Video Tidak Ditemukan</p>
                </div>
              )}
            </div>
          </div>
        </SectionContainerBody>
      </ContainerBody>
    </>
  )
}
