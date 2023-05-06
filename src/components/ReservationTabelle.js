import React from "react";

function ReservationTabelle() {
  return (
    <div className="reservation-tabelle py-4 ">
      <div className="text-center ">
        <h1 className="reservation-tabelle-title my-2 mt-4">Öffnungszeiten</h1>
        <hr className="m-auto " width="80%" color="#b9dd80" size="5" />
        <h5 className="reservation-tabelle-title2">DIENSTAG - SONNTAG</h5>
        <p className="reservation-tabelle-title2 reservation-tabelle-parag">
          10:00 - 14:00 Uhr
        </p>
        <p className="reservation-tabelle-title2 reservation-tabelle-parag">
          17:00 - 23:00 Uhr
        </p>
        <br />
        <h5 className="reservation-tabelle-title2">WARME KÜCHE</h5>
        <p className="reservation-tabelle-title2 reservation-tabelle-parag">
          11:30 - 14:00 Uhr
        </p>
        <p className="reservation-tabelle-title2 reservation-tabelle-parag">
          17:00 - 22:00 Uhr
        </p>
        <hr className="m-auto " width="80%" color="#b9dd80" size="5" />
        <h5 className="reservation-tabelle-title2">MONTAG</h5>
        <p className="reservation-tabelle-title2 reservation-tabelle-parag">
          Geschlossen
        </p>
        <h5 className="reservation-tabelle-title2">TELEFON</h5>
        <p className="reservation-tabelle-title2 reservation-tabelle-parag">
          071 951 36 51
        </p>
      </div>
    </div>
  );
}

export default ReservationTabelle;
