import React from "react";

const Regular = () => {
  return (
    <section className="w-full bg-white py-16 font-raleway">
      <h2 className="text-5xl text-center font-light mb-16">Services</h2>

      <div className="max-w-[1700px] mx-auto w-full">
        <div className="flex flex-col md:flex-row items-stretch justify-between pl-10">
          {/* LEFT TEXT SECTION */}
          <div className="w-full md:w-[55%] text-justify text-gray-800 text-base leading-relaxed">
            <div className="max-w-full">
              <h3 className="text-2xl font-semibold mb-6">
                Regular Instructional Services:
              </h3>
              <p className="mb-6">
                FCA offers instructional and educational services throughout the
                school year, which is currently from August to June. The
                curriculum followed is the K-12 Basic Education Curriculum,
                utilizing textbooks from the USA, as well as those from local
                Philippine publishers. FCA focuses on building academic
                excellence and character, believing that the kind of people our
                children become is more important than how academically smart
                they are.
              </p>
              <p className="mb-6">
                One of our key focus areas is Social Emotional Learning (in
                partnership with a US Youth Leadership organization: “Growing
                Leaders”), mentoring, and leadership development. We believe
                this is something that our young people need, especially in such
                challenging and unprecedented global times. We prioritize the
                holistic development and wellbeing of our students, their
                families, and our staff and faculty, providing periodic group
                counseling sessions for parents and students with a
                PRC-registered Guidance Counselor.
              </p>
              <p>
                We provide parent support through our regular Parenting Peer
                Groups, which are bi-monthly gatherings (online/virtual if
                in-person is not possible) of small groups of parents to provide
                moral and academic support to one another. FCA accepts students
                from diverse backgrounds, religions, and walks of life. Our
                primary language used for teaching and communication is the
                English language, except for the subjects of Filipino, Araling
                Panlipunan, and certain topics under Home Economics and
                Livelihood Education/Technology and Livelihood Education.
              </p>
            </div>
          </div>

          {/* RIGHT IMAGE SECTION */}
          <div className="w-full md:w-[45%] flex items-stretch justify-center mt-16 md:mt-16">
            <img
              src="/images/services/girl-sitting-classroom-raising-hands-Small.jpg"
              alt="Teacher presenting in classroom"
              className="w-[600px] h-[425px] object-cover shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Regular;
