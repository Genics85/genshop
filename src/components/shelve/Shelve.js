import { useEffect, useState } from "react";
import {Col,Container,Row} from "react-bootstrap";
import "./shelve.scss";
import axios from "../../api/axios";
import SingleProduct from "../singleProduct/SingleProduct";

function Shelve() {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    await axios.get("/product/grocery").then((response) => {
      const listItems = response.data;
      setItems(listItems);
      console.log(items);
    });
  };

  useEffect(() => {
    getProducts();
    console.log(items);
  }, []);
  return (
    <Container className="shelve p-3">
      {items.map((item) => {
        return (
          <Col className="col-12 col-md-3 mb-4">
            <SingleProduct price={item.price} name={item.name} img={item.img} />
          </Col>
        );
      })}
    </Container>
  );
}

export default Shelve;
