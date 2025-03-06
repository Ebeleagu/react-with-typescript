import "./App.css";
import { useState } from "react";
import Image from "./Image";
import Button from "./Button";
import Counter from "./Counter";
import Api from "./Api";

function App() {
  const [num, setNum] = useState(1);
  const clickedbtn = () => {
    setNum(num + 1);

    console.log("button clicked");
    console.log(num);
  };

  const btnClicked = () => {
    setNum(num - 1);
  };
  return (
    <>
      <main>
        <div className="flex justify-around">
          <Image width="500px" height="350px" />
          <Image width="300px" height="150px" />
        </div>

        <div className="h-[30vh] flex justify-center items-center flex-col">
          <h1 className="text-4xl">{num}</h1>
          <button
            onClick={clickedbtn}
            className="bg-[blue] text-xl p-3 rounded-md mt-3"
          >
            increase
          </button>
          <button
            onClick={btnClicked}
            className="bg-[red] text-xl p-3 rounded-md mt-3"
          >
            decrease
          </button>
        </div>

        <div className="h-[30vh] justify-center items-center flex">
          <Counter begin={30} />
        </div>

        <div className="flex justify-around p-5">
          <Button btnText="signup" color="white" bg="red" />
          <Button btnText="clickme" color="white" bg="blue" />
        </div>

        <div className="">
          <Api />
        </div>
      </main>
    </>
  );
}

export default App;
