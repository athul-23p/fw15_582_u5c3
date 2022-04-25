import { AuthContext } from "../contexts/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
export const Logout = () => {

  const {handleAuth} = useContext(AuthContext);
  const navigate = useNavigate();
  handleAuth(false);
  navigate("/");
  // log user out. it's just an inmemory value in context api
  return <div></div>;
};
