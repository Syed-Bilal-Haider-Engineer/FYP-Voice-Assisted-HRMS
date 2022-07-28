import React, { useContext } from "react";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import useMediaQuery from "@mui/material/useMediaQuery";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import { makeStyles } from "@mui/styles";
import clsx from "clsx";
import { Paper } from "@mui/material";
import { NavLink, Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
    alignItems: "center",
  },
  paper: {
    background: "#1C0D38 !important",
    justifyContent: "center",
  },
  hover: {
    "&:hover": {
      color: "#FFB800",
    },
  },
});
const link = {
  color: "white",
  textDecoration:'none'
};
export default function Header() {


  var Role,checkstatus;
  console.log(checkstatus);
  if(localStorage.getItem("user"))
  {
  const Islogin=window.atob(localStorage.getItem("user"));
   Role=JSON.parse(Islogin);
   checkstatus=Role.token;
  console.log(checkstatus,"checkstatus");
  }
  
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const matches = useMediaQuery("(max-width:960px)");
  const matches1 = useMediaQuery("(max-width:1279px)");

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Box mt={-20} display="flex" justifyContent="center">
        <img width="100px" src="/logo.png" alt="" />
      </Box>
      <List>
        {["About", "Services", "Roadmap", "FAQ", "Statistic"].map(
          (text, index) => (
            <ListItem
              button
              style={{
                justifyContent: "center",
                borderBottom: "1px solid #bbb8b8",
              }}
              key={text}
            >
              <ListItemText
                style={{
                  textTransform: "capitalize",
                  textAlign: "center",
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "#ffffff",
                }}
                primary={text}
              />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        style={{
          background: "linear-gradient(to right, #ff9b44 0%, #fc6075 100%)",
          zIndex: "100px",
        }}
        height="92px"
        width="100%"
      >
        <Container maxWidth="xl">
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            pl={matches ? 0 : 5}
            pr={matches ? 0 : 5}
          >
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              // flexBasis="20%"
            >
              <Box
                style={{
                  textDecoration: "none",
                  cursor: "pointer",
                  color: "white",
                  fontSize: "20px",
                }}
              >
                <NavLink to="/">HRMS</NavLink>
              </Box>
            </Box>
            <Box
              display="flex"
              justifyContent={matches1 ? "end" : "space-between"}
              alignItems="center"
              // flexBasis={matches1 ? "45px" : "78%"}
            >
              <Box
                display="flex"
                justifyContent="space-around"
                // flexBasis={matches1 ? "0px" : "70%"}
                alignItems="center"
              >
                <Hidden mdDown>
                  <Box
                    mr={6}
                    fontSize="20px"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  >
                    <NavLink to="/" style={link}>
                      Home
                    </NavLink>
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  >
                    About
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  >
                    <NavLink to="/signup" style={link}>
                      Signup
                    </NavLink>
                  </Box>
                  {checkstatus==undefined ?<Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  >
                    <NavLink to="/login" style={link}>
                      Login
                    </NavLink>
                  </Box> :''}
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  >
                    <Link to="/Logout" style={link}>
                      Logout
                    </Link>
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  >
                    <Link to="/contact" style={link}>
                      Contact
                    </Link>
                  </Box>
                  <Box
                    mr={6}
                    fontSize="20px"
                    zIndex="1"
                    sx={{
                      textDecoration: "none",
                      cursor: "pointer",
                      color: "white",
                      "&:hover": {
                        borderBottom: "2px solid black",
                      },
                    }}
                  >
                    FAQ
                  </Box>
                  
                </Hidden>
              </Box>

              <Hidden mdUp>
                {["left"].map((anchor) => (
                  <React.Fragment key={anchor}>
                    <Button
                      onClick={toggleDrawer(anchor, true)}
                      style={{ zIndex: 1 }}
                    >
                      
                      Click Here
                    </Button>
                    <Paper style={{ background: "#1C0D38" }}>
                      <SwipeableDrawer
                        classes={{ paper: classes.paper }}
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                        onOpen={toggleDrawer(anchor, true)}
                      >
                        {list(anchor)}
                      </SwipeableDrawer>
                    </Paper>
                  </React.Fragment>
                ))}
              </Hidden>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}
