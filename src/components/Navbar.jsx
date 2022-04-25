import {Link} from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

export const Navbar = () => {
  const {isAuth} = useContext(AuthContext);

  return (
    <div className="navbar">
      <Link className="nav-home" to="/">
        Home
      </Link>
      <Link className="nav-list" to="/employees">
        Employee List
      </Link>
      <Link className="nav-admin" to="/admin">
        Admin
      </Link>
     
      <Link className={isAuth?"nav-logout":"nav-login"} to={isAuth ?"/logout": "/login"}>
        {isAuth ? "Logout" : "Login"}
      </Link>
    </div>
  );
};
