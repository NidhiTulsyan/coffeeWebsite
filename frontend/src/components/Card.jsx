import React, { useContext } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { CartContext } from "./Context";
import { useNavigate } from "react-router-dom";

export default function Card1(props) {
  const { isOnItem } = props;
  const { cart, setcart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleclick = (e) => {
    setcart(cart.filter((f) => f.title !== props.title));
    // localStorage.setItem("item",JSON.stringify(cart));

    navigate("/cart");
    // console.log("removed",cart);
  };
  return (
    <Grid item xs={12} md={3} sm={6}>
      <Card
        sx={{ maxWidth: 345, margin: "5px", border: "none", boxShadow: "none" }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="250px"
            // image="https://www.roasterycoffee.co.in/cdn/shop/products/roastery-espresso-milk-blend1-scaled.jpg?v=1634210318"
            image={props.url}
            alt="green iguana"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              textAlign="center"
              fontFamily="Sans"
              fontSize="large"
            >
              {props.title}
            </Typography>
            <Typography
              variant="body2"
              textAlign="center"
              sx={{ color: "#b8784e" }}
            >
              {props.price}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          {!isOnItem ? (
            <Button
              variant="contained"
              href={`/booking/${props.id}`}
              size="large"
              sx={{ width: "100%", fontFamily: "serif" }}
              color="firstnav"
            >
              Add to Cart
            </Button>
          ) : (
            <Button
              variant="contained"
              size="large"
              sx={{ width: "100%", fontFamily: "serif" }}
              color="firstnav"
              id={props.title}
              onClick={handleclick}
            >
              remove to Cart
            </Button>
          )}
        </CardActions>
      </Card>
    </Grid>
  );
}
