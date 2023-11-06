import React, { useState } from "react";

const Clock = () => {
  const curTime = new Date().toLocaleTimeString();
  const [time, setTime] = useState(curTime);

  const updateTime = () => {
    const curTime = new Date().toLocaleTimeString();
    setTime(curTime);
  };

  setInterval(updateTime, 1000);
  return (
    <div>
      <h1>⌚ Current Time ⌚</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default Clock;
