import React, { useState, useEffect } from "react";

function Timer({ startTime, onComplete }) {
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    if (time === 0) {
      onComplete();
    } else {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [time, onComplete]);

  return <div>Time Remaining: {time} seconds</div>;
}

export default Timer;