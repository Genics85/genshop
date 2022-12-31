import React from "react";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./items.scss";

function Items() {
  var description =
    "Something is supposed to be here before the whole work is complete in my opinion";
  return (
    <Container fluid className="px-0">
      <Row className="no-gutters px-0">
        <Col >
          <Card className="item-card">
            <Card.Img
              variant="top"
              width={"40px"}
              src="https://gh.jumia.is/unsafe/fit-in/300x300/filters:fill(white)/product/06/004223/1.jpg?0775"
            />
            <Card.Body>
              <Card.Text>
                {description.length > 25
                  ? `${description.slice(0, 25)}...`
                  : description}
              </Card.Text>
              <h5>GH₵‎ 2.99</h5>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Items;
