import React from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";

function Reservation() {
  const image = "images/reservation-top.jpg";
  const title = "Reservation";
  const content =
    "Auch für besondere Anlässe und Festaktivitäten, wie z.B. Hochzeiten, Geburtstage sowie Gesellschaftsessen, steht Ihnen unser Restaurant zur Verfügung. Gerne nehmen wir Ihre Reservation entgegen. Bei Fragen zu unseren Gerichten wenden Sie sich bitte an das Personal.";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <Footer />
    </>
  );
}

export default Reservation;
