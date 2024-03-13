import React from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./Form.css";
const Form = () => {
  return (
    <div className="form__container">
      <div className="form__body">
        <Input />
        <span className="form__or">or</span>
        <Button />
      </div>
    </div>
  );
};

export default Form;
