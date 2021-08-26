import React from "react";

import "antd/dist/antd.css";
import "./Signup.css";

import Demo from "./antdesign";

const Signup = () => {
  return (
    <div>
      <div className="signupTitle">
        <h1 style={{ color: "blueviolet" }}>Signup Now</h1>
      </div>
      <div style={{ paddingTop: "40px" }}>
        <Demo />
      </div>
    </div>
  );
};

export default Signup;
