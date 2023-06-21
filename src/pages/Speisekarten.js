import React, { useEffect } from "react";
import Footer from "../components/Footer";
import PageTop from "../components/PageTop";
import { api } from "../services/httpService";

function Speisekarten() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  document.addEventListener("scroll", function () {
    var element = document.getElementById("animate-div-left");
    var position = element.getBoundingClientRect();
  
    // Sayfanın alt kısmına doğru kaydıkça animasyonu başlat
    if (position.top <= window.innerHeight) {
      element.classList.add("animate__slideInLeft");
    }
  });
  document.addEventListener("scroll", function () {
    var element = document.getElementById("animate-div-right");
    var position = element.getBoundingClientRect();
  
    // Sayfanın alt kısmına doğru kaydıkça animasyonu başlat
    if (position.top <= window.innerHeight) {
      element.classList.add("animate__slideInRight");
    }
  });

  const image = "images/speisekarte-top.jpg";
  const title = "Köstlichkeiten";
  const content =
    "Die Liebe zum Genuss zeichnet unser Restaurant aus. Die herzhaften Gerichte, die nur mit feinsten Produkten aus der Region zubereitet werden, sind ein absolutes Gedicht. Unser Küchenchef und sein Team kreieren für Sie köstliche mediterrane sowie saisonale Spezialitäten. Das gemütliche Ambiente des Restaurants, lädt zum Verweilen ein!";


  const handleDownloadPDF = async () => {
    try {
      const response = await api.get("/speisekarten/generate-pdf", {
        responseType: "blob",
      });
      const file = new Blob([response.data], { type: "application/pdf" });
      const fileURL = URL.createObjectURL(file);
      window.open(fileURL);
    } catch (error) {
      console.error(error);
    }
  };

  const getMittagsmenu = async () => {
    try {
      const response = await api.get("/speisekarten/mittagsmenu", {
        responseType: "blob",
      });
  
      const blobURL = window.URL.createObjectURL(response.data);
  
      window.open(blobURL);
    } catch (error) {
      console.error(error);
    }
  };

  const getSpeisekarte = async () => {
    try {
      const response = await api.get("/speisekarten/speisekartenmenu", {
        responseType: "blob",
      });
  
      const blobURL = window.URL.createObjectURL(response.data);
  
      window.open(blobURL);
    } catch (error) {
      console.error(error);
    }
  };

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
            <div className="row my-5 d-flex justify-content-center">
              <div className="col-3 speisenkarte-menüs animate__animated animate__slow" id="animate-div-left">
                <img
                  onClick={(e)=>getSpeisekarte()}
                  width="210"
                  src="images/Speisekarte.png"
                  alt="Speisekarte-menü"
                />
              </div>
              <div className="col-3 speisenkarte-menüs">
                <img
                  onClick={(e)=>getMittagsmenu()}
                  width="210"
                  src="images/Mittagsmenüs.png"
                  alt="Mittagsmenu"
                />
              </div>
              <div className="col-3 speisenkarte-menüs animate__animated animate__slow" id="animate-div-right">
                <img
                  width="210"
                  src="images/Monatshits.png"
                  onClick={handleDownloadPDF}
                  alt="Monatshits"
                />
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
