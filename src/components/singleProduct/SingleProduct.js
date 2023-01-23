import "./singleProduct.scss";
import { Card, Container, Row, Col, Image, Button } from "react-bootstrap";


function SingleProduct({name,price,img}) {
  return (
    <div>
              <Container>
        <Row>
          <Col className="col-3">
            <Card className="center py-4">
              <Image
                className="mb-3"
                width={"40%"}
                src="https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/004223/1.jpg?0775"
              />
              <p align="center">
                {name}
              </p>
              <p>
                $ {price}
              </p>
              <div className="d-flex gap-3">
                <Button className="buy-button">Buy</Button>
                <Button>Add to Cart</Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default SingleProduct