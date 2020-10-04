import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/style.css";
import collapsedRedlineLogo from "../images/logos/RZLogo_2_cleanRED.png";
import expandedRedlineLogo from "../images/logos/redline_red.png";
import instaLogo from "../images/insta.jpeg";

const Navigation = () => {
  return (
    <nav>
      <NavLink exact to="/">
        <div class="logo">
          <img
            src={collapsedRedlineLogo}
            alt="Redline Logo"
            class="logo-collapsed"
            id="logo-collapsed"
          ></img>
          <img
            src={expandedRedlineLogo}
            alt="Redline Logo"
            class="logo-expanded"
            id="logo-expanded"
          ></img>
        </div>
      </NavLink>
      <div>
        <ul id="sidebar">
          <li>
            <NavLink exact activeClassName="current" to="/currentissue">
              Issue No. 4
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/submit">
              Submit
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/about">
              About
            </NavLink>
          </li>
          <li></li>
          <li>
            <NavLink exact activeClassName="current" to="/archive">
              Archive
            </NavLink>
          </li>
          <li></li>
          <li>
            <NavLink exact activeClassName="current" to="/shop">
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink exact activeClassName="current" to="/subscribe">
              Subscribe
            </NavLink>
          </li>
          <li>
            <a href="https://www.instagram.com/redline_zine/">
              <img src={instaLogo} height="20" width="20" alt="Instagram"></img>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
