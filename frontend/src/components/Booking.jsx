import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import "../Style.css";
import Usp from "./Usp";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import { CartContext } from "./Context";

export default function Booking() {
  const { cart, setcart } = useContext(CartContext);
  const navigate = useNavigate();
  const id1 = useParams().id;
  const [title, settitle] = useState();
  const [price, setprice] = useState();
  const [desc, setdesc] = useState();
  const [url, seturl] = useState();

  const isOnItem = cart.some((i) => i.title === title);
  // console.log("title is: ", title);
  // console.log("title is: ", url);

  // console.log("booking is on item", isOnItem);

  const handleclick = (e) => {
    setcart(cart.filter((f) => f.title !== title));
    console.log(cart);
    navigate("/cart");
  };

  useEffect(() => {
    fetch(`http://localhost:5000/product/coffee/${id1}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        settitle(data.product.title);
        setprice(data.product.price);
        setdesc(data.product.description);
        seturl(data.product.productUrl);

        console.log(data.product);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <Box
        flexGrow={1}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"space-evenly"}
        sx={{ margin: "5%" }}
      >
        <Box display={"flex"}>
          <Grid xs={12} sm={12} md={6}>
            <img
              // src="https://www.roasterycoffee.co.in/cdn/shop/products/roastery-espresso-blend-scaled.jpg?v=1634210314"
              src={url}
              style={{ maxWidth: "500px", maxHeight: "470px" }}
              alt="logo"
            />
          </Grid>
        </Box>

        <Box display={"flex"} flexDirection={"column"}>
          <Grid xs={12} sm={12} md={6}>
            <Box sx={{ width: "70%", marginLeft: "auto" }}>
              <Typography variant="h3" fontFamily={"serif"}>
                {title}
              </Typography>

              <Typography
                variant="h5"
                fontFamily={"serif"}
                sx={{ color: "#b8784e" }}
              >
                Rs. {price}
              </Typography>

              <br></br>
              <Typography variant="h6" fontFamily={"sans"}>
                Who can say no to a good mild espresso for someone who keep
                sipping espresso all through day. This special blend has been
                designed by our roasting team.
              </Typography>

              <Typography component="div" fontFamily={"serif"}>
                <div
                  className="mt-3 mb-3"
                  style={{ fontFamily: "sans", fontSize: "large" }}
                >
                  <li>
                    <strong> Origin:- </strong>60% Mandalkhan 30% HSD, 10%
                    Monsoon Malabar.
                  </li>
                  <li>
                    <strong> Roast Type:-</strong> Espresso Roast.
                  </li>
                  <li>
                    <strong> Tasting Notes:-</strong> Dark chocolate and
                    Raspberry.
                  </li>
                  <li>
                    <strong>Free shipping across India.</strong>
                  </li>
                </div>
              </Typography>

              {!isOnItem ? (
                <Button
                  variant="contained"
                  size="large"
                  sx={{ width: "100%", fontFamily: "serif" }}
                  color="firstnav"
                  onClick={() => {
                    const obj = { title, desc, price, url };
                    // setcart(cart.push(obj));
                    setcart([...cart, { title, desc, price, url }]);
                    localStorage.setItem("item", JSON.stringify(cart));
                    navigate("/cart");
                    console.log(cart);
                  }}
                >
                  Add to Cart
                </Button>
              ) : (
                <Button
                  variant="contained"
                  size="large"
                  sx={{ width: "100%", fontFamily: "serif" }}
                  color="firstnav"
                  id={title}
                  onClick={handleclick}
                >
                  remove to Cart
                </Button>
              )}

              <br></br>
              <br></br>

              <img
                src="https://cdn.shopify.com/s/files/1/0599/8342/9827/files/New_Project_38.png"
                alt=".."
              />
            </Box>
          </Grid>
        </Box>
      </Box>

      <Box className="m-5 mb-5">
        <Typography variant="h5" fontFamily={"serif"}>
          Description
        </Typography>
        <hr style={{ width: "8%" }}></hr>
        <Typography
          variant="p"
          fontFamily={"serif"}
          fontWeight={100}
          fontSize={20}
        >
          {desc} Who can say no to a good mild espresso for someone who keep
          sipping espresso all through day. This special blend has been designed
          by our roasting team. Who can say no to a good mild espresso for
          someone who keep sipping espresso all through day. This special blend
          has been designed by our roasting team to create an espresso that
          taste like citrus, lemon, bit of sweetness, light body and super
          smoothe.
        </Typography>
      </Box>

      <div className=" mb-5 text-center mt-5">
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
          <Grid container spacing={2} marginBottom={0}>
            <Usp
              src={
                "https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_ba3d98c6-363a-44ce-ba07-5319d9b58d9a_512x512.png?v=1637928592"
              }
              t1={"SPECIALITY COFFEE"}
              t2={"Speciality grade coffees that’s rated above 80+ on taste"}
            />
            <Usp
              src={
                "https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_2_512x512.png?v=1637928718"
              }
              t1={"  ROASTED FRESH"}
              t2={"  Freshly roasted, direct from our roastery"}
            />
            <Usp
              src={
                "https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_1_512x512.png?v=1637928677"
              }
              t1={"RESPONSIBLY SOURCED"}
              t2={" Organic and biodiverse coffee partners"}
            />
            <Usp
              src={
                "https://www.roasterycoffee.co.in/cdn/shop/files/imgpsh_fullsize_anim_3_512x512.png?v=1637928754"
              }
              t1={" DELICIOUS TASTE"}
              t2={" Making great taste accessible"}
            />
          </Grid>
        </div>
      </div>

      <div className=" ms-3 me-3 p-3">
        <Footer />
      </div>
    </>
  );
}
