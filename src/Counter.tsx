import { useState, useEffect } from "react";

const Counter = ({ begin }) => {
  const [count, setCount] = useState(begin);

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount > 0) {
          return prevCount - 1;
        } else {
          clearInterval(interval);
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [begin]);

  return (
    <div>
      <h1 className="text-2xl text-[blue]">Counter</h1>
      <h2 className="text-4xl text-center text-[red]">{count}</h2>
    </div>
  );
};

export default Counter;
