// import React, { useEffect, useState } from "react";
// import Footer from "../components/Footer";
// import PageTop from "../components/PageTop";
// import { api } from "../services/httpService";

// function Speisekarten() {
//   useEffect(() => {
//     window.scroll({ top: 0, left: 0, behavior: "smooth" });
//   }, []);
//   const image = "images/speisekarte-top.jpg";
//   const title = "Köstlichkeiten";
//   const content =
//     "Die Liebe zum Genuss zeichnet unser Restaurant aus. Die herzhaften Gerichte, die nur mit feinsten Produkten aus der Region zubereitet werden, sind ein absolutes Gedicht. Unser Küchenchef und sein Team kreieren für Sie köstliche mediterrane sowie saisonale Spezialitäten. Das gemütliche Ambiente des Restaurants, lädt zum Verweilen ein!";

//   const [loading, setLoading] = useState(false);
//   const [pdfPath, setPdfPath] = useState(null);

//   const handleDownloadPDF = async () => {
//     try {
//       setLoading(true);
//       const response = await api.get("/speisekarten/generate-pdf", {
//         responseType: "blob",
//       });
//       const { filePath } = response.data;

//       // window.open(filePath);
//       // const pdfBlob = new Blob([response.data], { type: "application/pdf" });

//       // const url = URL.createObjectURL(pdfBlob);

//       // const link = document.createElement("a");
//       // link.href = url;
//       // link.download = "monatsHits.pdf";
//       // link.click();

//       setPdfPath(filePath);
//       setLoading(false);
//     } catch (error) {
//       console.error(error);
//       setLoading(false);
//     }
//   };

//   return (
//     <>
//       <div className="container-fluid">
//         <PageTop image={image} title={title} content={content} />
//         <div className="row row3">
//           <div className="col-8 row3-content">
//             <p className="row3-title">NUR DAS BESTE</p>
//             <h1 className="row3-title2">
//               Frische Zutaten <br /> Köstliche Gerichte
//             </h1>
//             <div className="row my-5">
//               <div className="col-3 speisenkarte-menüs">
//                 <a
//                   href="speisenkartenMenüs/Speisekarte_2022.pdf"
//                   target="_blank"
//                 >
//                   <img
//                     width="210"
//                     src="images/Speisekarte.png"
//                     alt="Speisekarte-menü"
//                   />
//                 </a>
//               </div>
//               <div className="col-3 speisenkarte-menüs">
//                 <a href="speisenkartenMenüs/Mittagsmenus.pdf" target="_blank">
//                   <img
//                     width="210"
//                     src="images/Mittagsmenüs.png"
//                     alt="Mittagsmenüs"
//                   />
//                 </a>
//               </div>
//               <div className="col-3 speisenkarte-menüs">
//                 <button onClick={handleDownloadPDF} disabled={loading}>
//                   {loading ? "İndiriliyor..." : "PDF İndir"}
//                 </button>
//                 {pdfPath && (
//                   <iframe
//                     src={pdfPath}
//                     title="PDF Viewer"
//                     width="210"
//                     height="300"
//                   ></iframe>
//                 )}
//                 <a href="/" target="_blank">
//                   <img
//                     width="210"
//                     src="images/Monatshits.png"
//                     alt="Monatshits"
//                   />
//                 </a>
//               </div>
//               <div className="col-3 speisenkarte-menüs">
//                 <a
//                   href="speisenkartenMenüs/Hausgemachte-Saucen.pdf"
//                   target="_blank"
//                 >
//                   <img
//                     width="210"
//                     src="images/Hausgemachtes.png"
//                     alt="Hausgemachtes"
//                   />
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   );
// }

// export default Speisekarten;

import React, { useEffect } from "react";
import Footer from "../components/Footer";
import PageTop from "../components/PageTop";
import { api } from "../services/httpService";

function Speisekarten() {
  useEffect(() => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
                <a
                  href="speisenkartenMenüs/Speisekarte_2022.pdf"
                  target="_blank"
                >
                  <img
                    width="210"
                    src="images/Speisekarte.png"
                    alt="Speisekarte-menü"
                  />
                </a>
              </div>
              <div className="col-3 speisenkarte-menüs">
                <a href="speisenkartenMenüs/Mittagsmenus.pdf" target="_blank">
                  <img
                    width="210"
                    src="images/Mittagsmenüs.png"
                    alt="Mittagsmenüs"
                  />
                </a>
              </div>
              <div className="col-3 speisenkarte-menüs">
                <img
                  width="210"
                  src="images/Monatshits.png"
                  onClick={handleDownloadPDF}
                  alt="Monatshits"
                />
              </div>
              <div className="col-3 speisenkarte-menüs">
                <img
                  onClick={handleDownloadPDF}
                  width="210"
                  src="images/Hausgemachtes.png"
                  alt="Hausgemachtes"
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
