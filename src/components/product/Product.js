import { Col, Container, Image, Row } from "react-bootstrap";
import { Dash, Plus } from "react-bootstrap-icons";
import {useState} from "react";
import "./product.scss";
function Product() {
    const[number,setNumber]=useState();

    const handleAdd=()=>{
        setNumber(number+1);
    }
    const handleRemove=()=>{
        setNumber(number-1);
    }
  return (
    <main>
      <Container>
        <Row>
          <Col className="col-12 col-md-7">
            <Image className="mb-3" src="" />
            <div className="buttons">
              <Button onClick={handleAdd}>
                <Plus />
              </Button>
              <>|</>
              <Button onClick={handleRemove}>
                <Dash />
              </Button>
            </div>
            <p>{number}</p>
          </Col>
          <Col className="col-12 col-md-5"></Col>
        </Row>
      </Container>
    </main>
  );
}

export default Product;
