import React, { useState } from "react";
import { Link } from "react-router-dom";
import Select, { components } from "react-select";
import countryList from "react-select-country-list";

export default function CreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    state: "",
    country: null,
    zip: "",
  });

  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const countries = countryList().getData();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCountryChange = (value) => {
    setFormData((prev) => ({ ...prev, country: value }));
  };

  const handleBlur = (field) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const value =
      field === "country" ? formData.country?.value : formData[field];
    if (!value || !value.trim()) {
      setErrors((prev) => ({ ...prev, [field]: "Required" }));
    } else {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[field];
        return newErrors;
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach((field) => {
      const value =
        field === "country" ? formData[field]?.value : formData[field];
      if (!value || !value.trim()) {
        newErrors[field] = "Required";
      }
    });
    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      console.log("Submitting:", formData);
    }
  };

  const isButtonDisabled = Object.entries(formData).some(([key, value]) =>
    key === "country" ? !value : value.trim() === ""
  );

  const customComponents = {
    DropdownIndicator: () => null,
    IndicatorSeparator: () => null,
  };

  return (
    <section className="bg-white min-h-screen flex justify-center px-6 pt-[60px]">
      <div className="w-full max-w-2xl flex flex-col items-center justify-start">
        <div className="w-full md:w-3/4 lg:w-1/2 flex flex-col items-center">
          <img
            src="/src/assets/ftc_svg_logo.svg"
            alt="Logo"
            className="w-[300px] h-[89px] mb-6"
          />

          <div className="w-full max-w-[400px] mb-2 mt-2">
            <h2 className="text-lg font-semibold text-textblack mb-4">
              Create a Donor Account
            </h2>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-6 w-full max-w-[400px] text-sm"
          >
            {[
              { label: "Name", name: "name", type: "text" },
              { label: "Email", name: "email", type: "email" },
              { label: "Address", name: "address", type: "textarea" },
              { label: "City", name: "city", type: "text" },
              { label: "State/Province", name: "state", type: "text" },
            ].map(({ label, name, type }) => (
              <div key={name} className="relative w-full">
                <label
                  htmlFor={name}
                  className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
                >
                  {label}
                </label>
                {type === "textarea" ? (
                  <textarea
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    onBlur={() => handleBlur(name)}
                    className={`w-full h-[100px] border ${
                      errors[name] ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 ${
                      errors[name]
                        ? "focus:ring-red-500 focus:border-red-500"
                        : "focus:ring-primary focus:border-primary"
                    }`}
                  />
                ) : (
                  <input
                    type={type}
                    id={name}
                    name={name}
                    value={formData[name]}
                    onChange={handleChange}
                    onBlur={() => handleBlur(name)}
                    className={`w-full h-[38px] border ${
                      errors[name] ? "border-red-500" : "border-gray-300"
                    } rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 ${
                      errors[name]
                        ? "focus:ring-red-500 focus:border-red-500"
                        : "focus:ring-primary focus:border-primary"
                    }`}
                  />
                )}
                {touched[name] && errors[name] && (
                  <span className="absolute right-2 -bottom-5 text-xs italic text-red-500">
                    {errors[name]}
                  </span>
                )}
              </div>
            ))}

            <div className="relative w-full z-10">
              <label
                htmlFor="country"
                className="absolute left-2 top-2 bg-white px-1 text-xs text-primary z-20"
              >
                Country
              </label>
              <Select
                id="country"
                name="country"
                options={countries}
                value={formData.country}
                onChange={handleCountryChange}
                onBlur={() => handleBlur("country")}
                placeholder=""
                menuPlacement="bottom"
                menuPortalTarget={document.body}
                menuPosition="fixed"
                className="pt-4"
                classNamePrefix="react-select"
                components={customComponents}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    borderColor: errors.country ? "red" : "#d1d5db",
                    boxShadow: state.isFocused
                      ? errors.country
                        ? "0 0 0 1px red"
                        : "0 0 0 1px #3b82f6"
                      : "none",
                    "&:hover": {
                      borderColor: errors.country ? "red" : "#a1a1aa",
                    },
                    height: "38px",
                    minHeight: "38px",
                  }),
                  menuPortal: (base) => ({
                    ...base,
                    zIndex: 9999,
                  }),
                }}
              />
              {touched.country && errors.country && (
                <span className="absolute right-2 -bottom-5 text-xs italic text-red-500">
                  {errors.country}
                </span>
              )}
            </div>

            <div className="relative w-full">
              <label
                htmlFor="zip"
                className="absolute left-2 -top-2 bg-white px-1 text-xs text-primary z-10"
              >
                Zip Code
              </label>
              <input
                type="text"
                id="zip"
                name="zip"
                value={formData.zip}
                onChange={handleChange}
                onBlur={() => handleBlur("zip")}
                className={`w-full h-[38px] border ${
                  errors.zip ? "border-red-500" : "border-gray-300"
                } rounded-lg px-3 pt-4 pb-2 text-sm focus:outline-none focus:ring-1 ${
                  errors.zip
                    ? "focus:ring-red-500 focus:border-red-500"
                    : "focus:ring-primary focus:border-primary"
                }`}
              />
              {touched.zip && errors.zip && (
                <span className="absolute right-2 -bottom-5 text-xs italic text-red-500">
                  {errors.zip}
                </span>
              )}
            </div>

            <button
              type="submit"
              disabled={isButtonDisabled}
              className={`w-full h-[32px] ${
                isButtonDisabled
                  ? "bg-[#3e9bd0] opacity-50 cursor-not-allowed"
                  : "bg-primary hover:opacity-90"
              } text-white text-[11.5px] font-medium py-2 mt-2 px-4 rounded-md transition`}
            >
              Register
            </button>

            <div className="text-xs text-gray-600 left">
              <p>
                <Link to="/access">
                  Back to <span className="text-primary underline">login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
