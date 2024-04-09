import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import RecipeApi from "../api/recipeApi";

const DetailRecipe = () => {
  const { id } = useParams();
  const [ricetta, setRicetta] = useState();

  async function onGetRecipe() {
    try {
      const idNumber = Number(id);
      const response = await RecipeApi.getRecipe(idNumber);
      setRicetta(response);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onGetRecipe();
  }, []);

  return (
    ricetta && (
      <>
        <Contenitore>
          <div
            className="fotoRicetta"
            style={{ backgroundImage: `url(${ricetta.image})` }}
          ></div>

          <p className="titoloRicetta">
            <h2>{ricetta.title}</h2>
          </p>

          <p className="Descrizione">{ricetta.description}</p>

          <div className="container">
            <div className="row">
              <div className="col-sm">Difficoltà: {ricetta.difficulty}</div>
              <div className="col-sm-2">{ricetta.date}</div>
            </div>
          </div>
        </Contenitore>
      </>
    )
  );
};

const Contenitore = styled.div`
  background-color: white;

  .fotoRicetta {
    height: 450px;
    margin-top: -19px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

  }

  .titoloRicetta {
    margin-left: 20px;
    margin-top: 20px;
  }

  .Descrizione {
    text-align: justify;
    margin-left: 20px;
    margin-right: 20px;
  }

  .col-sm {
    margin-left: -70px;
  }

  .col-sm-2 {
    padding-left: 135px;
  }
`;

export default DetailRecipe;
