import { NavLink } from "react-router-dom"

/* import React from 'react'
 */
function Menu() {
  return (
    <nav className="main-menu">
        <li><NavLink to="/" >Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Lista de criptomonedas</NavLink> </li>
      
    </nav>
  )
}

export default Menu
