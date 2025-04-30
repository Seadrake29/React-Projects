import React from "react";

const PartnerLogo = ({ href, src, alt }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center"
    >
      <img
        loading="lazy"
        src={src}
        alt={alt}
        className="w-[140px] sm:w-[160px] md:w-[180px] object-cover py-2"
      />
    </a>
  );
};

const PartnersSection = () => {
  return (
    <section className="partners py-16">
      <div className="container mx-auto px-4">
        {/* Main logos */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-1 sm:gap-2 items-center justify-items-center">
          <PartnerLogo
            href="https://frontlinebusiness.com.ph/"
            src="/images/home/logo/logo-fbs.png"
            alt="Frontline Business Solutions"
          />
          <PartnerLogo
            href="https://www.thefrontline.asia/"
            src="/images/home/logo/logo-pfm.jpg"
            alt="The Frontline Asia"
          />
          <PartnerLogo
            href="https://frontlinethreadworks.ph/"
            src="/images/home/logo/threadworks-logo-blck.svg"
            alt="Frontline Threadworks"
          />
          <PartnerLogo
            href="https://facethechildren.org/"
            src="/images/home/logo/309252522_139138885504134_735373576036705840_n.jpg"
            alt="Face the Children"
          />
          <PartnerLogo
            href="https://frontlineworshipcenter.org/"
            src="/images/home/logo/logo.png"
            alt="Frontline Worship Center"
          />
          <PartnerLogo
            href="https://growingleaders.com/"
            src="/images/home/logo/logo-margin2.png"
            alt="Growing Leaders"
          />
        </div>

        {/* Last two logos - very close together */}
        <div className="flex flex-wrap justify-center items-center gap-[250px] mt-6">
          <PartnerLogo
            href="https://www.abeka.com/"
            src="https://fca.edu.ph/wp-content/uploads/2023/08/logo.svg"
            alt="Abeka"
          />
          <PartnerLogo
            href="https://www.christianliberty.com/"
            src="https://fca.edu.ph/wp-content/uploads/2023/08/newlogo_1573159257__98369.webp"
            alt="Christian Liberty"
          />
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;
