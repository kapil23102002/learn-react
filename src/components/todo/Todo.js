import React, { useState } from "react";

const Todo = () => {
  const [inputItem, setInputItem] = useState();
  const [items, setItems] = useState([]);

  const inputChange = (e) => {
    setInputItem(e.target.value);
  };

  const handleClick = () => {
    setItems((oldItem) => {
      return [...oldItem, inputItem];
    });
  };
  return (
    <div>
      <h1>🛒 ToDo List 🛒</h1>
      <input
        type="text"
        placeholder="Enter your Product Name"
        onChange={inputChange}
      />
      <button onClick={handleClick} style={{ marginLeft: "8px" }}>
        ➕
      </button>
      <div>
        {items.map((item) => {
          return <li>{item}</li>;
        })}
        {/* <ol>
          <li>{inputItem}</li>
        </ol> */}
      </div>
    </div>
  );
};

export default Todo;
