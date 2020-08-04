import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/style.css'

const Navigation = () => (
    <nav>
        <NavLink exact to='/'>
            <div class='logo'>
                <img src='redline_red.png' alt='Redline Logo' class='logo'></img>
                <img src='redline_red_to_grey.png' alt='Redline Logo' class='logo-white'></img>
            </div>
        </NavLink>
        <ul>
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
    </nav>
);

export default Navigation;