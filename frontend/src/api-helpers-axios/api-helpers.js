import axios from 'axios';
export const getallcoffee = async()=>{
    const res = await axios.get("/product/getproduct").catch((err) => console.log(err));
    if (res.status !== 200) {
      return console.log("no data");
    }
    const data = await res.data;
    return data;

}