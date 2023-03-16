import { useEffect, useState } from "react";

export const Clock = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <>
      <div>
        <h1>{time}</h1>
      </div>
    </>
  );
};
