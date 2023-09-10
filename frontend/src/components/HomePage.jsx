import {
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import React from "react";
import Card1 from "./Card";
import KeyOffering from "./KeyOffering";
import "../Style.css";

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

      <div className=" mb-5 text-center">
        <Typography
          variant="h3"
          align="center"
          marginBottom={4}
          fontFamily="serif"
          fontWeight={100}
          marginY={5}
        >
          USPs
        </Typography>
        <div>
          <Grid container>
            <Grid item xs={12} md={3} sm={6} display={"flex"} justifyContent='space-evenly'>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img
                  src="https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_ba3d98c6-363a-44ce-ba07-5319d9b58d9a_512x512.png?v=1637928592"
                  height={100}
                  alt=""
                />
                <CardContent>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    SPECIALITY COFFEE
                  </Typography>
                  <Typography variant="p">
                    Speciality grade coffees that’s rated above 80+ on taste
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6} display={"flex"}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img
                  src="https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_2_512x512.png?v=1637928718"
                  height={100}
                  alt=""
                />
                <CardContent>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    ROASTED FRESH
                  </Typography>
                  <Typography variant="p">
                    Freshly roasted, direct from our roastery
                  </Typography>
                </CardContent>
                \
              </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6} display={"flex"}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img
                  src="https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_1_512x512.png?v=1637928677"
                  height={100}
                  alt=""
                />
                <CardContent>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    RESPONSIBLY SOURCED
                  </Typography>
                  <Typography variant="p">
                    Organic and biodiverse coffee partners
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={3} sm={6} display={"flex"}>
              <Card
                sx={{
                  maxWidth: 345,
                  margin: "5px",
                  border: "none",
                  boxShadow: "none",
                }}
              >
                <img
                  src="https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_3_512x512.png?v=1637928754"
                  height={100}
                  alt=""
                />
                <CardContent>
                  <Typography variant="h6" textTransform={"uppercase"}>
                    DELICIOUS TASTE
                  </Typography>
                  <Typography variant="p">
                    Making great taste accessible
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
}
