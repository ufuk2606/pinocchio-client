import React from "react";
import Footer from "../components/Footer";
import PageTop from "../components/PageTop";

function Speisekarten() {
  const image = "images/speisekarte-top.jpg"
  const title =  "Köstlichkeiten"
  const content = "Die Liebe zum Genuss zeichnet unser Restaurant aus. Die herzhaften Gerichte, die nur mit feinsten Produkten aus der Region zubereitet werden, sind ein absolutes Gedicht. Unser Küchenchef und sein Team kreieren für Sie köstliche mediterrane sowie saisonale Spezialitäten. Das gemütliche Ambiente des Restaurants, lädt zum Verweilen ein!"
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
        <div className="container">
          <div className="row m-5">
            <div className="col-6 mt-5">
              <h6 className="home-row2-location">LOCATION</h6>
              <h1 className="home-row2-title">
                Willkommen im Pinocchio in Oberuzwil
              </h1>
              <p className="home-row2-content">
                Im 2012 übernahm Evren Haciömeroglu das Pinocchio und widmet
                sich seither hauptsächlich der mediterranen Küche. Wir kochen
                nicht nur für unsere Gäste – wir transportieren ein kleines
                Stück Lebensgefühl, das jeder kennt, der schon einmal bei uns
                war.
                <br />
                <br />
                Das Restaurant besticht durch eine italienisch angehauchte
                Einrichtung, die vor allem mit rustikalen Elementen und edlem
                Holz gehalten ist. Im Innenbereich ist für 80 Gäste konzipiert.
                Unsere Pergola spiegelt die Leichtigkeit wieder, die wir sonst
                nur aus dem Urlaub kennen.
                <br />
                <br /> Ob Hochzeitsfeiern, Taufessen, Geburtstagspartys,
                Jubiläen, Business-Meetings, Kundenanlässe – uns ist es immer
                wieder eine grosse Freude, Ihnen unvergessliche Stunden bei uns
                zu bescheren und Ihre Feier ganz nach Ihren Vorstellungen für
                Sie auszurichten.{" "}
              </p>
            </div>
            <div className="col-4  m-5">
              <img src="images/row-2-getranke.jpg" alt="getränke" />
            </div>
          </div>
        </div>
        <div className="row row4">
          <div className="col-1 row4-yan"></div>
          <div className="col-10">
            <div className="row">
              <div className="col-4 p-5">
                <h4 className="row4-title mb-4">Scaloppine al Limone</h4>
                <h6 className="row4-content mx-3">
                  Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht
                </h6>
                <h6 className="row4-content mx-3">
                  Mit Blattspinat, Teigwaren oder einer Gemüsebeilage
                </h6>
              </div>
              <div className="col-4 p-0">
                <img
                  className="row4-picture"
                  src="images/row4-1.jpg"
                  alt="getränke"
                />
              </div>
              <div className="col-4 p-5">
                <h4 className="row4-title mb-4">Scaloppine al Limone</h4>
                <h6 className="row4-content mx-3">
                  Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht
                </h6>
                <h6 className="row4-content mx-3">
                  Mit Blattspinat, Teigwaren oder einer Gemüsebeilage
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4 p-0">
                <img
                  className="row4-picture"
                  src="images/row4-2.jpg"
                  alt="getränke"
                />
              </div>
              <div className="col-4 p-5">
                <h4 className="row4-title mb-4">Scaloppine al Limone</h4>
                <h6 className="row4-content mx-3">
                  Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht
                </h6>
                <h6 className="row4-content mx-3">
                  Mit Blattspinat, Teigwaren oder einer Gemüsebeilage
                </h6>
              </div>
              <div className="col-4 p-0">
                <img
                  className="row4-picture"
                  src="images/row4-2.jpg"
                  alt="getränke"
                />
              </div>
            </div>
            <div className="row">
              <div className="col-4 p-5">
                <h4 className="row4-title mb-4">Scaloppine al Limone</h4>
                <h6 className="row4-content mx-3">
                  Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht
                </h6>
                <h6 className="row4-content mx-3">
                  Mit Blattspinat, Teigwaren oder einer Gemüsebeilage
                </h6>
              </div>
              <div className="col-4 p-0">
                <img
                  className="row4-picture"
                  src="images/row4-3.jpg"
                  alt="getränke"
                />
              </div>
              <div className="col-4 p-5">
                <h4 className="row4-title mb-4">Scaloppine al Limone</h4>
                <h6 className="row4-content mx-3">
                  Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht
                </h6>
                <h6 className="row4-content mx-3">
                  Mit Blattspinat, Teigwaren oder einer Gemüsebeilage
                </h6>
              </div>
            </div>
            <div className="row">
              <div className="col-4 p-0">
                <img
                  className="row4-picture"
                  src="images/row4-4.jpg"
                  alt="getränke"
                />
              </div>
              <div className="col-4 p-5">
                <h4 className="row4-title mb-4">Scaloppine al Limone</h4>
                <h6 className="row4-content mx-3">
                  Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht
                </h6>
                <h6 className="row4-content mx-3">
                  Mit Blattspinat, Teigwaren oder einer Gemüsebeilage
                </h6>
              </div>
              <div className="col-4 p-0">
                <img
                  className="row4-picture"
                  src="images/row4-5.jpg"
                  alt="getränke"
                />
              </div>
            </div>
          </div>
          <div className="col-1 row4-yan"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Speisekarten;
