import { Nav, Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import ProtectedLink from "./ProtectedLink";
import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

function NavigationBar() {
  const { isAuthenticated, isLoading } = useAuth0();
  const user = useContext(UserContext);

  return (
    <Navbar className="p-0" sticky="top" bg="dark" variant="dark" expand="lg">
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
            {isLoading ? (
              <>loading</>
            ) : !isAuthenticated ? (
              <>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link as={NavLink} to="/uberUns">
                  Uber Uns
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/" exact>
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/speisekarten">
                  Speisekarten
                </Nav.Link>
                <Nav.Link as={NavLink} to="/gallery">
                  Gallery
                </Nav.Link>
                <Nav.Link as={NavLink} to="/reservation">
                  Reservation
                </Nav.Link>
                <Nav.Link as={NavLink} to="/onlineBestellung">
                  Online Bestellung
                </Nav.Link>
                <Nav.Link as={NavLink} to="/kontakt">
                  Kontakt
                </Nav.Link>
                <ProtectedLink
                  name="Users"
                  link="/admin"
                  user={user}
                  roles={["admin"]}
                />
                <Nav.Link as={NavLink} to="/uberUns">
                  Uber Uns
                </Nav.Link>
                <Nav.Link as={NavLink} to="/dashboard">
                  Dashboard
                </Nav.Link>
              </>
            )}
          </Nav>
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
