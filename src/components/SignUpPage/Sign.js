import React from "react";
import Signup from "./Signup";
import "./Signup.css";
function Sign() {
  return (
    <div>
      <div className="signup">
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
