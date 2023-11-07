import React from "react";

const SearchResult = (props) => {
  const img = `https://source.unsplash.com/600x400/?${props.product}`;
  return (
    <div>
      <img style={{ marginTop: "50px" }} src={img} alt="Images" />
    </div>
  );
};

export default SearchResult;
