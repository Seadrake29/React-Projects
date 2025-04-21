import React from "react";

const team = [
  {
    name: "Judea Delos Santos",
    role: "Communication & Development Staff",
    image: "https://facethechildren.org/images/website/team-judea.webp",
    email: "judea.delossantos@thefrontline.asia",
  },

  {
    name: "Michael Gordon",
    role: "Spiritual Director",
    image: "https://facethechildren.org/images/website/team-mike.webp",
    email: "mike.gordon@thefrontline.asia",
  },

  {
    name: "John Katigbak",
    role: "Managing Director",
    image: "https://facethechildren.org/images/website/team-jp.webp",
    email: "john.katigbak@thefrontline.asia",
  },
];

const TeamSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <p className="text-sm sm:text-xs text-textyellow mb-1">
          Get To Know us
        </p>
        <h3 className="text-primary mb-12 font-semi-bold text-3xl">
          Our Dedicated Team
        </h3>

        <div className="flex flex-wrap justify-center gap-x-4 gap-y-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center w-60"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-40 h-40 object-cover mb-3"
              />
              <h3 className="text-xl font-semibold text-primary">
                {member.name}
              </h3>
              <p className="text-xs italic">{member.role}</p>
              <p className="text-primary text-xs">{member.email}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
