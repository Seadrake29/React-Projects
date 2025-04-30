import React from "react";

const YouTubeEmbed = ({ videoId }) => {
  return (
    <div className="flex justify-center my-[200px]">
      <iframe
        width="1500"
        height="543"
        src={`https://www.youtube.com/embed/${videoId}?si=hxkvEZF9EPLL_rCT`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
};

export default YouTubeEmbed;
