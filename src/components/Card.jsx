import React from "react";

function Card() {
  return(
      <div className="card">
    <div className="favorite">
      <img src='./img/content/heart-unliked.svg' alt="heat_unliked"/>
    </div>
    <img width={133} height={112} src='./img/sneakers/1.jpg' alt="sneakers"/>
    <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
    <div className='d-flex justify-between align-center'>
      <div className='d-flex flex-column'>
                    <span>
                      Цена:
                    </span>
        <b>12 000 грн.</b>
      </div>
      <button className='button_plus'>
        <img src='./img/content/plus-non-button.svg'/>
      </button>
    </div>
  </div>
  )
}

export default Card;