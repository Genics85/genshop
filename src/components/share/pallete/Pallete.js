import { Card, Container, Row, Col } from "react-bootstrap";
import { NavLink} from "react-router-dom";
import { CaretRight } from "react-bootstrap-icons";
import Items from "../items/Items";
import "./pallete.scss";

function Pallete({category,items,path}) {
  const handleOnClick=()=>{
    
  }
  return (
    <>
      <Card onClick={handleOnClick} className="mb-3" style={{height:"310px"}}>
        <Card.Header className="center-space cardheader">
          <Container>
            <Row>
              <Col className="col-12 col-sm-9">
                <h5>Top Deals | {category}</h5>
              </Col>
              <Col className="col-3 col-sm-3 ">
                <NavLink
                  to={path}
                  className="d-flex align-items-center end"
                >
                  <p className="mb-0 ">SEE ALL </p>
                  <CaretRight />
                </NavLink>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Container className="pallete-body">
          <Row >
            <Col>
              <Card.Body className="d-flex flex-row flex-nowrap overflow-auto gap-1 items-container">
                {items.map((item,i)=>{
                  return (

                    <Items key={i} name={item.name} price={item.price} img={item.img} path={path}/>
                  );
                })}
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default Pallete;
