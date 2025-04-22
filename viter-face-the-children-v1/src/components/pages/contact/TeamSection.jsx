import React from "react";

const team = [
  {
    name: "Judea Delos Santos",
    role: "Communication & Development Staff",
    image: "./img/Contact/team-judea.webp",
    email: "judea.delossantos@thefrontline.asia",
  },

  {
    name: "Michael Gordon",
    role: "Spiritual Director",
    image: "./img/Contact/team-mike.webp",
    email: "mike.gordon@thefrontline.asia",
  },

  {
    name: "John Katigbak",
    role: "Managing Director",
    image: "./img/Contact/team-jp.webp",
    email: "john.katigbak@thefrontline.asia",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-xs uppercase text-textyellow mb-1">
          Get To Know us
        </p>
        <h3 className="text-primary mb-12 font-semibold text-3xl">
          Our Dedicated Team
        </h3>

        <div className="flex flex-wrap justify-center w-full gap-x-[65px] gap-y-4 mb-5">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center w-60"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-auto h-235 object-cover mb-[19.5px]"
              />
              <h3 className="text-[15px] font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-[11px] text-[#3a3b36] italic py-[6px]">
                {member.role}
              </p>
              <p className="text-primary text-xs">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
