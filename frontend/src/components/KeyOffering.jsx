import React from "react";
import "../Style.css";
import { Button, Grid, Typography } from "@mui/material";
export default function KeyOffering() {
  return (
    <Grid item xs={12} md={3} sm={6}>
      <div className="m-2 mb-5">
        <div className="img-hover-zoom img-hover-zoom--blur container">
          <img
            src="https://www.roasterycoffee.co.in/cdn/shop/files/coffee_beans_cover_photo.jpg?v=1642154057"
            alt="Another  zoom-on-hover effect"
          />
          <div class="content text-center">
            <Typography
              variant="p"
              fontSize={30}
              sx={{ color: "white" }}
              fontFamily={"serif"}
              position="static"
            >
              Coffee Beans
            </Typography>
            <Button
              size="medium"
              sx={{ color: "black", display: "none" }}
              className="show"
            >
              Shop Now
            </Button>
            <hr />
          </div>
        </div>
      </div>
    </Grid>
  );
}
