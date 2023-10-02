import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
export default function Footer() {
  return (
    <>
      <Box flexGrow={1} display={"flex"} justifyContent={"space-between"}>
        <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
          <Grid item xs={12} md={3} sm={6}>
            <img
              src="https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim.png?v=1632913841"
              width={100}
              alt="logo"
            />
            <Typography
              variant="h5"
              fontFamily={"serif"}
              sx={{ color: "#b8784e" }}
            >
              Contact us
            </Typography>
            <Typography variant="h6" fontWeight={300} fontSize={15}>
              call : 8765431290
            </Typography>
            <Typography variant="h6" fontWeight={300} fontSize={15}>
              Email: support@coffee.co.in
            </Typography>{" "}
            <br />
            <Typography
              variant="h5"
              fontFamily={"serif"}
              sx={{ color: "#b8784e" }}
            >
              Follow Us
            </Typography>
            <Box display={"flex"}>
              <InstagramIcon />
              <FacebookIcon />
              <YouTubeIcon />
            </Box>
          </Grid>
        </Box>
        <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
          <Grid item xs={12} md={3} sm={6}>
            <Typography variant="h5" fontFamily={"serif"}>
              Company
            </Typography>
            <hr style={{ width: "25%" }} />
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              About Us
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Media
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Cafe Locations
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Contact Us
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Brew Guide
            </Typography>
          </Grid>
        </Box>
        <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
          <Grid item xs={12} md={3} sm={6}>
            <Typography variant="h5" fontFamily={"serif"}>
              Shop
            </Typography>
            <hr style={{ width: "25%" }} />

            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Coffee Beans
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Insta Poue Coffee
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Coffee Equipment
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Chocolate
            </Typography>
          </Grid>
        </Box>

        <Box flexGrow={1} display={"flex"} flexDirection={"column"}>
          <Grid item xs={12} md={3} sm={6}>
            <Typography variant="h5" fontFamily={"serif"}>
              Policies
            </Typography>
            <hr style={{ width: "25%" }} />

            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Terms & Conditions
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Privacy Policy
            </Typography>
            <Typography
              variant="h6"
              fontFamily={"serif"}
              fontWeight={300}
              fontSize={18}
              className="mb-2"
            >
              Shipping Policy
            </Typography>
          </Grid>
        </Box>
      </Box>
      <Box className="my-3">
        <hr></hr>
        <Typography
          variant="h6"
          fontWeight={300}
          fontSize={18}
          className="mb-2"
        >
          © Copyright 2023 | Powered by Nidhi Tulsyan
        </Typography>
      </Box>
    </>
  );
}
