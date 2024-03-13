import React from "react";
import "./Button.css";
function Button({ handler, label }) {
  return (
    <div onClick={handler} className="button__container">
      <button className="button">{label}</button>
    </div>
  );
}

export default Button;
