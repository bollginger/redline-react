import React from "react";
import { NavLink } from "react-router-dom";
import ZinePreview from "../components/ZinePreview";

const Home = ({ pdfWidth }) => {
  return (
    <div class="home">
      <div class="home-left">
        <NavLink to="/currentissue" className="zine-img">
          <ZinePreview
            page={"../zinePages/issue4/issue4.master1.jpg"}
            pdfWidth={pdfWidth}
          />
        </NavLink>
      </div>
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
