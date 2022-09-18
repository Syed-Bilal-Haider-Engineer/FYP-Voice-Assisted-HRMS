import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import useGet from "../API/API";
import theme from "../../Theme/Theme";
import { jobsearch } from "../Redux/Actions/Actions";
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from "react-router-dom";
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  useMediaQuery,
} from "@mui/material";
import Hero from "../../Images/h1_hero.jpg";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();
  const [Search, setSearch] = useState("");
  const match = useMediaQuery("(max-width:700px)");
  const inputstyle = {
    width: match ? "100%" : "40%",
    height: "70px",
    color: "#777777",
    fontSize: "18px",
    fontWeight: "400",
    padding: " 9px 33px 9px 32px",
    border: "none",
    borderRadius: " 0px",
    position: " relative",
    outline: "none",
    backgroundColor: `${theme.palette.text.secondary}`,
  };
  const SearchJobhandler = () => {
    dispatch(jobsearch(Search));
    setSearch("");
  };

  return (
    <>
      <Box
        sx={{
          width: "100%",
          backgroundImage: `url(${Hero})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          py: 2,
        }}
      >
        <Container>
          <Box sx={{ width: { xs: "100%", md: "50%" } }}>
            <Fade top>
            
              <Typography
                sx={{
                  fontSize: { xs: "40px", md: "80px" },
                  width: "100%",
                  fontWeight: "bold",
                  pt: 10,
                  pb: 2,
                  lineHeight: { md: "100px", xs: "60px" },
                  background: "linear-gradient(#ff9b44 0%, #fc6075 100%)",
                  backgroundClip: "text",
                  textFillColor: " transparent",
                  textStroke: "2px rgb(245, 245, 245)",
                }}
                className="main_heading"
              >
                Find the most exciting startup jobs
              </Typography>
            </Fade>
          </Box>
          <Box
            sx={{
              width: "100%",
              py: 5,
              mt: 1,
              display: "flex",
              justiftyContent: { md: "space-around", xs: "space-evenly" },
              flexDirection: { md: "row", xs: "column" },
              alignItems: "center",
            }}
          >
            <input
              type="text"
              name="keyword"
              placeholder="Job title and Keywords"
              style={inputstyle}
              onChange={(e) => setSearch(e.target.value)}
            />
            <Divider
              sx={{ width: "3px", height: "5px", textAlign: "center" }}
            />
              
            <Button
            
              type="submit"
              value="Finds Jobs"
              sx={{
                width: { md: "20%", xs: "100%" },
                height: " 70px",
                background:
                  "linear-gradient(to right, #ff9b44 0%, #fc6075 100%)",
                textSlign: "center",
               
                padding: "15px",
                textTransform: " capitalize",
                lineHeight: "38px",
                fontSize: "14px",
                "&:hover": {
                  background:
                    "linear-gradient(to right, #ff9b44 0%, #fc6075 100%)",
                },
              }}
              onClick={SearchJobhandler}
            >
             {/* <a href="#jobs"  alt="" style={{color:'white',textDecoration:'none'}}> */}
             <HashLink to="#jobscetions"  style={{ color:"#fff"}}>
              Find Jobs
              </HashLink>
              {/* </a> */}
            </Button>
           
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Home;
