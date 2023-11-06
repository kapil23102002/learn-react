import React, { useState } from "react";

const HandleEvent = () => {
  const Colour = "purple";
  const Name = "Click me";
  const [color, setColor] = useState(Colour);
  const [name, setName] = useState(Name);

  const handleClick1 = () => {
    setColor("red");
    setName("hello Kap");
  };
  const handleClick2 = () => {
    setColor("orange");
    setName("hello Thakur");
  };
  return (
    <div>
      <button
        onClick={handleClick1}
        onDoubleClick={handleClick2}
        style={{ backgroundColor: color }}
      >
        {name}
      </button>
    </div>
  );
};

export default HandleEvent;
