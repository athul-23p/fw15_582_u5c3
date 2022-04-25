import { AuthContext } from "../contexts/AuthContext";
import { useContext,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Login } from "./Login";
const ProtectedRoute = ({path}) => {
  const { isAuth } = useContext(AuthContext);
  const navigate = useNavigate();
  
  useEffect(() => {
      if(isAuth) {
        // navigate(path);
      }
  },[])

  return(<Login/>)
};

export { ProtectedRoute };
