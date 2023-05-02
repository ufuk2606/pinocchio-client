import React from 'react'
import PageTop from '../components/PageTop';
import Footer from '../components/Footer';

function Kontakt() {
  const image = "images/kontakt-top.jpg";
  const title = "Kontakt";
  const content =
    "Gerne nehmen wir Ihre Fragen und Wünsche telefonisch oder per E-Mail entgegen und melden uns schnellstmöglich.";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <Footer />
    </>
  );
}

export default Kontakt