import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
      <ul>
        <li><NavLink exact activeClassName="current" to='/'>Home</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/about'>About</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/currentissue'>Current Issue</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/archive'>Archive</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/currentprompts'>Prompts</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/shop'>Shop</NavLink></li>
        <li><NavLink exact activeClassName="current" to='/contact'>Contact</NavLink></li>
        <li><a href='https://www.instagram.com/redline_zine/'><img src='./insta.jpeg' height='20' width='20'></img></a></li>
      </ul>
    </nav>
  );

export default Navigation;