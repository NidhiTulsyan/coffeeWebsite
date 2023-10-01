import axios from 'axios';
export const getallcoffee = async()=>{
    const res = await axios.get("/product").catch((err) => console.log(err));
    if (res.status !== 200) {
      return console.log("no data");
    }
    const data = await res.data;
    return data;

}

export const getcoffeebyid = async(id)=>{
  const res = await axios.get(`/product/coffee/${id}`).catch((err) => {
    console.log(err);
  });
  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const coffeedata = await res.data;
  return coffeedata;
}


export const getuserlogin = async(data)=>{
  const res = await axios.post('/user/login',{
email:data.email,
password:data.password
  }).catch((err)=>{
    console.log(err);
  })
  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const userlogin = await res.data;
  return userlogin;
}
export const getadminlogin = async(data)=>{
  const res = await axios.post('/admin/login',{
email:data.email,
password:data.password
  }).catch((err)=>{
    console.log(err);
  })
  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const adminlogin = await res.data;
  return adminlogin;
}

export const getusersignup = async(data)=>{
  const res = await axios.post('/user/signup',{
    name:data.name,
email:data.email,
password:data.password
  }).catch((err)=>{
    console.log(err);
  })
  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const usersignup = await res.data;
  return usersignup;
}

export const AddCoffeeByAdmin = async(data)=>{
  const res = await axios.post("/product/addproduct",{
    title:data.title,
    description:data.description,
    productUrl:data.productUrl,
    price:data.price
  },{
    headers:{
      token:`${localStorage.getItem("admintoken")}`
    }
  }).catch((err)=>console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const Addcoffee = await res.data;
  return Addcoffee;
}


export const productsbyadminid= async(data)=>{
  const res = await axios.get("/product/prodadmin").catch((err)=>console.log(err));

  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const Addcoffee = await res.data;
  return Addcoffee;
}

export const deletecoffeebyid = async(id)=>{
  const res = await axios.delete(`/product/coffeeDeleted/${id}`).catch((err)=>console.log(err));
  if (res.status !== 200) {
    return console.log("Unexpected Error Occured");
  }
  const coffeeDeleted = await res.data;
  return coffeeDeleted;
} 