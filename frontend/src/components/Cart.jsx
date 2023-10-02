import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from './Context'
import { Box,Button,Grid, Typography } from '@mui/material';
import Card1 from './Card';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const navigate=useNavigate();
  const {cart} = useContext(CartContext);
  const [total, setTotal] = useState();
  useEffect(()=>{
    if(!localStorage.getItem("userlogin")){
      alert("logged in first to access cart page");
      navigate("/user-login");
  }
  })
  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  
  
  return (
    <div className='mx-5'>
    <Typography variant='h4' textAlign={'center'} marginBottom={4} marginTop={5}>Your cart is Ready</Typography>
    <Typography variant='h5'sx={{color:'#b8784e'}} textAlign={'center'} marginBottom={4} fontFamily={"serif"} marginTop={5}>Your Total: Rs.{total}</Typography>
  

    {cart.length===0?(<Typography variant='h6' textAlign={'center'} marginBottom={4} fontFamily={"serif"} marginTop={5}>Your Cart is Empty.....!</Typography>):(<Box sx={{ flexGrow: 1 }} display="block" marginBottom={5} marginTop={5}>
          <Grid container spacing={1}>
    { cart.map((item)=>{
  const isOnItem = cart.some((i) => i.title === item.title);
      return <Card1 isOnItem={isOnItem} key={item._id} id={item.id} title={item.title} desc={item.description} price={item.price} url={item.url} />
    })}
    </Grid>
    </Box>)}

   {cart.length !==0 &&  (<Button
    className='mb-5 '
          variant="contained"
          href='/payment'
          size="large"
          sx={{ width: "30%",fontFamily:'serif',marginLeft:'35%',color:'white'}}
          color="btn"
        >
          Buy Now
        </Button>)}
    </div>
  )
}
