import React, { useState } from "react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({ email: false, password: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!email.trim()) newErrors.email = "Required";
    if (!password.trim()) newErrors.password = "Required";

    setErrors(newErrors);
    setTouched({ email: true, password: true });

    if (Object.keys(newErrors).length === 0) {
      console.log("Logging in with:", { email, password });
    }
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    setFocusedField(null);
  };

  const handleFocus = (field) => {
    setFocusedField(field);
  };

  const isFormValid = email.trim() && password.trim();
  return (
    <section className=" bg-white min-h-screen flex justify-center items-center px-6">
      <div
        className="w-full max-w-2xl flex flex-col items-center justify-center"
        style={{
          transform: "translateY(calc(clamp(5rem, 12vw, 8rem) - 15rem))",
        }}
      >
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center">
          <img
            src="/src/assets/ftc_svg_logo.svg"
            alt="Logo"
            className="w-[300px] h-[89px] mb-6"
          />

          <div className="w-full max-w-[400px] mb-2  mt-2">
            <h2 className="text-lg font-semibold text-textblack uppercase mb-4">
              Login
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
                onBlur={() => handleBlur("email")}
                onFocus={() => handleFocus("email")}
                className={`w-full h-[38px] border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 ${
                  errors.email
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-primary focus:border-primary"
                }`}
              />
              {touched.email && errors.email && (
                <span className="absolute right-2 -bottom-5 text-xs italic text-red-500">
                  {errors.email}
                </span>
              )}
            </div>

            <div className="relative w-full">
              <label
                htmlFor="password"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                onBlur={() => handleBlur("password")}
                onFocus={() => handleFocus("password")}
                className={`w-full h-[38px] border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 pr-10 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 ${
                  errors.password
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-primary focus:border-primary"
                }`}
              />
              {(focusedField === "password" || password.length > 0) && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPassword ? (
                    <FaEyeSlash size={15} />
                  ) : (
                    <FaEye size={15} />
                  )}
                </button>
              )}
              {touched.password && errors.password && (
                <span className="absolute right-2 -bottom-5 text-xs italic text-red-500">
                  {errors.password}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full h-[32px] text-white text-[11.5px] font-medium py-2 mt-2 px-4 rounded-md transition ${
                isFormValid
                  ? "bg-primary hover:opacity-90"
                  : "bg-blue-500 opacity-50 cursor-not-allowed"
              }`}
            >
              Login
            </button>

            <div className="text-xs text-gray-600">
              <p className="mb-2">
                Need an Account?{" "}
                <Link to="/register" className="text-primary underline">
                  Create an Account
                </Link>
              </p>
              <p>
                Did you forget your password?{" "}
                <Link to="/forgot-password" className="text-primary underline">
                  Forgot password
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
