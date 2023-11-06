import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const changeInc = () => {
    setCount(count + 1);
  };

  const changeDec = () => {
    if (count === 0) {
      setCount(0);
    } else {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <button onClick={changeInc}>➕</button>
      {count}
      <button onClick={changeDec}>➖</button>
    </div>
  );
};

export default Counter;
