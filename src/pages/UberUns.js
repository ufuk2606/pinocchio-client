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
      <div className="container">
        <h1 className="text-center my-5 uberUns-title">Unser Team</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4 my-5 ">
          <div class="col-3">
            <div class="card h-100 border-0">
              <img
                src="images/UberUns/EvrenHaciömeroglu.jpg"
                class="card-img-top rounded-circle shadow p-1 rounded"
                alt="Evren Haciömeroglu"
              />
              <div class="card-body">
                <h5 class="card-title mb-3">Evren Haciömeroglu</h5>
                <p class="card-title-2 mb-0">Inhaber und Geschäftsführer</p>
                <p class="card-text">
                  Die Zufriedenheit unserer Kunden steht bei mir an oberster
                  Stelle. Ich liebe meinen Job.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card h-100 border-0">
              <img
                src="images/UberUns/RaffaeleLannicello.jpg"
                class="card-img-top rounded-circle shadow p-1 rounded"
                alt="Evren Haciömeroglu"
              />
              <div class="card-body">
                <h5 class="card-title mb-3">Raffaele Iannicello</h5>
                <p class="card-title-2 mb-0">Chefkoch</p>
                <p class="card-text">
                  Beim Kochen bleibe ich kreativ. Ich will die Gäste kulinarisch
                  verwöhnen.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card h-100 border-0">
              <img
                src="images/UberUns/DenisaSebökova.jpg"
                class="card-img-top rounded-circle shadow p-1 rounded"
                alt="Evren Haciömeroglu"
              />
              <div class="card-body">
                <h5 class="card-title mb-3">Denisa Sebökova</h5>
                <p class="card-title-2 mb-0">Service</p>
                <p class="card-text">
                  Mein Motto: offen und freundlich auf die Gäste eingehen.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card h-100 border-0">
              <img
                src="images/UberUns/AgaHaciömeroglu.jpg"
                class="card-img-top rounded-circle shadow p-1 rounded"
                alt="Evren Haciömeroglu"
              />
              <div class="card-body">
                <h5 class="card-title mb-3">Aga Haciömeroglu</h5>
                <p class="card-title-2 mb-0">Küchenchef</p>
                <p class="card-text">
                  Die Koordination und das Timing gehören zu einem optimalen
                  Arbeitsablauf. Ich behalte gerne die Übersicht.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card h-100 border-0">
              <img
                src="images/UberUns/AzizGohari.jpg"
                class="card-img-top rounded-circle shadow p-1 rounded"
                alt="Evren Haciömeroglu"
              />
              <div class="card-body">
                <h5 class="card-title mb-3">Aziz Gohari</h5>
                <p class="card-title-2 mb-0">Pizzaiolo</p>
                <p class="card-text">
                  Bei mir fliegt der Pizzateig durch die Luft. Danach belege ich
                  sie mit viel Liebe
                </p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card h-100 border-0">
              <img
                src="images/UberUns/ElisabethKouzmina.jpg"
                class="card-img-top rounded-circle shadow p-1 rounded"
                alt="Evren Haciömeroglu"
              />
              <div class="card-body">
                <h5 class="card-title mb-3">Elisabeth Kouzmina</h5>
                <p class="card-title-2 mb-0">Service</p>
                <p class="card-text">
                  Für die Anliegen und Wünsche der Gäste habe ich immer ein
                  offenes Ohr.
                </p>
              </div>
            </div>
          </div>
          <div class="col-3">
            <div class="card h-100 border-0">
              <img
                src="images/UberUns/TolgaHaciömeroglu.jpg"
                class="card-img-top rounded-circle shadow p-1 rounded"
                alt="Evren Haciömeroglu"
              />
              <div class="card-body">
                <h5 class="card-title mb-3">Tolga Haciömeroglu</h5>
                <p class="card-title-2 mb-0">Koch</p>
                <p class="card-text">
                  Ich habe mein Hobby zu meinem Beruf gemacht. Liebe geht durch
                  den Magen.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default UberUns;
