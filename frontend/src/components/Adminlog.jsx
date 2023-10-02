import { Box, Button, Grid, TextField, Typography } from "@mui/material";

import React, { useState } from "react";

import { useNavigate } from "react-router-dom";
import { getadminlogin } from "../api-helpers-axios/api-helpers";

export default function Adminlog() {
  const navigate = useNavigate();
  const [input, setinput] = useState({ email: "", password: "" });
  const [login, setLogin] = useState(false);

  const handlechange = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlesubmit = (e) => {
    e.preventDefault();
    if (!login) {
      getadminlogin(input)
        .then((data) => {
          localStorage.setItem("admintoken", data.token);
          localStorage.setItem("adminlogin", true);
          // console.log(data)
          // console.log("admin logged in");
          alert("login successfull");
          navigate("/");
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <Box
      flexGrow={1}
      display={"flex"}
      flexDirection={"row"}
      justifyContent={"space-evenly"}
    >
      <Box display={"flex"}>
        <Grid xs={12} sm={12} md={6}>
          <img
            src="https://www.vervecoffee.com/cdn/shop/files/Farmlevel_Header_3.png?v=1654116139"
            style={{ height: "39.7rem", width: "40rem" }}
            alt="logo"
          />
        </Grid>
      </Box>

      <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
        <Grid xs={12} sm={12} md={6}>
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
              <Typography
                variant="h5"
                fontFamily={"serif"}
                sx={{ color: "#b8784e" }}
              >
                Admin!..You Are Back
              </Typography>

              <Box className="my-4 ">
                <TextField
                  variant="outlined"
                  placeholder="Enter Your Email"
                  name="email"
                  value={input.email}
                  onChange={handlechange}
                  fullWidth="true"
                  sx={{ width: "70%" }}
                ></TextField>
              </Box>

              <Box className="my-4 ">
                <TextField
                  variant="outlined"
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  value={input.password}
                  onChange={handlechange}
                  fullWidth="true"
                  sx={{ width: "70%" }}
                ></TextField>
              </Box>
              <Box className="my-4 ">
                <Typography>Forget Your Password?</Typography>
              </Box>
              <Box className="my-4 ">
                <Button
                  variant="contained"
                  color="firstnav"
                  fullWidth="True"
                  type="submit"
                  sx={{ width: "70%", height: "55px" }}
                >
                  Login
                </Button>
              </Box>
            </div>
          </form>
        </Grid>
      </Box>
    </Box>
  );
}
