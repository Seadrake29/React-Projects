import React from "react";
import ServiceCard from "./ServiceCard";
import { FaMusic, FaBook, FaBusAlt } from "react-icons/fa";
import { FaPenRuler, FaVolleyball } from "react-icons/fa6";

const CardServices = () => {
  return (
    <section className="py-16 w-full bg-white">
      <div className="max-w-[1700px] w-full mx-auto px-4 flex flex-col gap-10 items-center">
        <ServiceCard
          img="/images/services/Rectangle-54.png"
          icon={<FaBook className="text-lime w-6 h-6" />}
          title="Tutorial Services"
          description="Tutorial services are available all-year round. Parents may inquire at the admin office to avail of this extra service for their child. FCA does its best to match up students needing extra help with tutors who are passionate to help them learn and keep up with class activities."
        />
        <ServiceCard
          img="/images/services/344395932_1297849674141528_8689682475619030636_n.jpg"
          icon={<FaPenRuler className="text-lime w-6 h-6" />}
          title="Arts"
          description="Art classes at FCA are hands-on, where students learn sketching, painting with acrylics on canvas, and using other mediums of art."
        />
        <ServiceCard
          img="/images/services/342058707_1394631117970644_2705339374301266595_n.jpg"
          icon={<FaMusic className="text-lime w-6 h-6" />}
          title="Music Lessons"
          description="Music class at FCA is practical and hands-on. Currently, classes offered are basic guitar, keyboard, and drums."
        />
        <ServiceCard
          img="/images/services/341775213_154997594175952_2791910801269289787_n.jpg"
          icon={<FaVolleyball className="text-lime w-6 h-6" />}
          title="Sports"
          description="Physical Education class helps keep students physically fit and active. We incorporate a variety of sports and activities such as kickboxing, mixed martial arts, and fun activities such as hiking and camping."
        />
        <ServiceCard
          img="/images/services/Rectangle-61.png"
          icon={<FaBusAlt className="text-lime w-6 h-6" />}
          title="Transportation"
          description="We offer transportation services for students. We have two (2) buses. You can sign up for the school service by filling out a form at the front office. Monthly bus service costs are based on the distance of the student’s pickup and drop-off location from the school."
        />
      </div>
    </section>
  );
};

export default CardServices;
