import React from "react";
import "./Input.css";
function Input({ handler, onEnter }) {
  return (
    <div className="input__container">
      <input
        onKeyDown={onEnter}
        onChange={(e) => handler(e.target.value)}
        className="input"
        placeholder="Enter city name"
      />
    </div>
  );
}

export default Input;
