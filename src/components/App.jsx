import Menu from "../menu/Menu";
import { Navigate, Outlet } from "react-router-dom";

function App() {
  if (!localStorage.getItem("tokenEDmarket")) return <Navigate to="/Login" />;

  return (
    <>
      <Menu />
      <Outlet />
    </>
  );
}

export default App;
