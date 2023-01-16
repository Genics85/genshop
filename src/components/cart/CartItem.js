import "./cart.scss";
import { useState } from "react";
import { Button, Col, Image } from "react-bootstrap";
import { Dash, Plus, Trash } from "react-bootstrap-icons";

function CartItem() {
    const[counter,setCounter]=useState(1);
    const handleAdd=()=>{
        setCounter(counter+1);
    }
    const handleRemove=()=>{
        if(counter<2)return;
        setCounter(counter-1);
    }

  return (
    <Col className="cart-item center-space">
      <Image
        className="mb-3"
        width={"18%"}
        src="https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/004223/1.jpg?0775"
      />
      <div className="description">
        <p>Cereal</p>
        <h5>Golden Morn</h5>
      </div>
      <div className="number-button d-flex gap-2">
        <Button className="number-change" onClick={handleRemove}>
          <Dash size={"20px"} />
        </Button>
        <h5>{counter}</h5>
        <Button className="number-change" onClick={handleAdd}>
          <Plus size={"20px"}/>
        </Button>
      </div>
      <h5>$2.99</h5>
      <Button>
        <Trash />
      </Button>
    </Col>
  );
}

export default CartItem;
