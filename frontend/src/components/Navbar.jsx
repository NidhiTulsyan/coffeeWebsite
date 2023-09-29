import React from "react";
import { AppBar, Box, IconButton, Toolbar } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "25px",
    color: "white",
    marginRight: "4px",
  
  });
  return (
    <AppBar color="nav" position="static" sx={{ height: "100px" }}>
      <StyledToolbar>
        <Box flex={3} >
        <Link to={'/'}>
          <img
            src="https://www.roasterycoffee.co.in/cdn/shop/files/cropped-AnyConv-removebg-preview1-1.png?v=1635507881"
            width={100}
            alt="..."
          />
          </Link> 
        </Box>

        <Box flex={6} sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Quattrocento Sans",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Coffee Beans
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Quattrocento Sans",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Insta Pour Coffee
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Quattrocento Sans",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Coffee Equipments
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Quattrocento Sans",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Chocolate
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Quattrocento Sans",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            Brewing Guide
          </p>
          <p
            style={{
              fontSize: "14px",
              fontFamily: "Quattrocento Sans",
              fontWeight: "500",
              textTransform: "uppercase",
            }}
          >
            About Us
          </p>
        </Box>

        <Box flex={3} sx={{ display: "flex", justifyContent: "end" }}>
          <IconButton  >
            <SearchIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
          <IconButton href="/login">
            <PersonOutlineIcon sx={{ color: "white" }} fontSize="large"  />
          </IconButton>
          <IconButton href="/cart">
            <ShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}
