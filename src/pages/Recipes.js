import { useState, useEffect } from "react";
import RecipeApi from "../api/recipeApi";
import RecipeCard from "../components/RecipeCard";
import styled from "styled-components";
import Modal from "../components/Modal";
import { Alert, Snackbar } from "@mui/material";

const Recipes = () => {
  const [open, setOpen] = useState(false);
  const [ricette, setRicette] = useState([]);
  const [titolo, setTitolo] = useState("");
  const [severity, setSeverity] = useState("");
  const [message, setMessage] = useState("");
  const vertical = "bottom";
  const horizontal = "right";

const closeToast = () => {
  setOpen(false);
}



  async function prendiRicette() {
    try {
      const response = await RecipeApi.getRecipes();
      if (response){
        setSeverity ('successo')
        setMessage('Ricette caricate con successo')
        setOpen(true)
        setRicette(response.sort);
      }

    } catch (error) {
      setSeverity ('successo')
      setMessage('Ricette caricate con successo')
      setOpen(true)
      console.log(error);
    }
  }

  function titoloDalFiglio(data) {
    if (data !== titolo) {
      setTitolo(data);
    } else {
      setTitolo("");
    }
  }

  //use effect all'avvio del componente
  useEffect(() => {
    prendiRicette();
    return () => {
      console.log("sei uscito dal componente");
    };
  }, []);

  useEffect(() => {
    if (ricette.length > 1) {
      console.log("hai ricevuto le ricette dal server");
      console.log(ricette);
    }
  }, [ricette]);

  return (
    <Contenitore>
      <h2>Le nostre Ricette</h2>
      <div className="contenitore-titolo">
        {titolo && <h3 className="titolo">{titolo}</h3>}
      </div>
      <RecipeCard
        ricette={ricette}
        onTitoloRicevuto={titoloDalFiglio}
        pag="ricette"
      />{" "}

      <Snackbar open={open} autoHideDuration={4000} onClose={closeToast} anchorOrigin={{vertical, horizontal}}>
      <Alert onClose={closeToast} severity={severity} variant="filled" >{message}</Alert>

      </Snackbar>
    </Contenitore>
  );
};
const Contenitore = styled.div`
  background-color: white;
  h2 {
    margin-bottom: 20px;
    margin-left: 1.6%;
  }
  .titoloRicetta {
    font-weight: 600;
    font-size: large;
  }

  .contenitore-titolo {
    height: 50px;
  }
  h3 {
    width: 100%;
    text-align: center;
    font-weight: bold;
  }
`;

export default Recipes;
