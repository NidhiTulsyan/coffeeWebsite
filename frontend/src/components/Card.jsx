import React from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Link,
  Typography,
} from "@mui/material";

export default function Card1(props) {
  return (
    <Grid item xs={12} md={3} sm={6}>
    <Card sx={{ maxWidth: 345,margin:'5px',border:'none',boxShadow:'none' }} >
      <CardActionArea >
        <CardMedia
          component="img"
          height="250px"
          // image="https://www.roasterycoffee.co.in/cdn/shop/products/roastery-espresso-milk-blend1-scaled.jpg?v=1634210318"
          image={props.url}
          
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" textAlign="center" fontFamily='Sans' fontSize='large'>
          {/* Baarbara Estate - Pineapple Process */}
          {props.title}
          </Typography>
          <Typography variant="body2" textAlign="center" sx={{color:'#b8784e'}}>
          {props.price}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button
          variant="contained"
          href={`/booking/${props.id}`}
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
