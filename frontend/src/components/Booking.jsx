import { Box, Button, Grid, List, ListItem, Typography } from '@mui/material'
import React from 'react'
import CircleIcon from '@mui/icons-material/Circle';

export default function Booking() {
  return (
    <Box flexGrow={1} display={"flex"} flexDirection={"row"} justifyContent={"space-evenly"} sx={{margin:"5%"}}>
    <Box display={"flex"}>
        <Grid xs={12} sm={12} md={6} >
        <img
              src="https://www.roasterycoffee.co.in/cdn/shop/products/roastery-espresso-blend-scaled.jpg?v=1634210314"
              
              style={{maxWidth:'469px',maxHeight:'470px'}}
              alt="logo"
        /> 
        </Grid>
    </Box>

    <Box display={"flex"} flexDirection={"column"}>
    <Grid xs={12} sm={12} md={6}>
    <Box sx={{width:'70%',marginLeft:'auto'}}>
         <Typography variant='h3' fontFamily={'serif'}>coofee name</Typography>
         <Typography variant='h5' fontFamily={'serif'} sx={{color:'#b8784e'}}>Rs 445</Typography>
         <br></br>
         <Typography variant='h6' fontFamily={'sans'}>Who can say no to a good mild espresso for someone who keep sipping espresso all through day. This special blend has been designed by our roasting team.</Typography>
         <Typography component="div" fontFamily={"serif"} >
         <ol className='mt-3 mb-3' style={{fontFamily:'sans',fontSize:'large'}}>
            <li><CircleIcon fontSize='2px' /><strong> Origin:- </strong>60% Mandalkhan 30% HSD, 10% Monsoon Malabar.</li>
            <li><CircleIcon fontSize='2px' /><strong> Roast Type:-</strong> Espresso Roast.</li>
            <li><CircleIcon fontSize='2px' /><strong> Tasting Notes:-</strong> Dark chocolate and Raspberry.</li>
            <li><strong>Free shipping across India.</strong></li>
         </ol>
</Typography>

<Button
          variant="contained"
          
          size="large"
          sx={{ width: "100%",fontFamily:'serif' }}
          color="firstnav"
        
        >
          Add To Cart
        </Button>
  
    </Box>
        </Grid>
    </Box>

    </Box>
    
  )
}
