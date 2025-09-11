import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
    <header>
      <div className="container">
        <h1>
          Watchly
        </h1>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/peliculas">Películas</Link></li>
            <li><Link to="/series">Series</Link></li>
            <li><Link to="/favoritos">Favoritos</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header


