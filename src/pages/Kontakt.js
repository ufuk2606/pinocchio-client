import React, { useContext, useEffect, useState } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";
import { UserContext } from "../contexts/UserContext";
import { api } from "../services/httpService";

function Kontakt() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const image = "images/kontakt-top.jpg";
  const title = "Kontakt";
  const content =
    "Gerne nehmen wir Ihre Fragen und Wünsche telefonisch oder per E-Mail entgegen und melden uns schnellstmöglich.";
  const { currentUser } = useContext(UserContext);
  const [mitteilung, setMitteilung] = useState("");

  const createKontakt = async (pEmail) => {
    const kontaktMail = {
      mitteilung: mitteilung,
    };
    try {
      const response = await api.post(
        `/kontakt/kontakt?email=${pEmail}`,
        kontaktMail
      );
      setMitteilung("");
      return response.data;
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <div className="container">
        <div className="row m-5 ">
          <div className="col-8 mb-5">
            <h1 className="reservation-title">Kontaktanfrage</h1>
            <form className="me-5">
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  onChange={(e) => setMitteilung(e.target.value)}
                  placeholder="Mitteilung"
                ></textarea>
              </div>
              <button
                type="submit"
                onClick={(e) => createKontakt(currentUser.email)}
                className="reservation-btn mt-3 px-5 py-2"
              >
                SENDEN
              </button>
            </form>
          </div>
          <div className="col-4 ">
            <div className="reservation-tabelle py-4 ">
              <div className="text-center ">
                <h1 className="kontakt-tabelle-title my-2 mt-4">Kontakt</h1>
                <hr className="m-auto " width="80%" color="#b9dd80" size="5" />
                <h5 className="kontakt-tabelle-title2">
                  Flawilerstrasse 32 <br />
                  CH -9242 Oberuzwil
                </h5>
                <br />
                <hr className="m-auto " width="80%" color="#b9dd80" size="5" />
                <h5 className="kontakt-tabelle-title2">TELEFON</h5>
                <p className="kontakt-tabelle-tel">071 951 36 51</p>
              </div>
            </div>
          </div>
        </div>
        <div className="row mb-5">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10796.709888793464!2d9.1277163!3d47.4279827!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479ae868e8428767%3A0x35ea8a541bb295e!2sRest.%20Pizzeria%20Pinocchio!5e0!3m2!1sen!2sch!4v1683396235925!5m2!1sen!2sch"
            width="600"
            title="map"
            height="450"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Kontakt;
