import React from "react";
import TextField from "@material-ui/core/TextField";
import "antd/dist/antd.css";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
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
          <Link to="/Home">
            <button className="signupButton">Signup</button>
          </Link>

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
              <p style={{ paddingLeft: "10px" }}>Login</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
