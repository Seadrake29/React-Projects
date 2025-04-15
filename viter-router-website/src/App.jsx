// App.jsx
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button.Jsx";
import Card from "./components/Card";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const App = () => {
  return (
    <div className="font-sans min-h-screen flex flex-col">
      <Header />

      {/* Page content grows to push footer down */}
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-blue-100 py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Welcome to MySite</h2>
          <p className="text-gray-700 mb-6">
            A simple one-page website built with React, React Icons, and smooth
            scrolling navigation.
          </p>
          <Button>Get in Touch</Button>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-16 px-8 bg-white">
          <h3 className="text-2xl font-semibold md:text-center mb-10">
            About Us
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto md:text-center">
            <div>
              <h4 className="font-semibold mb-2">Our Story</h4>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                in dui mauris.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Our Mission</h4>
              <p className="text-gray-600 text-sm">
                Phasellus molestie magna non est bibendum non venenatis nisl
                tempor.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 px-8 bg-gray-100">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Our Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <Card
              icon={<FaGithub className="text-blue-700" />}
              title="Web Development"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<FaTwitter className="text-blue-700" />}
              title="UI/UX Design"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
            <Card
              icon={<FaLinkedin className="text-blue-700" />}
              title="Digital Marketing"
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            />
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-8 bg-blue-600 text-white">
          <h3 className="text-2xl font-semibold text-center mb-10">
            Contact Us
          </h3>
          <form className="max-w-xl mx-auto bg-white text-black p-6 rounded-lg space-y-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-2 border rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border rounded"
            />
            <textarea
              placeholder="Message"
              className="w-full p-2 border rounded h-32"
            ></textarea>
            <Button>Send Message</Button>
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default App;
