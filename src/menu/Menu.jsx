import { useContext } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../components/context/UserContext"


function Menu() {
  const usuario = useContext(UserContext)
  const Navigation = useNavigate()
 
  return (
    <nav className="main-menu">
        <li><NavLink to="/" >Inicio</NavLink></li>
        <li><NavLink to="/criptomonedas">Lista de criptomonedas</NavLink> </li>
        <li><NavLink to="/perfil">{`${usuario.first_name} ${usuario.last_name}`}</NavLink> </li>
        <li><a onClick={() => {
          localStorage.removeItem("tokenEDmarket")

          Navigation("/Login")
        }}>Cerrar sesión</a></li>

    </nav>
  )
}

export default Menu
