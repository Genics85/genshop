import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {
  Telephone,
  EnvelopeAt,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Cart3,
} from "react-bootstrap-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navigation.scss";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header className="bg-light d-none d-sm-block">
        <Container>
          <Row className="header-info">
            <Col className="center gap-3 header-contact">
              <a className="center gap-1" href="nothing.com">
                <Telephone />
                <p className="text-center mb-0">+345678123</p>
              </a>
              <a className="center gap-1" href="nothing.com">
                <EnvelopeAt />
                <p className="mb-0">info@breakingnews.com</p>
              </a>
            </Col>
            <Col className="center gap-2 header-socials">
              <a href="something.com">
                <Facebook />
              </a>
              <a href="something.com">
                <Instagram />
              </a>
              <a href="something.com">
                <Twitter />
              </a>
              <a href="something.com">
                <Linkedin />
              </a>
            </Col>
          </Row>
        </Container>
      </header>
      <Navbar
        className="navbar"
        bg="dark"
        expand="lg"
        variant="dark"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="#" className="d-flex gap-2 center">
            <img
              alt="brand logo"
              height={"38px"}
              src={
                "https://cdn.dribbble.com/users/89278/screenshots/14699627/media/a9f2ce1335cc8f4868c109f1fdd9ec58.png?compress=1&resize=400x300"
              }
            />
            <h5>Shoppy</h5>
          </Navbar.Brand>
          <Link to="/cart" className="cart-button d-block d-lg-none">
            <Cart3 size={"30px"} className=" cart-icon text-white mx-2" />
            <span className="cart-badge center">4</span>
          </Link>
          <Navbar.Toggle aria-controls="navbarScroll" />

          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/groceries">
                Groceries
              </Nav.Link>

              <NavDropdown title="Electronics" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/laptops">
                  Laptops
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/phones">
                  Phones
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/drones">
                  Drones
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/accessories">
                  Accessories
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/health&beauty">
                Health & Beauty
              </Nav.Link>
              <Nav.Link as={NavLink} to="/fashion">
                Fashion
              </Nav.Link>
              <Nav.Link as={NavLink} to="/home&office">
                Home & Office
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for items"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
          <Link to="/cart" className="cart-button d-none d-lg-block">
            <Cart3 size={"30px"} className=" cart-icon text-white mx-2" />
            <span className="cart-badge center">3</span>
          </Link>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
