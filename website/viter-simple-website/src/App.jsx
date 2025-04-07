import { useState } from "react";
import React from "react";
import FeatureCards from "./components/cards/feature.jsx"; // Ensure path is correct

function App() {
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  const features = [
    {
      title: "Feature One",
      text: "This is a description of the feature of this website.",
    },
    {
      title: "Feature Two",
      text: "This is a description of another feature of this website.",
    },
  ];

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <header>
          <div className="bg-blue-500 text-white font-bold text-2xl p-4">
            <h1>My Simple Website</h1>
          </div>
        </header>

        <main className="flex-grow">
          <div className="m-5 p-10">
            <h2 className="font-semibold text-xl">Welcome to My Site</h2>
            <p className="font-normal my-5">
              This is a simple one-page website built with React and Tailwind
              CSS.
            </p>
          </div>
          <div className="m-5 p-10">
            <div className="bg-gray-100 p-4 rounded-lg">
              <h2 className="mb-2 font-semibold">Interactive Button</h2>
              <p>You've clicked the button {count} times</p>
              <button
                onClick={handleClick}
                className="bg-green-500 text-white py-3 px-4 rounded-lg mt-2"
              >
                Click Me
              </button>
            </div>
          </div>
          <FeatureCards features={features} />
        </main>

        <footer className="bg-blue-950 p-10 text-center text-white text-lg">
          <p>&copy; 2025 My simple Website. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
