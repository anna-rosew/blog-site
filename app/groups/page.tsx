import Card from "@/components/common/NavCard";
import SectionHeading from "@/components/common/SectionHeading";
import OnlineCarousel from "@/components/ui/online/OnlineCarousel";
// import InPersonCarousel from "@/components/ui/inperson/InPersonCarousel";
// import { slides } from "@/content/retreats";
// import RetreatsOverview from "@/components/ui/retreats/RetreatsOverview";
import { groupCards } from "@/content/groups";
// import SpringCleanseSection from "@/components/ui/springcleanse/SpringCleanseSection";
// import EasterSeriesSection from "@/components/ui/online/EasterSeriesSection"; // uncomment when Rose approves
import React from "react";

const groups = () => {
  return (
    <div className="container text-center w-full">
      <h1 className="pb-5">Groups</h1>
      <p className="font-bold md:text-center">
        Come and explore how your body, mind and breath work together. Open
        yourself to new dimensions of experience and personal growth.
      </p>
      <div className="lg:my-20 my-7">
        <div className="grid grid-cols-1 gap-3 lg:grid-cols-3">
          {groupCards.map((card, index) => (
            <Card key={index} cardInfo={card} />
          ))}
        </div>
      </div>
      {/* Spring Cleanse 2026 — replaces Online and In-Person sections for this season
      <SpringCleanseSection /> */}
      {/* EASTER SERIES — uncomment when Rose approves
      <EasterSeriesSection />
      */}
      <div className="online-groups">
        <SectionHeading title="Online Groups" />
        <p className="text md:text-center md:py-10 py-4">
          Join us from anywhere in the world for live-streamed and on-demand
          sessions. Practice in the comfort of your own space while staying
          connected to our supportive community.
        </p>
        <OnlineCarousel />
      </div>
      <div className="in-person-groups mb-8">
        <SectionHeading title="In-Person Groups" />
        <p className="text md:text-center md:py-4 py-2">
          Come and join our community for intimate in-person sessions. These
          classes and workshops offer personal attention and guidance in a
          supportive space. Whether you&apos;re drawn to gentle Breathing
          Courses, energising Kundalini flow, or connecting at our post-class
          gatherings, there&apos;s something for every stage of your journey.
        </p>
        {/* <InPersonCarousel /> */}
        <p className="italic text-black/50 text-sm md:text-center py-6">
          New in-person sessions coming soon — check back shortly or{" "}
          <a href="/contact" className="underline">get in touch</a> to be notified.
        </p>
      </div>
      <div className="in-person-groups mb-8">
        <SectionHeading title="Retreats" />
        <p className="text md:text-center md:py-10 py-4">
          Step away from the everyday and immerse yourself in transformative
          experiences. Our retreats blend yoga practice, meditation, and
          community connection in carefully chosen locations. Whether for a day
          or a week, these intimate gatherings offer a chance to reset, deepen
          your practice, and forge lasting connections with fellow
          practitioners.
        </p>
        {/* <RetreatsOverview slides={slides} /> */}
        <p className="italic text-black/50 text-sm md:text-center py-6">
          Upcoming retreats will be announced here — stay tuned, or{" "}
          <a href="/contact" className="underline">drop Rose a message</a> if you&apos;d like to be first to hear.
        </p>
      </div>
    </div>
  );
};

export default groups;
