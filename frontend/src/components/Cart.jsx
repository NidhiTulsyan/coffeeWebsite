import React, { useContext } from 'react'
import { CartContext } from './Context'
import { Box,Grid, Typography } from '@mui/material';
import Card1 from './Card';

export default function Cart() {
  const {cart} = useContext(CartContext);
  return (
    <div className='mx-5'>
    <Typography variant='h4' textAlign={'center'} marginBottom={4} marginTop={5}>Your cart</Typography>
    {cart.length==0?(<Typography variant='h6' textAlign={'center'} marginBottom={4}fontFamily={"serif"} marginTop={5}>Your Cart is Empty.....!</Typography>):(<Box sx={{ flexGrow: 1 }} display="block" marginBottom={4} marginTop={5}>
          <Grid container spacing={2}>
    { cart.map((item)=>{
      
      return <Card1  key={item._id} id={item._id} title={item.title} desc={item.description} price={item.price} url={item.url} />
    })}
    </Grid>
    </Box>)}
    </div>
  )
}
