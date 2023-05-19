
///import { useAuth } from "../context/authContext";
import { useAuth } from "../context/authContext.jsx";
import "../style/home.css"
import Footer from "./Footer.jsx";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";




function Home () {

  const {user, logout, loading} = useAuth();


{/*
  const handleLogout = async () =>  {
    try {
      await logout()
    } catch(error) {
      consonle.error(error);
    }
  }
*/}

  return (
    <div className="home">

      {/* section header */}
      <Navbar/>
      {/* section menu*/}
      <div className="Home">
        <div className="Home__banner">

        </div>
        <div className="Home__perfil">
          <img src="/avatar2.png" alt="" />
          <h4>👋 Hola!, {user.displayName || user.email}</h4>
          <h3>Descubre oportunidades y gana experiencia</h3>
        </div>
        <div className="Home__History">
          <div>
            <p>Detalles</p>
          </div>
          <div className="Home__History--data">
            <div className="Home__History--rage">
              <img src="./rango.png" alt="" />
              <p>Rango Nuevo Explorador</p>
            </div>
            <div>
              <h4>Profesion</h4>
              <p>agregar</p>
              <h4>Edad:</h4>
              <p>agregar</p>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  )
}

export default Home;