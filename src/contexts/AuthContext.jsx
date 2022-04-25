import { createContext,useState } from "react";

const AuthContext = createContext();

const AuthContextProvider = function ({children}) {
    const [isAuth,setAuth] = useState(false);

    const handleAuth = (val) => setAuth(val);

    return <AuthContext.Provider value={{isAuth,handleAuth}}>{children}</AuthContext.Provider>
}

export {AuthContext,AuthContextProvider};