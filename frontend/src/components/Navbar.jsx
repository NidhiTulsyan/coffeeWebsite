import React from "react";
import {
  AppBar,
  Box, 
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import CoffeeIcon from "@mui/icons-material/Coffee";
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styled from "@emotion/styled";
export default function Navbar() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    fontSize:'25px',
    color:'white',
    marginRight:'4px', 
    marginTop:'1%' 
  });
  return (
    <AppBar color="nav" position="sticky" sx={{height:'100px'}}>
      <StyledToolbar>
        <Box flex={3}>
          <IconButton >
            <CoffeeIcon sx={{color:'white'}} fontSize='large' />
          </IconButton>
        </Box>

        <Box flex={6} sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <p style={{fontSize: '14px',fontFamily: 'Quattrocento Sans',fontWeight: '500',textTransform: 'uppercase'}}>Coffee Beans</p>
        <p style={{fontSize: '14px',fontFamily: 'Quattrocento Sans',fontWeight: '500',textTransform: 'uppercase'}}>Insta Pour Coffee</p>
        <p style={{fontSize: '14px',fontFamily: 'Quattrocento Sans',fontWeight: '500',textTransform: 'uppercase'}}>Coffee Equipments</p>
        <p style={{fontSize: '14px',fontFamily: 'Quattrocento Sans',fontWeight: '500',textTransform: 'uppercase'}}>Chocolate</p>
        <p style={{fontSize: '14px',fontFamily: 'Quattrocento Sans',fontWeight: '500',textTransform: 'uppercase'}}>Brewing Guide</p>
        <p style={{fontSize: '14px',fontFamily: 'Quattrocento Sans',fontWeight: '500',textTransform: 'uppercase'}}>About Us</p>
          {/* {/* <Typography variant="p" sx={{fontSize: '14px',fontFamily: 'Quattrocento Sans',fontWeight: '500',textTransform: 'uppercase',overflow:'hidden',textOverflow:'ellipsis'}}>Coffe Beans</Typography> */}
          
        </Box>

        <Box flex={3} sx={{ display: "flex", justifyContent: 'end' }} >
          <IconButton>
           <SearchIcon  sx={{color:'white'}} fontSize='large'/>
          </IconButton>
          <IconButton>
           <PersonOutlineIcon  sx={{color:'white'}} fontSize='large'/>
          </IconButton>
          <IconButton>
            <ShoppingCartIcon  sx={{color:'white'}} fontSize='large'/>
          </IconButton>
        </Box>

      </StyledToolbar>
    </AppBar>
  
  );
}
