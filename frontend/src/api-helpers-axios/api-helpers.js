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
  const res = await axios.get(`/product/${id}`).catch((err) => {
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