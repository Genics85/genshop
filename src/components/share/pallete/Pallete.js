import { Card, Container, Row, Col, Spinner } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { CaretRight } from "react-bootstrap-icons";
import { useState } from "react";
import Items from "../items/Items";
import "./pallete.scss";

function Pallete({ category, items, path,loading }) {

  return (
    <>
      <Card style={{ height: "310px" }} className="mb-3">
        <Card.Header className="center-space cardheader">
          <Container>
            <Row>
              <Col className="col-12 col-sm-9">
                <h5>Top Deals | {category}</h5>
              </Col>
              <Col className="col-3 col-sm-3 ">
                <NavLink to={path} className="d-flex align-items-center end">
                  <span className="mb-0 see-all">SEE ALL</span>
                  <CaretRight />
                </NavLink>
              </Col>
            </Row>
          </Container>
        </Card.Header>
        <Container className="pallete-body">
          <Row>
            <Col>
              <Card.Body className={`d-flex flex-row flex-nowrap overflow-auto gap-1 items-container ${loading? "center":""} `}>
                {loading ? (
                  <Spinner animation="border" role="status" className="center" />
                ) : (
                  items.map((item, i) => {
                    return (
                      <Items
                        key={i}
                        name={item.name}
                        price={item.price}
                        img={item.img}
                        path={path}
                      />
                    );
                  })
                )}
              </Card.Body>
            </Col>
          </Row>
        </Container>
      </Card>
    </>
  );
}

export default Pallete;
