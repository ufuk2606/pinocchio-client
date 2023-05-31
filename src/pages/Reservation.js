import React, { useEffect } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";
import ReservationTabelle from "../components/ReservationTabelle";

function Reservation() {
  useEffect(()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  },[])
  const image = "images/reservation-top.jpg";
  const title = "Reservation";
  const content =
    "Auch für besondere Anlässe und Festaktivitäten, wie z.B. Hochzeiten, Geburtstage sowie Gesellschaftsessen, steht Ihnen unser Restaurant zur Verfügung. Gerne nehmen wir Ihre Reservation entgegen. Bei Fragen zu unseren Gerichten wenden Sie sich bitte an das Personal.";
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
              <div className="my-3 mt-5 ">
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
                    type="number"
                    placeholder="Anzahl Personen*"
                    className="form-control ms-4 p-2"
                    required
                  />
                </div>
              </div>
              <div className="my-3 mt-4">
                <div className="input-group">
                  <input
                    type="date"
                    placeholder="Datum*"
                    className="form-control me-4 p-2"
                    required
                  />
                  <input
                    type="time"
                    placeholder="Zeit*"
                    className="form-control ms-4 p-2"
                    required
                  />
                </div>
              </div>
              <div className="mb-3">
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Mitteilung"
                ></textarea>
              </div>
              <button type="submit" className="reservation-btn mt-3 px-5 py-2">
                SENDEN
              </button>
            </form>
          </div>
          <div className="col-4 ">
            <ReservationTabelle/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Reservation;
