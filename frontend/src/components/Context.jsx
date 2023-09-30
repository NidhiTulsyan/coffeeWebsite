import React, { createContext, useState } from 'react'


const initItem =[];
  const getInitialState = () => {
    const item = localStorage.getItem("item");
    return item ? JSON.parse(item) : initItem;
  };
export const CartContext = createContext(null);
export default function Context({children}) {
    const [cart, setcart] = useState(getInitialState);
  return (
    <CartContext.Provider value={{cart,setcart}}>{children}
    </CartContext.Provider>
  )
}



  
  
  
  