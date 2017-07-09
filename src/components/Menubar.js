import React from 'react';
import {Link} from 'react-router-dom';
import style from './menubarStyle';

const Menubar = () => (
  <ul>
    {style}
    <li><Link to="/"><a>Home</a></Link></li>
    <li><Link to="/rooms"><a>Rooms</a></Link></li>
    <li><Link to="/pins"><a>Pin</a></Link></li>
    <li><Link to="/mypage"><a>My Page</a></Link></li>
  </ul>
);

export default Menubar;
