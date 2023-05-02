import React from 'react'
import PageTop from '../components/PageTop';
import Footer from '../components/Footer';

function OnlineBestellung() {
  const image = "images/online-bestellung-top.jpg";
  const title = "Online Bestellung";
  const content =
    "Hier können Sie bequem online bestellen. Lassen Sie sich Zeit, klicken Sie sich durch alle Menüs und wählen Sie Ihre gewünschten Speisen und Zutaten aus. Für jeden Geschmack sollte etwas dabei sein. Nach erfolgter Bestellung wird Ihr Gericht frisch zubereitet und so schnell wie möglich geliefert. Wir wünschen Ihnen „Guten Appetit“.";
  return (
    <>
      <div className="container-fluid">
        <PageTop image={image} title={title} content={content} />
      </div>
      <Footer />
    </>
  );
}

export default OnlineBestellung