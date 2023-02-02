import { useEffect, useState } from "react";
import { Col, Container, Card, Image, Button } from "react-bootstrap";
import axios from "../../api/axios";

function Shelve() {
  const [items, setItems] = useState([]);
  const [deleted, setDeleted] = useState(false);

  const getProducts = async () => {
    await axios.get(`/product/getAll`).then((response) => {
      const listItems = response.data;
      setItems(listItems);
    });
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`/product/delete/${id}`);
      setDeleted(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, [deleted]);

  return (
    <main>
      <Container className="shelve p-3">
        {items.map((item, i) => {
          return (
            <Col className="col-12 col-md-3 mb-4" key={i}>
              <div className="center">
                <Col className="col-11">
                  <Card className="center py-4">
                    <Image
                      className="mb-3"
                      style={{ height: "100px" }}
                      width={"40%"}
                      src={item.img}
                    />
                    <p align="center">{item.name}</p>
                    <p>$ {item.price}</p>
                    <div className="d-flex gap-3">
                      <Button
                        onClick={() => handleDelete(item._id)}
                        className="add-cart px-5 bg-danger"
                      >
                        DELETE ITEM
                      </Button>
                    </div>
                  </Card>
                </Col>
              </div>
            </Col>
          );
        })}
      </Container>
    </main>
  );
}

export default Shelve;
