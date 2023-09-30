import React, { useContext } from "react";
import { AppBar, Box, IconButton, Toolbar, Tooltip, Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { CartContext } from "./Context";

export default function Navbar() {

  const {cart} = useContext(CartContext)
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

        <Tooltip title="serach">
          <IconButton  >
            <SearchIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
          </Tooltip>

          <Tooltip title="user">
          <IconButton href='/user-login'>
            <PersonOutlineIcon sx={{ color: "white" }} fontSize="large"  />
          </IconButton>
          </Tooltip>

          <Tooltip title="admin">
          <IconButton href='/admin-login'>
            <AdminPanelSettingsIcon sx={{ color: "white" }} fontSize="large"  />
          </IconButton>
          </Tooltip>

          <Tooltip title="cart">
          <IconButton href="/cart">
            <ShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
          </IconButton>
          </Tooltip>
          <Typography variant="p">({cart.length})</Typography>
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}
