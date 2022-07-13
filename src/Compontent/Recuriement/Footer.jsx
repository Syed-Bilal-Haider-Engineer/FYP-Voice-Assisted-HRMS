import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";

function Footer() {
  return (
    <>
      <Box sx={{ pt: 8, pb: 2, background: "#010b1d" }}>
        <Container>
          <Grid container spacing={3}>
            <Grid item md={3} xs={12}>
              <Box>
                <Typography sx={{ color: "white" }}>Aboutes</Typography>
                <Typography sx={{ color: "#868c98" }}>
                  Heaven frucvitful doesn't cover lesser dvsays appear creeping
                  seasons so behold.
                </Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box sx={{ color: "#868c98" }}>
                <Typography sx={{ color: "white" }}> IMPORTANT LINK</Typography>
                <Typography>Contact us</Typography>
                <Typography>Signup up</Typography>
                <Typography>Login</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box sx={{ color: "#868c98" }}>
                <Typography sx={{ color: "white" }}>CONTACT INFO</Typography>
                <Typography>
                  Address :Your address goes here, your demo address.
                </Typography>
                <Typography>Phone: +923466929743</Typography>
                <Typography>Email: HRMS@gmial.com</Typography>
              </Box>
            </Grid>
            <Grid item md={3} xs={12}>
              <Box sx={{ color: "#868c98" }}>
                <Typography sx={{ color: "white" }}>NEWSLETTER</Typography>
                <Typography>
                  Heaven frucvitful doesn't cover lesser dvsays appear creeping
                  seasons so behold.
                </Typography>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ p: 2, position: "relative", bottom: "0px" }}>
            <Typography sx={{ color: "#868c98" }}>
              Copyright ©2022 All rights reserved | Human resource management
              system
            </Typography>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Footer;
