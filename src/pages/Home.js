import React from "react";
import { NavLink } from "react-router-dom";
import instaLogo from "../images/insta.jpeg";

const Home = () => {
  return (
    <div class="home">
      <div class="home-left">
        <NavLink to="/currentissue">
          <img
            className="zine-img"
            src={
              process.env.PUBLIC_URL + "/zinePages/issue4/issue4.master1.jpg"
            }
            alt="Zine Cover"
          ></img>
        </NavLink>
      </div>
      <div class="home-right">
        <h3>Coming soon... </h3>
        <br></br>
        <h1>Hi-fi Neon Cyberscape</h1>
        <br></br>
        <NavLink to="/submit">
          <button className="submit-today">Submit Today!</button>
        </NavLink>
        <a href="https://www.instagram.com/redline_zine/">
          <img src={instaLogo} height="20" width="20" alt="Instagram"></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
