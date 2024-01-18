/* eslint-disable react/prop-types */
function CriptoInfo(props) {
  const { id, rank, symbol, marketCap, price, changePercent} = props;
  const date = new Date();
  return (
    <>
      <div className="card">
        <h2 className="title">{id}</h2>
        <p className="text">
          <span className="label">Rank: </span> {rank}
        </p>
        <p className="text">
          <span className="label">Simbolo: </span>
          {symbol}
        </p>
        <p className="text">
          <span className="label">Capitalización de mercado </span>${" "}
          {parseFloat(marketCap).toFixed(4)}
        </p>
        <p className="text">
          <span className="label">Precio: </span> ${" "}
          {parseFloat(price).toFixed(4)}
        </p>
        <p>
          <span className="label"> Variación 24hrs: </span>
          <span
            className={parseFloat(changePercent) > 0 ? "positivo" : "negativo"}
          >
            {parseFloat(changePercent).toFixed(3)}%
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
