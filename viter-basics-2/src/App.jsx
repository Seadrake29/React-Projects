import HomeButton from "./component/partials/button/HomeButton";
import React from "react";

function App() {
  const [count, setCount] = React.useState(0);
  const [color, setColor] = React.useState("#ffffff");
  const colorRef = React.useRef();

  const incrementButton = () => {
    setCount(count + 1);
    console.log("Incremented");
  };

  const decrementButton = () => {
    if (count === 0) {
      alert("Counter can't be negative.");
      return;
    }
    setCount(count - 1);
    console.log("Decremented");
  };

  const handleSubmitChangeBackgroundColor = (e) => {
    e.preventDefault();
    setColor(colorRef.current.value);
  };

  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const profile = {
    Name: "Super Idol",
    imageUrl:
      "https://i1.sndcdn.com/artworks-7f4FdbsmL4sCQuc7-0xDswA-t500x500.jpg",
    imageSize: 90,
    bio: "Super idol 的笑容 都沒你的甜  ",
  };

  return (
    <>
      <div style={{ backgroundColor: color }} className="min-h-screen">
        <div className="flex items-center justify-center flex-col py-10">
          <p className="text-xl">Counter: {count}</p>
          <h1 className="text-3xl text-red-700 font-bold underline">
            Welcome to React!!!!
          </h1>

          <div className="flex gap-4 my-4">
            <HomeButton
              buttonFunction={incrementButton}
              buttonText={"Incremented"}
            />
            <HomeButton
              buttonFunction={decrementButton}
              buttonText={"Decremented"}
            />
          </div>

          <hr className="border-1 border-black w-[90%] my-5" />

          <p className="text-xl mb-2">
            Choose a color to change background color
          </p>
          <form
            onSubmit={handleSubmitChangeBackgroundColor}
            className="flex gap-4 mb-4"
          >
            <input
              ref={colorRef}
              type="color"
              className="px-4 h-[43.2px] w-[82.25px] py-2 border-2 border-gray-200 rounded-md cursor-pointer"
            />
            <button className="border-2 py-2 px-4 rounded-md hover:bg-red-500 hover:text-white transition-all ease-in-out">
              Submit
            </button>
          </form>

          <hr className="border-1 border-black w-[90%] my-5" />

          <ul>
            {numbers.map((item, key) => (
              <li key={key}>Number: {item}</li>
            ))}
          </ul>

          <hr className="border-1 border-black w-[100%] my-5" />
          <div className="mt-10 relative w-[450px] rounded-2xl  shadow-lg bg-white">
            <div className="h-28 bg-gradient-to-r from-blue-400 to-purple-500 rounded-t-2xl"></div>

            <div className="absolute top-14 left-1/2 transform -translate-x-1/2">
              <img
                className=""
                src={profile.imageUrl}
                alt={"Photo of " + profile.Name}
                style={{ width: profile.imageSize, height: profile.imageSize }}
              />
            </div>

            <div className="pt-14 pb-6 text-center px-4">
              <h1 className="text-lg font-semibold">{profile.Name}</h1>
              <p className="text-sm text-gray-500 mt-1">{profile.bio}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
