import React from "react";
import Footer from "../components/Footer";
import PageTop from "../components/PageTop";

function Speisekarten() {
  const image = "images/speisekarte-top.jpg";
  const title = "Köstlichkeiten";
  const content =
    "Die Liebe zum Genuss zeichnet unser Restaurant aus. Die herzhaften Gerichte, die nur mit feinsten Produkten aus der Region zubereitet werden, sind ein absolutes Gedicht. Unser Küchenchef und sein Team kreieren für Sie köstliche mediterrane sowie saisonale Spezialitäten. Das gemütliche Ambiente des Restaurants, lädt zum Verweilen ein!";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
        <div className="row row3">
          <div className="col-8 row3-content">
            <p className="row3-title">NUR DAS BESTE</p>
            <h1 className="row3-title2">
              Frische Zutaten <br /> Köstliche Gerichte
            </h1>
            <div className="row my-5">
              <div className="col-3 speisenkarte-menüs">
                <a href="speisenkartenMenüs/Speisekarte_2022.pdf" target="_blank"> <img width='230' src="images/Speisekarte.png" alt="Speisekarte-menü" /></a>
              </div>
              <div className="col-3 speisenkarte-menüs">
              <a href="speisenkartenMenüs/Mittagsmenus.pdf" target="_blank"> <img width='230'  src="images/Mittagsmenüs.png" alt="Mittagsmenüs" /></a>
              </div>
              <div className="col-3 speisenkarte-menüs">
              <a href="speisenkartenMenüs/Monathits.pdf" target="_blank"> <img width='230'  src="images/Monatshits.png" alt="Monatshits" /></a>
              </div>
              <div className="col-3 speisenkarte-menüs">
              <a href="speisenkartenMenüs/Hausgemachte-Saucen.pdf" target="_blank"> <img width='230'  src="images/Hausgemachtes.png" alt="Hausgemachtes" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Speisekarten;
