import React, { useState, useEffect } from "react";
import Routesuser from "./Compontent/UsersRoutes/Admindashboard";
import { Route, Routes } from "react-router-dom";
import useGet from "./Compontent/API/API";
import history from './Compontent/UsersRoutes/Historycomponent';
import Main from "./Compontent//Recuriement/Main.jsx";
import Signup from "./Compontent/Recuriement/Signup";
import Pagenotfound from "./Compontent/Notfound/Pagenotfound";
import Login from "./Compontent/Recuriement/Loging";
import Exprience from "./Compontent/Recuriement/Exprience";
import Contactus from './Compontent/Recuriement/Contact'
import { ThemeProvider } from "@mui/material/styles";
import Jobdetails from './Compontent/Recuriement/Jobdetails';
import Categorydetails from './Compontent/Recuriement/CategoryDetails';
import Footer from "./Compontent/Recuriement/Footer.jsx";
import Header from "./Compontent/Recuriement/Header.jsx";
import Logout from "./Compontent/Recuriement/Logout";
import theme from './Theme/Theme';
import {ipaddress} from './Compontent/Recuriement/url';
import axios from 'axios';
function App() {
  //.........Private and Protected route.........
  useGet("http://localhost/HRMS/Designations/Designations.php", "Designation");
  useGet("http://localhost/HRMS/Department/Fetchdepartment.php", "department");
  useGet("http://localhost/HRMS/Application/Fetchapplicationsuser.php", "Applications");
  useGet("http://localhost/HRMS/Employee/Employee.php", "Employee");
  useGet("http://localhost/HRMS/Employee/leave.php", "FetchEmployeeleave");
  useGet("http://localhost/HRMS/Holiday/Holiday.php", "Holiday");
  useGet("http://localhost/HRMS/Category/getcategory.php", "category");
  useGet("http://localhost/HRMS/Client/Client.php", "Client");
  useGet("http://localhost/HRMS/Project/Project.php", "Project");
 
  // ...useEffct for IP address....
  useEffect(()=>{
     axios
      .get(ipaddress + "/getIpAddress")
      .then((resp) => {
        // successFul("success");
        console.log("resp.data", resp.data);
      }).catch((error)=>{
           console.log("error",error);
      })
  },[])
 


  // ...................Normal Users.........................
  const HomeComponent = () => {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Header />
          <Routes history={history}>
            <Route path="/" element={<Main />} />
            <Route path="/Signup" element={<Signup />} />
            <Route path="/Apply" element={<Exprience />} />
            <Route path="/Contactus" element={<Contactus />} />
            <Route path="/Jobdetails/:productsid" element={<Jobdetails />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/Categorydetails/:Catdetails" element={<Categorydetails />} />
            <Route path="/Logout" element={<Logout />} />
            <Route path="*" element={<Pagenotfound />} />
          </Routes>
          <Footer />
        </ThemeProvider>
      </>
    );
  };
  var Role, checkstatus;
  if (localStorage.getItem("user")) {
    const Islogin = window.atob(localStorage.getItem("user"));
    Role = JSON.parse(Islogin);
    checkstatus = Role.token;
  }

  return (
    <>
      <Routes>
        <Route path="/*" element={<HomeComponent />} />
        <Route path="/Admindashboard/*" element={<Routesuser />} />
      </Routes>
     
    </>
  );
}

export default App;
