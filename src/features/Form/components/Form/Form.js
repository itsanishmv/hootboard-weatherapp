import React from "react";
import Header from "../../../../components/Header/Header";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./Form.css";
const Form = () => {
  return (
    <div className="form__container">
      <Header />
      <div className="form__body">
        <Input />
        <Button />
      </div>
    </div>
  );
};

export default Form;
