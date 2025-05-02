import React from "react";

const Videos = () => {
  return (
    <section className="max-w-[1500px] mx-auto px-4 font-raleway mb-[150px]">
      <div className="text-3xl font-semibold mb-12">Videos</div>

      <div className="flex flex-wrap justify-start items-start gap-12">
        <div className="flex flex-col items-start">
          <iframe
            width="417"
            height="362"
            src="https://www.youtube.com/embed/1cJAZpLbloU?si=DUrZ_qHCmTWS7oV9"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="mt-5 text-xl font-semibold w-[417px] text-center">
            LITERARIO 2023: SING!
          </span>
        </div>

        <div className="flex flex-col items-start">
          <iframe
            width="417"
            height="362"
            src="https://www.youtube.com/embed/IfZIR11Zdn4?si=MsfuY-QKczZxUb5x"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <span className="mt-5 text-xl font-semibold w-[417px] text-center">
            Join the Frontline Family!
          </span>
        </div>
      </div>
    </section>
  );
};

export default Videos;
