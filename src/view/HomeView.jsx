import Banner from "@/components/fragments/banner";
import CrewAndTalent from "@/components/layouts/CrewTalent";
import Gallery from "@/components/layouts/Gallery";
import MediaPartner from "@/components/layouts/MediaPartner";
import ProfileSection from "@/components/layouts/SectionProfile";
import YoutubeVideo from "@/components/layouts/YoutubeVideo";
import React from "react";

export default function HomeView() {
  return (
    <>
      <Banner />
      <ProfileSection />
      <CrewAndTalent />
      <YoutubeVideo />
      <Gallery />
      <MediaPartner />
    </>
  );
}
