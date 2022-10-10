import React, { useState } from "react";

const Context = React.createContext({});

export function UserContextProvider({ children }) {
  const [token, setToken] = useState(() =>
    window.sessionStorage.getItem("token")
  );
  const [loggedUser, setLoggedUser] = useState(() =>
    window.sessionStorage.getItem("loggedUser")
  );
  const [dataUser, setDataUser] = useState(() =>
    window.sessionStorage.getItem("dataUser")
  );

  return (
    <Context.Provider
      value={{
        token,
        setToken,
        loggedUser,
        setLoggedUser,
        dataUser,
        setDataUser,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export default Context;
