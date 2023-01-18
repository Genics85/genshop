import React from "react";
import SingleProduct from "../singleProduct/SingleProduct";
import useRefreshToken from "../../hooks/useRefreshToken";

function Fashion() {

  const refresh=useRefreshToken();
  return (
    <div>
      <SingleProduct/>
      <button onClick={()=>refresh()}> click me sucker</button>
    </div>
  );
}

export default Fashion;
