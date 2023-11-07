import React, { useState } from "react";

const MyAccordion = (props) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div>
        <h3>
          <button
            onClick={() => {
              setShow(!show);
            }}
          >
            {show ? "➖" : "➕"}
          </button>
          {props.que.question}
        </h3>
      </div>
      {show && <p> {props.que.answer}</p>}
    </>
  );
};

export default MyAccordion;
