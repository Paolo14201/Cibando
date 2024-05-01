import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import { UserProvider } from "./context/userContext";

// Pagine Importate
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./pages/DeatailRecipe";
import RegistrationUser from "./pages/RegistrationUser";
import Contatti from "./pages/Contatti";

function App() {
  return (
    <UserProvider>
      <Router>
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ricette" element={<Recipes />} />
          <Route path="/dettaglio/:title/:id" element={<DetailRecipe />} />
          <Route path="/registrazione" element={<RegistrationUser />} />
          <Route path="/contatti" element={<Contatti />} />
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
