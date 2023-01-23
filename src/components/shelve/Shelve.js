import { useEffect } from "react";
import axios from "../../api/axios";

function Shelve() {
  const getProducts = async () => {
    const response = axios.get("/product/grocery");
    console.log(response);
  };

  useEffect(() => {
    getProducts();
  }, []);
  return <div>Shelve</div>;
}

export default Shelve;
