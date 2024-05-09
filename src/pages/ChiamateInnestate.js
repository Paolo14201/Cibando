import { primaChiamata, secondaChiamata } from "../api/apiService";
import React, { useState, useEffect } from "react";

function ChiamateInnestate() {
  const [dati, setDati] = useState(null);
  useEffect(() => {
    primaChiamata()
      .then((response) => {
        //processo i dati della prima chiamata
       // const utente = response.find((item) => item.citta === "roma");
        return secondaChiamata();
      })
      .then(secondaResponse => {
        // processo i dati della seconda chiamata
        setDati({
          //datiPrincipali: response.data,
          datiSecondari: secondaResponse
        })
      })
      .catch(error =>{
        //gestisco gli errori
        console.log(error)
      })
  }, [])
}
