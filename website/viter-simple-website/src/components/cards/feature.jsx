import React from "react";

const FeatureCards = ({ features }) => {
  return (
    <div className="flex gap-5 m-5 p-10">
      {features.map((feature, index) => (
        <div key={index} className="shadow-lg p-5 w-full rounded-lg">
          <h2 className="font-bold mb-2">{feature.title}</h2>
          <p className="pb-2">{feature.text}</p>
        </div>
      ))}
    </div>
  );
};

export default FeatureCards;
