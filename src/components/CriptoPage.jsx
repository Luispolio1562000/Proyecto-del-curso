import { useParams } from "react-router-dom";
import "./CriptoPage.css";
import { useEffect, useState } from "react";
import axios from "axios";
import CriptoInfo from "./CriptoInfo";

function CriptoPage() {
  const params = useParams();
  const API_URL = import.meta.env.VITE_API_CRIPTOMONEDA;
  const id = params.id;
  const URL = API_URL + id;

  const history = "history?interval=d1";

  const [criptomoneda, setcriptomoneda] = useState();
  const [historial, sethistorial] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((data) => {
        setcriptomoneda(data.data.data);
      })
      .catch(() => {
        console.error("operación fallida");
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${URL}/${history}`)
      .then((data) => {
        sethistorial(data.data.data);
      })
      .catch(() => {
        console.error("operación fallida");
      });
  }, []);

  if (!criptomoneda)
    return (
      <div className="center">
        <div className="loader"></div>
      </div>
    );

  console.log(historial.priceUsd);
  return (
    <>
      <div>
        <div className="Titulo">
          <h1>Soy la criptomoneda {params.id}</h1>
        </div>
        <CriptoInfo
          id={id}
          rank={criptomoneda.rank}
          symbol={criptomoneda.symbol}
          marketCap={criptomoneda.marketCapUsd}
          price={criptomoneda.priceUsd}
          changePercent={criptomoneda.changePercent24Hr}
          date={criptomoneda.timestap}
        />
        <div>
          <div>
            <h2>Historial de precios</h2>
            <table className="historial-table"></table>
            <thead>
              <tr>
                <th>Fecha</th>
                <th>Precio</th>
              </tr>
            </thead>
            <tbody>
              <td>{new Date(historial.time * 1000).toLocaleDateString()}</td>
              <td>{historial.priceUsd}</td>
            </tbody>
          </div>
        </div>
      </div>
    </>
  );
}

export default CriptoPage;
