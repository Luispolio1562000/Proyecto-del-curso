import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const navigation = useNavigate();
  const [cargando, setCargando] = useState();
  const [error, setError] = useState();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const submit = (e) => {
    setCargando(true);
    setError(null)
    e.preventDefault();
    axios
      .post(`https://reqres.in/api/login`, user)
      .then((data) => {
        setCargando(false);
        localStorage.setItem("tokenEDmarket", data.data.token);
        navigation("/");
      })
      .catch((e) => {
        setCargando(false);
        console.error(e);
        setError(e.response.data.error);
      });
  };

  if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/" />;

  return (
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value,
              });
            }}
            type="email"
            name="email"
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input
            required
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value,
              });
            }}
            type="password"
            name="password"
          />
        </div>
        <div className="submit">
          <input
            type="submit"
            value={cargando ? "cargando..." : "Ingresar"}
            className="link"
          />
        </div>
      </form>
      {error && alert(`Error: ${error}`)}
    </div>
  );
}

export default Login;
