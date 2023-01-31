import { useEffect, useState } from "react";
import { Col, Container} from "react-bootstrap";
import axios from "../../api/axios";
import SingleProduct from "../singleProduct/SingleProduct";

function Shelve() {
  const [items, setItems] = useState([]);

  const getProducts = async () => {
    await axios.get(`/product/home`).then((response) => {
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
            <Col key={i} className="col-12 col-md-3 mb-4">
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
