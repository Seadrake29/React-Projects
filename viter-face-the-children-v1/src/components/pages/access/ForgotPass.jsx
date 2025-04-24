import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function ForgotPass() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [touched, setTouched] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email.trim()) {
      setError("Required");
    } else {
      setError("");
      console.log("Password reset requested for:", email);
    }
  };

  const handleBlur = () => {
    setTouched(true);
  };

  const isButtonDisabled = !email.trim();

  return (
    <section className="bg-white min-h-screen flex justify-center px-6 pt-[150px]">
      <div className="w-full max-w-2xl flex flex-col items-center justify-start">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center">
          <img
            src="/src/assets/ftc_svg_logo.svg"
            alt="Logo"
            className="w-[300px] h-[89px] mb-8"
          />

          <div className="w-full max-w-[400px] self-start">
            <h2 className="text-lg font-semibold text-[#3a3b36] uppercase mb-5">
              Forgot Password
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-[400px] text-sm"
          >
            <div className="relative w-full">
              <label
                htmlFor="email"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                className={`w-full h-[38px] border ${
                  error ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 ${
                  error
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-primary focus:border-primary"
                }`}
              />
              {touched && error && (
                <span className="absolute right-2 -bottom-5 italic text-[11px] text-red-500">
                  {error}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full ${
                isButtonDisabled
                  ? "bg-[#3e9bd0] opacity-50 cursor-not-allowed"
                  : "bg-primary hover:opacity-90"
              } text-white text-[12px] font-medium py-2 px-4 rounded-md transition`}
            >
              Submit
            </button>

            <div className="text-xs text-gray-600 -mt-3">
              <Link to="/access">
                Go back to <span className="text-primary underline">login</span>
              </Link>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
