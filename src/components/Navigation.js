import React, { useState }  from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css'

const Navigation = () => {
    const [navOpen, openCloseNav] = useState(0);

    /* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
    function openNav() {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("navigation").style.width = "250px";
        document.getElementById("navigation").style.zIndex = "3";
        document.getElementById("navigation").style.borderStyle = "double";
        document.getElementById("main").style.zIndex = "1";
        document.getElementById("sidebar").style.display = "flex";
        document.getElementById("logo-expanded").style.display = "inline-block";
        document.getElementById("logo-collapsed").style.display = "none";
        document.getElementById("icon-expanded").style.display = "inline-block";
        document.getElementById("icon-collapsed").style.display = "none";
    }
  
  /* Set the width of the sidebar to 0 and the left margin of the page content to 0 */
    function closeNav() {
        document.getElementById("sidebar").style.width = "0px";
        document.getElementById("navigation").style.width = "10%";
        document.getElementById("navigation").style.borderStyle = "none";
        document.getElementById("sidebar").style.display = "none";
        document.getElementById("main").style.marginLeft = "0";
        document.getElementById("navigation").style.zIndex = "1";
        document.getElementById("main").style.zIndex = "1";
        document.getElementById("logo-expanded").style.display = "none";
        document.getElementById("logo-collapsed").style.display = "inline-block";
        document.getElementById("icon-expanded").style.display = "none";
        document.getElementById("icon-collapsed").style.display = "inline-block";
    }

    return (
        <nav>
            <NavLink exact to='/'>
                <div class='logo'>
                    <img src='RZLogo_2_cleanRED.png' alt='Redline Logo' class='logo-collapsed' id='logo-collapsed'></img>
                    <img src='redline_red.png' alt='Redline Logo' class='logo-expanded' id='logo-expanded'></img>
                </div>
            </NavLink>
            <div class='openCloseIcons' onClick={function () {
                openCloseNav((navOpen === 0) ? 1:0);
                (navOpen === 0) ? closeNav():openNav();
            }}>
                <img src='icon-open.png' alt='Open Menu' class='icon-collapsed' id='icon-collapsed'></img>
                <img src='icon-close.png' alt='Close Menu' class='icon-expanded' id='icon-expanded'></img>
            </div>
            <div>
                <ul id='sidebar'>
                    <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/currentissue'>Current Issue</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/archive'>Archive</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/submit'>Submit</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/shop'>Shop</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/subscribe'>Subscribe</NavLink></li>
                    <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
                    <li><a href='https://www.instagram.com/redline_zine/'>
                        <img src='./insta.jpeg' height='20' width='20' alt='Instagram'></img></a></li>
                </ul>
            </div>
        </nav>
    )
};

export default Navigation;