import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import {useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import theme from '../../Theme/Theme';
import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
function Category() {
  const jobinfo = useSelector(state => state.Jobreducer);
  console.log("jobinfo", jobinfo);
  return (
    <>
      <Box sx={{ py: 16, backgroundColor: "white" }}>
        <Container>
          <Box sx={{ textAlign: "center" }}>
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
              FEATURED TOURS PACKAGES
            </Typography>
            <Fade top>
              <Typography
              color={theme.palette.text.primary}
                sx={{
                  fontSize: { xs: "30px", md: "50px" },
                  fontWeight: 700,
                  py: 1,
                }}
              >
                Browse Top Categories
              </Typography>
            </Fade>
          </Box>
          <br />
          <Grid container spacing={3}>
            {jobinfo.length >0 && jobinfo.map((items,i) => {
              const {category,catname,no_of_positons}=items;
              return (
                <>
                  
                  <Grid item xs={12} md={3} sx={{ py: 4 }} key={i}>
                    <Flip top>
                    <Link to={`Categorydetails/${category}`}>
                      <Box
                      color={theme.palette.text.primary}
                        sx={{
                          padding: "40px",
                          textAlign: "center",
                          boxShadow: "2px 2px lightgray",
                         
                          cursor: "pointer",
                          "&:hover": {
                           color:`${theme.palette.text.hint}`
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ p: 2, width: "100%", fontWeight: "bold" }}
                        >
                          {catname}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ color:`${theme.palette.text.hint}` }}
                        >
                          ({no_of_positons})
                        </Typography>
                      </Box>
                      </Link>
                    </Flip>
                  </Grid>
                 
                </>
              );
            })}
            <br/>
            <Button
              sx={{
                display:"flex",
                border: " 1px solid #8b92dd",
                color: "#8b92dd",
                padding: "19px 69px",
                textTransform: " uppercase",
                cursor: " pointer",
                display: " inline-block",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: " 5px",
                transition: "color 0.4s linear",
                margin: "auto",
                postion: "relative",
                marginTop: "80px",
              }}
            >
              Explore Category
            </Button>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Category;
