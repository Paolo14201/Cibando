import "./App.scss";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserProvider } from "./context/userContext";
import Header from "./components/Header";
import { AuthProvider } from "./auth/AuthContext";
import { ProtectedRoutes } from "./auth/ProtectedRoutes";

// Pagine
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import DetailRecipe from "./pages/DetailRecipe";
import RegistrationUser from "./pages/RegistrationUser";
import Login from "./pages/Login";
import NewRecipe from "./pages/NewRecipe";

function App() {
  return (
    <UserProvider>
      <Router>
        <AuthProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/ricette" element={<Recipes />} />
            <Route path="/dettaglio/:title/:id" element={<DetailRecipe />} />
            <Route path="/registrazione" element={<RegistrationUser />} />
            <Route path="/login" element={<Login />} />
            <Route
              path="/nuova-ricetta"
              element={
                  <NewRecipe />
              }
            />
          </Routes>
        </AuthProvider>
      </Router>
    </UserProvider>
  );
}

export default App;
