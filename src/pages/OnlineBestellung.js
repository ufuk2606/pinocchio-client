import React, { useContext, useEffect, useRef, useState } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";
import ReservationTabelle from "../components/ReservationTabelle";
import { api } from "../services/httpService";
import { UserContext } from "../contexts/UserContext";
import { CSSTransition } from "react-transition-group";
import { useNavigate } from "react-router-dom";

function OnlineBestellung() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  let navigate = useNavigate();
  const bottomRef = useRef(null);
  const [isAnimated, setIsAnimated] = React.useState(false);
  const image = "images/online-bestellung-top.jpg";
  const title = "Online Bestellung";
  const content =
    "Hier können Sie bequem online bestellen. Lassen Sie sich Zeit, klicken Sie sich durch alle Menüs und wählen Sie Ihre gewünschten Speisen und Zutaten aus. Für jeden Geschmack sollte etwas dabei sein. Nach erfolgter Bestellung wird Ihr Gericht frisch zubereitet und so schnell wie möglich geliefert. Wir wünschen Ihnen „Guten Appetit“.";
  const { currentUser, meineBestellung, setMeineBestellung, total, setTotal } = useContext(UserContext);
  const [menü, setMenü] = useState([]);
  const [categoryTitle, setCategoryTitle] = useState("Herzliche Wilkommen");
  const [isChecked, setIsChecked] = useState(false);
  const [mitZahle, setMitZahle] = useState("");
  const [mitteilung, setMitteilung] = useState("");


  const getmenüByCategory = async (pCategory) => {
    try {
      const response = await api.get(
        `/onlineBestellung/category?category=${pCategory}`
      );
      setCategoryTitle(pCategory);
      setMenü(response.data);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const createBestellungen = async (pEmail) => {
    const newArray = meineBestellung.map((obj) => ({
      ...obj,
      abholen: isChecked.toString(),
      mitZahle: mitZahle,
      mitteilung: mitteilung,
    }))
    try {
      const response = await api.post(
        `/onlineBestellung/bestellungen?email=${pEmail}`,
        newArray
      );
      setIsChecked(true);
      setMitZahle("");
      setMitteilung("");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

 

  const handleClickProduct = (e, pProduct) => {
    e.preventDefault();
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
  const handleIncrease = (e, pId) => {
    e.preventDefault();
    const selectedProduct = meineBestellung?.filter(
      (product) => product.product.id === pId
    );
    selectedProduct[0].product.count += 1;
    setTotal(total + selectedProduct[0].product.price);
  };
  const deleteProduct = (pId) => {
    const selectedProduct = meineBestellung?.filter(
      (product) => product.product.id === pId
    );
    const outNumber =
      selectedProduct[0].product.price * selectedProduct[0].product.count;
    setMeineBestellung(
      meineBestellung.filter((product) => product.product.id !== pId)
    );
    setTotal(total - outNumber);
  };
  const handleDecrease = (e, pId) => {
    e.preventDefault();
    const selectedProduct = meineBestellung.filter(
      (product) => product.product.id === pId
    );

    if (selectedProduct[0].product.count === 1) {
      deleteProduct(pId);
    } else {
      selectedProduct[0].product.count -= 1;
      setTotal(total - selectedProduct[0].product.price);
    }
  };
  const weitermachen = () => {
    setIsAnimated(!isAnimated);
    setTimeout(() => {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }, 1000);
  };

  const templateMenü = menü?.map((item) => (
    <li className="menü-list" key={item.id}>
      <button
        type="button"
        class="btn btn-menü-list d-flex justify-content-between"
        onClick={(e) => handleClickProduct(e, item)}
      >
        <span> {item.name}</span>
        <span>{item.price} CHF</span>
      </button>
    </li>
  ));
  
  const templateBestellung = meineBestellung?.map((item) => (
    <li
      className="row bestellungen-product my-3 d-flex text-align-center"
      key={item.product.id}
    >
      <div className="col-4 bestellungen-product fs-5">
        <button
          type="button"
          class="btn btn-bestellungen"
          onClick={(e) => handleDecrease(e, item.product.id)}
        >
          -
        </button>
        <span>{item.product.count}</span>
        <button
          type="button"
          class="btn btn-bestellungen"
          onClick={(e) => handleIncrease(e, item.product.id)}
        >
          +
        </button>
      </div>
      <div className=" col-4 bestellungen-product fs-6 mt-2">
        {item.product.name}
      </div>
      <div className="col-2 bestellungen-product fs-4">
        {item.product.price * item.product.count}
      </div>
      <div className="col-2 ">
        <button
          type="button"
          class="btn"
          onClick={(e) => deleteProduct(item.product.id)}
        >
          <i class="bi bi-trash fs-5 "></i>
        </button>
      </div>
    </li>
  ));
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <div className="container">
        <ul className="row d-flex justify-content-center my-4 list-unstyled ">
          <li className="col-2 text-center mx-2">
            <button
              type="button"
              class="btn btn-online-bestellung"
              value="Salate"
              onClick={(e) => getmenüByCategory(e.target.value)}
            >
              Salate
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button
              type="button"
              class="btn btn-online-bestellung"
              value="Pasta"
              onClick={(e) => getmenüByCategory(e.target.value)}
            >
              Pasta & Risotto
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button
              type="button"
              class="btn btn-online-bestellung"
              value="Pizza"
              onClick={(e) => getmenüByCategory(e.target.value)}
            >
              Pizza
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button
              type="button"
              class="btn btn-online-bestellung"
              value="Dessert"
              onClick={(e) => getmenüByCategory(e.target.value)}
            >
              Dessert
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button
              type="button"
              class="btn btn-online-bestellung"
              value="Getränke"
              onClick={(e) => getmenüByCategory(e.target.value)}
            >
              Getränke
            </button>
          </li>
        </ul>
        <div className="row">
          <div className="row text-center">
            <div className="col-5">
              <h1 className="bestellung-title"> {categoryTitle}</h1>{" "}
            </div>
            <div className="col"></div>
            <div className="col-6">
              <h1 className="bestellung-title">Meine Bestellungen</h1>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-5 mb-3 scrollspy">
            <ul className="list-unstyled">
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
          </div>
          <div className="col"></div>
          <div className="col-6 scrollspy d-flex flex-column">
            <div className="row my-1 text-center">
              <div className="col-4 bestellungen-title">Menge</div>
              <div className="col-4 bestellungen-title">Artikel</div>
              <div className="col-2 bestellungen-title">Preis</div>
              <div className="col-1"></div>
            </div>
            <div className="row my-1 text-center">
              <ul>{templateBestellung}</ul>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-6"></div>
            <div className="col-2">
              {isAnimated ? (
                ""
              ) : (
                <button
                  type="button"
                  className="reservation-btn mt-3 px-4 py-2 "
                  onClick={() => weitermachen()}
                >
                  Weitermachen
                </button>
              )}
            </div>
            <div className="col-2 bestellungen-title fs-2">
              <div>Gesamt</div>
              <hr color="#c39d63" size="4" />
            </div>
            <div className="col-2 bestellungen-title fs-2">
              <div>{total} CHF</div>
              <hr color="#c39d63" size="4" />
            </div>
          </div>
        </div>
        <CSSTransition
          in={isAnimated}
          timeout={3000}
          unmountOnExit
        >
          <div className="row mb-4 text-center animate__animated animate__slideInDown">
            <div className="col-5">
              <ReservationTabelle />
            </div>
            <div className="col"></div>
            <div className="col-6 d-flex justify-content-center align-items-center">
              <div className="mb-5">
                <form className="me-5">
                  <div class="form-check">
                    <input
                      className="check"
                      type="checkbox"
                      onChange={handleCheckboxChange}
                      id="abholen"
                    />
                    <label for="abholen">
                      <h4 className="bestellung-form ms-2">
                        Ich möchte die Bestellung abholen
                      </h4>
                    </label>
                  </div>
                  <div className="my-3 mt-4">
                    <div className="input-group">
                      <select
                        class="form-select "
                        onChange={(e) => setMitZahle(e.target.value)}
                      >
                        <option selected>Ich zahle bei Erhalt: * </option>
                        <option value="Barzahlung">Barzahlung</option>
                        <option value="Karte">Karte</option>
                        <option value="Twint">Twint</option>
                      </select>
                    </div>
                  </div>
                  <div className="mb-3">
                    <textarea
                      className="form-control"
                      rows="5"
                      placeholder="Gewünschte Uhrzeit und Mitteilung"
                      value={mitteilung}
                      onChange={(e) => setMitteilung(e.target.value)}
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="reservation-btn m-3 px-5 py-2"
                    onClick={(e) => createBestellungen(currentUser.email)}
                  >
                    Bestellung abschicken
                  </button>
                  <button
                    type="button"
                    className="reservation-btn m-3 px-5 py-2 "
                    onClick={() => navigate(0)}
                  >
                    Stornieren
                  </button>
                </form>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
      <div ref={bottomRef}></div>
      <Footer />
    </>
  );
}

export default OnlineBestellung;
