import { FaChevronDown } from "react-icons/fa";
import React, { useState } from "react";

const playschoolFaqs = [
  {
    question: "What makes you different?",
    answer: (
      <p>
        One of our key focus areas is Social Emotional Learning (in partnership
        with a US Youth Leadership organization: “Growing Leaders”), mentoring,
        and leadership development. We believe this is something that our young
        people need, especially in such challenging and unprecedented global
        times.
        <br />
        <br />
        We also prioritize the holistic development and wellbeing of our
        students, their families, and our staff and faculty, providing periodic
        group counseling sessions for parents and students with a PRC-registered
        Guidance Counselor. We provide genuinely caring support for families,
        and host monthly Parenting Peer Groups (PPGs), which are gatherings
        (online/virtual if in-person is not possible) of small groups of parents
        to provide moral support and academic support to one another.
        <br />
        <br />
        FCA accepts students from diverse backgrounds, religions, and walks of
        life. Our primary language used for teaching and communication is the
        English language, except for the subjects of Filipino, Araling
        Panlipunan, and certain topics under Home Economics and Livelihood
        Education/Technology and Livelihood Education.
      </p>
    ),
  },
  {
    question: "What are your Core Values?",
    answer: (
      <p>
        Christ-centeredness: We regard the Bible as the highest authority on
        morality and spirituality. Our curriculum is Bible-based and our desire
        is that all who enter the doors of FCA will be impacted to become more
        Christ-like.
        <br /> <br /> Genuine Care and Love for People: The Scriptures command
        us to "...love the Lord your God with all your heart, and with all your
        soul, and with all your mind," and to “love your neighbor as yourself.”
        We genuinely love and care for each other, our students, and their
        families, our donors, partners, and all stakeholders… and desire for
        them to walk in the fullness of the promise of abundant life. This
        desire drives us to pursue exceptional customer service and high client
        satisfaction. We also genuinely love and care for our employees. We aim
        to be a fun and meaningful place to work, and to provide a conducive
        environment that encourages collaboration of all stakeholders.
        <br /> <br /> Academic excellence - We desire to produce learners who
        are academically competent, able to be globally competitive, and who are
        critical, strategic thinkers.
        <br /> <br />
        Leadership with Integrity - We desire to be a school that influences its
        people to become leaders of integrity – individuals who are honest,
        consistent, trustworthy, and governed by a moral compass.
        <br /> <br />
        Real-life skills - We believe in preparing our students for life after
        formal schooling, and inculcating in them a strong work ethic, a passion
        for excellence, and real-life skills such as communication and critical
        thinking, as well as practical knowledge for daily life.
      </p>
    ),
  },
  {
    question: "What are the fees?",
    answer: (
      <p>
        Tuition Fees for Pre-Elementary range from ₱54,000-₱55,000 <br />
        Tuition Fees for Elementary range from ₱57,000-₱58,000 <br />
        Tuition Fees for Junior Highschool range from ₱57,000-₱59,000 <br />
        Payment schemes are flexible – installment plans are available <br />
        You can contact our finance office for special arrangements or plans.{" "}
        <br />
        We accommodate online payments, bank transfers, gcash, and credit/debit
        cards via online payment links.
      </p>
    ),
  },
  {
    question: "Do you have any promotions or discounts?",
    answer: (
      <p>
        Yes, we do. Click <span className="text-lime-500"> here</span>
      </p>
    ),
  },
  {
    question: "When do classes start for SY 2024-2025?",
    answer: <p>The tentative date is August 12, 2024.</p>,
  },
];

