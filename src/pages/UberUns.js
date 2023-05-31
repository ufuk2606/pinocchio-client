import React, { useEffect } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";

function UberUns() {
  useEffect(()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  },[])
  const image = "images/uberUns-top.jpg";
  const title = "Über uns";
  const content =
    "Im Umgang mit unseren Gästen ist uns eine freundliche und persönliche Atmosphäre wichtig. Unser Team berät Sie gerne und steht Ihnen mit Auskünften jederzeit zur Verfügung.";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <div className="container ">
        <h1 className="text-center my-5 uberUns-title">Unser Team</h1>
        <div class="row row-cols-1 row-cols-md-4 g-4 my-5">
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
          <div class="col">
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
      <div className="container ">
        <h1 className="text-center my-5 uberUns-title">Was wir bieten</h1>
        <div class="row row-cols-1 row-cols-md-3 g-4 my-5 ">
          <div class="col">
            <div class="card h-100 border-0">
              <i class="bi bi-calendar text-center uberUns-icons"></i>
              <div class="card-body text-center">
                <h3 class="card-title mb-3">Täglich frische Menüs</h3>
                <p class="card-title-2 mb-0">
                  Täglich werden die Gerichte frisch vorbereitet und erst nach
                  der Bestellung zubereitet.{" "}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <i class="bi bi-heart text-center uberUns-icons"></i>
              <div class="card-body text-center">
                <h3 class="card-title mb-3">Frische Zutaten</h3>
                <p class="card-title-2 mb-0">
                  Regionale Produkte von bester Qualität, werden uns durch
                  unsere Lieferanten zur Verfügung gestellt.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <i class="bi bi-award text-center uberUns-icons"></i>
              <div class="card-body text-center">
                <h3 class="card-title mb-3">Köstliche Gerichte</h3>
                <p class="card-title-2 mb-0">
                  Dank mediterraner Küche sind bei der Auswahl der
                  Köstlichkeiten keine Grenzen gesetzt.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <i class="bi bi-lightbulb text-center uberUns-icons"></i>
              <div class="card-body text-center">
                <h3 class="card-title mb-3">Kreative Chefs</h3>
                <p class="card-title-2 mb-0">
                  Aus den verschiedenen Lebensmitteln zaubern unsere kreativen
                  Köche exzellente aufeinander abgestimmte Variationen.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <i class="bi bi-bookmark-check text-center uberUns-icons"></i>
              <div class="card-body text-center">
                <h3 class="card-title mb-3">Authentische Küche</h3>
                <p class="card-title-2 mb-0">
                  Was das Auge wahrnimmt, wird durch den Gaumen geschmacklich
                  bestätigt.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100 border-0">
              <i class="bi bi-cup-hot text-center uberUns-icons"></i>
              <div class="card-body text-center">
                <h3 class="card-title mb-3">Frischgerösteter Kaffee</h3>
                <p class="card-title-2 mb-0">
                  Der Geruch von frisch geröstetem Kaffee lädt zum Verweilen ein
                  und führt zu einem krönenden Abschluss.
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
