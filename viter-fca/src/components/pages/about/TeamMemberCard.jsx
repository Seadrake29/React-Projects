import React from "react";

const TeamMemberCard = ({ imageSrc, name, title }) => {
  return (
    <div className="theItem mb-12 w-[300px] h-[364px] mx-auto font-raleway">
      <div className="theTeamPhoto relative overflow-hidden h-[300px] group">
        <div className="absolute z-0 bottom-0 left-0 w-full h-[80%] bg-[url('https://fca.edu.ph/wp-content/uploads/2023/12/fca-logo.png')] bg-no-repeat bg-center bg-[length:90%] opacity-10 group-hover:opacity-50 group-hover:bg-[length:85%] transition-all duration-500"></div>

        <img
          src={imageSrc}
          alt={name}
          className="mainImage z-10 w-full h-[280px] object-contain object-top absolute top-[20%] left-0 transition-all ease-in-out duration-500 scale-[1.5] group-hover:scale-[1.6] group-hover:top-[25%]"
        />
      </div>
      <div className="theTeamName mt-4 text-center">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
