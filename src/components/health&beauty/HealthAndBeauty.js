import { useEffect, useState } from "react";
import {useLocation} from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap";
import axios from "../../api/axios";
import SingleProduct from "../singleProduct/SingleProduct";

function Shelve() {
  const [items, setItems] = useState([]);

  const location=useLocation();
  const {state}= location;
  const category=state.category;

  const getProducts = async () => {
    await axios.get(`/product/${category}`).then((response) => {
      const listItems = response.data;
      setItems(listItems);
    });
  };

  useEffect(() => {
    getProducts();
  }, []);
  return (
    <main>
      <Container className="shelve p-3">
        {items.map((item,i) => {
          return (
            <Col className="col-12 col-md-3 mb-4" key={i}>
              <SingleProduct
                price={item.price}
                name={item.name}
                img={item.img}
              />
            </Col>
          );
        })}
      </Container>
    </main>
  );
}

export default Shelve;
