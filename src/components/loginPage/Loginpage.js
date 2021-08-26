import { TextField } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Loginpage.css";
function Loginpage() {
  return (
    <div>
      <div className="Loginpage">
        <div className="signupTitle">
          <h1>Signup Now</h1>
        </div>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "600px",
              padding: "30px",
            }}
          >
            <TextField id="outlined-basic" label="Full Name" required />
            <br />
            <br />
            <TextField id="outlined-basic" label="Email" required />
            <br />
            <br />

            <TextField id="outlined-basic" label="password" required />
            <br />
            <br />
            <br />
            <button className="signupButton">Signup</button>
            <div
              style={{
                display: "flex",
                paddingLeft: "150px",
                fontSize: "16px",
                paddingTop: "50px",
              }}
            >
              <p>already have an account ? </p>
              <Link to="/Login">
                <p>Login</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loginpage;
