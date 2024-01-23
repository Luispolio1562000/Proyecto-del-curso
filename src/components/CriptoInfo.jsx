/* eslint-disable react/prop-types */
function CriptoInfo({ criptomoneda }) {
  console.log(criptomoneda);
  const date = new Date();
  return (
    <>
      <div className="card">
        <h2 className="title">{criptomoneda.name}</h2>
        <p className="text">
          <span className="label">Rank: </span> {criptomoneda.rank}
        </p>
        <p className="text">
          <span className="label">Simbolo: </span>
          {criptomoneda.symbol}
        </p>
        <p className="text">
          <span className="label">Capitalización de mercado </span>${" "}
          {parseFloat(criptomoneda.marketCapUsd).toFixed(4)}
        </p>
        <p className="text">
          <span className="label">Precio: </span> ${" "}
          {parseFloat(criptomoneda.priceUsd).toFixed(4)}
        </p>
        <p>
          <span className="label"> Variación 24hrs: </span>
          <span
            className={
              parseFloat(criptomoneda.changePercent24Hr) > 0
                ? "positivo"
                : "negativo"
            }
          >
            {parseFloat(criptomoneda.changePercent24Hr).toFixed(3)}%
          </span>
        </p>
        <p className="text">
          <span className="label">Hora de consulta: </span>
          {date.toLocaleString()}
        </p>
      </div>
    </>
  );
}

export default CriptoInfo;
