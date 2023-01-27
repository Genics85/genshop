import { createContext, useState, useEffect } from "react";
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {

  const [cart,setCart] = useState([ ]);
  const [numberOfItems,setNumberOfItems]=useState(0);

  const addToCart=(item)=>{
    let present=false;
    cart.forEach((product)=>{
      if(product.img===item.img){
        present=true;
      }
    });
    if(present) return;
    cart.push(item);
    setCart(cart)
    console.log(cart)
  }

  useEffect(()=>{
    setNumberOfItems(cart.length);
    console.log("running change");
  },[cart]);

  return (
    <CartContext.Provider value={{ cart,addToCart,numberOfItems}}>
      {children}
    </CartContext.Provider>
  );
};

