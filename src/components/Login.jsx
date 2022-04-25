import axios from "axios";
import { useState,useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const Login = () => {
  //  use reqres to log user in.

  const {handleAuth} = useContext(AuthContext);

  const [formData,setFormData] = useState({
    username:"",
    password:""
  });

  const handleChange = (e) => {
    const {name,value} = e.target;
    setFormData({...formData,[name]:value});
  }

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("https://reqres.in/api/login",formData)
        .then(response => {
          console.log(response);
          handleAuth(true);
        }).catch(error => {console.log(error)});
  }
  return (
    <form className="loginform" onSubmit={handleSubmit}>
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
        onChange={handleChange}
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
        onChange={handleChange}
      />
      <input type="submit" value="SIGN IN" className="login_submit" />
    </form>
  );
};
