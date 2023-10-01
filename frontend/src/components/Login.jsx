import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import React, {  useState } from "react";
import { getuserlogin, getusersignup } from "../api-helpers-axios/api-helpers";
import { useNavigate } from "react-router-dom";



export default function Login() {
const navigate= useNavigate();

    const [login ,setLogin] = useState(true);
    const [input,setinput] = useState({name:"",email:"",password:""});
   const handlechange=(e)=>{
    setinput((prev)=>({
        ...prev,
        [e.target.name]:e.target.value
}))
    }
    const handlesubmit = (e)=>{
        e.preventDefault();

        if(login){
          getuserlogin(input).then((data)=>console.log(data.id))
          .catch((err) => console.log(err));
          localStorage.setItem("userlogin",true);
          console.log("logged in");
          alert("login successfull");
          // console.log("context login",userlogin);
          navigate('/');
         }
         else{
          getusersignup(input).then((data)=>console.log(data.users))
          .catch((err) => console.log(err));
          // localStorage.setItem("usersignup",true);
          console.log("register");
          alert("sign up successfull...now login");
          navigate('/user-login');
         }
    }

    // const handleloginclick =()=>{
    
    // }

  return (
    <Box flexGrow={1} display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"}>
      <Box  display={"flex"} >
        <Grid  xs={12} sm={12} md={6}>
        <img
              src="https://www.vervecoffee.com/cdn/shop/files/Farmlevel_Header_3.png?v=1654116139"
              style={{height:'39.7rem',width:'40rem'}}
              alt="logo"
        />    
        </Grid>
        </Box>

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
            <form onSubmit={handlesubmit}>
            <div className="text-center">
            <Typography variant="h5" fontFamily={"serif"} sx={{ color: "#b8784e" }}>{login?"Yay!..You Are Back":"Register To Enjoy!"}</Typography>
            {!login?(<Box className="my-4 "  >
                <TextField variant="outlined" placeholder="Enter Your Name" name="name" value={input.name} onChange={handlechange} fullWidth="true" sx={{width:'70%'}}></TextField>
            </Box>):""}
            <Box className="my-4 "  >
                <TextField variant="outlined" placeholder="Enter Your Email" name="email" value={input.email} onChange={handlechange}  fullWidth="true" sx={{width:'70%'}}></TextField>
            </Box>
            <Box className="my-4 ">
                <TextField variant="outlined" placeholder="Enter Your Password" name="password" value={input.password} onChange={handlechange}  fullWidth="true" sx={{width:'70%'}}></TextField>
            </Box>
            <Box className="my-4 ">
                <Typography>Forget Your Password?</Typography>
            </Box>
            <Box className="my-4 " >
                <Button variant="contained" color="firstnav" fullWidth='True' type="submit" sx={{width:'70%',height:'55px'}} >{login?"login":"Register"}</Button>
            </Box>
            {login?(<Box>
                <Typography>Don't have an account <Button variant="contained" color="firstnav" onClick={()=>setLogin(!login)} >Register</Button></Typography> 
            </Box>):

            (<Box className="my-4 " >
                <Button  variant="contained" color="firstnav" fullWidth="True" sx={{width:'70%',height:'55px'}} href="/user-login">Back To Login</Button>
            </Box>)}
            </div>
            </form>
        </Grid>
      </Box>
    </Box>
  );
}
