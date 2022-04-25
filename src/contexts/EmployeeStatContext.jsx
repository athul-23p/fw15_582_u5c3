import { createContext,useState } from "react";
const EmployeeStatContext = createContext();

const EmployeeStatContextProvider = ({children}) => {

    const [stats,setStats] = useState({
        total_terminated:0,
        total_promoted:0,
        total_new:0
    });

    const handleStats = (new_stats) => setStats(new_stats);
   
    return <EmployeeStatContext.Provider value={{stats,handleStats}}>{children}</EmployeeStatContext.Provider>
}

export {EmployeeStatContext,EmployeeStatContextProvider};