import React from 'react'

import './Main.css'
import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'

export default function Main({ match }) {
  return (
    <div className="main-container">
      <img src={logo} alt="Tindev"/>
      <ul>
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" alt=""/>
          <footer>
            <strong>Felipe</strong>
            <p>Descricao de teste por enquanto</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" alt=""/>
          <footer>
            <strong>Felipe</strong>
            <p>Descricao de teste por enquanto</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
        <li>
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1200px-Flag_of_Brazil.svg.png" alt=""/>
          <footer>
            <strong>Felipe</strong>
            <p>Descricao de teste por enquanto</p>
          </footer>

          <div className="buttons">
            <button type="button">
              <img src={dislike} alt="Dislike"/>
            </button>
            <button type="button">
              <img src={like} alt="Like"/>
            </button>
          </div>
        </li>
      </ul>
    </div>
  )
}
