import React, { useEffect } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";

function Gallery() {
  useEffect(()=>{
    window.scroll({top: 0, left: 0, behavior: 'smooth' })
  },[])
  const image = "images/gallery-top.jpg";
  const title = "Impressionen";
  const content =
    "aus Hochzeitsfeiern, Taufessen, Geburtstagspartys, Jubiläen, Business-Meetings, Kundenanlässe – uns ist es immer wieder eine grosse Freude, Ihnen unvergessliche Stunden bei uns zu bescheren und Ihre Feier ganz nach Ihren Vorstellungen für Sie auszurichten.";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <div className="container">
        <div className="row m-5 ">
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/1.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/2.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/3.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/4.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/5.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/6.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/7.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/8.jpg" alt="gallery-foto"/>
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/9.jpg" alt="gallery-foto" />
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/10.jpg" alt="gallery-foto" />
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/11.jpg" alt="gallery-foto" />
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/12.jpg" alt="gallery-foto" />
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/13.jpg" alt="gallery-foto" />
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/14.jpg" alt="gallery-foto" />
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/15.jpg" alt="gallery-foto" />
          </div>
          <div className="col-3 p-4">
            <img width="100%" src="images/gallery/16.jpg" alt="gallery-foto" />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
