import React from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";

function UberUns() {
  const image = "images/uberUns-top.jpg";
  const title = "Über uns";
  const content =
    "Im Umgang mit unseren Gästen ist uns eine freundliche und persönliche Atmosphäre wichtig. Unser Team berät Sie gerne und steht Ihnen mit Auskünften jederzeit zur Verfügung.";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <Footer />
    </>
  );
}

export default UberUns;
