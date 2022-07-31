import React from 'react'
import Main from "../Recuriement/Main.jsx";
import Footer from "../Recuriement/Footer.jsx";
import Header from "../Recuriement/Header.jsx";
import Signup from "../Recuriement/Signup";
import Pagenotfound from "../Notfound/Pagenotfound";
import { Route, Routes } from "react-router-dom";
import Login from "../Recuriement/Loging";
import Exprience from "../Recuriement/Exprience";
import Contactus from '../Recuriement/Contact'
import { ThemeProvider } from "@mui/material/styles";
import Jobdetails from '../Recuriement/Jobdetails';
import Categorydetails from '../Recuriement/CategoryDetails';
import theme from '../../Theme/Theme';
import history from './Historycomponent';
function Routenormaluser() {

  return <>
   <ThemeProvider theme={theme}>
  <Header />
   <Routes history={history} refresh={true}>
   <Route path="/" element={<Main />}  exact/>
   <Route path="/login" element={<Login />} exact /> 
    <Route path="/signup" element={<Signup />} exact />
    <Route path="/contact" element={<Contactus />}  exact/>
     <Route path="/Apply" element={<Exprience />} exact/>
     <Route path="/Jobdetails/:productsid" element={<Jobdetails/>} exact />
     <Route path="/Categorydetails/:Catdetails"  element={<Categorydetails/>} exact/>
     <Route path="*" element={<Pagenotfound/>} exact />
 </Routes>
 
  <Footer />        
  </ThemeProvider>
  </>
}

export default Routenormaluser