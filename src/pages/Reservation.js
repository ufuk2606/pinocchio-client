import React, { useContext, useEffect, useState } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";
import ReservationTabelle from "../components/ReservationTabelle";
import { UserContext } from "../contexts/UserContext";
import { api } from "../services/httpService";

function Reservation() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  const image = "images/reservation-top.jpg";
  const title = "Reservation";
  const content =
    "Auch für besondere Anlässe und Festaktivitäten, wie z.B. Hochzeiten, Geburtstage sowie Gesellschaftsessen, steht Ihnen unser Restaurant zur Verfügung. Gerne nehmen wir Ihre Reservation entgegen. Bei Fragen zu unseren Gerichten wenden Sie sich bitte an das Personal.";

  const { currentUser } = useContext(UserContext);
  const [anzahlPersonen, setAnzahlPersonen] = useState("");
  const [datum, setDatum] = useState("");
  const [time, setTime] = useState("");
  const [mitteilung, setMitteilung] = useState("");
  
  
  const createRezervation = async (pEmail) => {
    const rezervation = {
      anzahlPersonen: anzahlPersonen,
      datum: datum,
      uhrZeit: time,
      mitteilung:mitteilung,
    }
    try {
      const response = await api.post(
        `/rezervation/rezervation?email=${pEmail}`,
        rezervation
      );
      setAnzahlPersonen("");
      setDatum("");
      setTime("");
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
            <h1 className="reservation-title">Tischreservation</h1>
            <form className="me-5">
              <div className="my-3 mt-4">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Anzahl Personen*"
                    className="form-control p-2"
                    onChange={(e) => setAnzahlPersonen(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="my-3 mt-4">
                <div className="input-group">
                  <input
                    type="date"
                    placeholder="Datum*"
                    className="form-control  p-2"
                    onChange={(e) => setDatum(e.target.value.toString())}
                    required
                  />
                </div>
              </div>
              <div className="my-3 mt-4">
                <div className="input-group">
                  <input
                    type="time"
                    placeholder="Zeit*"
                    className="form-control  p-2"
                    onChange={(e) => setTime(e.target.value.toString())}
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control "
                  onChange={(e) => setMitteilung(e.target.value)}
                  rows="5"
                  placeholder="Mitteilung"
                ></textarea>
              </div>
              <button
                type="submit"
                className="reservation-btn mt-3 px-5 py-2"
                onClick={(e) => createRezervation(currentUser.email)}
              >
                SENDEN
              </button>
            </form>
          </div>
          <div className="col-4 ">
            <ReservationTabelle />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reservation;
