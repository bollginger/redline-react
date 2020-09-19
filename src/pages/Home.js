import React from "react";
import { NavLink } from "react-router-dom";
import ZinePreview from "../components/ZinePreview";
import redline4_p1 from "../zineFirstPages/issue4.master1.jpg";

const Home = ({ pdfWidth }) => {
  return (
    <div class="home">
      <NavLink to="/currentissue">
        <ZinePreview page={redline4_p1} pdfWidth={pdfWidth} />
      </NavLink>
      <div class="home-right">
        <h3>Coming soon...</h3>
        <h1>(Insert name of next issue here)</h1>
        <p> More content to come here. </p>
        <img
          src="placeholder.jpg"
          alt="placeholder-rotating"
          class="rotating-home"
        ></img>
        <NavLink to="/submit">Submit</NavLink>
        <a href="https://www.instagram.com/redline_zine/">
          <img src="./insta.jpeg" height="20" width="20" alt="Instagram"></img>
        </a>
      </div>
    </div>
  );
};

export default Home;
