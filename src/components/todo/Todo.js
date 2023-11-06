import React, { useState } from "react";
import List from "./List";

const Todo = () => {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  const inputChange = (e) => {
    setInputItem(e.target.value);
  };

  const handleClick = (e) => {
    setItems((oldItem) => {
      return [...oldItem, inputItem];
    });
    setInputItem("");
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
          return <List item={item} />;
        })}
      </div>
    </div>
  );
};

export default Todo;
