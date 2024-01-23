import "./Cuadricula.css";
import CardList from "./Cripto";
import "./Cripto.css";
import usePetition from "./hooks/usePetition";

function Cuadricula() {
  const [criptomonedas] = usePetition("assets");

  if (!criptomonedas) return <span>Cargando...</span>;

  return (
    <>
      <div className="grid-container">
        <div className="titulo">
          <h1>Lista de criptomonedas</h1>
        </div>

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
