import { CartContext } from "../context/cartContext";
import { useContext } from "react";

export const useCart=()=>{
    return useContext(CartContext);
}

