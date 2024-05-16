import { useEffect , useState } from "react";
import React from "react";
import styled from "styled-components";
import RecipeApi from "../api/recipeApi";
import { useNavigate } from "react-router-dom";
import { CKEditor } from '@ckeditor/ckeditor5-react';
import  ClassicEditor  from '@ckeditor/ckeditor5-build-classic'

const NewRecipe = () =>{

    const [ title, setTitle ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ image , setImage ] = useState('');
    const [ difficulty , setDifficulty ] = useState('');

    const navigate = useNavigate();

    const handleEditorChange = (event, value) =>{   // tutte le volte che cambia cio che scrivi qualcosa con il ck editor, passera tutti i dati a setDescription
        const data = value.getData();
        setDescription(data)
    }

/*     const onSubmit = async (event) => {
        event.preventDefault();
        const dati = {title, description , image , difficulty};
        try {
            const respone = await RecipeApi.insertRecipe(dati);
            if (response && response.successe === true ) {
                navigate('/ricette')
            }else { // errore nell'inserimento dei dati del log in
                console.log('error')
            }
        } catch (error) {

        }
    } */

    const onSubmit = async (event) => {
        event.preventDefault();
        const dati = {title, description, image, difficulty};
        try{
            const response = await RecipeApi.insertRecipe(dati);
            if (response && response.success === true ) {
                navigate('/ricette')
            }else { // errore nell'inserimento dei dati del log in
                console.log('error')
            }
        } catch (error) {   // errore del back end
            console.log('errore', error)

        }
    }


    return(
            <Contenitore>

<form onSubmit={onSubmit} className="contenitore">

    <div>
        <label htmlFor="title">Titolo</label>
        <input type='text' id='title' name='title' value={title} onChange={(e) => setTitle(e.target.value)} className="form-control"/>
    </div>
    <div>
        <label htmlFor="image">image: </label>
        <input alt='image' id='image' name='image' value={image} onChange={(e) => setImage(e.target.value)} className="form-control"/>
    </div>

    <div className="descrizione">
        <label htmlFor="description" >descrizione: </label>
        <CKEditor
         editor={ClassicEditor}
        data={description}
        onChange={handleEditorChange}
        />
    </div>

    <div>
        <label htmlFor="difficulty">Difficoltà:</label>
        <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} className="form-control">
            <option value= '1'>1</option>
            <option value= '2'>2</option>
            <option value= '3'>3</option>
            <option value= '4'>4</option>
            <option value= '5'>5</option>
        </select>
    </div>

    <div>
        <button type='submit' className="btn btn-primary">Aggiungi Ricetta</button>
    </div>

</form>

</Contenitore>

    )
}

const Contenitore = styled.div`

.contenitore{
border-radius: 25 px;
width: 50%;
margin: 20px auto;
border: 2px solid #8e210b;
padding: 0px !important

}

`

export default NewRecipe;