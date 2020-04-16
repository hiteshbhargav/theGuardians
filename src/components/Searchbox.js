import React from "react";

const Searchbox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="pa3 ba b--green bg-lightest-blue br3"
        type="search"
        placeholder="search hero"
        onChange={searchChange}
      ></input>
    </div>
  );
};

export default Searchbox;
