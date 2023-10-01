import React, { createContext, useEffect, useState } from "react";

const initItem = [];
const getInitialState = () => {
  const item = localStorage.getItem("item");
  return item ? JSON.parse(item) : initItem;
};
export const CartContext = createContext();

export default function Context({ children }) {
  const [cart, setcart] = useState(getInitialState);
  const [userlogin,setuserlogin] = useState(false);
  const [adminlogin,setadminlogin] = useState(false);

  useEffect(() => {
    localStorage.setItem("item", JSON.stringify(cart));
  }, [cart]);

//   useEffect(()=>{
// localStorage.setItem("adminlogin",adminlogin);
//   },[adminlogin])

//   useEffect(()=>{
// localStorage.setItem("")
//   },[])
  return (
    <CartContext.Provider value={{ cart, setcart,userlogin,adminlogin,setadminlogin,setuserlogin }}>
      {children}
    </CartContext.Provider>
  );
}
