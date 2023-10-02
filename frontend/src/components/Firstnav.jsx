import React from "react";
import { AppBar, Box, Typography } from "@mui/material";

import styled from "@emotion/styled";
export default function FirstNav() {
  const StyledToolbar = styled(Box)({
    margin: "auto",
    textAlign: "center",
    color: "white",
    height: "-1px",
  });
  return (
    <AppBar color="firstnav" position="sticky" sx={{ height: "50px" }}>
      <StyledToolbar>
        <Typography
          variant="h6"
          sx={{ fontSize: "16px" }}
          fontWeight={100}
          paddingBottom={2}
        >
          COD Available. Free shipping across india
        </Typography>
      </StyledToolbar>
    </AppBar>
  );
}
