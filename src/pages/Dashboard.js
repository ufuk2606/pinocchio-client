/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { api } from "../services/httpService";
import userService from "../services/userService";

function Dashboard() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { currentUser } = useContext(UserContext);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [nameMonatsHits, setNameMonatsHits] = useState("");
  const [contentMonatsHits, setContentMonatsHits] = useState("");
  const [priceMonatsHits, setPriceMonatsHits] = useState(0);
  const [user, setUser] = useState("");

  // eslint-disable-next-line no-unused-vars
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTelefon, setUserTelefon] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userPlace, setUserPlace] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [userPicture, setUserPicture] = useState(currentUser?.picture);

  useEffect(() => {
    if (user?.firstName) {
      setUserFirstName(user.firstName);
      setUserLastName(user.lastName);
      setUserEmail(user.email);
      setUserTelefon(user.telefon);
      setUserStreet(user.street);
      setUserPlace(user.place);
    }
  }, [user]);

  async function getUser() {
    try {
      const user = await userService.getUser(currentUser.email);
      setUser(user);
    } catch (error) {
      console.error(error.message);
    }
  }

  const updatePerson = async (pEvent) => {
    pEvent.preventDefault();
    const updatedUser = {
      firstName: userFirstName,
      lastName: userLastName,
      email: userEmail,
      telefon: userTelefon,
      street: userStreet,
      place: userPlace,
    };
    try {
      const response = await api.put(
        `/dashboard/dashboard?email=${user.email}`,
        updatedUser
      );
      await getUser(); 
      window.location.reload()
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const createEssen = async () => {
    const essen = {
      name: name,
      category: category,
      price: price,
    };
    try {
      const response = await api.post(`/dashboard/essen`, essen);
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
      price: priceMonatsHits,
    };
    try {
      const response = await api.post(`/dashboard/monatsHits`, essen);
      setNameMonatsHits("");
      setContentMonatsHits("");
      setPriceMonatsHits(0);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  if (!user) {
    return null;
  }

  return (
    <div className="container mb-5">
      <div>
        <div class="page-content page-container" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-8 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25">
                          <img
                            src={userPicture}
                            className="card-img-top rounded-circle shadow p-1 rounded"
                            alt="profil foto"
                          />
                        </div>
                        
                        <h4 class="f-w-600">
                          {user?.firstName} {user?.lastName}
                        </h4>
                        <p>Bester Kunde</p>
                        <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                      </div>
                    </div>
                    <div class="col-sm-8">
                      <div class="card-block">
                        <h4 class="m-b-20 p-b-5 b-b-default f-w-600 my-4">
                          Information
                        </h4>

                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Email</p>
                            <h6 class="text-muted f-w-400 mb-3">{user?.email}</h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Phone</p>
                            <h6 class="text-muted f-w-400 mb-3">{user?.telefon}</h6>
                          </div>
                        </div>
                        <hr />
                        <div class="row">
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600 mt-3">Adresse</p>
                            <h6 class="text-muted f-w-400 ">
                              {user?.place} {user?.street}
                            </h6>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end mt-5 py-5 px-4">
                        <button
                          type="button"
                          className="btn reservation-btn px-4"
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="exampleModal"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Form
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body">
                <form className="me-5">
                  <div className="my-3 mt-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control p-2"
                        value={userFirstName}
                        onChange={(e) => setUserFirstName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="my-3 mt-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control p-2"
                        value={userLastName}
                        onChange={(e) => setUserLastName(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="my-3 mt-4">
                    <div className="input-group">
                      <input
                        type="email"
                        className="form-control p-2"
                        value={userEmail}
                        onChange={(e) => setUserEmail(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="my-3 mt-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control p-2"
                        value={userTelefon}
                        onChange={(e) => setUserTelefon(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="my-3 mt-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control p-2"
                        value={userStreet}
                        onChange={(e) => setUserStreet(e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="my-3 mt-4">
                    <div className="input-group">
                      <input
                        type="text"
                        className="form-control p-2"
                        value={userPlace}
                        onChange={(e) => setUserPlace(e.target.value)}
                      />
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn reservation-btn" data-bs-dismiss="modal" onClick={(e)=>{updatePerson(e)}}>
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="container ">
        <h1 className="text-center my-5 uberUns-title">Profil</h1>
        <div className="row row-cols-1 row-cols-md-4 d-flex justify-content-center">
          <div className="col">
            <div className="card h-100 border-0 ">
              <img
                src={currentUser?.picture}
                className="card-img-top rounded-circle shadow p-1 rounded"
                alt="profil foto"
              />
            </div>
          </div>
          <div className="col">
            <div className="card-body">
              <h1 className="card-title ms-5 my-3">
                {user?.firstName} {user?.lastName}
              </h1>
              <h5 className="card-title-2 ms-5 mb-2">{currentUser?.email}</h5>
              <h5 className="card-title-2 ms-5 mb-2">{user?.telefon}</h5>
              <h5 className="card-title-2 ms-5 mb-2">
                {user?.place} {user?.street}
              </h5>
              <h5 className="card-title-2 ms-5 mb-2">{user?.role}</h5>
            </div>
          </div>
        </div>
      </div> */}

      <hr />
      <Row>Admin</Row>
      <div>
        <div className="col-8 mb-5 container">
          <h1 className="reservation-title text-center mt-5">
            Essen hinzufügen
          </h1>
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
                <select
                  class="form-select"
                  aria-label="Default select example"
                  onChange={(e) => setCategory(e.target.value)}
                >
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
        <hr />
        <div className="col-8 mb-5 container">
          <h1 className="reservation-title text-center mt-5">
            MonatsHits hinzufügen
          </h1>
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
        <hr />
      </div>
    </div>
  );
}

export default Dashboard;
