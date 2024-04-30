import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Pagination } from "@mui/material";

const RecipeCard = ( props ) => {    // tipizzare props con : any sul progetto in typescript
  const [paginaCorrente, setPaginaCorrente]= useState(1);

  const ricettePerPagina = 4;
  const indiceUltimaRicetta = paginaCorrente * ricettePerPagina ;
  const indicePrimaRicetta = indiceUltimaRicetta - ricettePerPagina;
  const ricetteCorrenti = props.ricette.slice(indicePrimaRicetta, indiceUltimaRicetta);
  const numeroPagine = Math.ceil(props.ricette.length / ricettePerPagina );


  const ricette= props.ricette
const cambiaPagina = (evento , valore) =>{
  setPaginaCorrente(valore);
}


  const accorciaDescrizione = (descrizione) => {
  const lunghezzaMassima = 170;


  if(descrizione.length <= lunghezzaMassima){
    return lunghezzaMassima
  }else{
    const posizioneUltimoSpazio = descrizione.lastIndexOf(' ', lunghezzaMassima)
    return posizioneUltimoSpazio
  }
}

function inviaTitolo(titolo){
  if(props.pag==='ricette'){
  props.onTitoloRicevuto(titolo); //stiamo richiamando la funzione di callback nel componente padre
  }
}
  return (
    <Contenitore>
      {props.pag === 'ricette' &&(
      <div>Ricette visualizzate:  da {indicePrimaRicetta +1} a {indiceUltimaRicetta} su un totale di {ricette.length} ricette</div>
      )}

      {ricetteCorrenti.map((ricetta , index) => (
        <div className="container-card" key={index}>
          <div className="card">
            <div className="card-image" style={{backgroundImage:`url(${ricetta.image})`}} onClick={() => inviaTitolo(ricetta.title)}>
            </div>
            <div className="card-body">
              <h5 className="card-title">{ricetta.title}</h5>
              <p className="card-text"> {ricetta.description.slice(0,accorciaDescrizione(ricetta.description))} ...</p>
              <Link to={`/dettaglio/${ricetta.title}/${ricetta._id}`} >
              <button className="btn btn-primary"> Viasualizza</button>
              </Link>
              </div>
            </div>
        </div>
      ))}
      <>
{props.pag === 'ricette' && (

        <div className = "paginatore">
        <Pagination
                  count={numeroPagine}
                  page= {paginaCorrente}
                  color="primary"
                  onChange={cambiaPagina}   //  l'onChange passa due valori un event e un valore (pagina)
        />

      </div>
)}
<div>

{/* <label for="numeroRicette">Visualizza Ricette:</label>

<select name="numeroRicette" id="numeroRicette">
<option valore="4" onChange={ricette.slice(1,4)}> 4</option>
  <option valore="6" onChange={ricette.slice(1,6)}>6</option>
  <option valore="8" onChange={ricette.slice(1,8)}>8</option>
</select> */}
</div>
</>
    </Contenitore>
  );
};
const Contenitore = styled.div`
  background-color: white;

  .container-card {
    display: block;
    width: 23%;
    float: left;
    margin-left: 1.6%;
    margin-bottom: 20px;

    .card-image {
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
    }
    .card-body {
      .card-title {
        font-weight: bold;
        font-size: 20px;
        color: #8e210b;
        display: flex;
        justify-content: center;

      }

      button.btn.btn-primary {
        background-color: #8e210b;
        text-align: justify;
        font-size: 15px;
        font-weight: bold;
        display: block;
        margin: auto;

            }

      .card-text {
        font-weight: 400;
        font-size: 10px;
        color: black;
        text-align: justify;
      }

        }



     }
`;

export default RecipeCard;
