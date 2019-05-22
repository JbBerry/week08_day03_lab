import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'

const NavBar = () =>{
  return(
    <div className='navbar'>
      <div className='link-router'>
        <Link to="/">Home</Link>
      </div>
      <div className='link-router'>
        <Link to="/favourite">Favourite</Link>
      </div>
    </div>
  )
}

export default NavBar;
