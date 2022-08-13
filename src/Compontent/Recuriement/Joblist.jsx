import React,{useState} from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Pagination,
  Stack,
} from "@mui/material";
import Slide from "react-reveal/Slide";
import joblist from "../../Images/joblist.png";
import Fade from "react-reveal/Fade";
import { Link,NavLink } from "react-router-dom";
import {useSelector} from 'react-redux';
function Joblist() {
  const jobinfo = useSelector(state => state.Jobreducer);
  console.log("jobinfo", jobinfo.length);


  //.......Login , use local storage..............
  var Role,checkstatus;
  if(localStorage.getItem("user"))
  {
  const Islogin=window.atob(localStorage.getItem("user"));
   Role=JSON.parse(Islogin);
   checkstatus=Role.token;
  };

  // .............Paginations.............
  const [postsPerPage, setPostsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangepage = (event, value) => {
    setCurrentPage(value);
  };
  const pageCount = Math.ceil(jobinfo.length / postsPerPage);
  return (
    <>
      <Box sx={{ py: 16, backgroundColor: "white" }} id="jobs">
        <Container>
          <Box sx={{ textAlign: "center", py: 2 }}>
            <Typography
              sx={{
                m: 1,
              }}
            >
              RECENT JOB
            </Typography>

            <Slide left>
              <Typography
                sx={{
                  color: "#28395a",
                  fontSize: { xs: "30px", md: "50px" },
                  fontWeight: 700,
                  py: 1,
                }}
              >
                Featured Jobs
              </Typography>
            </Slide>
          </Box>
          <br />
           {jobinfo.length > 0 && jobinfo.slice(
                            currentPage * postsPerPage - postsPerPage,
                            currentPage * postsPerPage
                          ).map((Items,i) => {
             const {job_id,category,title,posting_date,description,job_city,last_date,logo,status,no_of_positons,company_name}=Items;
             if(status==1)
            return <Fade top>
                  <Link to={`/Jobdetails/${job_id}`}>
                  <Box

                  key={i}
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      padding: " 36px 30px",
                      cursor:'pointer',
                      boxShadow: "2px 2px 20px lightgray",
                      mt: 1,
                      flexDirection: { md: "row", xs: "column" },
                      
                    }}
                  >
                    <Box sx={{ width: { md: "20%", xs: "90%" } }}>
                    <img style={{width:'20px',height:'20px'}} src={`http://localhost/HRMS/Uploads/${logo}`} alt=""/>
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
                      {title}
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: "black",
                        }}
                      >
                        {/* <Typography>{company_name}</Typography> */}
                        <Typography>last date: {last_date}</Typography>
                        <Typography>{job_city}</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: { md: "20%", xs: "90%" },
                        mt: { md: 0, xs: 2 },
                        textAlign: "right",
                      }}
                    >
                      {checkstatus==0 || checkstatus == undefined ?
                     ( <Button
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
                      <Typography mt={1}>{posting_date}</Typography>
                    </Box>
                  </Box>
                  </Link>
                
                </Fade>
           
          })}
        </Container>
        <Box  my="15px" mx="100px">
              
              <Stack
                direction={"row"}
                alignItems="center"
                justifyContent="flex-end"

              >
                <Pagination
                  count={pageCount}
                  page={currentPage}
                  onChange={handleChangepage}
                />
              </Stack>
            </Box>
      </Box>
    </>
  );
}

export default Joblist;
