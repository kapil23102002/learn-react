import React, { useState } from "react";

const List = (props) => {
  const [line, setLine] = useState(false);

  const cutIt = () => {
    setLine(true);
  };
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
        <button onClick={cutIt} style={{ marginLeft: "8px" }}>
          complete
        </button>
      </li>
    </div>
  );
};

export default List;
