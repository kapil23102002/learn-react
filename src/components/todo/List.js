import React from "react";

const List = (props) => {
  return (
    <div>
      <li>
        {props.item}
        <button
          onClick={() => {
            props.RemoveItem(props.id);
          }}
          style={{ marginLeft: "8px" }}
        >
          ✖️
        </button>
      </li>
    </div>
  );
};

export default List;
