import React, { useState } from "react";
import Signup from "./Signup";

import "./Signup.css";

function Sign() {
  const [darkMode] = useState(() => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : [];
  });
  return (
    <div>
      <div id="signup" className={darkMode ? "dark" : "light"}>
        <div className="formSide">
          <Signup />
        </div>
        <div className="pic">
          <img src="./assets/pexels-mabel-amber-128299.jpg" alt="signup img" />
        </div>
      </div>
    </div>
  );
}

export default Sign;
