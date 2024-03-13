import React from "react";
import "./Button.css";
function Button({ handler }) {
  return (
    <div onClick={handler} className="button__container">
      <button className="button">Get device location</button>
    </div>
  );
}

export default Button;
