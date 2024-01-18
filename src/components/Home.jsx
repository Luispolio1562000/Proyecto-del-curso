import { Link } from "react-router-dom";
import "./Home.css";
function Home() {
  return (
    <>
      <div className="center">
        <h1>¡Hola Bienvenido a Market!</h1>
      </div>
      <div className="contenido">
      <p>¡Conoce las criptomonedas más utilizadas! </p>

<Link to="/criptomonedas">Ver criptomonedas!</Link>
      </div>
     
    </>
  );
}

export default Home;
