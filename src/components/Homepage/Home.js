import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  const [darkMode, setDarkMode] = useState(() => {
    const localData = localStorage.getItem("theme");
    return localData ? JSON.parse(localData) : [];
  }, false);

  useEffect(() => {
    localStorage.setItem("theme", darkMode);
  }, [darkMode]);
  const darkModeChange = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div className={darkMode ? "darkHome" : "home"}>
      <div className="Top">
        <h1>Lucy</h1>
        <div
          className="switch-checkbox"
          style={{
            float: "right",
            display: "flex",
          }}
        >
          <h3
            style={{
              paddingRight: "10px",
              color: darkMode ? "white" : "black",
            }}
          >
            {darkMode ? "Night" : "Light"} Mode
          </h3>
          <label className="switch">
            <input type="checkbox" onChange={darkModeChange} />
            <span className="slider round"></span>
          </label>
        </div>
      </div>
      <div className="Main">
        <div className="MainLines">
          <h1>ONE TOUCH FOR ALL NEEDS</h1>
          <p>
            Lucy has been lot downloaded and loved by over 10M+ people from 130
            countries all over the world in last three months .Download the free
            app on Android and ios device Reviews and ratings are much
            appreciated
          </p>
          <div className="Logout">
            <Link to="/">
              {" "}
              <button>Log Out</button>
            </Link>
          </div>
        </div>
        <div>
          <img src="./assets/pngfind.com-mobile-apps-png-3325619.png" alt="" />
        </div>
      </div>
    </div>
  );
}

export default Home;
