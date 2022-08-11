import React from "react";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  useMediaQuery,
  Grid,
} from "@mui/material";
import Apply from "../../Images/applybg.png";
import { useState } from "react";
import {POST} from '../API/PostAPI';
function Contact() {
  const url="http://localhost/HRMS/Contact/Addcontact.php";
  const [subjectset,setsubjectstate]=useState('');
  const [msgset,setmsgstate]=useState('');
  const [emailset,setemailstate]=useState('');
  const [nameset,setnamestate]=useState('');
  const [add,setaddcontactstate]=useState('');
  const match = useMediaQuery("(max-width:700px)");
  const inputsyle = {
    width: match ? "100%" : "45%",
    border: " 1px solid #e5e6e9",
    borderRadius: "0px",
    height: "48px",
    paddingLeft: "18px",
    fontSize: " 13px",
    background: " transparent",
  };

  const contactusHanlder=()=>{
    const contactus={
      subject:subjectset,
      msg:msgset,
      email:emailset,
      name:nameset
    }
    setaddcontactstate(contactus);
    // setsubjectstate('');
    // setmsgstate('');
    // setemailstate('');
    // setnamestate('');

  }
  return (
    <>
      <Box
        sx={{
          pt: 6,
        }}
      >
        <Container>
          <Box>
            <Typography
              sx={{
                color: "#28395a",
                fontSize: " 50px",
                fontWeight: 700,
                ml: { xs: 1, md: 12 },
              }}
            >
              Contact Us
            </Typography>
          </Box>
          <br />
        </Container>
      </Box>
      <Box sx={{ width: "100%", py: 4 }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Box sx={{ width: { md: "80%", xs: "100%" } }}>
              <Typography sx={{ fontWeight: "bold", py: 1 }}>
                Get in Touch
              </Typography>
              <Box sx={{ py: 2, width: "100%" }}>
                <input
                  type="text"
                  placeholder="Enter  subject"
                  style={{
                    width: "100%",
                    border: " 1px solid #e5e6e9",
                    borderRadius: "0px",
                    height: "48px",
                    paddingLeft: "18px",
                    fontSize: " 13px",
                    background: " transparent",
                  }}
                  onChange={(e)=>{
                    setsubjectstate(e.target.value);
                  }}
                />
              </Box>
              
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  py: 2,
                }}
              >
                <input
                  type="text"
                  placeholder="Enter your name"
                  style={inputsyle}
                  onChange={(e)=>{
                    setnamestate(e.target.value);
                  }}
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  style={inputsyle}
                  onChange={
                    (e)=>{
                      setemailstate(e.target.value);
                    }
                  }
                />
              </Box>
              <input
                type="text"
                placeholder="Enter your message"
                style={{
                  width: "100%",
                  border: " 1px solid #e5e6e9",
                  borderRadius: "0px",
                  height: "100px",
                  paddingLeft: "18px",
                  fontSize: " 13px",
                  background: " transparent",
                  marginBottom:'10px'
                }}
                onChange={
                  (e)=>{
                    setmsgstate(e.target.value);
                  }
                }
              />

              <Button
                sx={{
                  width: "80px",
                  height: "40px",
                  border: "none",
                  borderRadius: "4px",
                  color: "white",
                  background: "linear-gradient(#ff9b44 0%, #fc6075 100%)",
                }}
               
                onClick={contactusHanlder}
              >
                SEND
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
      {add && <POST values={add} url={url} Addstate={setaddcontactstate} />}
    </>
  );
}

export default Contact;
