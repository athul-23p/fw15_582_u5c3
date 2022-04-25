import axios from "axios";
import { useEffect,useState,useContext } from "react";
import { EmployeeStatContext } from "../contexts/EmployeeStatContext";
export const Home = () => {
  // create statistics for user.
  // get Total user count from DB,
  // other fields are in memory values stored in context API.
  // they will reset to 0
  // if page gets refreshed

  // thins to store in context api
  //   total: get from db,
  //   terminated: 0, // inc when user in terminated
  //   promoted: 0,// inc when user in promoted
  //   total_new: 0,// inc when a new user in created
  const {stats} = useContext(EmployeeStatContext);
  const [totalEmployee,setTotalEmployee] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8080/employee")
     .then(response => {
       console.log(response);
       setTotalEmployee(response.data.length);
     })
     .catch(error => { console.log(error)});
  },[])
  return (
    <>
      <h3 className="welcome">Welcome To employee management system</h3>
      <div className="home">
        <span>Stats</span>
        <div>
          Total Employees<span className="totalemp">{totalEmployee}</span>
        </div>
        <div>
          Total Terminated:{" "}
          <span className="total_terminated">{stats.total_terminated}</span>
        </div>
        <div>
          Total Promoted:{" "}
          <span className="total_promoted">{stats.total_promoted}</span>
        </div>
        <div>
          Total New: <span className="total_new">{stats.total_new}</span>
        </div>
      </div>
    </>
  );
};
