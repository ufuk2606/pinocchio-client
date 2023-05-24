import React, { useEffect, useState } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";
import ReservationTabelle from "../components/ReservationTabelle";
import { api } from "../services/httpService";

function OnlineBestellung() {
  const image = "images/online-bestellung-top.jpg";
  const title = "Online Bestellung";
  const content =
    "Hier können Sie bequem online bestellen. Lassen Sie sich Zeit, klicken Sie sich durch alle Menüs und wählen Sie Ihre gewünschten Speisen und Zutaten aus. Für jeden Geschmack sollte etwas dabei sein. Nach erfolgter Bestellung wird Ihr Gericht frisch zubereitet und so schnell wie möglich geliefert. Wir wünschen Ihnen „Guten Appetit“.";

  const [menü, setMenü] = useState();
  const [meineBestellung, setMeineBestellung] = useState([]);
  const [total, setTotal] = useState(0);
  const [amount, setAmount] = useState(1);


  const getMenü = async () => {
    try {
      const response = await api.get(`/onlineBestellung`);
      setMenü(response.data);
    } catch (error) {
      console.error(error.message);
      throw error;
    }
  };

  useEffect(() => {
    getMenü();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClickProduct = (pProduct) => {
    const newArray = [...meineBestellung];
    newArray.push(pProduct);
    setTotal(total+pProduct.price)
    setMeineBestellung(newArray);
  };

  const templateMenü = menü?.map((item) => (
    <li className="menü-list" key={item.id}>
      <button
        type="button"
        class="btn btn-menü-list d-flex justify-content-between"
        onClick={() => handleClickProduct(item)}
      >
        <span> {item.name}</span>
        <span>{item.price} CHF</span>
      </button>
    </li>
  ));
  const templateBestellung = meineBestellung?.map((item) => (
    <li className="row bestellungen-product my-3 d-flex align-items-center" key={item.id}>
      <div className="col-4 bestellungen-product fs-5">
        <button type="button" class="btn btn-bestellungen ">
          -
        </button>
        <span>{amount}</span>
        <button type="button" class="btn btn-bestellungen" onClick={(e)=>setAmount(2)}>
          +
        </button>
      </div>
      <div className="col-4 bestellungen-product fs-6">{item.name}</div>
      <div className="col-4 bestellungen-product fs-5">{item.price*amount}</div>
    </li>
  ));

  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <div className="container">
        <ul className="row d-flex justify-content-center my-4 list-unstyled ">
          <li className="col-2 text-center mx-2">
            <button type="button" class="btn btn-online-bestellung">
              Salate
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button type="button" class="btn btn-online-bestellung">
              Pasta & Risotto
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button type="button" class="btn btn-online-bestellung">
              Pizza
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button type="button" class="btn btn-online-bestellung">
              Dessert
            </button>
          </li>
          <li className="col-2 text-center mx-2">
            <button type="button" class="btn btn-online-bestellung">
              Getränke
            </button>
          </li>
        </ul>
        <div className="row">
          <div className="row text-center">
            <div className="col-5">
              <h1 className="bestellung-title">Salate</h1>{" "}
            </div>
            <div className="col"></div>
            <div className="col-6">
              <h1 className="bestellung-title">Meine Bestellungen</h1>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <div className="col-5 mb-3 scrollspy">
            <ul className="list-unstyled">{templateMenü}</ul>
          </div>
          <div className="col"></div>
          <div className="col-6 scrollspy d-flex flex-column">
            <div className="row my-1 text-center">
              <div className="col-4 bestellungen-title">Menge</div>
              <div className="col-4 bestellungen-title">Artikel</div>
              <div className="col-4 bestellungen-title">Preis</div>
            </div>
            <div className="row my-1 text-center">
              <ul>{templateBestellung}</ul>
            </div>
          </div>
          <div className="row text-center">
            <div className="col-8 bestellungen-title"></div>
            <div className="col-2 bestellungen-title fs-2">Gesamt</div>
            <div className="col-2 bestellungen-title fs-2">{total} CHF</div>
          </div>
          <div className="row text-center">
            <div className="col-8 bestellungen-title"></div>
            <div className="col-2 bestellungen-title fs-2">
              <hr color="#c39d63" size="4" />
            </div>
            <div className="col-2 bestellungen-title fs-2">
              <hr color="#c39d63" size="4" />
            </div>
          </div>
        </div>
        <div className="row mb-4">
          <div className="col-6">
            <div className="mb-5">
              <form className="me-5">
                <div class="form-check">
                  <input
                    className="check"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label for="flexCheckDefault">
                    <h4 className="bestellung-form ms-2">
                      Ich möchte die Bestellung abholen
                    </h4>
                  </label>
                </div>
                <div className="my-3 ">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Name*"
                      className="form-control me-4 p-2"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email*"
                      className="form-control ms-4 p-2"
                      required
                    />
                  </div>
                </div>
                <div className="my-3 mt-4">
                  <div className="input-group">
                    <input
                      type="tel"
                      placeholder="Telefon*"
                      className="form-control me-4 p-2"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Strasse & Hausnummer *"
                      className="form-control ms-4 p-2"
                      required
                    />
                  </div>
                </div>
                <div className="my-3 mt-4">
                  <div className="input-group">
                    <input
                      type="text"
                      placeholder="Ort*"
                      className="form-control me-4 p-2 pe-5"
                      required
                    />
                    <select class="form-select ms-4">
                      <option selected>Ich zahle bei Erhalt: * </option>
                      <option value="1">Barzahlung</option>
                      <option value="2">Karte</option>
                      <option value="3">Twint</option>
                    </select>
                  </div>
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    rows="5"
                    placeholder="Mitteilung"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="reservation-btn mt-3 px-5 py-2"
                >
                  Bestellung abschicken
                </button>
              </form>
            </div>
          </div>
          <div className="col"></div>
          <div className="col-5">
            <ReservationTabelle />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default OnlineBestellung;
