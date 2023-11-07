import React, { useState } from "react";
import SearchResult from "./SearchResult";

const SearchBar = () => {
  const [img, setImg] = useState("");
  const InputEvent = (e) => {
    const data = e.target.value;
    // console.log(data);
    setImg(data);
  };
  return (
    <div>
      <label>Your Product : </label>
      <input
        style={{ marginTop: "50px" }}
        type="text"
        placeholder="Enter Your Product Name..."
        value={img}
        onChange={InputEvent}
      />
      {img === "" ? null : <SearchResult product={img} />}
    </div>
  );
};

export default SearchBar;
