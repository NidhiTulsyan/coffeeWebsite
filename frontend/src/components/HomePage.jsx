import { Typography, Box, Grid, Button } from "@mui/material";
import React from "react";
import Card1 from "./Card";
import KeyOffering from "./KeyOffering";
import "../Style.css";
import Usp from "./Usp";

export default function HomePage() {
  return (
    <div>
      <div
        id="carouselExampleInterval"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ height: "100vh" }}>
          <div className="carousel-item active" data-bs-interval="10000">
            <img
              src="https://www.roasterycoffee.co.in/cdn/shop/files/Noida-cafe001_675x400_crop_center.jpg?v=1642240129"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item" data-bs-interval="2000">
            <img
              src="https://sixteengrams.com/uploads/447b28942842d276bc94001769705843.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://sixteengrams.com/uploads/7f3371d08f4c23c47d8f53127e065d76.png"
              className="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="mt-5 mb-5 ms-5 me-5">
        <Typography
          variant="h3"
          align="center"
          marginBottom={4}
          fontFamily="serif"
          fontWeight={100}
          textTransform={"uppercase"}
        >
          Best Sellers
        </Typography>
        <Box sx={{ flexGrow: 1 }} display="block" marginBottom={4}>
          <Grid container spacing={2}>
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
            <Card1 />
          </Grid>
        </Box>
      </div>

      <Typography
        variant="h3"
        align="center"
        marginBottom={4}
        fontFamily="serif"
        fontWeight={100}
        textTransform={"uppercase"}
        marginY={5}
      >
        Key Offerings
      </Typography>
      <Box sx={{ flexGrow: 1 }} display="block">
        <Grid container>
          <KeyOffering />
          <KeyOffering />
          <KeyOffering />
          <KeyOffering />
        </Grid>
      </Box>

      <div className=" mb-5 text-center mt-3">
        <Typography
          variant="h3"
          align="center"
          marginBottom={4}
          fontFamily="serif"
          fontWeight={100}
        >
          USPs
        </Typography>
        <div>
          <Grid container spacing={2} marginBottom={4}>
            <Usp src={"https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_ba3d98c6-363a-44ce-ba07-5319d9b58d9a_512x512.png?v=1637928592"} t1={"SPECIALITY COFFEE"} t2={"Speciality grade coffees that’s rated above 80+ on taste"}/>
            <Usp src={"https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_2_512x512.png?v=1637928718"} t1={"  ROASTED FRESH"} t2={"  Freshly roasted, direct from our roastery"}/>
            <Usp src={"https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_1_512x512.png?v=1637928677"} t1={"RESPONSIBLY SOURCED"} t2={" Organic and biodiverse coffee partners"}/>
            <Usp src={"https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_3_512x512.png?v=1637928754"} t1={" DELICIOUS TASTE"} t2={" Making great taste accessible"}/>
          </Grid>
        </div>
      </div>
{/* https://www.roasterycoffee.co.in/cdn/shop/files/kol-cafe003_675x400_crop_center.jpg?v=1638947457 */}
      <div>
      <Box className="ms-4 me-4 mb-5 container" >
        <img src="https://www.roasterycoffee.co.in/cdn/shop/files/kol-cafe003_675x400_crop_center.jpg?v=1638947457" width='100%' height='40rem' />
        
        <div class="content text-center">
            <Typography
              variant="h2"
              fontSize={30}
              sx={{ color: "white" }}
              fontFamily={"serif"}
              position="static"
            >
              OUR CAFE
            </Typography>
            <Button
              size="medium"
              sx={{ color: "black", display: "none" }}
              className="show"
              variant="outlined"
            >
              Shop Now
            </Button>
            <hr />
          </div>
      </Box>
      </div>
    </div>
  );
}
