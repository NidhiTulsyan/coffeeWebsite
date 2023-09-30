import React, { createContext, useEffect, useState } from 'react'


const initItem =[];
  const getInitialState = () => {
    const item = localStorage.getItem("item");
    return item ? JSON.parse(item) : initItem;
  };
export const CartContext = createContext();

export default function Context({children}) {
    const [cart, setcart] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem("item",JSON.stringify(cart));
      }, [cart]);
  return (
    <CartContext.Provider value={{cart,setcart}}>{children}
    </CartContext.Provider>
  )
}



  
  
  
  