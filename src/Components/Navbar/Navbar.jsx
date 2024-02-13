import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom'; 

import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';

const Navbar = () => {
  const [menu, setMenu] = useState("shop");

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <Link style={{ textDecoration: 'none'}} to='/'> 
          <img src={logo} alt="Sticker Shop" />
          <p>Sticker Shop</p>
        </Link>
      </div>
      <ul className="nav-menu">
        <li onClick={() => { setMenu("themes") }}><Link style={{ textDecoration: 'none'}} to='/themes'>Themes</Link>{menu === "themes" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("styles") }}><Link style={{ textDecoration: 'none'}} to='/styles'>Styles</Link> {menu === "styles" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("activities") }}><Link style={{ textDecoration: 'none'}} to='/activities'>Sticker Activities</Link> {menu === "activities" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("home-workspace") }}><Link style={{ textDecoration: 'none'}} to='/home-workspace'>Home &amp; Workspace</Link> {menu === "home-workspace" ? <hr /> : <></>} </li>
        <li onClick={() => { setMenu("body") }}><Link style={{ textDecoration: 'none'}} to='/body'>Body Adornments</Link> {menu === "body" ? <hr /> : <></>} </li>
      </ul>
      <div className="nav-login-cart">
        <Link to='/login'><button>Login</button></Link> 
        <Link to='/cart'><img src={cart_icon} alt="" /></Link> 
        <div className='nav-cart-count'>0</div>
      </div>
    </div>
  );
}

export default Navbar;
