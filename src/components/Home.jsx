
import { useAuth } from "../context/authContext";
import "../style/home.css"
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import { Audio } from 'react-loader-spinner'


function Home () {



  const {user, logout, loading} = useAuth();


  const handleLogout = async () =>  {
    try {
      await logout()
    } catch(error) {
      consonle.error(error);
    }
  }

  return (
    <div className="home">
      {/* section header */}
      <div className="header">
      <div className="header__profile">
        <img src="/avatar.png" alt="avatar" />
        <h4>👋 Hola!, {user.displayName || user.email}</h4>
      </div>
      <div className="header__button">
      <button className="Primary__Button" onClick={handleLogout}>Cerrar sesion</button>
      </div>
      </div>
      {/* section menu*/}
      <div className="home__menu">
        <h2>Seleccione su Prueba</h2>
      <Link to="/Preview">
        <button className="Button__manager">Gerencia</button>
      </Link>
      <Link to="/Preview">
        <button className="Button__employees">Empleados</button>
      </Link>
      <Link to="/Preview"></Link>
      <button className="Button__general__employees">Empleados Generales</button>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;