const preElementaryFaqs = [
  {
    question: "What curriculum, books, and learning platform do you use?",
    answer: (
      <p>
        FCA follows the K-12 Curriculum of the Department of Education, and
        integrates its core values. Many of our books are shipped from the USA,
        and modules are also printed by the school. FCA does its best to not
        overload its students; the amount of work assigned is very doable, as
        long as the student can focus during class times and is given support by
        his/her family. For assigning online tasks, FCA uses Google Classroom,
        and the Google Suite for Education. Click here for a quick introduction
        and tutorial.
      </p>
    ),
  },
  {
    question: "How do you keep classes interesting and meaningful?",
    answer: (
      <p>
        We acknowledge that most of today’s students are visual learners. We
        make use of fun videos, colorful slides, and other interesting resources
        and do our best to keep students engaged. Our teachers are skilled, and
        attend regular training and seminars to keep their teaching strategies
        relevant and effective. Check out our website to see photos.
      </p>
    ),
  },
  {
    question: "Do new students need to take any entrance exams?",
    answer: (
      <p>
        Yes, and the exams depend on the student’s grade level. For
        Pre-Elementary levels, and Grades 1, 2, and 3, a basic reading and
        numeracy assessment is done by the Department supervisor. For Grades
        4-10, there are the following: Logic Exam (Can be sent and accomplished
        online) Basic Language and Math Skills (scheduled in-person or via
        1-on-1 video call) Grit Scale (Can be sent and accomplished online.
        Grades 6-10 only)
      </p>
    ),
  },
  {
    question: "Do you accept students with special needs?",
    answer: (
      <p>
        Yes, if the parent/guardian can provide a certificate, letter, or
        recommendation from the child’s behavioral psychologist that the student
        is recommended for attendance to a regular school.
      </p>
    ),
  },
  {
    question: "Do the students have to wear uniforms?",
    answer: <p>Yes, they will have to wear their uniforms</p>,
  },
  {
    question:
      "What do I need to do as a parent to prepare for this school year?",
    answer: (
      <p>
        Click <span className="text-lime"> HERE</span> to view the needed school
        supplies per level.
      </p>
    ),
  },
  {
    question: "Do you offer tutorials?",
    answer: (
      <p>
        Yes, we do. Our academic head aligns students with available tutors.
        Tutorial rate is P150.00 per hour.
      </p>
    ),
  },
  {
    question: "Do you offer transportation services?",
    answer: (
      <p>
        Yes. We have transportation services , and rates depend on the pick-up
        and drop-off locations. Click here for current SY rates. For any further
        questions, please contact us at the provided numbers or email address.
      </p>
    ),
  },
];

const elementaryFaqs = [
  {
    question: "How to apply?",
    answer: (
      <p>
        Please send your CV to hrad@fca.edu.ph. We will review, and contact you
        as soon as possible. You may still send your CV even if there are no
        current job openings. Thank you!
      </p>
    ),
  },
  {
    question: "Volunteer Opportunities?",
    answer: <p>View PDF file</p>,
  },
];

const FaqsSection = () => {
  const [selectedSection, setSelectedSection] = useState("founders");
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    if (selectedSection === "founders" && index === 0) return;
    setOpenIndex(openIndex === index ? null : index);
  };

  const renderFaqSection = (title, data) => (
    <div className="space-y-6">
      <h3 className="text-2xl font-semibold mb-4">{title}</h3>
      <div className="space-y-4">
        {data.map((item, index) => (
          <div key={index}>
            <button
              className="w-full text-left px-6 py-4 bg-gray-100 hover:bg-gray-200 focus:outline-none flex justify-between items-center rounded-lg text-lg"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lime font-semibold mr-2">Q:</span>
              <span className="flex-1 font-bold">{item.question}</span>
              <FaChevronDown
                className={`w-4 h-4 transform transition-transform duration-300 ${
                  openIndex === index ||
                  (selectedSection === "founders" && index === 0)
                    ? "-rotate-180"
                    : "rotate-0"
                }`}
              />
            </button>
            {(openIndex === index ||
              (selectedSection === "founders" && index === 0)) && (
              <div className="px-6 py-4 bg-gray-100 rounded-b-md flex items-start gap-2">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  const renderContent = () => {
    switch (selectedSection) {
      case "founders":
        return renderFaqSection("About Our School", playschoolFaqs);
      case "history":
        return renderFaqSection(
          "Excellent Learning and Facilities",
          preElementaryFaqs
        );
      case "mission":
        return renderFaqSection("Job Opportunities", elementaryFaqs);
      default:
        return null;
    }
  };

  return (
    <div className="px-4 py-12 max-w-[1500px] mx-auto font-raleway">
      <h2 className="text-[80px] font-thin text-center mb-20 mt-10">
        Frequently Asked Questions
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        {/* Sidebar */}
        <aside className="md:w-1/4">
          <ul className="space-y-4 text-gray-700">
            <li
              onClick={() => {
                setOpenIndex(null);
                setSelectedSection("founders");
              }}
              className={`text-xl cursor-pointer whitespace-nowrap ${
                selectedSection === "founders"
                  ? "text-mygreen font-medium underline"
                  : ""
              }`}
            >
              About Our School
            </li>
            <li
              onClick={() => {
                setOpenIndex(null);
                setSelectedSection("history");
              }}
              className={`text-xl cursor-pointer whitespace-nowrap ${
                selectedSection === "history"
                  ? "text-mygreen font-medium underline"
                  : ""
              }`}
            >
              Excellent Learning and Facilities
            </li>
            <li
              onClick={() => {
                setOpenIndex(null);
                setSelectedSection("mission");
              }}
              className={`text-xl cursor-pointer whitespace-nowrap ${
                selectedSection === "mission"
                  ? "text-mygreen font-medium underline"
                  : ""
              }`}
            >
              Job Opportunities
            </li>
          </ul>
        </aside>

        {/* Main Content */}
        <main className="md:w-3/4">{renderContent()}</main>
      </div>
    </div>
  );
};

export default FaqsSection;
