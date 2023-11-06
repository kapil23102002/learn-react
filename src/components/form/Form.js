import React, { useState } from "react";

const Form = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
    email: "",
  });
  const changeHandle = (e) => {
    const { name, value } = e.target;
    setFullName((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };
  const onSumbit = (e) => {
    // setFullName("");
    e.preventDefault();
    alert("fgh");
  };

  return (
    <div>
      <h3>
        Welcome {fullName.fname} {fullName.lname}{" "}
      </h3>
      {fullName.email}
      <form onSubmit={onSumbit}>
        <input
          type="text"
          onChange={changeHandle}
          name="fname"
          placeholder="Enter Your First name"
          value={fullName.fname}
        ></input>
        <input
          type="text"
          onChange={changeHandle}
          placeholder="Enter Your Last name"
          name="lname"
          value={fullName.lname}
        ></input>
        <input
          type="email"
          onChange={changeHandle}
          placeholder="Enter Your Email"
          name="email"
          value={fullName.email}
        ></input>
        <button type="submit" style={{ marginLeft: "8px" }}>
          submit
        </button>
      </form>
    </div>
  );
};

export default Form;
