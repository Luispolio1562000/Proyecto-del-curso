import { useState } from "react";
import { useEffect } from "react";
import "./App.css"
import axios from "axios";

function App() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [criptomonedas, setcriptomonedas] = useState();

  useEffect(() => {
    axios.get(`${API_URL}assets`)
      .then((data) => {
        console.log(data);
        setcriptomonedas(data.data.data);
      })
      .catch(() => {
        console.error("operación fallida");
      });
  }, []);
  if (!criptomonedas) return <span>Cargando...</span>;
  return (
    <>
      <h1>Lista criptomonedas</h1>

      <ol>
        {criptomonedas.map(({id,name, priceUsd, symbol}) => (
          <li key={id}>
            Nombre: {name}, Precio: {priceUsd},
            Simbolo: {symbol}
          </li>
        ))}
      </ol>
    </>
  );
}

export default App;
