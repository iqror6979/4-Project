import React, { useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { NavLink } from "react-router-dom";

import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import { FaFacebookF } from "react-icons/fa";
import { BsTwitter } from "react-icons/bs";
import { FiInstagram } from "react-icons/fi";
import { GrDribbble } from "react-icons/gr";
import { Typography } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

import navbar from "../../assets/navbar.jpg";

export default () => {

  const [isScroll, setIsScroll] = React.useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      color: isActive ? "blue" : "black",
      textDecoration: isActive ? "none" : "none",
      paddingLeft: "2%",
    };
  };

  React.useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY >= 220) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
  }, []);

  return (
    <Box
      sx={{
        width: "100%",
        position: 'relative',
        top:0,
        zIndex: 10,
      }}
    >
      <Box
        sx={{
          display: isScroll ? 'none' :  "flex ",
          backgroundColor: "#333",
          paddingTop: "7px",
          paddingBottom: "7px",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <h6
            style={{
              color: "white",
              fontFamily: "Sen, sans-serif",
              fontSize: "13px",
              paddingLeft: "30%",
              width: "100%",
            }}
          >
            Free shipping for standard order over $100
          </h6>
        </Box>
        <Box sx={{ pr: "3%", pt: "2px" }}>
          <FaFacebookF style={{ padding: "0px 10px", color: "white" }} />
          <BsTwitter style={{ padding: "0px 10px", color: "white" }} />
          <FiInstagram style={{ padding: "0px 10px", color: "white" }} />
          <GrDribbble style={{ padding: "0px 10px", color: "white" }} />
        </Box>
      </Box>
      <Box
      position="fixed"
        sx={{
          backgroundColor:  isScroll ? 'white' : 'transparent',
          // top: isScroll ? '0px' : '30px' ,
          transition: ".3s",
          transitionProperty: "all",
          transitionDuration: "0.3s",
          transitionTimingFunction: "ease",
          transitionDelay: "0s",
          paddingTop: "20px",
          paddingBottom: "20px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={navbar}
            alt=""
            style={{ paddingLeft: "13%", paddingRight: "7%" }}
          />
          <NavLink to="/" style={navLinkStyles}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    borderRadius: "5px",
                    color: "blue",
                  },
                }}
              >
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/shop" style={navLinkStyles}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    borderRadius: "5px",
                    color: "blue",
                  },
                }}
              >
                <ListItemText primary="Shop" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/features" style={navLinkStyles}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    borderRadius: "5px",
                    color: "blue",
                  },
                }}
              >
                <ListItemText primary="Features" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/blog" style={navLinkStyles}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    borderRadius: "5px",
                    color: "blue",
                  },
                }}
              >
                <ListItemText primary="Blog" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/about" style={navLinkStyles}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    borderRadius: "5px",
                    color: "blue",
                  },
                }}
              >
                <ListItemText primary="About" />
              </ListItemButton>
            </ListItem>
          </NavLink>
          <NavLink to="/contact" style={navLinkStyles}>
            <ListItem disablePadding>
              <ListItemButton
                sx={{
                  "&:hover": {
                    backgroundColor: "white",
                    borderRadius: "5px",
                    color: "blue",
                  },
                }}
              >
                <ListItemText primary="Contact" />
              </ListItemButton>
            </ListItem>
          </NavLink>
        </Box>
        <Box sx={{}}>
            <SearchIcon  sx={{padding:'0px 20px',fontSize:'30px'}}/>
            <ShoppingCartIcon sx={{padding:'0px 20px',fontSize:'30px'}}/>
            <FavoriteBorderIcon  sx={{padding:'0px 100px 0px 20px',fontSize:'30px'}} />
        </Box>
      </Box>
    </Box>
  );
};
