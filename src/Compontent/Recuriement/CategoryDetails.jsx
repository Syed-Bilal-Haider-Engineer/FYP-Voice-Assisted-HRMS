import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Fade from "react-reveal/Fade";
import { Container, Typography, Box,Button} from "@mui/material";
import {NavLink} from 'react-router-dom';
import {useSelector} from 'react-redux';
import Home from "./Home";
function Categorydetails() {
  //..........local storage use for login......
  var Role,checkstatus;
  if(localStorage.getItem("user"))
  {
  const Islogin=window.atob(localStorage.getItem("user"));
   Role=JSON.parse(Islogin);
   checkstatus=Role.token;
  };

  const params = useParams();
  const categoryID=params.Catdetails;
  const CategoryDetails = useSelector(state => state.Jobreducer);
  console.log("CategoryDetails",CategoryDetails)
  //........login details..........
  var Role,checkstatus;
  if(localStorage.getItem("user"))
  {
  const Islogin=window.atob(localStorage.getItem("user"));
   Role=JSON.parse(Islogin);
   checkstatus=Role.token;
  };

  return (
    <>
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
            Category details jobs
              </Typography>
            </Fade>
          </Box>
 {CategoryDetails&&CategoryDetails.map((items,i)=>(
            items.category==categoryID ? ( <Fade top>
                  <Box
                  key={i}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      padding: " 36px 30px",
                      cursor:'pointer',
                      mt: 1,
                      flexDirection: { md: "row", xs: "column" },
                      "&:hover": {
                        boxShadow: "5px 5px 20px lightgray",
                      },
                    }}
                  >
                    <Box sx={{ width: { md: "20%", xs: "90%" } }}>
                      
                    <img style={{width:'20px',height:'20px'}} src={`http://localhost/HRMS/Uploads/${items.logo}`} alt=""/>
                    </Box>
                    <Box
                      sx={{
                        width: { md: "60%", xs: "90%", mt: { md: 0, xs: 3 } },
                      }}
                    >
                      <Typography
                        sx={{
                          py: { md: 1, xs: 2 },
                          color: "#28395a",
                          fontWeight: "bold",
                        }}
                      >
                      {items.title}
                 
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: "black",
                        }}
                      >
                        <Typography>{items.company_name}</Typography>
                        <Typography>last date:{items.last_date} </Typography>
                        <Typography>{items.job_city}</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: { md: "20%", xs: "90%" },
                        mt: { md: 0, xs: 2 },
                        textAlign: "right",
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

                          background:
                            "linear-gradient(#ff9b44 0%, #fc6075 100%)",
                        }}
                      >
                        <NavLink to="/Apply" style={{ color: "white" }}>
                          {" "}
                          Apply
                        </NavLink>
                      </Button>):''}
                      <Typography mt={1}></Typography>
                    </Box>
                  </Box>
                  
                </Fade>
         
          ):null))
        } 
         
         
        </Container>
      </Box>
    </>
  );
}

export default Categorydetails;
