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
      <div className="pic">
        <img
          style={{ marginLeft: "50px" }}
          src="https://images.pexels.com/photos/3389508/pexels-photo-3389508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt=""
        />
      </div>
    </div>
  );
}

export default Login;
