/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";

function Dashboard() {
  useEffect(()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  },[])
  const { currentUser } = useContext(UserContext);

  if (!currentUser) {
    return null;
  }
  return (
    <Container className="mb-5">
      <Row className="align-items-center profile-header mb-5 text-center text-md-left">
        <Col md={2}>
          <img
            src={currentUser?.picture}
            alt="Profile"
            className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
          />
        </Col>
        <Col md>
          <h2 className="text-dark h1">{currentUser?.name}</h2>
          <h3 className="text-dark">{currentUser?.email}</h3>
          <h1 className="text-dark h1">{currentUser?.role}</h1>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default Dashboard;
