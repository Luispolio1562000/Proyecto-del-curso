import { useParams } from "react-router-dom";
import "./CriptoPage.css";
import CriptoInfo from "./CriptoInfo";
import usePetition from "./hooks/usePetition";
import CriptoHistorial from "./CriptoHistorial";

function CriptoPage() {
  const params = useParams();

  const history = "history?interval=d1";

  const [criptomoneda, cargandoCriptomoneda] = usePetition(`assets/${params.id}`);
  const [historial, cargandoHistorial] = usePetition(`assets/${params.id}/${history}`);

  if (cargandoCriptomoneda || cargandoHistorial)
    return (
      <div className="center">
        <div className="loader"></div>
      </div>
    );

  return (
    <>
      <div>
        <div className="Titulo">
          <h1>Soy la criptomoneda {params.id}</h1>
        </div>
        {criptomoneda && <CriptoInfo criptomoneda={criptomoneda} />}
      </div>
      <div className="historial-container">
        {historial && <CriptoHistorial historial={historial} />}
      </div>
    </>
  );
}

export default CriptoPage;
