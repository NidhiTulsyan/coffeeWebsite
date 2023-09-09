import React from "react";
import {
    Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

export default function Card1() {
  return (
    <Grid item xs={3} md={3}>
    <Card sx={{ maxWidth: 345,margin:'5px' }} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="auto"
          image="https://www.roasterycoffee.co.in/cdn/shop/products/roastery-espresso-milk-blend1-scaled.jpg?v=1634210318"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" textAlign="center" fontFamily='Sans' fontSize='large'>
          Baarbara Estate - Pineapple Process
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{color:'#b8784e'}}>
           Rs.500
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          variant="contained"
          href="#contained-buttons"
          size="large"
          sx={{ width: "100%",fontFamily:'serif' }}
          color="firstnav"
        
        >
          Add To Cart
        </Button>
      </CardActions>
    </Card>
    </Grid>
  );
}
