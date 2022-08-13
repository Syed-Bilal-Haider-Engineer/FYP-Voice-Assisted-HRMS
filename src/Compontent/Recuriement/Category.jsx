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
 
  const CategoryInfo = useSelector((state) => state.categoryreducer);
  console.log('CategoryInfo', CategoryInfo);
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
            {CategoryInfo.length >0 && CategoryInfo.map((items,i) => {
              const {Catid,catname}=items;
              return (
                <>
                  <Grid item xs={12} md={3} sx={{ py: 4 }} key={i}>
                    <Flip top>
                    <Link to={`Categorydetails/${Catid}`}>
                      <Box
                      color={theme.palette.text.primary}
                        sx={{
                          padding: "40px",
                          textAlign: "center",
                          boxShadow: "2px 2px lightgray",
                        
                         height:"200px",
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
                       
                      </Box>
                      </Link>
                    </Flip>
                  </Grid>
                 
                </>
              );
            })}
          
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Category;
