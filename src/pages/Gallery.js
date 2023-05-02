import React from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";

function Gallery() {
  const image = "images/gallery-top.jpg";
  const title = "Impressionen";
  const content =
    "aus Hochzeitsfeiern, Taufessen, Geburtstagspartys, Jubiläen, Business-Meetings, Kundenanlässe – uns ist es immer wieder eine grosse Freude, Ihnen unvergessliche Stunden bei uns zu bescheren und Ihre Feier ganz nach Ihren Vorstellungen für Sie auszurichten.";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
