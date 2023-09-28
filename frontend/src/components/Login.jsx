import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";


export default function Login() {
  return (
    <Box flexGrow={1} display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"}>
      <Box  display={"flex"} >
      {/* <Box  xs={12} sm={12} md={6}> */}
        <Grid  xs={12} sm={12} md={6}>
        <img
              src="https://www.vervecoffee.com/cdn/shop/files/Farmlevel_Header_3.png?v=1654116139"
              style={{height:'39.7rem',width:'40rem'}}
              alt="logo"
        />
             
        </Grid>
        </Box>
      {/* </Box> */}

      <Box flexGrow={1} display={"flex"} flexDirection={"column"} >
        <Grid xs={12} sm={12} md={6} >
        <div className="text-center">

        <img
              src="https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim.png?v=1632913841"
              width={100}
              alt="logo"
             
            />
        </div>
            <hr></hr>
            <div className="text-center">

            
            <Typography>Yay!..You Are Back</Typography>
            <Box className="my-4 "  >
                <TextField variant="outlined" placeholder="Enter Your Email" fullWidth="true" sx={{width:'70%'}}></TextField>
            </Box>
            <Box className="my-4 ">
                <TextField variant="outlined" placeholder="Enter Your Password" fullWidth="true" sx={{width:'70%'}}></TextField>
            </Box>
            <Box className="my-4 ">
                <Typography>Forget Your Password?</Typography>
            </Box>
            <Box className="my-4 " >
                <Button variant="contained" color="firstnav" fullWidth="True" sx={{width:'70%',height:'55px'}}>Log In</Button>
            </Box>
            <Box>
                <Typography>Don't have an account <Button variant="contained" color="firstnav">Register</Button></Typography> 
            </Box>
            </div>
        </Grid>
      </Box>
    </Box>
  );
}
