import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";

// Pagine Importate
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./pages/DeatailRecipe";
import RegistrationUser from "./pages/RegistrationUser";


function App() {

  return (
      <Router>
        <HeaderComponent />
          <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/home" element={<Home />}/>
              <Route path="/ricette" element={<Recipes />}/>
              <Route path="/dettaglio/:title/:id" element={<DetailRecipe />} />
              <Route path="/registrazione" element={<RegistrationUser />} />
          </Routes>
      </Router>
  );
}

export default App;
