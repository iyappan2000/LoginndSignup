import React from "react";
import { Route } from "react-router-dom";
import Home from "./Homepage/Home";
import "./Layout.css";
import Login from "./loginPage/Login";

import Sign from "./SignUpPage/Sign";
function Layout() {
  return (
    <div>
      <div className="layout">
        <Route exact path="/" component={Sign}>
          <Sign />
        </Route>

        <Route path="/Login" component={Login}>
          <Login />
        </Route>
        {/* <Route to="/Home" component={Home}>
          <Home />
        </Route> */}
        <Route path="/home" component={Home}>
          <Home />
        </Route>
      </div>
    </div>
  );
}

export default Layout;
