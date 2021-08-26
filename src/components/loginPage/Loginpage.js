import React from "react";

import Demo1 from "./antdesign1";

import "./Loginpage.css";
function Loginpage() {
  return (
    <div>
      <div className="Loginpage">
        <div style={{ paddingLeft: "240px" }}>
          <h1 style={{ color: "blueviolet" }}> Sign In</h1>
        </div>

        <div>
          <Demo1 />
        </div>
        {/* <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "600px",
              padding: "30px",
            }}
          >
            <TextField id="outlined-basic" label="Email" required />
            <br />
            <br />

            <TextField id="outlined-basic" label="password" required />
            <br />
            <br />
            <br />

            <Link to="/Home">
              <button className="signupButton">SignIn</button>
            </Link>
            <div
              style={{
                display: "flex",
                paddingLeft: "420px",
                fontSize: "14px",
                color: "blue",
                paddingTop: "30px",
              }}
            >
              <p>forget password ? </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Loginpage;
