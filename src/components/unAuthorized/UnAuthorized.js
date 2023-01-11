import React from 'react'
import {useNavigate} from "react-router-dom";

function UnAuthorized() {

    const navigate=useNavigate();
    const goBack=()=> navigate(-1);
  return (
    <div>
        <h2>UnAuthorized</h2>
        <button onClick={goBack}>Go Back</button>
    </div>
  )
}

export default UnAuthorized