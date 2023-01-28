import "./cart.scss";
import { useState } from "react";
import { Button, Col, Image } from "react-bootstrap";
import { Dash, Plus, Trash } from "react-bootstrap-icons";
import { useCart } from "../../hooks/useCart";

function CartItem({ name, price, img }) {
  const { removeFromCart,changeItemCounter,cart } = useCart();
  const [counter, setCounter] = useState(1);

  const handleRemoveFromCart = () => {
    removeFromCart(img);
  };

  const handleAdd = () => {
    setCounter(counter + 1);
    changeItemCounter({img,counter});
    console.log(counter);
    console.log(cart)
  };

  const handleRemove = () => {
    if (counter <=1) return;
    setCounter(counter - 1);
    changeItemCounter({img,counter});
    console.log(cart)

  };

  return (
    <Col className="cart-item center-space">
      <img className="mb-3" src={img} height={"110px"} />
      <div className="description">
        <h5>{name}</h5>
      </div>
      <div className="number-button d-flex gap-2">
        <Button className="number-change" onClick={handleAdd}>
          <Plus size={"20px"} />
        </Button>
        <h5>{counter}</h5>
        <Button className="number-change" onClick={handleRemove}>
          <Dash size={"20px"} />
        </Button>
      </div>
      <h5>${price*counter}</h5>
      <Button>
        <Trash onClick={handleRemoveFromCart} />
      </Button>
    </Col>
  );
}

export default CartItem;
