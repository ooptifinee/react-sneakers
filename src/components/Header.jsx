import React from "react";

function Header() {
  return (
      <header className='header'>
        <div className='headerLeft'>
          <a href="#">
            <img className='logo' src='./img/header/sneakers.svg' alt="logo"/>
          </a>
          <div className='headerInfo'>
            <h3 className='text-uppercase'>React Sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className='header_profile profile_header'>
          <li className='profile_header-item cart'>
            <a href="#">
              <img src='./img/header/cart.svg'/>
            </a>
            <span>1205 грн.</span>
          </li>
          <li className='profile_header-item'>
            <a href="">
              <img src='./img/header/user.svg'/>
            </a>
          </li>
        </ul>
      </header>
  )
}

export default Header;