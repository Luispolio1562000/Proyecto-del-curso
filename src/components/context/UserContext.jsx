import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext()
// eslint-disable-next-line react/prop-types
const UserContextProvider = ({children}) => {

    const [ usuario, setUsuario ] = useState({})
    useEffect(
    () => {
      axios.get("https://reqres.in/api/users/2")
      .then((data) => {
        setUsuario(data.data.data);
      })
      .catch((e) => {
        console.error(e)
      })
    }, [])

    return (
        <UserContext.Provider value={usuario}>

            {children}
        </UserContext.Provider>
    )
}


export {UserContext, UserContextProvider}