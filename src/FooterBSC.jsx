import React from "react";
import { Container, Typography, Box, Button, Grid } from "@mui/material";
import BNB from "./footerimg/bnb.svg";
import bg from "./footerimg/bg.svg";
const Buttonstyle={
  fontSize:'6px',
  width:"30%",
  height:'30px',
  color:" #f8f9fa",
  background: "rgba(248,249,250,.1)",
  borderColor: "transparent"
}
function FooterBSC() {
  return (
    <>
      <Box sx={{px:{md:4,xs:1},py:4,backgroundColor:'black',color:'white', backgroundImage:`url(${bg})`,
      backgroundRepeat:'no-repeat',
      backgroundSize:'cover' }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={3}>
            <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
              <img src={BNB} alt="BNB" style={{ width: "25px" }} />
              <Typography sx={{ fontSize: "17px" }}>
                Powered by BNB Beacon Chain
              </Typography>
            </Box>
            <Typography sx={{ fontSize:{md:"12px",xs:'10px'}, mt: 2, px: 4,fontWeight:'500px' }}>
              BscScan is a Block Explorer and Analytics Platform for BNB Smart
              Chain
            </Typography>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-evenly",
                alignItems: "center",
                mt: 2,
              }}
            >
              <Button startIcon='' style={Buttonstyle}
              sx={{
                '&:hover':{
                  backgroundColor:"white",
                  color:'black'
                }
              }}>Add Bsc Network </Button>
              <Button  sx={{
                '&:hover':{
                  backgroundColor:"white",
                  color:'black'
                }
              }} style={Buttonstyle}>Preference </Button>
              <Button  sx={{
                '&:hover':{
                  backgroundColor:"white",
                  color:'black'
                }
              }} style={Buttonstyle}>Moon </Button>
            </Box>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{fontWeight:'bold',pb:1.5,borderBottom:'1px solid lightgrey'}}>
            <Typography sx={{fontSize:'14px'}}>Company</Typography>
            </Box>
            <Typography sx={{fontSize:"12px",pt:1}}>Delegate to BscScan <sup style={{color:'white',backgroundColor:" #00c9a7",padding:'0px 5px',borderRadius:'2px'}}>New</sup></Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Contact Us <sup style={{color:'white',backgroundColor:"#3498db",padding:'0px 5px',borderRadius:'2px'}}>Staking</sup></Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Brand Assets</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Terms of Service</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Bug Bounty</Typography>
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{fontWeight:'bold',pb:1.5,borderBottom:'1px solid lightgrey'}}>
            <Typography sx={{fontSize:'14px'}}>Community </Typography>
            </Box>
            <Typography sx={{fontSize:"12px",pt:1}}>API Documentation</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Knowledge Base</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Network Status</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Learn BSC</Typography>
          
          </Grid>
          <Grid item xs={6} md={3}>
            <Box sx={{fontWeight:'bold',pb:1.5,borderBottom:'1px solid lightgrey'}}>
            <Typography sx={{fontSize:'14px'}}>Products</Typography>
            </Box>
            <Typography sx={{fontSize:"12px",pt:1}}>Developer APIs</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Etherscan</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Blockscan</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>DiemScan</Typography>
            <Typography sx={{fontSize:"12px",pt:1}}>Polygonscan</Typography>
          </Grid>
          <Grid item xs={12}>
            <Box sx={{display:"flex",justifyContent:'space-around',alignItems:'center',borderTop:"1px solid lightgrey",py:2}}>
          <Box sx={{borderTop:'1px solid lighgrey'}}>
           <Typography>BscScan © 2022 (BSC-C) | ⛏ Built by the same team behind Etherscan | Donate </Typography>
            </Box>
            <Box sx={{display:'flex',justifyContent:'space-evenly',alignItems:'center',borderTop:'1px solid lighgrey'}}>
              <Typography>Facebook</Typography>
              <Typography>Instagram</Typography>
              <Typography>Github</Typography>
            </Box>
            </Box>
            </Grid>
         
        </Grid>
      </Box>
    </>
  );
}

export default FooterBSC;
