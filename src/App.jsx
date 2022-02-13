import React from "react";
import 'macro-css'
import './App.css';
import icon from "./components/icon";

function App() {
  return <div className="wrapper clear">
    <header className='header'>
      <div className='headerLeft'>
        <a href="#">
          <img className='logo' src={icon.logo} alt="logo"/>
        </a>
        <div className='headerInfo'>
          <h3 className='text-uppercase'>React Sneakers</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <ul className='header_profile profile_header'>
        <li className='profile_header-item cart'>
          <a href="#">
            <img src={icon.cart}/>
          </a>
          <span>1205 грн.</span>
        </li>
        <li className='profile_header-item'>
          <a href="">
            <img src={icon.user}/>
          </a>
        </li>
      </ul>
    </header>
    <div className='content'>
      <h1 className='mb-40'>Все кроссовки</h1>

      <div className="d-flex flex-wrap">
        <div className="card">
          <img width={133} height={112} src={icon.sneak1} alt="sneakers"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                    <span>
                      Цена:
                    </span>
              <b>12 000 грн.</b>
            </div>
            <button className='button_plus'>
              <img src={icon.plus_non_button}/>
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src={icon.sneak2} alt="sneakers"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                    <span>
                      Цена:
                    </span>
              <b>12 000 грн.</b>
            </div>
            <button className='button_plus'>
              <img src={icon.plus_non_button}/>
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src={icon.sneak3} alt="sneakers"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                    <span>
                      Цена:
                    </span>
              <b>12 000 грн.</b>
            </div>
            <button className='button_plus'>
              <img src={icon.plus_non_button}/>
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src={icon.sneak4} alt="sneakers"/>
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='d-flex justify-between align-center'>
            <div className='d-flex flex-column'>
                    <span>
                      Цена:
                    </span>
              <b>12 000 грн.</b>
            </div>
            <button className='button_plus'>
              <img src={icon.plus_non_button}/>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>;
}

export default App;
