import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import Apply from "../../Images/applybg.png";
import search from "../../Images/search.png";
import applyjob from "../../Images/apply.png";
import getjob from "../../Images/getjob.png";
function Applyjob() {
  return (
    <>
      <Box
        sx={{
          py: 16,
          backgroundImage: `url(${Apply})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Container>
          <Box sx={{ textAlign: "center", pb: 1 }}>
            <Typography
              sx={{
                m: 1,
                background: "linear-gradient(#ff9b44 0%, #fc6075 100%)",
                backgroundClip: " text",
                textFillColor: " transparent",
                backgroundClip: "text",
                textFillColor: " transparent",
                textStroke: "2px rgb(245, 245, 245)",
                textTransform: " uppercase",
              }}
            >
              RECENT JOB
            </Typography>
            <Typography
              sx={{
                color: "white",
                fontSize: " 50px",
                fontWeight: 700,
                py: 1,
              }}
            >
              How it works
            </Typography>
          </Box>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "#26317f",
                  padding: "44px 28px",
                  color: "white",
                  '&:hover':{
                    boxShadow:'0.5px 0.5px 15px white'
                  }
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img src={search} alt="" />
                </Box>
                <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
                  1. Search a job
                </Typography>
                <Typography
                  sx={{ width: "90%", m: "auto", textAlign: "center", py: 2 }}
                >
                  Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                  tempor incididunt ut laborea.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "#26317f",
                  padding: "44px 28px",
                  color: "white",
                  '&:hover':{
                    boxShadow:'0.5px 0.5px 15px white'
                  }
                }}
              >
                <Box sx={{ textAlign: "center", marginTop: "-10px" }}>
                  <img src={applyjob} alt="" />
                </Box>
                <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
                  2. Apply for job
                </Typography>
                <Typography
                  sx={{ width: "90%", m: "auto", textAlign: "center", py: 2 }}
                >
                  Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                  tempor incididunt ut laborea.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  backgroundColor: "#26317f",
                  padding: "44px 28px",
                  color: "white",
                  '&:hover':{
                    boxShadow:'0.5px 0.5px 15px white'
                  }
                }}
              >
                <Box sx={{ textAlign: "center" }}>
                  <img src={getjob} alt="" />
                </Box>
                <Typography sx={{ textAlign: "center", fontSize: "24px" }}>
                  3. Get your job
                </Typography>
                <Typography
                  sx={{ width: "90%", m: "auto", textAlign: "center", py: 2 }}
                >
                  Sorem spsum dolor sit amsectetur adipisclit, seddo eiusmod
                  tempor incididunt ut laborea.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Applyjob;
