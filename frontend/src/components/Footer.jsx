import { Box, Grid, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <Box>
      <Grid container spacing={2} display={"flex"} justifyContent={"space-evenly"}>
        <Grid xs={8} md={3} bgcolor={"yellow"} height={100}>
          <Box>
            <Typography>hello</Typography>
            <Typography>hello</Typography>
            <Typography>hello</Typography>
          </Box>
        </Grid>
        <Grid xs={8} md={3} bgcolor={"red"}>
          <Box>
          <Typography>hello</Typography>

          </Box>
        </Grid>
        <Grid xs={8} md={3} bgcolor={"pink"}>
          <Box>
          <Typography>hello</Typography>

          </Box>
        </Grid>
        <Grid xs={8} md={3} bgcolor={"green"}>
          <Box>
          <Typography>hello</Typography>

          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
