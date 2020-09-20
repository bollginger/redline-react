import React from "react";
import { NavLink } from "react-router-dom";

const Home = ({ pdfWidth }) => {
  return (
    <div class="home">
      <div class="home-left">
        <NavLink to="/currentissue">
          <img
            className="zine-img"
            src="../zinePages/issue4/issue4.master1.jpg"
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
          <img src="./insta.jpeg" height="20" width="20" alt="Instagram"></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
