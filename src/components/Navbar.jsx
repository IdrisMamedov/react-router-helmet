import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{backgroundColor: 'pink'}}>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add">Add Page</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
