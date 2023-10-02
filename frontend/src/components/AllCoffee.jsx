import React, { useEffect, useState } from "react";
import { getallcoffee } from "../api-helpers-axios/api-helpers";
import Card1 from "./Card";
import { Typography, Box, Grid } from "@mui/material";

export default function AllCoffee() {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    getallcoffee()
      .then((data) => setProduct(data.product))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="mt-5 mb-5 ms-5 me-5">
      <Typography
        variant="h3"
        align="center"
        marginBottom={4}
        fontFamily="serif"
        fontWeight={100}
        textTransform={"uppercase"}
      >
        Best Coffee...
      </Typography>
      <Box sx={{ flexGrow: 1 }} display="block" marginBottom={4}>
        <Grid container spacing={2}>
          {products.map((item) => {
            return (
              <Card1
                item={item}
                key={item._id}
                id={item._id}
                title={item.title}
                desc={item.description}
                price={item.price}
                url={item.productUrl}
              />
            );
          })}
        </Grid>
      </Box>
    </div>
  );
}
