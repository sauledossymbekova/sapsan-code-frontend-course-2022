import { useEffect, useState } from "react";

export const Timer = () => {
  // const [count, setCount] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Hello, World!");
    }, 3000);

    return () => clearTimeout(timer); // componentWillUnmount
  }, []);

  return (
    <>
      <div>
        <h1>Hello</h1>
        {/* <h1>{count}</h1> */}
      </div>
    </>
  );
};
