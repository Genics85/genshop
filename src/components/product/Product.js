import { Col, Container, Image, Row, Button } from "react-bootstrap";
import {
  BoxSeam,
  Dash,
  HandThumbsUp,
  Plus,
  Truck,
} from "react-bootstrap-icons";
import { useState } from "react";
import "./product.scss";
function Product() {
  const [number, setNumber] = useState(0);

  const handleAdd = () => {
    setNumber(number + 1);
  };
  const handleRemove = () => {
    if (number < 1) return;
    setNumber(number - 1);
  };
  return (
    <main className="vh-100 pt-5">
      <Container>
        <Row>
          <Col className="col-12 col-lg-7 center flex-column">
            <Image
              className="mb-3"
              width={"60%"}
              src="https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/004223/1.jpg?0775"
            />
            <div className="buttons d-flex my-2">
              <Button onClick={handleAdd}>
                <Plus size={"30px"} />
              </Button>
              <div className="m-2">|</div>
              <Button onClick={handleRemove}>
                <Dash size={"30px"} />
              </Button>
            </div>
            <h4>{number}</h4>
          </Col>
          <Col className="col-12 col-lg-5 center flex-column">
            <h4>Golden Morn</h4>
            <h5>$3.99</h5>
            <div className=" col-12 d-flex gap-2 my-3">
              <Button className="add-to-cart w-50">Add to cart</Button>
              <Button className="make-payment w-50"> Make Payment</Button>
            </div>
            <div className="d-flex gap-3 my-3">
              <div className="free-shipping d-flex gap-2 ">
                <Truck size={"40px"} />
                <span className=" desc m-0 p-0 ">
                  FREE
                  <br />
                  SHIPPING
                </span>
              </div>
              <div className="guarantee d-flex gap-2">
                <HandThumbsUp size={"40px"} />
                <span className="desc">
                  LIFETIME
                  <br /> GUANRANTEE
                </span>
              </div>
              <div className="free-return d-flex gap-2">
                <BoxSeam size={"40px"} />
                <span className="desc">
                  FREE <br /> RETURNS
                </span>
              </div>
            </div>
            <hr />
            <p align="justify">
              Deserunt cillum est exercitation mollit magna dolor in mollit
              laboris. Magna ut Lorem id cillum aute aute. Amet non mollit ad
              commodo reprehenderit sunt pariatur veniam id irure. Deserunt
              cillum est exercitation mollit magna dolor in mollit laboris.
              Magna ut Lorem id cillum aute aute. Amet non mollit ad commodo
              reprehenderit sunt pariatur veniam id irure.
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
}

export default Product;
