import { Box, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("userlogin")) {
      alert("logged in first to access payment page");
      navigate("/user-login");
    }
  });
  return (
    <div className="m-5">
      <Box
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
      >
        <Grid xs={12} sm={12} md={6} marginTop={20} width={"40%"}>
          <Typography variant="h3" fontFamily={"serif"} color={"green"}>
            Payment Successful
          </Typography>
          <Typography
            variant="h6"
            fontWeight={100}
            fontFamily={"sans-serif"}
            marginTop={3}
          >
            Thank you for Choosing Coffee-Culture.Your custom report will
            generate within two business days.
          </Typography>
        </Grid>
        <Grid xs={12} sm={12} md={6}>
          <img
            src="https://images.all-free-download.com/images/graphiclarge/shopping_background_woman_trolley_goods_icons_cartoon_sketch_6838112.jpg"
            alt=".."
            height={400}
          />
        </Grid>
      </Box>
    </div>
  );
}
