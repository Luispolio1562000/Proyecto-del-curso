/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";
import "./Cripto.css";

export default function CardList(props) {
  const { id, nombre, precio, simbolo, changePercent24Hr } = props;

  return (
    <>
      <Link to={`/criptomonedas/${id}`} className="Link">
        <div className="card">
          <div className="info">
            <h2>{nombre}</h2>
            <p>
              <span className="label">Precio: </span>
              {parseFloat(precio).toFixed(4)}
            </p>
            <p>
              <span className="label"> Código: </span>
              {simbolo}
            </p>
            <p>
              <span className="label"> Variación 24hrs: </span>
              <span
                className={
                  parseFloat(changePercent24Hr) > 0 ? "positivo" : "negativo"
                }
              >
                {parseFloat(changePercent24Hr).toFixed(3)}%
              </span>
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}
