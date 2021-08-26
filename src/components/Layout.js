import React from "react";
import { Route } from "react-router-dom";
import Home from "./Homepage/Home";
import "./Layout.css";
import Loginpage from "./loginPage/Loginpage";
import Sign from "./SignUpPage/Sign";
function Layout() {
  return (
    <div>
      <div className="layout">
        <Route exact path="/" component={Sign}>
          <Sign />
        </Route>
        <Route path="/Login" component={Loginpage}>
          <Loginpage />
        </Route>
        <Route>
          <Home />
        </Route>
      </div>
    </div>
  );
}

export default Layout;
