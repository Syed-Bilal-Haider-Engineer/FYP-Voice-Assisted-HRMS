import React, { useState, useEffect } from "react";
import Routenormaluser from "./Compontent/UsersRoutes/Routenormaluser";
import Routesuser from "./Compontent/UsersRoutes/Routesuser";
import Logout from "./Compontent/Recuriement/Logout";
import { Route, Routes } from "react-router-dom";
import useGet from "./Compontent/API/API";
import axios from "axios";
function App() {
  //.........Private and Protected route.........
  useGet("http://localhost/HRMS/Designations/Designations.php", "Designation");
  useGet("http://localhost/HRMS/Department/Fetchdepartment.php", "department");
  useGet(
    "http://localhost/HRMS/Application/Fetchapplicationsuser.php",
    "Applications"
  );
  useGet("http://localhost/HRMS/Employee/Employee.php", "Employee");
  useGet("http://localhost/HRMS/Employee/leave.php", "FetchEmployeeleave");
  useGet("http://localhost/HRMS/Holiday/Holiday.php", "Holiday");
  useGet("http://localhost/HRMS/Category/getcategory.php", "category");
  useGet("http://localhost/HRMS/Client/Client.php", "Client");
  useGet("http://localhost/HRMS/Project/Project.php", "Project");

  var Role, checkstatus;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    Role = JSON.parse(Islogin);
    checkstatus = Role.token;
  }
  console.log("checkstatus App.js", checkstatus);

  // ................Get locations............

  return (
    <>
    
      {(checkstatus == 1 || checkstatus == 2) ? <Routesuser /> : null}
      {/* .............Normal Users Routes.......... */}
      {checkstatus == 0 || checkstatus == undefined ? (
        <Routenormaluser />
      ) : null}
      <Routes>
        <Route path="/Logout" element={<Logout />} />
       
      </Routes>

    </>
  );
}

export default App;
