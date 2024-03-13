import React from "react";
import "./ErrorPage.css";
import Cloud from "../../assets/cloud.svg";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";
function ErrorPage() {
  const router = useNavigate();
  function redirectToHome() {
    router("/");
  }
  return (
    <div className="error__container">
      <img className="error__image" src={Cloud} alt="cloud" />
      <span>404</span>
      <Button handler={redirectToHome} label="Back to home" />
    </div>
  );
}

export default ErrorPage;
