/* eslint-disable react/prop-types */
// eslint-disable-next-line react/prop-types
function CriptoHistorial({ historial }) {
  console.log(historial);
  return (
    <table className="historial-table">
      <caption>Historial de precios</caption>
      <thead>
        <tr>
          <th>Fecha</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {historial.map(({ date, priceUsd, time }) => (
          <tr key={time}>
            <td>{date}</td>
            <td>$ {parseFloat(priceUsd).toFixed(4)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default CriptoHistorial;
