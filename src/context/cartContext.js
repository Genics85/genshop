import { createContext, useState } from "react";
export const CartContext = createContext({});
export const CartProvider = ({ children }) => {
  const [cart,setCart] = useState([ ]);

  const addToCart=(item)=>{
    console.log(typeof(cart));
    let present=false;
    cart.forEach((product)=>{
      if(product.img==item.img){
        present=true;
      }
    });
    if(present) return;
    cart.push(item);
    setCart(cart);
  }

  return (
    <CartContext.Provider value={{ cart, addToCart}}>
      {children}
    </CartContext.Provider>
  );
};

