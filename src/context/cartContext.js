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
    setNumberOfItems(cart.length);
  }

  const removeFromCart=(img)=>{
    setNumberOfItems(cart.length-1);
    let newCart=cart.filter((product)=>product.img!=img);
    setCart(newCart);
    console.log("removing in progress")
  }
  
  return (
    <CartContext.Provider value={{ cart,addToCart,removeFromCart,numberOfItems}}>
      {children}
    </CartContext.Provider>
  );
};

