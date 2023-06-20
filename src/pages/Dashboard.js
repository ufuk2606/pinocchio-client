/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useEffect, useState } from "react";
import { Toast, Row } from "react-bootstrap";
import { UserContext } from "../contexts/UserContext";
import { api } from "../services/httpService";
import userService from "../services/userService";
import { Link } from "react-router-dom";

function Dashboard() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    getUser();
    getUserImage();
    getTotalVerkauf();
    getAlteMenuByUserId();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const { currentUser, meineBestellung, setMeineBestellung, total, setTotal } =
    useContext(UserContext);

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState(0);
  const [nameMonatsHits, setNameMonatsHits] = useState("");
  const [contentMonatsHits, setContentMonatsHits] = useState("");
  const [priceMonatsHits, setPriceMonatsHits] = useState(0);
  const [mittagsmenu, setMittagsmenu] = useState("");
  const [speisekartenmenu, setSpeisekartenmenu] = useState("");
  const [totalVerkauf, setTotalVerkauf] = useState(0);
  const [menü, setMenü] = useState([]);

  const [user, setUser] = useState("");
  const [userFirstName, setUserFirstName] = useState("");
  const [userLastName, setUserLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userTelefon, setUserTelefon] = useState("");
  const [userStreet, setUserStreet] = useState("");
  const [userPlace, setUserPlace] = useState("");
  const [userImage, setUserImage] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [galleryImage, setGalleryImage] = useState([]);

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
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const updateImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("profileImage", userImage);
    try {
      const response = await api.put(
        `/dashboard/image?email=${user?.email}`,
        formData
      );
      getUserImage();
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getUserImage = async () => {
    try {
      const response = await api.get(
        `/dashboard/image?email=${currentUser?.email}`
      );
      const baseURL = response.config.baseURL;
      const imageBaseURL = baseURL.slice(0, -1);
      const imageURL = imageBaseURL + response.config.url;
      setUserImage(imageURL);
      return imageURL;
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

  const createMittagsmenu = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("mittagsmenu", mittagsmenu, "mittagsmenu.pdf"); // Dosya adını belirtin

    try {
      const response = await api.post(`/dashboard/mittagsmenu`, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Form verisi olarak gönderileceği için 'multipart/form-data' olarak ayarlayın
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const createSpeisekartenmenu = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append(
      "speisekartenmenu",
      speisekartenmenu,
      "speisekartenmenu.pdf"
    );
    try {
      const response = await api.post(`/dashboard/speisekartenmenu`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getTotalVerkauf = async () => {
    try {
      const response = await api.get(`/dashboard/total`);
      setTotalVerkauf(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const getAlteMenuByUserId = async () => {
    try {
      const response = await api.get(
        `/dashboard/altebestellungen?email=${currentUser?.email}`
      );
      setMenü(response.data);
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const handleClickProduct = (e, pProduct) => {
    e.preventDefault();
    setShowToast(true);
    const selectedProduct = meineBestellung.filter(
      (product) => product.product.id === pProduct.id
    );
    if (selectedProduct.length === 0) {
      const product = {
        id: pProduct.id,
        name: pProduct.name,
        category: pProduct.category,
        count: 1,
        price: pProduct.price,
      };
      setTotal(total + pProduct.price);
      setMeineBestellung([...meineBestellung, { product }]);
    } else {
      selectedProduct[0].product.count += 1;
      setTotal(total + selectedProduct[0].product.price);
    }
  };

  const addGalleryImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let i = 0; i <galleryImage.length; i++) {
      formData.append("galleryImage", galleryImage[i]);
    }

    try {
      const response = await api.post(
        `/dashboard/galleryImage`,
        formData
      );
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const templateMenü = menü?.map((item) => (
    <li className="menü-list" key={item.id}>
      <button
        type="button"
        className="btn btn-menü-list py-2 d-flex justify-content-between"
        onClick={(e) => handleClickProduct(e, item)}
      >
        <span>{item.name}</span>
        <span>{item.price} CHF</span>
        <span>{new Date(item.createdAt).toLocaleDateString("tr-TR")}</span>
      </button>
    </li>
  ));

  if (!user) {
    return null;
  }

  return (
    <div className="container mb-5">
      <div>
        <div class="page-content page-container mt-5" id="page-content">
          <div class="padding">
            <div class="row container d-flex justify-content-center">
              <div class="col-xl-8 col-md-12">
                <div class="card user-card-full">
                  <div class="row m-l-0 m-r-0">
                    <div class="col-sm-4 bg-c-lite-green user-profile">
                      <div class="card-block text-center text-white">
                        <div class="m-b-25 profil-foto-image">
                          <img
                            src={userImage}
                            className="card-img-top rounded-circle shadow p-1 rounded"
                            alt="profil foto"
                          />
                          <div className="d-flex justify-content-end mt-5 py-5 px-4">
                            <button
                              type="button"
                              className="btn reservation-btn profil-foto-btn rounded-5"
                              data-bs-toggle="modal"
                              data-bs-target="#fotoChange"
                            >
                              Foto ändern
                            </button>
                          </div>
                        </div>
                        <h4 class="f-w-600">
                          {user?.firstName} {user?.lastName}
                        </h4>
                        <p>Bester Kunde</p>
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
                            <h6 class="text-muted f-w-400 mb-3">
                              {user?.email}
                            </h6>
                          </div>
                          <div class="col-sm-6">
                            <p class="m-b-10 f-w-600">Phone</p>
                            <h6 class="text-muted f-w-400 mb-3">
                              {user?.telefon}
                            </h6>
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
                <button
                  type="button"
                  className="btn reservation-btn"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    updatePerson(e);
                  }}
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div
          className="modal fade"
          id="fotoChange"
          tabIndex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Update Foto
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
                  <div>
                    <input
                      className="update_form"
                      type="file"
                      name="profileImage"
                      onChange={(e) => {
                        setUserImage(e.currentTarget.files[0]);
                      }}
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn reservation-btn"
                  data-bs-dismiss="modal"
                  onClick={(e) => {
                    updateImage(e);
                  }}
                >
                  Foto ändern
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="row d-flex justify-content-center">
        <h1 className="reservation-title text-center mt-5">
          Meine Alten Bestellungen
        </h1>
        <div className="col-8 mb-3 mt-5 scrollspy d-flex justify-content-between">
          <ul className="list-unstyled " style={{ width: "500px" }}>
            <p className="bestellungen-product">Sie können erneut bestellen</p>
            {menü.length === 0 ? (
              <img
                src="images/logo.png"
                width="400"
                className="m-5 "
                alt="logo"
              />
            ) : (
              templateMenü
            )}
          </ul>
          <div className="col-4">
            <Link to="/onlineBestellung">
              <button className="reservation-btn mt-2 px-4 pb-2 col rounded-2">
                Meinen Bestellungen{" "}
                <i class="bi bi-box-arrow-in-right fs-4 ms-3"></i>
              </button>
            </Link>
            <Toast
              show={showToast}
              onClose={() => setShowToast(false)}
              delay={3000}
              autohide
              className="mt-2"
            >
              <Toast.Header>
                <strong className="me-auto ">Pizzeria-Pinocchio</strong>
              </Toast.Header>
              <Toast.Body>
                {" "}
                <i class="bi bi-arrow-up-circle-fill fs-5 me-2 text-warning"></i>{" "}
                Meinen Bestellungen hinzugefügt
              </Toast.Body>
            </Toast>
          </div>
        </div>
      </div>
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
        <div className="col-8 mb-5 container">
          <h1 className="reservation-title text-center mt-5">
            Mittagsmenü hinzufügen
          </h1>
          <form className="me-5 d-flex justify-content-around gap-4">
            <div className="my-3 mt-4 col-5">
              <div className="input-group">
                <input
                  type="file"
                  placeholder="pdf seciniz"
                  className="form-control p-2"
                  name="mittagsmenu"
                  onChange={(e) => setMittagsmenu(e.currentTarget.files[0])}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="reservation-btn my-3 px-4 col rounded-4"
              onClick={(e) => createMittagsmenu(e)}
            >
              SENDEN
            </button>
          </form>
        </div>
        <hr />
        <div className="col-8 mb-5 container">
          <h1 className="reservation-title text-center mt-5">
            Speisekarten Menü hinzufügen
          </h1>
          <form className="me-5 d-flex justify-content-around gap-4">
            <div className="my-3 mt-4 col-5">
              <div className="input-group">
                <input
                  type="file"
                  placeholder="pdf seciniz"
                  className="form-control p-2"
                  name="speisekartenmenü"
                  onChange={(e) =>
                    setSpeisekartenmenu(e.currentTarget.files[0])
                  }
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              className="reservation-btn my-3 col rounded-4"
              onClick={(e) => createSpeisekartenmenu(e)}
            >
              SENDEN
            </button>
          </form>
        </div>
        <hr />
        <div>
          <form className="me-5">
            <div>
              <input
                className="update_form"
                type="file"
                name="galleryImage"
                multiple
                onChange={(e) => {
                  setGalleryImage(e.currentTarget.files);
                }}
              />
               <button
                  type="button"
                  className="btn reservation-btn"
                  onClick={(e) => {
                    addGalleryImage(e);
                  }}
                >
                  Foto hinzufügen
                </button>
            </div>
           
          </form>
        </div>
        <hr />
        <div className="col-8 mb-5 container">
          <h2 className="reservation-title text-center mt-5 fs-2">
            Monatlicher Verkaufsbetrag = {totalVerkauf} CHF
          </h2>
        </div>
        <hr />
      </div>
    </div>
  );
}

export default Dashboard;
