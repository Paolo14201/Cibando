import React, { useContext } from "react";
import HomeIcon from '@mui/icons-material/Home';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import PersonIcon from '@mui/icons-material/Person';
import Logo from '../assets/images/icona-cibando.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


//pagine
import { AuthContext } from "../auth/AuthContext";




const Header = () => {
  const {isAuth , logout, name }  = useContext(AuthContext);
  const navigate = useNavigate();

const esci = () =>{
  try {
    const response = logout();
    if(response.success === true){
      navigate('/')
    }
  } catch (error) {
    console.log(Error)
  }
}


    return (
        <header>
        <nav className="navbar navbar-expand-lg bg-red navbar-dark">
          <div className="container-fluid">
            <Link to='/' className="navbar-brand">
              <img src={Logo} className="icona-cibando" alt="cibando"/>
              Cibando
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link to='/' className="nav-link">
                      <HomeIcon>Filled</HomeIcon> Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/ricette' className="nav-link">
                    <MenuBookIcon>Filled</MenuBookIcon> Ricette
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/nuova-ricetta' className="nav-link">
                    <MenuBookIcon>Filled</MenuBookIcon> Nuova Ricetta
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/registrazione' className="nav-link">
                    <PersonIcon>Filled</PersonIcon> Registrazione
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to='/contatti' className="nav-link">
                    <MarkAsUnreadIcon>Filled</MarkAsUnreadIcon> Contatti
                  </Link>
                  </li>

                {!isAuth && (
                  <li className="nav-item">
                     <Link to='/login' className="nav-link">
                     <LoginIcon>Filled</LoginIcon> Login
                    </Link>
                  </li>
                )}

                  {isAuth&& (
                   <>
                  Ciao <strong>{name} </strong> <Link to='/profilo' className="nav-link">Profilo</Link> -  Esci <LogoutIcon onClick={esci}> Filled </LogoutIcon>
                  </>
                  )}


              </ul>
            </div>
          </div>
        </nav>
      </header>
    )
}

export default Header;