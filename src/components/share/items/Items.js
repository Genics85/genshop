import { useNavigate } from "react-router-dom";
import { Card, Container, Row, Col } from "react-bootstrap";
import "./items.scss";

function Items({name,price,img}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/product",{items:{name,price,img}});
  };

  return (
    <Container fluid className="px-0" onClick={handleClick}>
      <Row className="no-gutters px-0">
        <Col>
          <Card className="item-card">
            <Card.Img
              variant="top"
              style={{ height: "150px" }}
              width={"40%"}
              src={img}
            />

            <Card.Body className="center">
              <div className="span-texts center">
                <span>{name}</span>
                <span>GH₵{price}</span>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Items;
