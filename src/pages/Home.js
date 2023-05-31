import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";

function Home() {
  useEffect(()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  },[])
  return (
    <>
      <div className="container-fluid">
        <div className="row home-image ">
          <div className="col-8 vh-100 m-auto mt-5">
            <div className="main-arasi"></div>
            <h1 className="home-title mt-5">
              Ristorante Pizzeria Pinocchio Kulinarische Spezialitäten
            </h1>
            <h4 className="home-title-content">
              <span className="d-block my-4 fs-1">NEU! NEU! NEU!</span>
              Unsere Hausgemachten Saucen sind ab sofort direkt im Restaurant
              oder Online zu bestellen. Für jeden Geschmack ist etwas dabei.
            </h4>
            <div className="text-center mt-5">
              <Button
                className="home-btn-speisekarten mx-4 px-5"
                size="lg"
                as={Link}
                to="/speisekarten"
              >
                speisekarten
              </Button>
              <Button
                className="home-btn-onlineBestellung px-5"
                size="lg"
                as={Link}
                to="/onlineBestellung"
              >
                Online Bestellung
              </Button>
            </div>
          </div>
        </div>
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
              <img
                src="images/row-2-getranke.jpg"
                alt="getränke"
              />
            </div>
          </div>
        </div>
        <div className="row row3">
          <div className="col-8 row3-content">
            <p className="row3-title">NUR DAS BESTE FÜR UNSERE GÄSTE</p>
            <h1 className="row3-title2">
              Frische Zutaten – schmackhafte Gerichte
            </h1>
            <p className="row3-content2">
              Ob bunte Salate, selbstgemachte Pasta oder leckere Pizzen, bei uns
              kommt jeder auf seine Kosten. Auch Fisch- und Fleischgerichte
              finden Sie auf unserer stets wechselnden Wochenkarte, denn nur so
              können wir Ihnen Qualität und Frische garantieren.
            </p>
            <Button
              className=" home-btn-onlineBestellung px-5"
              size="lg"
              as={Link}
              to="/speisekarten"
            >
              Speisekarten
            </Button>
          </div>
        </div>
        <div className="row row4">
          <div className="col-1 row4-yan"></div>
          <div className="col-10">
            <div className="row">
              <div className="col-4 p-5">
                <h4 className="row4-title mb-4">Scaloppine al Limone</h4>
                <h6 className="row4-content mx-3">Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht</h6>
                <h6 className="row4-content mx-3">Mit Blattspinat, Teigwaren oder einer Gemüsebeilage</h6>
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
                <h6 className="row4-content mx-3">Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht</h6>
                <h6 className="row4-content mx-3">Mit Blattspinat, Teigwaren oder einer Gemüsebeilage</h6>
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
                <h6 className="row4-content mx-3">Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht</h6>
                <h6 className="row4-content mx-3">Mit Blattspinat, Teigwaren oder einer Gemüsebeilage</h6>
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
                <h6 className="row4-content mx-3">Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht</h6>
                <h6 className="row4-content mx-3">Mit Blattspinat, Teigwaren oder einer Gemüsebeilage</h6>
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
                <h6 className="row4-content mx-3">Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht</h6>
                <h6 className="row4-content mx-3">Mit Blattspinat, Teigwaren oder einer Gemüsebeilage</h6>
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
                <h6 className="row4-content mx-3">Kalbschnitzel an Zitronensauce Ideales Low Carb Gericht</h6>
                <h6 className="row4-content mx-3">Mit Blattspinat, Teigwaren oder einer Gemüsebeilage</h6>
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
      <Footer/>
    </>
  );
}

export default Home;
