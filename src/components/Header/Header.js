import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Header.css";
import ArrowBack from "../../assets/arrowback.svg";
function Header() {
  const location = useLocation();
  const router = useNavigate();
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowIcon(true);
    } else {
      setShowIcon(false);
    }
  }, [location.pathname]);

  return (
    <div className="header__container">
      {showIcon && (
        <img
          onClick={() => router("/")}
          className="icon"
          src={ArrowBack}
          alt="arrow icon"
        />
      )}
      <h1>Weather App</h1>
    </div>
  );
}

export default Header;
