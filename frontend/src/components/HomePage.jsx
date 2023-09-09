import { Typography, Box, Grid } from "@mui/material";
import React from "react";
import Card1 from "./Card";

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
        <Typography variant="h3" align="center" marginBottom={4} fontFamily='serif' fontWeight={100}>
          Best Sellers
        </Typography>
        <Box sx={{ flexGrow: 1 }} display="block">
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
    </div>
  );
}
