import React, { useState } from "react";
import List from "./List";

const Todo = () => {
  const [inputItem, setInputItem] = useState("");
  const [items, setItems] = useState([]);

  const inputChange = (e) => {
    setInputItem(e.target.value);
  };

  const handleClick = () => {
    setItems((oldItem) => {
      return [...oldItem, inputItem];
    });
    setInputItem("");
  };

  const RemoveItem = (id) => {
    setItems((oldItem) => {
      return oldItem.filter((arrEle, index) => {
        return index !== id;
      });
    });
  };

  return (
    <div>
      <h1>🛒 ToDo List 🛒</h1>
      <input
        type="text"
        placeholder="Enter your Product Name"
        value={inputItem}
        onChange={inputChange}
      />
      <button onClick={handleClick} style={{ marginLeft: "8px" }}>
        ➕
      </button>
      <div>
        {items.map((item, index) => {
          return (
            <List item={item} key={index} id={index} RemoveItem={RemoveItem} />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
