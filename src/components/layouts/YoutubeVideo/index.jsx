"use client";
import React, { useEffect, useState } from "react";
import ContainerBody from "../SectionPage/ContainerBody.jsx";
import Link from "next/link";
import YoutubeComponent from "@/components/fragments/YoutubeComponent/index.jsx";
import SectionContainerBody from "../SectionPage/SectionContainerBody.jsx";
import { fetchVideos } from "@/services/youtube-api.js";
import ContainTitle from "@/components/ui/ContainTitle.jsx";

export default function YoutubeVideo() {
  const [LastVideos, setLastVideos] = useState([]);
  useEffect(() => {
    const fetchYoutubeVideo = async () => {
      await fetchVideos((items) => {
        setLastVideos(items);
      });
    };

    fetchYoutubeVideo();
  }, []);

  return (
    <ContainerBody classname={"pt-28 pb-28 px-4 md:px-10"}>
      <SectionContainerBody
        title={"Youtube Video"}
        classname={"border border-slate-300 lg:max-h-[700px]"}
      >
        <ContainTitle
          title={"video paling terbaru"}
          classname={"font-semibold text-black"}
        />
        <div className="w-full rounded-xl bg-slate-100 border border-slate-500 flex flex-wrap justify-center gap-3 px-4 py-5 max-h-[600px] md:max-h-[500px] overflow-x-auto">
          {LastVideos.length > 0 ? (
            LastVideos.slice(1).map((item) => (
              <YoutubeComponent
                key={item.id.videoId}
                embed={item.id.videoId}
                title={item.snippet.title}
              />
            ))
          ) : (
            <h1 className="text-base font-medium">
              Tunggu sebentar ye cang 😁 ....
            </h1>
          )}
        </div>
        <Link href="/profile" className="flex justify-center">
          <button className="bg-primary text-white rounded-lg p-2">
            Read More
          </button>
        </Link>
      </SectionContainerBody>
    </ContainerBody>
  );
}
