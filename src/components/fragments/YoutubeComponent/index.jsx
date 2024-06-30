"use client";
import React, { useEffect, useState } from "react";
import SectionContainerBody from "@/components/layouts/SectionPage/SectionContainerBody";
import ContainTitle from "@/components/ui/ContainTitle";
import VideoComponent from "./VideoComponent";
import Button from "@/components/ui/Button";
import { fetchVideos } from "@/services/youtube-api";

export default function YoutubeComponent() {
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
    <SectionContainerBody
      classname={"border border-slate-300 my-24 flex flex-wrap justify-center"}
    >
      <ContainTitle
        title={"Video Youtube"}
        classname={"font-semibold text-primary w-full"}
      />
      <ContainTitle
        title={"Paling Terbaru"}
        classname={"font-bold text-slate-500 text-xl sm:text-2xl md:text-3xl"}
      />
      <div className="w-full rounded-xl bg-slate-100 border border-slate-500 flex flex-wrap justify-center gap-3 px-4 py-5 max-h-[600px] md:max-h-[500px] overflow-x-auto">
        {LastVideos.length > 0 ? (
          LastVideos.slice(1).map((item) => (
            <VideoComponent
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
      <Button href="/youtube">Read More</Button>
    </SectionContainerBody>
  );
}
