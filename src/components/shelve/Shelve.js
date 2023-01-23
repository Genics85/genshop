import { useEffect, useState } from "react";
import axios from "../../api/axios";
import SingleProduct from "../singleProduct/SingleProduct";

function Shelve() {
 const [items,setItems]=useState([]);

  const getProducts = async () => {
    const response = await axios.get("/product/grocery");
    setItems(response.data);
    console.log(items);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <div>
      {
        
      }
    </div>
  );
}

export default Shelve;
