import React from "react";
import Loginpage from "./Loginpage";

function Login() {
  return (
    <div style={{ display: "flex" }}>
      <div>
        <Loginpage />
      </div>
      <div className="pic" style={{ marginRight: "-50px" }}>
        <img src="./assets/pexels-cottonbro-4629633.jpg" alt="" />
      </div>
    </div>
  );
}

export default Login;
