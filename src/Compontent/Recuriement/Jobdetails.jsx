import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Container, Typography, Box,Button} from "@mui/material";
import {NavLink} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import Home from "./Home";
import {Fetchjobdetails} from '../Redux/Actions/Actions';
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
function Jobdetails() {
  //..........local storage use for login......
  var Role,checkstatus;
  if(localStorage.getItem("user"))
  {
  const Islogin=window.atob(localStorage.getItem("user"));
   Role=JSON.parse(Islogin);
   checkstatus=Role.token;
  };

  const params = useParams();
  const id=params.productsid;

  console.log("id",id);
  const jobdetails = useSelector(state => state.Jobreducer);
  console.log("jobdetails",jobdetails);
  return (
    <>
    <Header/>
      <Home />
      <Box sx={{ py: 8, backgroundColor: "white" }}>
          <Container>
          <Box sx={{ textAlign: "center" }}>
            <Fade top>
              <Typography
                sx={{
                  color: "#28395a",
                  fontSize: { xs: "30px", md: "50px" },
                  fontWeight: 700,
                  py: 3,
                }}
              >
                Job Informations
              </Typography>
            </Fade>
          </Box>
          {
            jobdetails && jobdetails.map((element,index)=>(
              element.job_id==id ? (<Box key={index} xs={12} sx={{ xs: { mx: 0 }, md: { mx: 20 },p:2,border:'1px solid lightgray' }}>
              <Typography sx={{fontSize:'14px',fontWeight:"bold",width:"80%",m:'auto'}}>Job Description</Typography>
              <Typography  sx={{fontSize:'12px',width:{md:'80%',xs:"100%"},m:'auto',py:2}}>
                {element.description}
              </Typography>
              <Typography sx={{fontSize:'14px',fontWeight:"bold",width:{md:'80%',xs:"100%"},m:'auto'}}>Skills and Qualifications</Typography>
              <Typography sx={{fontSize:'12px',width:{md:'80%',xs:"100%"},m:'auto',py:2}}>
              {element.skills}
              </Typography>
              <Box
                sx={{
                  width: {md:'80%',xs:"100%"},
                  m:'auto',
                  mt: { md: 0, xs: 2 },
                  textAlign: "right",
                  display:"flex",
                  justifyContent:'space-between',
                  alignItems:'center'
                }}
              >
                {checkstatus==0 || checkstatus==undefined ?
                (<Button
                  sx={{
                    width: { md: "80px", xs: "100%" },
                    height: "40px",
                    border: "none",
                    borderRadius: "4px",
                    color: "white",
  
                    background: "linear-gradient(#ff9b44 0%, #fc6075 100%)",
                  }}
                >
                  <NavLink to="/Apply" style={{ color: "white" }}>
                    {" "}
                    Apply
                  </NavLink>
                </Button>):''}
                <Typography mt={1}>
                  {element.last_date}
                </Typography>
              </Box>
            </Box>):null
            ))
          }
       
        </Container>  
      </Box>
      <Footer/>
    </>
  );
}

export default Jobdetails;
