import { Children, createContext, useState } from "react";
import context from "react-bootstrap/esm/AccordionContext";

const AuthContext = createContext({});

export const AuthProvider = ({ Children }) =>{
    const [auth, setAuth] = useState({});
    
    return (
        <AuthContext.Provider value = {{ auth, setAuth}}>
            {Children}
        </AuthContext.Provider>
    )
}

export default AuthContext;