import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box>
      <Grid container spacing={2} display={"flex"} justifyContent={"space-evenly"}>
        <Grid xs={8} md={3}  height={100}>
          <Typography variant="h4">hello</Typography>
      </Grid>
      </Grid>
    </Box>
  );
}
