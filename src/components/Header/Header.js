import React from 'react'
import { Link } from 'react-router-dom'
import "./Header.css"



function Header() {
  return (
    <header>
      <nav className="navbar">
        <div className="nav-left">
          <Link to="/" className="logo-link">
            <img 
              src="https://static.vecteezy.com/system/resources/thumbnails/012/657/549/small/illustration-negative-film-reel-roll-tapes-for-movie-cinema-video-logo-vector.jpg" 
              alt="Watchly logo" 
              className="logo"
            />
            <h1 className="brand-name">Watchly</h1>
          </Link>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/populares">Películas populares</Link></li>
          <li><Link to="/Cartelera">Peliculas en cartelera</Link></li>
          <li><Link to="/favoritos">Favoritos</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header