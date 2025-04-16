import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button.jsx";
import Card from "./components/Card";
import { heroContent, aboutSections, services } from "./components/Data.jsx";

const App = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow ">
        {/* Hero Section */}
        <section className="bg-blue-100 py-20 text-center mt-10">
          <h2 className="text-3xl font-bold mb-4">{heroContent.title}</h2>
          <p className="text-gray-700 mb-6">{heroContent.description}</p>
          <Button>{heroContent.buttonText}</Button>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-8 bg-white">
          <h3 className="text-2xl font-semibold md:text-center mb-10">
            About Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto md:text-left">
            {aboutSections.map((section, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-2">{section.heading}</h4>
                <p className="text-gray-600 text-sm">{section.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-8 bg-blue-100">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <Card
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </section>

        {/* Contact Section  */}
        <section id="contact" className="py-16 px-8 bg-blue-600 text-white">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Contact Us
          </h3>
          <form className="max-w-xl mx-auto bg-white text-black p-6 rounded-lg space-y-4">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                id="name"
                type="text"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-2 border rounded h-32"
              ></textarea>
            </div>
            <Button>Send Message</Button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
