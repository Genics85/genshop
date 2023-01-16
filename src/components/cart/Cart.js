import { Container, Col, Row, Form, Button } from "react-bootstrap";
import "./cart.scss";
import CartItem from "./CartItem";

function Cart() {
  return (
    <main className="cart pt-5">
      <Container>
        <Row>
          <Col className="left col-12 col-lg-7 bg-white">
            <div className="d-flex center-space">
              <h4>Shopping Cart</h4>
              <h5>3 items</h5>
            </div>
            <CartItem />
            <CartItem />
            <CartItem />
          </Col>
          <Col className="right col-12 col-lg-5">
            <h5>Summary</h5>
            <hr style={{ border: "solid grey 2px" }} />
            <div className="center-space my-3">
              <h5>items 3</h5>
              <h5>$2.99</h5>
            </div>
            <Form.Label>SHIPPING</Form.Label>
            <Form.Select>
              <option>Select Delivery type here</option>
              <option value="fashion">Standard Delivery $5</option>
              <option value="homeandoffice">Express Delivery $7</option>
              <option value="grocery">Low budget Delivery $3</option>
            </Form.Select>
            <div className="center-space my-3">
              <h5>TOTAL PRICE</h5>
              <h5>$45</h5>
            </div>
            <Button className="checkout-button w-100 my-3">CHECKOUT</Button>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Cart;
