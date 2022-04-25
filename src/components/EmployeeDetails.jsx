import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect,useContext} from "react";
import { EmployeeStatContext } from "../contexts/EmployeeStatContext";

export const EmployeeDetails = () => {
  const [emp, setEmpData] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8080/employee/${id}`)
      .then((response) => {
        console.log(response.data);
        setEmpData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const {stats,handleStats} = useContext(EmployeeStatContext);

  const handleTermination = () => {
    const updatedEmpData = { ...emp, status: "terminated" };
    handleStats({...stats,"total_terminated":stats.total_terminated+1});
    setEmpData(updatedEmpData);
  }
  return (
    <div
      className="user_details"
      style={{ display: "flex", flexDirection: "column", width: "300px" }}
    >
      <img className="user_image" src={emp.image} />
      <h4 className="user_name">{emp.employee_name}</h4>
      <span className="user_salary">${emp.salary}</span>
      <span className="tasks">
        {emp.tasks?.map((el) => (
          <li className="task">{el}</li>
        ))}
      </span>
      Status: <b className="status">{emp.status}</b>
      Title: <b className="title">{emp.title}</b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      {  emp.status === "working" ? <button className="fire" onClick={handleTermination}>Fire Employee</button>:""}
      {/* Show this button only if user is not already team lead or terminated */}
      { (emp.status === "working" && emp.title !== "Team Lead" )? <button className="promote">promote</button>:"" }
      
    </div>
  );
};
