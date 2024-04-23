import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import styled from "styled-components";
import { useUserContext } from "../context/userContext";

const Modal = (props) => {
  const [open, setOpen] = useState(false);
  const { user, registerUser } = useUserContext();

  return (
    <Contenitore>
      <Dialog open={props.open} onClose={props.chiudiModale}>
        <DialogTitle>
          {props.page === "home" && (
            <DialogContent>
              <DialogContentText>
                Ecco il riepilogo dei tuoi Dati
                <ul>
                  <li>Nome: {user?.name}</li>
                  <li>Emanil: {user?.email}</li>
                </ul>
              </DialogContentText>
            </DialogContent>
          )}
        </DialogTitle>

        <DialogTitle>
          {props.page === "ricette" && (
            <DialogContent>
              <DialogContentText>
                Ecco il riepilogo dei tuoi Dati
                <ul>
                  <h3> Il nome della ricetta è : {props.ricetta?.title}</h3>
                </ul>
              </DialogContentText>
            </DialogContent>
          )}
        </DialogTitle>

        <DialogActions>
          <Button onClick={props.chiudiModale} autoFocus variant="contained">
            Chiudi{" "}
          </Button>
        </DialogActions>
      </Dialog>
      ;
    </Contenitore>
  );
};
const Contenitore = styled.div``;
export default Modal;
