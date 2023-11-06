import React, { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [fullName, setFullName] = useState(name);
  const changeHandle = (e) => {
    const name = e.target.value;
    setName(name);
  };
  const onSumbit = () => {
    setFullName(name);
  };

  return (
    <div>
      <h3>Welcome {fullName}</h3>
      <input
        type="text"
        onChange={changeHandle}
        placeholder="Enter Your name"
        value={name}
      ></input>
      <button style={{ marginLeft: "8px" }} onClick={onSumbit}>
        submit
      </button>
    </div>
  );
};

export default Form;
