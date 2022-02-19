import React from "react";
import Card from "./Card";

function Content() {
  return(
      <div className='content'>

        <div className='d-flex align-center mb-40 justify-between'>
          <h1>Все кроссовки</h1>
          <div className="search-block">
            <img src='./img/content/search.svg' alt="search"/>
            <input placeholder='Поиск...'/>
          </div>
        </div>

        <div className="d-flex flex-wrap">
          <Card/>
        </div>

      </div>
  )
}

export default Content;