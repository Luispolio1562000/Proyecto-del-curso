import { useState } from "react";
import { useEffect } from "react";
import "./Cuadricula.css";
import CardList from "./Cripto";
import "./Cripto.css";
import axios from "axios";

function Cuadricula() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [criptomonedas, setcriptomonedas] = useState();
  
  useEffect(() => {
    axios
      .get(`${API_URL}assets`)
      .then((data) => {
        setcriptomonedas(data.data.data);
      })
      .catch(() => {
        console.error("operación fallida");
      });
  }, []);

  


 

  if (!criptomonedas) return <span>Cargando...</span>;



  return (
    <>
      <div className="grid-container">
        <div className="titulo"><h1>Lista de criptomonedas</h1></div>
        
        <div className="cripto-container">
          {criptomonedas.map(
            ({ id, name, priceUsd, symbol, changePercent24Hr }) => (
              <CardList
                key={id}
                nombre={name}
                precio={priceUsd}
                simbolo={symbol}
                changePercent24Hr={changePercent24Hr}
                id={id}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Cuadricula;
