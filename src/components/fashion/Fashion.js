import { useEffect, useState } from "react";
import { Col, Container,Spinner } from "react-bootstrap";
import axios from "../../api/axios";
import SingleProduct from "../singleProduct/SingleProduct";

function Shelve() {
  const [items, setItems] = useState([]);
  const[loading,setLoading]=useState(true);
  const getProducts = async () => {
    await axios.get(`/product/fashion`).then((response) => {
      const listItems = response.data;
      setItems(listItems);
    });
  };
  
  useEffect(() => {
    getProducts();
    setLoading(false);
  }, []);
  return (
    <main>
      <Container className={`shelve p-3 ${loading?"center":""}`}>
      {loading ? (
          <Spinner animation="border" role="status" />
        ) : (
          items.map((item, i) => {
            return (
              <Col className="col-12 col-md-3 mb-4" key={i}>
                <SingleProduct
                  price={item.price}
                  name={item.name}
                  img={item.img}
                />
              </Col>
            );
          })
        )}
      </Container>
    </main>
  );
}

export default Shelve;
