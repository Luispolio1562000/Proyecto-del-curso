/* import React from 'react' */

import { Link } from "react-router-dom"

function Pagina404() {
  return (
    <div>
        <h1>Página no encontrada</h1>
        <span>La pagina solicitada no existe</span>
      
      <button> <Link to="/"> Ir a inicio</Link> </button>
    </div>
  )
}

export default Pagina404
