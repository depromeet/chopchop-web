import React from 'react';
import Link from 'next/link';
import style from './menubarStyle';

const Menubar = () => (
  <ul>
    {style}
    <li><Link href="/"><a>Home</a></Link></li>
    <li><Link href="/rooms"><a>Rooms</a></Link></li>
    <li><Link href="/pin"><a>Pin</a></Link></li>
    <li><Link href="/mypage"><a>My Page</a></Link></li>
  </ul>
);

export default Menubar;
