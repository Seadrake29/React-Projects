import React from "react";

const Location = () => {
  return (
    <section className="w-full  px-4 md:px-0 flex flex-col items-center">
      <section className="w-full">
        <iframe
          className="w-full h-[500px] border-0"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=frontline%20christian%20academy&t=&z=13&ie=UTF8&iwloc=&output=embed"
          allowFullScreen
          title="Google Map - Frontline Christian Academy"
        ></iframe>
      </section>
    </section>
  );
};

export default Location;
