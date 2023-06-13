import React, { useContext, useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { api } from "../services/httpService";

function Dashboard() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  const { currentUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [nameMonatsHits, setNameMonatsHits] = useState("");
  const [contentMonatsHits, setContentMonatsHits] = useState("");
  const [priceMonatsHits, setPriceMonatsHits] = useState(0);

  const createEssen = async () => {
    const essen = {
      name: name,
      category: category,
      price: price
    };
    try {
      const response = await api.post(
        `/dashboard/essen`,
        essen
      );
      setName("");
      setCategory("");
      setPrice(0);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const createMonatsHits = async () => {
    const essen = {
      name: nameMonatsHits,
      content: contentMonatsHits,
      price: priceMonatsHits
    };
    try {
      const response = await api.post(
        `/dashboard/monatsHits`,
        essen
      );
      setNameMonatsHits("");
      setContentMonatsHits("");
      setPriceMonatsHits(0);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

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
      <Row>Users</Row>
      <hr />
      <Row>Admin</Row>
      <div>
        <div className="col-8 mb-5 container">
          <h1 className="reservation-title text-center mt-5">Essen hinzufügen</h1>
          <form className="me-5 d-flex justify-content-around gap-4">
            <div className="my-3 mt-4 col-5">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control p-2"
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="my-3 mt-4 col-4">
              <div className="input-group">
                <select class="form-select" aria-label="Default select example" onChange={(e) => setCategory(e.target.value)}>
                  <option selected>Catecory</option>
                  <option value="Salate">Salate</option>
                  <option value="Pasta">Pasta</option>
                  <option value="Pizza">Pizza</option>
                  <option value="Dessert">Dessert</option>
                  <option value="Getränke">Getränke</option>
                </select>
              </div>
            </div>
            <div className="my-3 mt-4 col-2">
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Price"
                  className="form-control  p-2"
                  onChange={(e) => setPrice(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="reservation-btn my-3 px-4 col rounded-4"
              onClick={(e) => createEssen()}
            >
              SENDEN
            </button>
          </form>
        </div>
        <hr/>
        <div className="col-8 mb-5 container">
          <h1 className="reservation-title text-center mt-5">MonatsHits hinzufügen</h1>
          <form className="me-5 d-flex justify-content-around gap-4">
            <div className="my-3 mt-4 col-5">
              <div className="input-group">
                <input
                  type="text"
                  placeholder="Name"
                  className="form-control p-2"
                  onChange={(e) => setNameMonatsHits(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="my-3 mt-4 col-4">
            <div className="input-group">
                <input
                  type="text"
                  placeholder="Content"
                  className="form-control p-2"
                  onChange={(e) => setContentMonatsHits(e.target.value)}
                  required
                />
              </div>
            </div>
            <div className="my-3 mt-4 col-2">
              <div className="input-group">
                <input
                  type="number"
                  placeholder="Price"
                  className="form-control  p-2"
                  onChange={(e) => setPriceMonatsHits(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="reservation-btn my-3 px-4 col rounded-4"
              onClick={(e) => createMonatsHits()}
            >
              SENDEN
            </button>
          </form>
        </div>
        <hr/>
      </div>
    </Container>
  );
}

export default Dashboard;
