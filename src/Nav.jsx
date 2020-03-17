import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';
function Nav(){
  return(
    <nav>
      <Link to = '/'>
      <h3>logo</h3>
      </Link>
      <ul className="nav-links">
        <Link className='nav-c' to = '/Page1'>
        <li>Page1</li>
        </Link>
        <Link  className='nav-c' to = '/Page2'>
        <li>Page2</li>
        </Link>
        <Link  className='nav-c' to = '/Page3'>
        <li>Page3</li>
        </Link>
        <Link  className='nav-c' to = '/Page4'>
        <li>Page4</li>
        </Link>
        <a className='nav-c'  href="http://google.com">
        <li>google</li>
        </a>
        <Link  className='nav-c' to = '/Registration'>
        <li>Sign Up</li>
        </Link>

      </ul>
    </nav>
  );
}

export default Nav;
