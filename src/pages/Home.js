import { useState } from "react";
import styled from "styled-components";

import CarouselSlider from "../components/CarouselSlider";
import Recipes from "../pages/Recipes";

const Home = () => {
  const [evidenziazione, setEvidenziazione] = useState(false);
  const bgDinamico = {
    backgroundColor: evidenziazione ? "yellow" : "white",
    fontSize: "50px",
    cursor: "pointer",
    textAlign: "left",
  };

  const onEvidenziazione = () => {
    setEvidenziazione(!evidenziazione);
  };
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
      <Recipes />≤
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
`;

export default Home;
