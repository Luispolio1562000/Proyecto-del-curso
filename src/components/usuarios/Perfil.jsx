import { useContext} from "react";
import { UserContext } from "../context/UserContext";
import "./Perfil.css"

function Perfil() {
  const usuario = useContext(UserContext);


  return (
    <>
      <div className="perfil-container">
      <img src={usuario.avatar} alt={`${usuario.first_name} ${usuario.last_name}`} className="perfil-avatar" />
      <div className="perfil-info">
        <h2 className="perfil-name">
          {usuario.first_name} {usuario.last_name}
        </h2>
        <p className="perfil-email">{usuario.email}</p>
      </div>
    </div>
    </>
  );
}

export default Perfil;
