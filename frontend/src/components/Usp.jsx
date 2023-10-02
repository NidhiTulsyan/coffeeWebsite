import React from "react";
import { Typography, Grid, Card, CardContent } from "@mui/material";
export default function Usp(props) {
  return (
    <Grid
      item
      xs={12}
      md={3}
      sm={6}
      display={"flex"}
      justifyContent={"space-evenly"}
    >
      <Card
        sx={{
          border: "none",
          boxShadow: "none",
        }}
      >
        <img src={props.src} height={100} alt="" />
        <CardContent>
          <Typography variant="h6" textTransform={"uppercase"}>
            {props.t1}
          </Typography>
          <Typography variant="p">{props.t2}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}
