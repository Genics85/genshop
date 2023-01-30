import React, { useState } from "react";
import "./newproduct.scss";
import {
  Container,
  Col,
  Row,
  Form,
  Card,
  Button,
  Alert,
} from "react-bootstrap";
import axios from "../../api/axios";

function NewProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [success, setSuccess] = useState(false);

  const formData = new FormData();
  formData.append("image", image);
  formData.append("name", name);
  formData.append("price", price);
  formData.append("category", category);

  const handleName = (e) => {
    setName(e.target.value);
  };
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };
  const handleSelect = (e) => {
    setCategory(e.target.value);
  };
  const clearInputs=(e)=>{
    setName("");
    setPrice("");
    setImage(null);
  }

  const handleSubmit = async (e) => {
    setSuccess(false);
    e.preventDefault();
    const config = {
      headrs: {
        "content-type": "multipart/form-data",
      },
    };
    try {
      const response = await axios.post("/product/upload", formData, config);
      if (response) setSuccess(true);
      clearInputs();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="vh-100 center newproduct">
      <Container className="">
        <Row className="">
          <Col className=" center">
            <Card className="form-card">
              <Form className="p-5" onSubmit={handleSubmit}>
                {success ? (
                  <Alert
                    key={"upload success"}
                    variant={"success"}
                    onClose={() => setSuccess(false)}
                    dismissible
                  >
                    Upload was successful
                  </Alert>
                ) : (
                  <></>
                )}
                <h4 className="center">Add New Product</h4>
                <Form.Group className="mb-3">
                  <Form.Label>Name:</Form.Label>
                  <Form.Control
                    value={name}
                    type="text"
                    placeholder="Enter Item name"
                    required
                    onChange={handleName}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Price:</Form.Label>

                  <Form.Control
                    value={price}
                    type="text"
                    placeholder="Enter product price"
                    required
                    onChange={handlePrice}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select Category</Form.Label>
                  <Form.Select onChange={handleSelect}>
                    <option value="fashion">Fashion</option>
                    <option value="home">Home & office</option>
                    <option value="grocery">Grocery</option>
                    <option value="electronics">electronics</option>
                    <option value="health">Health & Beauty</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Select the image of the product</Form.Label>
                  <Form.Control
                    type="file"
                    accept="image/*"
                    required
                    onChange={handleImage}
                  />
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
