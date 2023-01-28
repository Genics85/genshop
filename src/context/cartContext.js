import { createContext, useState, useEffect } from "react";
export const CartContext = createContext({});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [numberOfItems, setNumberOfItems] = useState(0);
  const [totalAmount, setTotalAmount] = useState(0);

  const changeItemCounter = (item) => {
    let object = cart.findIndex((obj) => obj.img == item.img);
    cart[object].counter = item.counter;
    calculateTotalAmount(cart);
  };

  const calculateTotalAmount = (items) => {
    let total = 0;
    items.forEach((item) => {
      total = parseInt(item.counter*item.price) + total;
    });
    setTotalAmount(total);
  };

  const addToCart = (item) => {
    let present = false;
    cart.forEach((product) => {
      if (product.img === item.img) {
        present = true;
      }
    });
    if (present) return;
    cart.push(item);
    setCart(cart);
    calculateTotalAmount(cart);
    setNumberOfItems(cart.length);
  };

  const removeFromCart = (img) => {
    setNumberOfItems(cart.length - 1);
    let newCart = cart.filter((product) => product.img != img);
    calculateTotalAmount(newCart);
    setCart(newCart);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        numberOfItems,
        totalAmount,
        changeItemCounter,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
