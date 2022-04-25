import axios from "axios";
import { useState,useEffect } from "react";
import './employeelist.css';
import { useNavigate } from "react-router-dom";
import { Navbar } from "./Navbar";
export const EmployeeList = () => {

  const [empData,setEmpData] = useState([]);
  useEffect(()=>{
    axios
      .get("http://localhost:8080/employee")
      .then((response) => {
        setEmpData([...response.data]);
      })
      .catch((error) => {
        console.log(error);
      });
  },[])
  const navigate = useNavigate();
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      { empData.map((emp) => {
          return <div className="employee_card" key={emp.id} onClick={() => navigate(`/employees/${emp.id}`)}>
        <img className="employee_image" src={emp.image} />
        <span className="employee_name">{emp.employee_name}</span>
        <span className="employee_title">{emp.title}</span>
      </div>
      })} 
      
    </div>
  );
};
