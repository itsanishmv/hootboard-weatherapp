import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import "./Header.css";
function Header() {
  const location = useLocation();
  const [showIcon, setShowIcon] = useState(false);
  useEffect(() => {
    if (location.pathname !== "/") {
      setShowIcon(true);
    }
  }, []);

  return (
    <div className="header__container">
      {showIcon && (
        <img className="icon" src="./arrowback.svg" alt="arrow icon" />
      )}
      <h1>Weather App</h1>
    </div>
  );
}

export default Header;
