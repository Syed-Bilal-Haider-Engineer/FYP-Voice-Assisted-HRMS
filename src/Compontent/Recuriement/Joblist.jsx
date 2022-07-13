import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import Slide from "react-reveal/Slide";
import joblist from "../../Images/joblist.png";
import Fade from "react-reveal/Fade";
import { NavLink } from "react-router-dom";
function Joblist() {
  return (
    <>
      <Box sx={{ py: 16, backgroundColor: "white" }}>
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
          {[1, 2, 3, 4].map(() => {
            return (
              <>
                <Fade top>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-around",
                      alignItems: "center",
                      padding: " 36px 30px",
                      mt: 1,
                      flexDirection: { md: "row", xs: "column" },
                      "&:hover": {
                        boxShadow: "5px 5px 20px lightgray",
                      },
                    }}
                  >
                    <Box sx={{ width: { md: "20%", xs: "90%" } }}>
                      <img src={joblist} alt="" />
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
                        Digital Marketer
                      </Typography>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          alignItems: "center",
                          color: "lightgray",
                        }}
                      >
                        <Typography>Creative Agency</Typography>
                        <Typography> $3500 - $4000</Typography>
                        <Typography>Athens, Greece</Typography>
                      </Box>
                    </Box>
                    <Box
                      sx={{
                        width: { md: "20%", xs: "90%" },
                        mt: { md: 0, xs: 2 },
                        textAlign: "right",
                      }}
                    >
                      <Button
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
                      </Button>
                      <Typography mt={1}>7hr ago</Typography>
                    </Box>
                  </Box>
                </Fade>
              </>
            );
          })}
        </Container>
      </Box>
    </>
  );
}

export default Joblist;
