import React from "react";

const AboutContent = ({ selected }) => {
  const content = {
    "The Founders": (
      <div>
        <h2 className="text-[23px] font-semibold mb-4">The Founders</h2>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          Jeffrey Pessina was born in Illinois, USA, and is one of ten children.
          At the age of twenty, after a long period of drug addiction and
          alcohol abuse, God changed his life. Five weeks after his decision to
          become a Christ-follower, he left for the Philippines to serve as a
          missionary. He met his wife, Rowena Pessina, in 1983. They married in
          1986 and have four grown children. In 1987 they incorporated the
          Philippine Frontline Ministries, Inc (PFM), an evangelistic team
          ministry that was then fully mobile, and traveled throughout the
          nation sharing the good news of Christ Jesus. In 2000, PFM moved to
          establish a mission center in San Pablo City, Laguna and branched out
          into other initiatives. Frontline now oversees a growing multi-site
          church (Frontline Worship Center), a program to protect and develop
          abandoned and abused children (Face the Children), a Christian school
          (Frontline Christian Academy, Inc.), and is involved in compassionate
          ministries to change the lives of the marginalized poor through social
          enterprise businesses and livelihood programs.
        </p>
        <div className="flex gap-4">
          <img
            src={`/images/about/the-Founder.jpg`}
            alt="The Founders"
            className="w-1/3 rounded-sm"
          />
          <img
            src={`/images/about/founders2-2.jpg`}
            alt="Children"
            className="w-1/3 rounded-sm"
          />
        </div>
      </div>
    ),
    "The History of FCA": (
      <div>
        <h2 className="text-[23px] font-semibold mb-4">The History of FCA</h2>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          Frontline Christian Academy, Inc. (FCA) began initially as a home
          school for the staff children of the Philippine Frontline Ministries,
          Inc., (PFM). Later PFM decided to pursue solutions for abandoned and
          abused street children, and established a child care initiative named
          Face the Children (FTC). In line with this initiative, the strategic
          scope of FCA was expanded to meet the educational needs of the
          children being cared for under the FTC program.
        </p>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          What had started in 2003 with 17 students in a doublewide
          air-conditioned trailer, located in a small compound in Brgy. San
          Francisco, San Pablo City, quickly expanded. In 2007, FCA was moved to
          a more suitable, larger venue, in the same barangay. FCA was
          officially incorporated as a non-stock, non-profit educational
          institution in July 2009, and obtained the necessary permits from the
          Department of Education in 2011. FCA refers to 2009 as its official
          "first year."
        </p>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          FCA moved to its permanent location in Baloc Rd., Brgy. San Ignacio,
          in year 2020.
        </p>
        <div className="flex gap-4">
          <img
            src={`/images/services/Rectangle-61.png`}
            alt="FCA History 1"
            className="w-1/3 rounded-sm"
          />
          <img
            src={`/images/about/Rectangle-55.png`}
            alt="FCA History 2"
            className="w-1/3 rounded-sm"
          />
        </div>
      </div>
    ),
    "Mission & Vision": (
      <div>
        <h2 className="text-[23px] font-semibold mb-4">Mission</h2>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          To facilitate holistic and caring Christian education that develops
          learners in godly character and academic ability, while creating
          positive social impact and being a fun, meaningful place to work.
        </p>
        <h2 className="text-[23px] font-semibold mb-4">Vision</h2>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          Frontline Christian Academy will create lasting local and national
          impact through the development of Godly steward leaders.
        </p>
      </div>
    ),
    "Core Values": (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-justify">
        {/* Left Column */}
        <div>
          <h2 className="text-[23px] font-semibold mb-4">
            Christ-centeredness
          </h2>
          <p className="mb-6 text-sm leading-[2.3]">
            We regard the Bible as the highest authority on morality and
            spirituality. Our curriculum is Bible-based and our desire is that
            all who enter the doors of FCA will be impacted to become more
            Christ-like.
          </p>

          <h2 className="text-[23px] font-semibold mb-4">
            Genuine Care and Love for People
          </h2>
          <p className="mb-6 text-sm leading-[2.3]">
            The most important commandment of the Scriptures is “You shall love
            the Lord your God with all your heart, and with all your soul, and
            with all your mind,” and “‘You shall love your neighbor as
            yourself.” We genuinely love and care for each other, our students,
            and their families, our donors, partners, and all stakeholders… and
            desire for them to walk in the fullness of the promise of abundant
            life. This desire drives us to pursue exceptional customer service
            and high client satisfaction. We also genuinely love and care for
            our employees, and aim to be a fun and meaningful place to work, and
            to provide a conducive environment that encourages collaboration of
            all stakeholders.
          </p>
        </div>

        {/* Right Column */}
        <div>
          <h2 className="text-[23px] font-semibold mb-4">
            Academic excellence
          </h2>
          <p className="mb-6 text-sm leading-[2.3]">
            We desire to produce learners who are academically competent, able
            to be globally competitive, and who are critical, strategic
            thinkers.
          </p>

          <h2 className="text-[23px] font-semibold mb-4">
            Leadership with Integrity
          </h2>
          <p className="mb-6 text-sm leading-[2.3]">
            We desire to be a school that influences its people to become
            leaders of integrity – individuals who are honest, consistent,
            trustworthy, and governed by a moral compass.
          </p>

          <h2 className="text-[23px] font-semibold mb-4">Real-life Skills</h2>
          <p className="mb-6 text-sm leading-[2.3]">
            We believe in preparing our students for life after formal
            schooling, and inculcating in them a strong work ethic, a passion
            for excellence, and real-life skills such as communication and
            critical thinking, as well as practical knowledge for daily life.
          </p>
        </div>
      </div>
    ),
  };

  return <div>{content[selected]}</div>;
};

export default AboutContent;
