import React from 'react'
import {useLocation} from "react-router-dom"

function Groceries() {
  const location=useLocation();
  const {state}= location;
  console.log(state.you);
  return (
    <div>{state.you}</div>
  )
}

export default Groceries