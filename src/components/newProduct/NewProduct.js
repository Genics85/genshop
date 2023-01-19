import React, { useState } from "react";
import "./newproduct.scss";
import { Container, Col, Row, Form, Card, Button } from "react-bootstrap";

function NewProduct() {
  const [name,setName]=useState("");
  const [price,setPrice]=useState("");
  const [category,setCategory]=("");
  const [image,setImage]=("");

  return (
    <div className="vh-100 center newproduct">
      <Container className="">
        <Row className="">
          <Col className=" center">
            <Card className="form-card">
              <Form className="p-5">
                <h4 className="center">Add New Product</h4>
                <Form.Group className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Item name"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price:</Form.Label>

                  <Form.Control
                    type="text"
                    placeholder="Enter product price"
                    required
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select Category</Form.Label>
                  <Form.Select>
                    <option>Select product Category from here</option>
                    <option value="fashion">Fashion</option>
                    <option value="homeandoffice">Home & office</option>
                    <option value="grocery">Grocery</option>
                    <option value="electronics">electronics</option>
                    <option value="healthandbeauty">Health & Beauty</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select the image of the product</Form.Label>
                  <Form.Control type="file" required />
                </Form.Group>
                <Form.Group className="mb-3 center">
                  <Button type="submit">Add Product</Button>
                </Form.Group>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default NewProduct;
