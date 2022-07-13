import React from "react";
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";

import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
const categorydata = [
  {
    title: "Design & Creative",
    count: "120",
  },
  {
    title: " Development",
    count: "100",
  },
  {
    title: "Sales & Marketing",
    count: "150",
  },
  {
    title: "Mobile Application",
    count: "160",
  },
  {
    title: "Construction",
    count: "160",
  },
  {
    title: "Data science",
    count: "200",
  },
  {
    title: "Real Estate",
    count: "250",
  },
  {
    title: "Content Writer",
    count: "300",
  },
];
function Category() {
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
                sx={{
                  color: "#28395a",
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
            {categorydata.map((items) => {
              return (
                <>
                  <Grid item xs={12} md={3} sx={{ py: 4 }}>
                    <Flip top>
                      <Box
                        sx={{
                          padding: "40px",
                          textAlign: "center",
                          boxShadow: "2px 2px lightgray",
                          color: "#28395a",
                          cursor: "pointer",
                          "&:hover": {
                            color: "#fb246a",
                          },
                        }}
                      >
                        <Typography
                          variant="subtitle1"
                          sx={{ p: 2, width: "100%", fontWeight: "bold" }}
                        >
                          {items.title}
                        </Typography>
                        <Typography
                          variant="subtitle2"
                          sx={{ color: "#fb246a" }}
                        >
                          ({items.count})
                        </Typography>
                      </Box>
                    </Flip>
                  </Grid>
                </>
              );
            })}
            <Button
              sx={{
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
