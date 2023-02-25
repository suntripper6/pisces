import { createContext, useState } from "react";

const AuthCtx = createContext({});

export const AuthenticationProvider = ({ children }) => {
  const [auth, setAuth] = useState({});

  return (
    <AuthCtx.Provider value={{ auth, setAuth }}>{children}</AuthCtx.Provider>
  );
};

export default AuthCtx;
