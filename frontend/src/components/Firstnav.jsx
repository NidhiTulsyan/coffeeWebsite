import React from "react";
import {
  AppBar,
  Box,
  
  IconButton,
  
  Toolbar,
  Typography,
} from "@mui/material";

import styled from "@emotion/styled";
export default function FirstNav() {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
    
    margin:'auto',
    textAlign:'center',
    color:'white'
  
  });
  return (
    
    <AppBar color="firstnav" position="sticky"  sx={{height:"40px"}}>
      <StyledToolbar>
        <Typography variant="h6" sx={{marginBottom:'auto',fontSize:'16px'}} fontWeight={100}>COD Available. Free shipping across india</Typography>
      </StyledToolbar>
    </AppBar>
  
  );
}
