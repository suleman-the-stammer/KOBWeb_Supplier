import React from "react";
import { CiSearch } from "react-icons/ci";

// CSS :
import "./input.scss";

const Input = () => {
  return (
    <div className="input-container">
      <CiSearch className="icon" />
      <input type="text" placeholder="Starts with..." />
    </div>
  );
};

export default Input;
