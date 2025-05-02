import React from "react";
import { FaCubes, FaChild, FaBookOpen, FaUserTie } from "react-icons/fa6";
import InfoCard from "./InfoCard";

const Banner = () => {
  return (
    <div className="relative min-h-screen text-white">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover brightness-50"
        loading="lazy"
        poster="https://fca.edu.ph/wp-content/themes/fca/img/videoPoster.jpg"
        autoPlay
        loop
        muted
      >
        <source
          src="https://fca.edu.ph/wp-content/themes/fca/img/fcaBackGroundVideo.mp4"
          type="video/mp4"
        />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>

      <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col items-center justify-center text-center p-4">
        <h1
          className="text-4xl md:text-5xl xl:text-7xl font-bold leading-tight font-serif"
          style={{ lineHeight: "2" }}
        >
          Building Faith, Character and <br /> Academic Excellence
        </h1>
        <p className="mt-4 max-w-xl text-sm md:text-base">
          We genuinely care about the holistic development of our students, and
          continue to reach for our vision of impacting the nation through the
          development of Godly steward leaders.
        </p>
        <button className="mt-6 px-8 py-3 bg-lime hover:bg-primary rounded text-white text-sm font-medium font-raleway">
          Inquire now!
        </button>
      </div>

      <div
        className="absolute left-1/2 transform -translate-x-1/2 w-full max-w-[1100px]
        mt-[1000px] lg:mt-0 lg:bottom-0 lg:translate-y-1/2
        bg-white rounded-2xl p-4 shadow-xl
        grid grid-cols-2 text-center lg:grid-cols-4 gap-2"
      >
        <InfoCard
          icon={<FaCubes />}
          title="Playschool"
          subtitle=""
          link="admission?1="
        />
        <InfoCard
          icon={<FaChild />}
          title="Pre-Elementary"
          subtitle="Nursery | Pre-Kinder | Kinder"
          link="admission?2="
        />
        <InfoCard
          icon={<FaBookOpen />}
          title="Elementary"
          subtitle="Primary | Intermediate"
          link="admission?3="
        />
        <InfoCard
          icon={<FaUserTie />}
          title="Junior High"
          subtitle="Grade 7-10"
          link="admission?4="
        />
      </div>
    </div>
  );
};

export default Banner;
