import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

function NavigationBar() {
  return (
    <Navbar className='p-0' sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Brand href="/">
            <img
              src="images/logo.png"
              width="200"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={NavLink} to="/" exact>Home</Nav.Link>
            <Nav.Link as={NavLink} to="/speisekarten">Speisekarten</Nav.Link>
            <Nav.Link as={NavLink} to="/gallery">Gallery</Nav.Link>
            <Nav.Link as={NavLink} to="/reservation">Reservation</Nav.Link>
            <Nav.Link as={NavLink} to="/onlineBestellung">Online Bestellung</Nav.Link>
            <Nav.Link as={NavLink} to="/kontakt">Kontakt</Nav.Link>
            <Nav.Link as={NavLink} to="/uberUns">Uber Uns</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;