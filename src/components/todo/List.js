import React, { useState } from "react";

const List = (props) => {
  const [line, setLine] = useState(false);

  return (
    <div>
      <li style={{ textDecoration: line ? "line-through" : "none" }}>
        {props.item}

        <button
          onClick={() => {
            props.RemoveItem(props.id);
          }}
          style={{ marginLeft: "8px" }}
        >
          ✖️
        </button>
        <button
          onClick={() => {
            setLine(!line);
          }}
          style={{ marginLeft: "8px" }}
        >
          complete
        </button>
      </li>
    </div>
  );
};

export default List;
