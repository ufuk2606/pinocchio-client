/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import PageTop from "../components/PageTop";
import Footer from "../components/Footer";
import { api } from "../services/httpService";

function Gallery() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
    getGalleryImages();
  }, []);

  const [galleryImages, setGalleryImages] = useState([]);

  const image = "images/gallery-top.jpg";
  const title = "Impressionen";
  const content =
    "aus Hochzeitsfeiern, Taufessen, Geburtstagspartys, Jubiläen, Business-Meetings, Kundenanlässe – uns ist es immer wieder eine grosse Freude, Ihnen unvergessliche Stunden bei uns zu bescheren und Ihre Feier ganz nach Ihren Vorstellungen für Sie auszurichten.";

  const getGalleryImages = async () => {
    try {
      const response = await api.get(`/gallery/images`);
      const imageArray = response.data;
      setGalleryImages(imageArray);
    } catch (error) {
      console.error(error);
      throw error;
    }
  };

  const template = galleryImages?.map((image) => (
    <div className="col-3 p-4">
      <img
        width="100%"
        src={`http://localhost:8000/api/v1/gallery/images/${image.id}/content`}
        alt="gallery-foto"
      />
    </div>
  ));

  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <div className="container">
        <div className="row m-5 ">
          {template}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Gallery;
