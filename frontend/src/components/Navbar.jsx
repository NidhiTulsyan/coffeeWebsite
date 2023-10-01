import React, { useContext, useEffect } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  Link
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import LogoutIcon from '@mui/icons-material/Logout';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import styled from "@emotion/styled";
import { Link as Linkk , useNavigate } from "react-router-dom";
import { CartContext } from "./Context";
import '../Style.css';

export default function Navbar() {
  const { cart} = useContext(CartContext);
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    fontSize: "25px",
    color: "white",
    marginRight: "4px",
  });
  const navigate = useNavigate();
  var ulogin;
  var alogin;
  function loginuf(){
   ulogin =localStorage.getItem("userlogin");
   return ulogin;
  }
  function loginaf(){
   alogin =localStorage.getItem("adminlogin");
   return  alogin;
  }
  useEffect(()=>{
    loginuf();
    console.log("user login " ,ulogin);
  },[localStorage.getItem("userlogin")])

  useEffect(()=>{
    loginaf();
    console.log("admin login " ,alogin);
  },[localStorage.getItem("adminlogin")])

  const handlelogout = ()=>{
    if(alogin){
      localStorage.removeItem("adminlogin")
      localStorage.removeItem("admintoken")
      alert("admin logged out");
      navigate('/');
    }
    else{
      localStorage.removeItem("userlogin")
      alert("user logged out");
      navigate('/');
    }
  }

  return (
    <AppBar color="nav" position="static" sx={{ height: "100px" }}>
    
      <StyledToolbar>
        <Box flex={3}>
          <Linkk to={"/"}>
            <img
              src="https://www.roasterycoffee.co.in/cdn/shop/files/cropped-AnyConv-removebg-preview1-1.png?v=1635507881"
              width={100}
              alt="..."
            />
          </Linkk>
        </Box>

        <Box flex={6} sx={{ display: "flex", justifyContent: "space-evenly" }}>
          <Link href="all-coffee" color={"inherit"} underline="none" className="lhover">
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
          </Link>
          <Link href="all-coffee" color={"inherit"} underline="none" className="lhover">
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
          </Link>

          <Link href="all-coffee" color={"inherit"} underline="none" className="lhover">

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
          </Link>

          <Link href="all-coffee" color={"inherit"} underline="none" className="lhover">

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
          </Link>

          <Link href="all-coffee" color={"inherit"} underline="none" className="lhover">

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
          </Link>

          <Link href="all-coffee" color={"inherit"} underline="none" className="lhover">

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
          </Link>

        </Box>

        <Box flex={3} sx={{ display: "flex", justifyContent: "end" }}>
          <Tooltip title="serach">
            <IconButton>
              <SearchIcon sx={{ color: "white" }} fontSize="large" />
            </IconButton>
          </Tooltip>
          {localStorage.getItem("userlogin") && (
            <>
            <Tooltip title="user">
                <IconButton href="/user-profile">
                  <AccountBoxIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="logout">
                <IconButton onClick={handlelogout}>
                  <LogoutIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
              </Tooltip>

              <Tooltip title="cart">
                <IconButton href="/cart">
                  <ShoppingCartIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
              </Tooltip>
              <Typography variant="p">({cart.length})</Typography>
              
            </>
          )}
          {!localStorage.getItem("userlogin") && !localStorage.getItem("adminlogin") && (
            <>
            <Tooltip title="user">
                <IconButton href="/user-login">
                  <PersonOutlineIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="admin">
                <IconButton href="/admin-login">
                  <AdminPanelSettingsIcon
                    sx={{ color: "white" }}
                    fontSize="large"
                  />
                </IconButton>
              </Tooltip>
            </>
          )}

          {localStorage.getItem("adminlogin") && 
          <>
          <Tooltip title="admin-profile">
                <IconButton href="/admin-profile">
                  <AccountCircleIcon
                    sx={{ color: "white" }}
                    fontSize="large"
                  />
                </IconButton>
              </Tooltip>
          <Tooltip title="add-Coffee">
                <IconButton href="/add-coffee">
                  <AddBusinessIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
              </Tooltip>
              <Tooltip title="logout">
                <IconButton onClick={handlelogout}>
                  <LogoutIcon sx={{ color: "white" }} fontSize="large" />
                </IconButton>
              </Tooltip>
          </>
          }
          
        </Box>
      </StyledToolbar>
    </AppBar>
  );
}
