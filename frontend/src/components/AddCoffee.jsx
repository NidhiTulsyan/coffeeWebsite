import { Box, Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";

export default function AddCoffee() {
  const [input, setinput] = useState({
    title: "",
    description: "",
    price: "",
    productUrl: "",
  });
  const handlechange = (e) => {
    setinput((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };
  return (
    <div className="text-center">
      <Box marginX={10}>
        <Typography variant="h4" fontFamily={"serif"} marginY={5}>
          Add New Coffee Products
        </Typography>
        <form onSubmit={handlesubmit}>
          <Box className="my-4 ">
            <TextField
              variant="outlined"
              type="text"
              placeholder="Enter Title For Coffee"
              name="title"
              value={input.title}
              onChange={handlechange}
              fullWidth="true"
              sx={{ width: "70%" }}
              required

            ></TextField>
          </Box>

          <Box className="my-4 ">
            <TextField
              variant="outlined"
              type="text"
              multiline="true"
              minRows={3}
              placeholder="Enter Description For Coffee"
              name="description"
              value={input.description}
              onChange={handlechange}
              fullWidth="true"
              sx={{ width: "70%" }}
              required
            ></TextField>
          </Box>

          <Box className="my-4 ">
            <TextField
              variant="outlined"
              type="number"
              placeholder="Enter price For Coffee"
              name="price"
              value={input.price}
              onChange={handlechange}
              fullWidth="true"
              sx={{ width: "70%" }}
              required

            ></TextField>
          </Box>

          <Box className="my-4 ">
            <TextField
              variant="outlined"
              type="text"
              placeholder="Enter URL For Coffee"
              name="productUrl"
              value={input.productUrl}
              onChange={handlechange}
              fullWidth="true"
              sx={{ width: "70%" }}
              required

            ></TextField>
          </Box>

          <Box className="my-4 ">
            <Button
              variant="contained"
              color="firstnav"
              fullWidth="True"
              type="submit"
              sx={{ width: "70%", height: "55px" }}
            >
              Add
            </Button>
          </Box>
        </form>
      </Box>
    </div>
  );
}
