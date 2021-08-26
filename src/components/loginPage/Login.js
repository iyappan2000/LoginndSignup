import React, { useState } from "react";
import Loginpage from "./Loginpage";

function Login() {
  const [darkMode] = useState(() => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : [];
  });

  return (
    <div style={{ display: "flex" }} className={darkMode ? "dark" : "light"}>
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
