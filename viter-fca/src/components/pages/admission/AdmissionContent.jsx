import React from "react";
import { Link } from "react-router-dom";

const AdmissionContent = ({ selected }) => {
  const content = {
    Playschool: (
      <div>
        <h2 className="text-[23px] font-semibold mb-4">Playschool</h2>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          Playschool is for students ages 2-4. It's a play-and-learn program
          without the pressure of formal schooling. Students learn communication
          skills, personal responsibility, real-life skills, creativity, music,
          and have nature experiences as they explore plants and trees... and
          even do some planting themselves! Basic numeracy and literacy is also
          integrated – learning phonetic sounds of the letters, and learning how
          to count and work with numbers.
        </p>
        <Link to="/faqs" className="text-green-700 text-sm">
          For more information, please visit our FAQ's Page{" "}
        </Link>
        ,
        <div className="grid grid-cols-4 gap-3 my-4">
          <img
            src="/images/admission/Playschool-image-a.jpg"
            alt="Playschool 1"
          />
          <img
            src="/images/admission/playschool-image-b.jpg"
            alt="Playschool 2"
          />
          <img
            src="/images/admission/playschool-image-c.jpg"
            alt="Playschool 3"
          />
          <img
            src="/images/admission/playschool-image-d.jpg"
            alt="Playschool 4"
          />
          <div className="flex flex-col-4 gap-3 mt-20 ">
            <img src="/images/admission/PS-1.jpg" alt="Playschool 5" />
            <img src="/images/admission/PS1-1.jpg" alt="Playschool 6" />
            <img src="/images/admission/PS2-1.jpg" alt="Playschool 7" />
            <img src="/images/admission/PS3-1.jpg" alt="Playschool 8" />
          </div>
        </div>
        <button className="bg-lime text-white px-6 py-2 mt-20 rounded hover:bg-primary text-sm">
          Register for Playschool
        </button>
      </div>
    ),

    "Pre-Elementary": (
      <div>
        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Nursery</h3>
          <p className="text-sm leading-[2.3] text-justify mb-4">
            A hands-on and individualized program that incorporates basic
            learning with fun for toddlers at least three (3) years old.
            Children sing, and learn nursery rhymes and Bible verses in a
            loving, caring environment for 2-3 hours a day. Students enjoy
            learning in many learning spaces, where they can grow in
            responsibility and stewardship for themselves, others, and the
            environment.
          </p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            <img src="/images/admission/Nurs1.jpg" alt="Nursery 1" />
            <img src="/images/admission/Nurs2.jpg" alt="Nursery 2" />
            <img src="/images/admission/Nurs3.jpg" alt="Nursery 3" />
            <img src="/images/admission/Nurs4.jpg" alt="Nursery 4" />
          </div>
        </section>

        <section className="mb-6">
          <h3 className="font-semibold text-lg mb-2">Pre-Kindergarten</h3>
          <p className="text-sm leading-[2.3] text-justify mb-4">
            Pre-Kindergarten is a fun, engaging class where children learn
            real-life skills and have fun, hands-on experiences indoors and
            outdoors. This class also focuses on learning basic numeracy and
            literacy skills in an engaging environment. A child entering
            Pre-Kindergarten must meet the following requirements:
          </p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            <img src="/images/admission/PreK1.jpg" alt="Pre-K 1" />
            <img src="/images/admission/PreK2.jpg" alt="Pre-K 2" />
            <img src="/images/admission/PreK3.jpg" alt="Pre-K 3" />
            <img src="/images/admission/PreK4.jpg" alt="Pre-K 4" />
          </div>
        </section>

        <section>
          <h3 className="font-semibold text-lg mb-2">Kindergarten</h3>
          <p className="text-sm leading-[2.3] text-justify mb-4">
            Children in Kindergarten are taught to read short stories, to write,
            and are encouraged to creatively solve problems. They are honed for
            readiness to successfully enter 1st grade. A child entering
            Kindergarten must meet the following requirements:
          </p>
          <p className="mb-3">
            Must pass the readiness assessment done by Kindergarten 2
            supervisors.
          </p>
          <p className="mb-3">
            Must be 5 years old by October 31 of the current school year. (
            DepEd Order #03, s.2018, DepEd Order #47, s.2016)
          </p>
          <p className="mb-3 text-lime text-sm">
            For more information, please visit our
            <span className="text-lime font-bold"> FAQ's Page</span>
          </p>
          <div className="grid grid-cols-4 gap-2 mb-4">
            <img src="/images/admission/Kinder-1.jpg" alt="Kinder 1" />
            <img src="/images/admission/Kinder-2.jpg" alt="Kinder 2" />
            <img src="/images/admission/Kinder-3.jpg" alt="Kinder 3" />
            <img src="/images/admission/Kinder-4.jpg" alt="Kinder 4" />
          </div>
        </section>

        <button className="bg-lime text-white px-6 py-2 mt-20 rounded hover:bg-primary text-sm">
          Enroll Now
        </button>
      </div>
    ),

    Elementary: (
      <div>
        <h2 className="text-[23px] font-semibold mb-4">Elementary</h2>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          Elementary school is a special time in a child's life, where they
          embark on a journey of learning and discovery. They learn reading,
          writing, and basic math, and explore science, history, and the world
          around them. Caring teachers support their growth, and kids make
          friends and develop their creativity through fun activities like
          sports, music, and art. FCA provides a safe and nurturing environment
          where children can thrive and have fun, as well as grow in their faith
          and love for God and others.
        </p>
        <p className="mb-3 text-lime text-sm">
          For more information, please visit our
          <span className="text-lime font-bold"> FAQ's Page</span>
        </p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <img src="/images/admission/Elem-1.jpg" alt="Elementary 1" />
          <img src="/images/admission/Elem-2.jpg" alt="Elementary 2" />
          <img src="/images/admission/Elem-3.jpg" alt="Elementary 3" />
          <img
            src="/images/admission/FCA-Junior-High-Performance-1024x683-1.jpg"
            alt="Elementary 4"
            className="w-[300px] h-[200px] object-cover"
          />
        </div>
        <button className="bg-lime text-white px-6 py-2 mt-20 rounded hover:bg-primary text-sm">
          Enroll in Elementary
        </button>
      </div>
    ),

    "Junior High": (
      <div>
        <h2 className="text-[23px] font-semibold mb-4">Junior High</h2>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          Our high school program is dedicated to providing a supportive and
          nurturing environment where students can learn, grow, and thrive. Our
          curriculum is designed to help students develop the skills and
          knowledge they need to succeed in college and beyond. We believe that
          education goes beyond just academics -- that's why we place a strong
          emphasis on leadership and faith-based learning.
        </p>
        <p className="mb-4 text-sm leading-[2.3] text-justify">
          Students will learn how to set goals, and work collaboratively with
          others to achieve those goals. They'll develop communication skills,
          problem-solving abilities, and a strong sense of purpose. It is our
          desire thst students will deepen their understanding of their own
          faith and develop a moral compass that will guide them throughout
          their lives. At Frontline Christian Academy, we're committed to
          equipping our students with real-life skills, and helping them reach
          their full potential.
        </p>
        <div className="grid grid-cols-4 gap-2 mb-4">
          <img src="/images/admission/HS-1-1.jpg" alt="Junior High 1" />
          <img src="/images/admission/HS-4-1.jpg" alt="Junior High 2" />
          <img src="/images/admission/HS-5-1.jpg" alt="Junior High 3" />
          <img src="/images/admission/JHS-3.jpg" alt="Junior High 4" />
        </div>

        <div className="grid grid-cols-4 gap-2 mt-20 mb-4">
          <img src="/images/admission/H1-.jpg" alt="Junior High 1" />
          <img src="/images/admission/H2-1.jpg" alt="Junior High 2" />
          <img src="/images/admission/H3-1.jpg" alt="Junior High 3" />
          <img src="/images/admission/H4-1.jpg" alt="Junior High 4" />
        </div>
        <button className="bg-lime text-white px-6 py-2 mt-20 rounded hover:bg-primary text-sm">
          Apply for Junior High
        </button>
      </div>
    ),
  };

  return <div>{content[selected]}</div>;
};

export default AdmissionContent;
