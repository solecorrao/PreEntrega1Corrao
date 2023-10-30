import CartWidget from "../CartWidget/CartWidget"
import Button from "react-bootstrap/Button"
import Container from "react-bootstrap/Container"
import Form from "react-bootstrap/Form"
import Nav from "react-bootstrap/Nav"
import Navbar from "react-bootstrap/Navbar"
import NavDropdown from "react-bootstrap/NavDropdown"

const NavBar = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">OaBé Hamburguesería</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#action1">Home</Nav.Link>
            <Nav.Link href="#action2">Pizzas</Nav.Link>
            <NavDropdown title="Hamburguesas" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">De Carne</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Veggies
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Combos
              </NavDropdown.Item>
            </NavDropdown>
            {/* <Nav.Link href="#" disabled>
              Algo más?
            </Nav.Link> */}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Qué querés comer?"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <CartWidget />
    </Navbar>
  );
};

export default NavBar;
