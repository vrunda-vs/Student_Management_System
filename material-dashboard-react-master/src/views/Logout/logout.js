import React from "react";
import { useHistory } from "react-router-dom";


export default function Logout() {
    const history=useHistory();

return(
   <div>
       {localStorage.setItem("email",""),
   history.push('/')}
   </div>

);
}