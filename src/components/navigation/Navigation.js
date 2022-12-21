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
} from "react-bootstrap-icons";
import NavDropdown from "react-bootstrap/NavDropdown";
import "./navigation.css";
import { Link, NavLink } from "react-router-dom";

function Navigation() {
  return (
    <>
      <header className="bg-light d-none d-sm-block">
        <Container fluid>
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
      <Navbar className="navbar" bg="dark" expand="lg" variant="dark" sticky="top">
        <Container fluid>
          <Navbar.Brand href="#" className="d-flex gap-2 center">
            <img
              alt="brand logo"
              height={"38px"}
              src="https://c8.alamy.com/comp/2D6FTN0/breaking-news-minimalistic-logo-icon-for-news-entertaining-show-sign-banner-vector-illustration-2D6FTN0.jpg"
            />
            <h5>Breaking News</h5>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link as={NavLink} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/sports">Sports</Nav.Link>

              <NavDropdown title="Finance" id="navbarScrollingDropdown">
                <NavDropdown.Item as={Link} to="/crypto">
                  Crypto
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/forex">
                  Forex
                </NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/stocks">
                  Stocks
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/finance">
                  General
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={NavLink} to="/lifestyle">
                Lifestyle
              </Nav.Link>
              <Nav.Link as={NavLink} to="/politics">
                Politics
              </Nav.Link>
              <Nav.Link as={NavLink} to="/socialmedia">
                Social media
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search for news"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-light">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Navigation;
