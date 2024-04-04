import React from "react";
import styled from "styled-components";

const RecipeCard = ( props ) => {    // tipizzare props con : any

    //  --> const ricetta: Ricetta[] = props.ricette;  <-- inserire questo nel progetto personale

  return (
    <Contenitore>
      {props.ricette.map((ricetta) => (
        <div className="container-card">
          <div className="card">
            <div className="card-image" style={{backgroundImage:`url(${ricetta.image})`}}>
            </div>
            <div className="card-body">
              <h5 className="card-title">{ricetta.title}</h5>
              <p className="card-text"> {ricetta.description}</p>
              <button className="btn btn-primary"> Viasualizza</button>
              </div>
            </div>
        </div>
      ))}
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
