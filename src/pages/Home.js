import { useState } from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useUserContext } from "../context/userContext";

import CarouselSlider from "../components/CarouselSlider";
import RecipeApi from "../api/recipeApi";
import RecipeCard from "../components/RecipeCard";

import Modal from "../components/Modal";

const Home = () => {
  const [open, setOpen] = useState(false);
  const { user, registerUser } = useUserContext();
  const [evidenziazione, setEvidenziazione] = useState(false);
  const [ricette, setRicette] = useState([]);

  const bgDinamico = {
    backgroundColor: evidenziazione ? "yellow" : "white",
    fontSize: "50px",
    cursor: "pointer",
    textAlign: "left",
  };

  async function prendiRicette() {
    try {
      const response = await RecipeApi.getRecipes();
      if (response) {
        setRicette(response.sort((a, b) => b._id - a._id).slice(0, 4));
      }
    } catch (error) {
      console.log(error);
    }
  }

  const onEvidenziazione = () => {
    setEvidenziazione(!evidenziazione);
  };

  //gestisce apertura e chiusura della modale

  const apriModale = () => {
    setOpen(true);
  };
  const chiudiModale = () => {
    registerUser(null);
    setOpen(false);
  };

  useEffect(() => {
    console.log("sei entrato nel componente");
    prendiRicette();

    if (user) {
      apriModale();
    }

    return () => {
      // il return si mette sempre nel primo useEffect ed indica il onDestroy del componente
      console.log("sei uscito dal componente");
      setRicette([]);
    };
  }, []); // l'array di dipendenza vuoto [] indica l'inizzializzazione del componente ed esegue questa azione solo una volta

  return (
    <Contenitore>
      <CarouselSlider />
      <div className="container-titolo">
        <h2 style={bgDinamico} onClick={onEvidenziazione}>
          {" "}
          Benvenuti in Cibando
        </h2>
        <p className="paragrafo">
          One morning, when Gregor Samsa woke from troubled dreams, he found
          himself transformed in his bed into a horrible vermin. He lay on his
          armour-like back, and if he lifted his head a little he could see his
          brown belly, slightly domed and divided by arches into stiff sections.
          The bedding was hardly able to cover it and seemed ready to slide off
          any moment. His many legs, pitifully thin compared with the size of
          the rest of him, waved about helplessly as he looked. "What's happened
          to me?" he thought. It wasn't a dream. His room, a proper human room
          although a little too small, lay peacefully between its four familiar
          walls. A collection of textile samples lay spread out on the table -
          Samsa was a travelling salesman - and above it there hung a picture
          that he had recently cut out of an illustrated magazine and housed in
          a nice, gilded frame. It showed a lady fitted out with a fur hat and
          fur boa who sat upright, raising a heavy fur muff that covered the
          whole of her lower arm towards the viewer. Gregor then turned to look
          out the window at the dull weather. Drops
        </p>
      </div>
      <h2 className="ultimeRicette">Le ultime Ricette:</h2>
      <RecipeCard ricette={ricette} pag="home" />
      <Modal/>
    </Contenitore>
  );
};
const Contenitore = styled.div`
  background-color: white;

  h2 {
    margin-left: 20px;
  }

  p {
    width: 95%;
    margin: auto;
    text-align: justify;
  }
  .ultimeRicette {
    margin-left: 20px;
  }
`;

export default Home;
