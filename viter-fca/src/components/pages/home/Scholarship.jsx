import React from "react";

const Scholarship = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/home/scholarship.webp')",
      }}
      className="scholarship bg-orange-900 py-40 bg-cover bg-center bg-fixed z-1"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-3xl text-primary my-8">Apply for a Scholarship</h2>
        <p className="my-8 max-w-md">
          FCA's scholarship programs provide funding for qualified students.
          There are two programs: the Academic Scholarship and the Indigent
          Scholarship. Message us or visit us to find out more.
        </p>
        <div className="flex gap-2">
          <a
            className="btn bg-primary text-white w-[140px] text-center py-2 rounded"
            href="#"
          >
            Academic Scholarship
          </a>
          <a
            className="btn bg-primary text-white w-[140px] text-center py-2 rounded"
            href="#"
          >
            Indigent Scholarship
          </a>
        </div>
      </div>
    </section>
  );
};

export default Scholarship;
