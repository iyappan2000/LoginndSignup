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
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyDsk4UCokMp7mz-mxhzv96aUcCaXfs9Tgfg&usqp=CAU"
            alt="signup img"
          />
        </div>
      </div>
    </div>
  );
}

export default Sign;
